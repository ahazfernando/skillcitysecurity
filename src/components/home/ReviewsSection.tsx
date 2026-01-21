"use client";

import { Star, ArrowRight, Play, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Review {
  name: string;
  location: string;
  rating: number;
  title: string;
  content: string;
  image: string;
  imageCaption: string;
}

interface ReviewsSectionProps {
  reviews?: Review[];
  title?: string;
  description?: string;
}

const ReviewsSection = ({
  reviews = [
    {
      name: "Michael Chen",
      location: "Operations Manager, TechCorp Industries",
      rating: 5,
      title: "Exceptional Security Services & Professional Team",
      content:
        "Skill City Security has been providing outstanding security services for our corporate headquarters for over three years. Their team is highly professional, well-trained, and always vigilant. We've experienced zero security incidents since partnering with them. Their 24/7 monitoring and rapid response capabilities give us complete peace of mind. Highly recommended for any business serious about security!",
      image: "/securityservices/abd95df86f099e14285d3ff3fd1251e4.jpg",
      imageCaption: "Corporate Security Deployment",
    },
    {
      name: "Sarah Johnson",
      location: "HR Director, Global Finance Ltd",
      rating: 5,
      title: "Outstanding Recruitment Services",
      content:
        "Skill City's recruitment team helped us find exceptional talent for our security department. Their thorough screening process and deep understanding of our requirements resulted in placements that exceeded our expectations. The candidates they provided were not only qualified but also aligned perfectly with our company culture. The entire process was smooth and professional from start to finish.",
      image: "/recruitmen/RecruitmentPeople.png",
      imageCaption: "Successful Recruitment Campaign",
    },
    {
      name: "David Park",
      location: "Facility Manager, Innovation Labs",
      rating: 5,
      title: "Comprehensive Facility Solutions",
      content:
        "We've been using Skill City's facility solutions for our office complex, and the results have been remarkable. Their cleaning services maintain our facilities to the highest standards, and their maintenance team is always responsive and professional. The comprehensive approach they take to facility management has significantly improved our workplace environment and reduced our operational overhead.",
      image: "/services/interiorhouse(D1V1).jpg",
      imageCaption: "Facility Management Excellence",
    },
  ],
  title = "What Our Clients Say",
  description = "Discover how Skill City Security has helped businesses protect their assets, find exceptional talent, and maintain world-class facilities through our comprehensive service solutions.",
}: ReviewsSectionProps) => {
  return (
    <section className="px-4 lg:px-6 py-12 lg:py-16 bg-white">
      <div className="max-w-[1120px] mx-auto">
        {/* Header with Badge and Arrow */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center text-orange-500">
              <ChevronRight className="w-5 h-5 -mr-2" />
              <ChevronRight className="w-5 h-5" />
            </div>
            <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm">
              <span className="text-sm text-orange-500 font-medium">Client Reviews</span>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-gray-900">
            {title.split(' ').slice(0, -2).join(' ')} <span className="text-orange-500">{title.split(' ').slice(-2).join(' ')}</span>
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-2xl">
            {description}
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left - Profile Card */}
                    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center">
                          <span className="text-lg font-semibold text-white">
                            {review.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          <p className="text-sm text-gray-500">{review.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                        ))}
                      </div>
                      <h3 className="font-semibold text-lg mb-3 text-gray-900">{review.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        {review.content}
                      </p>
                      <button className="text-orange-500 text-sm font-medium hover:underline inline-flex items-center gap-1">
                        Read full story
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Right - Image with Play Button */}
                    <div className="space-y-4">
                      <div className="bg-white rounded-2xl h-64 lg:h-80 flex items-center justify-center relative group cursor-pointer border border-gray-100 shadow-sm overflow-hidden">
                        <Image
                          src={review.image}
                          alt={review.imageCaption}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                            <Play className="w-6 h-6 text-white fill-white ml-1" />
                          </div>
                        </div>
                        <span className="absolute bottom-4 left-4 text-xs text-gray-900 bg-white/90 px-3 py-1 rounded-full border border-gray-100">
                          {review.imageCaption}
                        </span>
                      </div>
                      <div className="flex justify-center lg:justify-start">
                        <Button variant="outline" className="rounded-full border-gray-200 text-gray-900 hover:bg-white">
                          See more reviews
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12" />
            <CarouselNext className="right-0 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
