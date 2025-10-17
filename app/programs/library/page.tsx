import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookOpen,
  Users,
  Calendar,
  Clock,
  MapPin,
  Award,
  Search,
  Star,
  ArrowRight,
  Phone,
  MessageCircle,
  Heart,
  TrendingUp,
  CheckCircle2,
  BookMarked,
  GraduationCap,
  Lightbulb,
  Shield,
} from "lucide-react";

export default function LibraryPage() {
  const categories = [
    {
      name: "Academic Textbooks",
      icon: GraduationCap,
      count: "350+ Books",
      description: "School and college level textbooks for all subjects",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      popularBooks: [
        "NCERT Complete Set",
        "Science Encyclopedia",
        "Mathematics Guide",
      ],
    },
    {
      name: "Competitive Exams",
      icon: Award,
      count: "200+ Books",
      description:
        "Preparation materials for government jobs and entrance exams",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      popularBooks: ["UPSC Guide", "Banking Exams", "SSC Preparation"],
    },
    {
      name: "Literature & Fiction",
      icon: BookMarked,
      count: "180+ Books",
      description:
        "Novels, short stories, and literary works in multiple languages",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      popularBooks: ["Hindi Novels", "English Classics", "Regional Literature"],
    },
    {
      name: "Children Section",
      icon: Heart,
      count: "150+ Books",
      description: "Colorful picture books and stories for young readers",
      image:
        "https://images.unsplash.com/photo-1588653818227-858700008e5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      popularBooks: ["Picture Books", "Moral Stories", "Educational Comics"],
    },
    {
      name: "Self-Help & Motivation",
      icon: TrendingUp,
      count: "120+ Books",
      description:
        "Personal development, career guidance, and inspirational books",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      popularBooks: [
        "Career Guides",
        "Personality Development",
        "Success Stories",
      ],
    },
    {
      name: "Science & Technology",
      icon: Lightbulb,
      count: "100+ Books",
      description: "Latest developments in science, computers, and technology",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      popularBooks: [
        "Computer Basics",
        "Science Discoveries",
        "Technology Trends",
      ],
    },
  ];

  const libraryStats = [
    { number: "1000+", label: "Total Books" },
    { number: "200+", label: "Active Members" },
    { number: "50+", label: "New Books Monthly" },
    { number: "6", label: "Book Categories" },
  ];

  const membershipPlans = [
    {
      name: "Student Membership",
      price: "Free",
      duration: "1 Year",
      features: [
        "2 Books at a time",
        "14-day lending period",
        "Academic priority",
        "Study space access",
      ],
      bestFor: "School & College Students",
    },
    {
      name: "Regular Membership",
      price: "₹50/month",
      duration: "Flexible",
      features: [
        "4 Books at a time",
        "21-day lending period",
        "All categories",
        "Reading events access",
      ],
      bestFor: "General Readers",
    },
    {
      name: "Family Membership",
      price: "₹100/month",
      duration: "Flexible",
      features: [
        "6 Books at a time",
        "30-day lending period",
        "Multiple members",
        "Priority booking",
      ],
      bestFor: "Families & Groups",
    },
  ];

  const events = [
    {
      title: "Weekly Reading Circle",
      date: "Every Saturday",
      time: "3:00 PM - 5:00 PM",
      participants: "All Members",
      description: "Group reading and book discussions",
    },
    {
      title: "Author Talk Session",
      date: "20 Jan 2024",
      time: "4:00 PM - 6:00 PM",
      participants: "Limited Seats",
      description: "Interaction with local authors",
    },
    {
      title: "Book Donation Drive",
      date: "1-15 Feb 2024",
      time: "All Day",
      participants: "Community",
      description: "Donate books and help expand our collection",
    },
    {
      title: "Children Story Hour",
      date: "Every Sunday",
      time: "10:00 AM - 11:00 AM",
      participants: "Kids 5-12 years",
      description: "Interactive story reading sessions",
    },
  ];

  const facilities = [
    {
      name: "Reading Hall",
      description:
        "Spacious and well-lit reading area with comfortable seating",
      capacity: "40 readers",
      hours: "8:00 AM - 8:00 PM",
      features: ["Air Conditioned", "WiFi Available", "Study Lamps"],
    },
    {
      name: "Computer Section",
      description: "Computers with internet for research and digital learning",
      capacity: "8 computers",
      hours: "9:00 AM - 6:00 PM",
      features: [
        "High-speed Internet",
        "Printing Facility",
        "Educational Software",
      ],
    },
    {
      name: "Children Corner",
      description:
        "Colorful and safe area for young readers with picture books",
      capacity: "20 children",
      hours: "8:00 AM - 6:00 PM",
      features: ["Colorful Furniture", "Educational Toys", "Storytelling Area"],
    },
    {
      name: "Group Study Room",
      description: "Private room for group discussions and study sessions",
      capacity: "10 people",
      hours: "8:00 AM - 8:00 PM",
      features: ["Whiteboard", "Projector", "Sound Proof"],
    },
  ];

  const newArrivals = [
    {
      title: "The Science of Everything",
      author: "Dr. Rajesh Kumar",
      category: "Science",
      availability: "Available",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      title: "Career Guide 2024",
      author: "Priya Sharma",
      category: "Self-Help",
      availability: "Available",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      title: "Digital India Revolution",
      author: "Amit Patel",
      category: "Technology",
      availability: "Borrowed",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      title: "Classic Short Stories",
      author: "Various Authors",
      category: "Literature",
      availability: "Available",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Knowledge Access",
      description: "Free access to thousands of books and learning materials",
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Join a community of readers and learners",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Clean, safe, and conducive learning space",
    },
    {
      icon: TrendingUp,
      title: "Academic Support",
      description: "Resources for students and competitive exam preparation",
    },
    {
      icon: Heart,
      title: "Lifelong Learning",
      description: "Develop reading habits for personal growth",
    },
    {
      icon: Award,
      title: "Skill Development",
      description: "Enhance knowledge and skills through reading",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-card to-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-secondary/20 text-secondary-foreground hover:bg-secondary/20 mb-4">
                <BookOpen className="w-4 h-4 mr-2" />
                Knowledge Hub Since 2008
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-serif">
                Bodhon <span className="text-primary">Library</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Your gateway to knowledge and imagination. With over 1000 books
                across various genres, our library serves as a vibrant learning
                hub for the entire community. Discover, learn, and grow with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Become a Member
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  Visit Library
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Bodhon Library"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-6 border border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-muted-foreground">Books Collection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {libraryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Why Join Our <span className="text-accent">Library?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More than just books - a community learning space for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-shadow text-center bg-card"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Explore <span className="text-primary">Categories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diverse collection catering to all ages and interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group bg-card"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary hover:bg-primary/90">
                        {category.count}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">
                          {category.name}
                        </CardTitle>
                        <CardDescription>
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-card-foreground mb-2">
                        Popular Books:
                      </h4>
                      <div className="space-y-1">
                        {category.popularBooks.map((book, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <Star className="w-3 h-3 text-chart-4" />
                            {book}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      Browse Category
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Membership <span className="text-accent">Plans</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Affordable plans for every type of reader
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {membershipPlans.map((plan, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-shadow bg-card"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-3xl font-bold text-accent mb-1">
                      {plan.price}
                    </div>
                    <div className="text-muted-foreground">{plan.duration}</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-chart-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="text-center mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-accent/20 text-accent-foreground"
                    >
                      Best for: {plan.bestFor}
                    </Badge>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Our <span className="text-secondary">Facilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern amenities for comfortable learning and reading
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-shadow bg-card"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {facility.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {facility.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Capacity
                      </div>
                      <div className="font-medium">{facility.capacity}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Operating Hours
                      </div>
                      <div className="font-medium">{facility.hours}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-card-foreground mb-2">
                      Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {facility.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals & Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* New Arrivals */}
            <div>
              <Card className="border-border shadow-lg bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    New Arrivals
                  </CardTitle>
                  <CardDescription>
                    Recently added books to our collection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {newArrivals.map((book, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-16 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">
                            {book.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            by {book.author}
                          </p>
                          <div className="flex items-center gap-4 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {book.category}
                            </Badge>
                            <Badge
                              className={
                                book.availability === "Available"
                                  ? "bg-chart-2/20 text-chart-2-foreground"
                                  : "bg-chart-3/20 text-chart-3-foreground"
                              }
                            >
                              {book.availability}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Events */}
            <div>
              <Card className="border-border shadow-lg bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    Library Events
                  </CardTitle>
                  <CardDescription>
                    Join our community activities and reading programs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {events.map((event, index) => (
                      <div
                        key={index}
                        className="p-4 border border-border rounded-lg hover:shadow-md transition-shadow"
                      >
                        <h4 className="font-semibold text-foreground mb-2">
                          {event.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-3">
                          {event.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </div>
                          <Badge variant="outline">{event.participants}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Start Your Reading Journey Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our library community and discover the joy of reading. Access
            thousands of books, meet fellow readers, and grow with knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
            >
              Become a Member
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background bg-transparent text-background hover:bg-background hover:text-primary"
            >
              <Phone className="w-5 h-5 mr-2" />
              Visit Library
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background bg-transparent text-background hover:bg-background hover:text-primary"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Donation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
