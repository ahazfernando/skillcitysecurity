"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, Building2, MapPin, Calendar, Search, Filter, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  subject?: string; // Legacy field for backward compatibility
  state: string;
  postcode: string;
  services?: string | string[];
  service?: string; // Legacy field for backward compatibility
  message: string;
  timestamp: Timestamp;
  status: string;
}

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [filteredInquiries, setFilteredInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [serviceFilter, setServiceFilter] = useState<string>("all");

  useEffect(() => {
    fetchInquiries();
  }, []);

  useEffect(() => {
    filterInquiries();
  }, [inquiries, searchTerm, statusFilter, serviceFilter]);

  const fetchInquiries = async () => {
    try {
      const q = query(collection(db, "inquiries"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      const inquiriesData: Inquiry[] = [];
      
      querySnapshot.forEach((doc) => {
        inquiriesData.push({
          id: doc.id,
          ...doc.data(),
        } as Inquiry);
      });
      
      setInquiries(inquiriesData);
      setFilteredInquiries(inquiriesData);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterInquiries = () => {
    let filtered = [...inquiries];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (inquiry) =>
          inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          inquiry.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (inquiry.phone && inquiry.phone.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (inquiry.subject && inquiry.subject.toLowerCase().includes(searchTerm.toLowerCase())) ||
          inquiry.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((inquiry) => inquiry.status === statusFilter);
    }

    // Service filter
    if (serviceFilter !== "all") {
      filtered = filtered.filter((inquiry) => {
        // Handle both new format (services array) and old format (service string)
        const services = inquiry.services || inquiry.service || "";
        const serviceArray = Array.isArray(services) ? services : services ? [services] : [];
        return serviceArray.includes(serviceFilter);
      });
    }

    setFilteredInquiries(filtered);
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "new":
        return "default";
      case "contacted":
        return "secondary";
      case "resolved":
        return "outline";
      default:
        return "default";
    }
  };

  const formatDate = (timestamp: Timestamp) => {
    if (!timestamp) return "N/A";
    const date = timestamp.toDate();
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getServiceLabel = (service: string) => {
    const labels: { [key: string]: string } = {
      "facility-solutions": "Facility Solutions",
      "recruitment": "Recruitment",
      "plumbing": "Professional Plumbing",
      "security": "Security Services",
      "other": "Other",
    };
    return labels[service] || service;
  };

  const getServiceLabels = (inquiry: Inquiry) => {
    // Handle both new format (services array) and old format (service string)
    const services = inquiry.services || inquiry.service || "";
    const serviceArray = Array.isArray(services) ? services : services ? [services] : [];
    return serviceArray.map(getServiceLabel);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage customer inquiries and blog posts
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="inquiries" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="inquiries">Customer Inquiries</TabsTrigger>
              <TabsTrigger value="blogs">
                <FileText className="w-4 h-4 mr-2" />
                Blog Management
              </TabsTrigger>
            </TabsList>

            <TabsContent value="inquiries" className="space-y-6">

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Inquiries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{inquiries.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  New Inquiries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {inquiries.filter((i) => i.status === "new").length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Contacted
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {inquiries.filter((i) => i.status === "contacted").length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Resolved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {inquiries.filter((i) => i.status === "resolved").length}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search by name, email, phone, company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={serviceFilter} onValueChange={setServiceFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Services</SelectItem>
                    <SelectItem value="facility-solutions">Facility Solutions</SelectItem>
                    <SelectItem value="recruitment">Recruitment</SelectItem>
                    <SelectItem value="plumbing">Professional Plumbing</SelectItem>
                    <SelectItem value="security">Security Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Inquiries List */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading inquiries...</p>
            </div>
          ) : filteredInquiries.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No inquiries found.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredInquiries.map((inquiry) => (
                <Card key={inquiry.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">{inquiry.name}</CardTitle>
                          <Badge variant={getStatusBadgeVariant(inquiry.status)}>
                            {inquiry.status}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>{inquiry.email}</span>
                          </div>
                          {inquiry.company && (
                            <div className="flex items-center gap-2">
                              <Building2 className="w-4 h-4" />
                              <span>{inquiry.company}</span>
                            </div>
                          )}
                          {inquiry.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              <span>{inquiry.phone}</span>
                            </div>
                          )}
                          {(inquiry.state || inquiry.postcode) && (
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>
                                {inquiry.state} {inquiry.postcode}
                              </span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(inquiry.timestamp)}</span>
                          </div>
                        </div>
                      </div>
                      {(inquiry.services || inquiry.service) && (
                        <div className="ml-4 flex flex-wrap gap-2">
                          {getServiceLabels(inquiry).map((label, idx) => (
                            <Badge key={idx} variant="outline">
                              {label}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    {inquiry.phone && (
                      <div className="mb-3">
                        <p className="font-semibold text-foreground">Phone Number:</p>
                        <p className="text-muted-foreground">{inquiry.phone}</p>
                      </div>
                    )}
                    {inquiry.subject && (
                      <div className="mb-3">
                        <p className="font-semibold text-foreground">Subject:</p>
                        <p className="text-muted-foreground">{inquiry.subject}</p>
                      </div>
                    )}
                    {inquiry.message && (
                      <div>
                        <p className="font-semibold text-foreground mb-1">Message:</p>
                        <p className="text-muted-foreground whitespace-pre-wrap">
                          {inquiry.message}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
            </TabsContent>

            <TabsContent value="blogs" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Blog Management</CardTitle>
                  <CardDescription>
                    Create, edit, and manage blog posts for your website
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/admin/blogs">
                    <Button className="w-full">
                      <FileText className="w-4 h-4 mr-2" />
                      Go to Blog Management
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
