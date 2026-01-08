"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, Timestamp, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileUpload } from "@/components/ui/file-upload";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";
import { Plus, Edit, Trash2, Calendar, User, Tag } from "lucide-react";
import { Article } from "@/types/article";

export default function BlogManagement() {
  const [blogs, setBlogs] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Article | null>(null);
  const [blogForm, setBlogForm] = useState({
    slug: "",
    title: "",
    excerpt: "",
    content: "",
    imageURL: "",
    tags: [] as string[],
    authorName: "",
    authorAvatarURL: "",
    isPopular: false,
  });
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    loadBlogs();
  }, []);

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const loadBlogs = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      
      const blogsData = snapshot.docs.map(doc => {
        const data = doc.data();
        
        const toISOString = (value: unknown): string => {
          if (!value) return '';
          if (typeof value === 'object' && value !== null && 'toDate' in value && typeof (value as { toDate: () => Date }).toDate === 'function') {
            return (value as { toDate: () => Date }).toDate().toISOString();
          }
          if (typeof value === 'string') {
            return value;
          }
          return '';
        };
        
        return {
          id: doc.id,
          slug: data.slug || '',
          title: data.title || '',
          excerpt: data.excerpt || '',
          imageURL: data.imageURL || '',
          tags: data.tags || [],
          content: data.content || '',
          author: data.author || { name: 'Unknown', avatarURL: '' },
          date: toISOString(data.date) || toISOString(data.createdAt),
          createdAt: toISOString(data.createdAt),
          lastUpdated: toISOString(data.lastUpdated),
          isPopular: data.isPopular || false,
        } as Article;
      });

      setBlogs(blogsData);
    } catch (error) {
      console.error('Error loading blogs:', error);
      toast({
        title: "Error",
        description: "Failed to load blogs",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !blogForm.tags.includes(tagInput.trim())) {
      setBlogForm({
        ...blogForm,
        tags: [...blogForm.tags, tagInput.trim()],
      });
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setBlogForm({
      ...blogForm,
      tags: blogForm.tags.filter(t => t !== tag),
    });
  };

  const handleImageUpload = (url: string) => {
    setBlogForm({ ...blogForm, imageURL: url });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!blogForm.title || !blogForm.excerpt || !blogForm.content || !blogForm.authorName) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      const slug = blogForm.slug || generateSlug(blogForm.title);
      const now = Timestamp.now();
      
      if (editingBlog) {
        // Update existing blog
        await updateDoc(doc(db, 'blogs', editingBlog.id), {
          slug,
          title: blogForm.title,
          excerpt: blogForm.excerpt,
          content: blogForm.content,
          imageURL: blogForm.imageURL || '/blogs/blog1.png',
          tags: blogForm.tags,
          author: {
            name: blogForm.authorName,
            avatarURL: blogForm.authorAvatarURL || '',
          },
          lastUpdated: now,
          isPopular: blogForm.isPopular,
        });
        
        toast({
          title: "Success",
          description: "Blog post updated successfully",
        });
      } else {
        // Create new blog
        const blogData = {
          slug,
          title: blogForm.title,
          excerpt: blogForm.excerpt,
          content: blogForm.content,
          imageURL: blogForm.imageURL || '/blogs/blog1.png',
          tags: blogForm.tags,
          author: {
            name: blogForm.authorName,
            avatarURL: blogForm.authorAvatarURL || '',
          },
          date: now,
          createdAt: now,
          lastUpdated: now,
          isPopular: blogForm.isPopular,
        };

        await addDoc(collection(db, 'blogs'), blogData);
        
        toast({
          title: "Success",
          description: "Blog post added successfully",
        });
      }
      
      // Reset form
      setBlogForm({
        slug: "",
        title: "",
        excerpt: "",
        content: "",
        imageURL: "",
        tags: [],
        authorName: "",
        authorAvatarURL: "",
        isPopular: false,
      });
      setEditingBlog(null);
      setIsDialogOpen(false);
      loadBlogs();
    } catch (error) {
      console.error('Error saving blog:', error);
      toast({
        title: "Error",
        description: "Failed to save blog post",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (blog: Article) => {
    setEditingBlog(blog);
    setBlogForm({
      slug: blog.slug,
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      imageURL: blog.imageURL,
      tags: blog.tags,
      authorName: blog.author.name,
      authorAvatarURL: blog.author.avatarURL,
      isPopular: blog.isPopular || false,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'blogs', id));
      toast({
        title: "Deleted",
        description: "Blog post removed",
      });
      loadBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast({
        title: "Error",
        description: "Failed to delete blog post",
        variant: "destructive",
      });
    }
  };

  const openNewDialog = () => {
    setEditingBlog(null);
    setBlogForm({
      slug: "",
      title: "",
      excerpt: "",
      content: "",
      imageURL: "",
      tags: [],
      authorName: "",
      authorAvatarURL: "",
      isPopular: false,
    });
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                Blog Management
              </h1>
              <p className="text-muted-foreground">
                Create, edit, and manage blog posts
              </p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={openNewDialog}>
                  <Plus className="w-4 h-4 mr-2" />
                  New Blog Post
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[90vh] h-[90vh] p-0 overflow-hidden flex flex-col">
                <div className="grid lg:grid-cols-2 h-full flex-1 min-h-0">
                  {/* Left Side - Image */}
                  <div className="hidden lg:block relative overflow-hidden">
                    <img
                      src="/home/contactussection.png"
                      alt="Blog creation"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <h3 className="text-2xl font-bold mb-2">Create Engaging Content</h3>
                      <p className="text-white/90">
                        Share your insights and connect with your audience through compelling blog posts.
                      </p>
                    </div>
                  </div>
                  
                  {/* Right Side - Form */}
                  <div className="overflow-y-auto flex-1 min-h-0">
                    <div className="p-6">
                      <DialogHeader>
                        <DialogTitle>{editingBlog ? "Edit Blog Post" : "Create New Blog Post"}</DialogTitle>
                        <DialogDescription>
                          Fill in the details below to {editingBlog ? "update" : "create"} a blog post
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={blogForm.title}
                      onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                      placeholder="Enter blog title"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="slug">Slug (optional, auto-generated from title)</Label>
                    <Input
                      id="slug"
                      value={blogForm.slug}
                      onChange={(e) => setBlogForm({ ...blogForm, slug: e.target.value })}
                      placeholder="url-friendly-slug"
                    />
                  </div>

                  <div>
                    <Label htmlFor="excerpt">Excerpt *</Label>
                    <Textarea
                      id="excerpt"
                      value={blogForm.excerpt}
                      onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                      placeholder="Short description (shown in blog cards)"
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Content * (Markdown supported)</Label>
                    <Textarea
                      id="content"
                      value={blogForm.content}
                      onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                      placeholder="Full blog content in Markdown format"
                      rows={15}
                      required
                    />
                  </div>

                  <div>
                    <Label>Blog Image</Label>
                    <FileUpload onUpload={handleImageUpload} />
                    {blogForm.imageURL && (
                      <div className="mt-2">
                        <p className="text-sm text-muted-foreground mb-2">Current image URL:</p>
                        <Input
                          value={blogForm.imageURL}
                          onChange={(e) => setBlogForm({ ...blogForm, imageURL: e.target.value })}
                          placeholder="Image URL"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="authorName">Author Name *</Label>
                    <Input
                      id="authorName"
                      value={blogForm.authorName}
                      onChange={(e) => setBlogForm({ ...blogForm, authorName: e.target.value })}
                      placeholder="Author name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="authorAvatarURL">Author Avatar URL</Label>
                    <Input
                      id="authorAvatarURL"
                      value={blogForm.authorAvatarURL}
                      onChange={(e) => setBlogForm({ ...blogForm, authorAvatarURL: e.target.value })}
                      placeholder="https://example.com/avatar.jpg"
                    />
                  </div>

                  <div>
                    <Label>Tags</Label>
                    <div className="flex gap-2 mb-2">
                      <Input
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                        placeholder="Add a tag"
                      />
                      <Button type="button" onClick={handleAddTag}>Add Tag</Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {blogForm.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="flex items-center gap-2">
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="text-red-500 hover:text-red-700"
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="isPopular"
                      checked={blogForm.isPopular}
                      onChange={(e) => setBlogForm({ ...blogForm, isPopular: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <Label htmlFor="isPopular">Mark as Popular</Label>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      {editingBlog ? "Update Blog Post" : "Create Blog Post"}
                    </Button>
                  </div>
                </form>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Blogs List */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading blogs...</p>
            </div>
          ) : blogs.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No blogs found. Create your first blog post!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <Card key={blog.id} className="hover:shadow-md transition-shadow">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={blog.imageURL || '/placeholder.svg'}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                    {blog.isPopular && (
                      <Badge className="absolute top-2 right-2">Popular</Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{blog.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>{blog.author.name}</span>
                      </div>
                      {blog.date && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(blog.date).toLocaleDateString()}</span>
                        </div>
                      )}
                      {blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {blog.tags.slice(0, 3).map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <div className="flex gap-2 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(blog)}
                          className="flex-1"
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive" size="sm" className="flex-1">
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the blog post.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDelete(blog.id)}>
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
