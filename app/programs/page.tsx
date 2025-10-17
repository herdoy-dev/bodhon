// app/programs/page.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dumbbell,
  Laptop,
  Palette,
  Languages,
  BookOpen,
  Users,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Star,
  Target,
  Award,
  Heart,
} from "lucide-react";

export default function ProgramsPage() {
  const programs = [
    {
      id: "sports",
      icon: Dumbbell,
      title: "Bodhon Sporting Club",
      description:
        "Promoting physical health, teamwork, and discipline through various sports activities.",
      longDescription:
        "Our sporting club offers comprehensive physical development programs including cricket, football, volleyball, and athletics. We focus on building character, teamwork, and healthy competition among youth.",
      image:
        "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Daily training sessions",
        "Inter-village tournaments",
        "Professional coaching",
        "Sports equipment provided",
        "Health and nutrition guidance",
      ],
      schedule: "Monday-Saturday: 6:00 AM - 8:00 AM & 4:00 PM - 6:00 PM",
      location: "Village Sports Ground",
      ageGroup: "8-25 years",
      members: "150+ active members",
      badge: "Most Popular",
    },
    {
      id: "technical",
      icon: Laptop,
      title: "Bodhon Technical",
      description:
        "Digital literacy and technical skills training to make our youth future-ready.",
      longDescription:
        "In today's digital age, we provide essential computer skills, programming basics, and digital literacy to bridge the technology gap and create employment opportunities.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Basic computer operations",
        "MS Office training",
        "Internet and email skills",
        "Programming fundamentals",
        "Digital safety awareness",
      ],
      schedule: "Batch 1: Mon-Wed-Fri, Batch 2: Tue-Thu-Sat",
      location: "Computer Lab - Bodhon Center",
      ageGroup: "14-30 years",
      members: "80+ students trained",
      badge: "Skill Development",
    },
    {
      id: "crafts",
      icon: Palette,
      title: "Bodhon Crafts",
      description:
        "Preserving traditional crafts while creating income opportunities through skill-based training.",
      longDescription:
        "We revive and promote traditional artisan skills while incorporating modern designs. Our crafts program not only preserves cultural heritage but also generates sustainable income for participants.",
      image:
        "https://images.unsplash.com/photo-1560393464-5c3a73b936c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Pottery and clay work",
        "Textile and embroidery",
        "Wood carving",
        "Bamboo craft",
        "Product marketing training",
      ],
      schedule: "Tuesday & Thursday: 2:00 PM - 5:00 PM",
      location: "Crafts Center - Bodhon Campus",
      ageGroup: "16+ years",
      members: "45+ artisans",
      badge: "Income Generation",
    },
    {
      id: "language",
      icon: Languages,
      title: "Bodhon Language Club",
      description:
        "Enhancing communication skills and opening up wider educational and professional opportunities.",
      longDescription:
        "We focus on improving English communication skills along with regional language proficiency. Our program includes speaking, writing, and comprehension skills development.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Spoken English classes",
        "Grammar and vocabulary",
        "Public speaking practice",
        "Reading comprehension",
        "Career communication skills",
      ],
      schedule: "Monday-Friday: 5:00 PM - 7:00 PM",
      location: "Library Hall - Bodhon Center",
      ageGroup: "12-35 years",
      members: "120+ learners",
      badge: "Communication",
    },
    {
      id: "library",
      icon: BookOpen,
      title: "Bodhon Library",
      description:
        "A growing collection of books to encourage reading, learning, and intellectual growth.",
      longDescription:
        "Our library serves as a knowledge hub with over 1000 books across various genres. We promote reading habits and provide a quiet space for study and research.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "1000+ books collection",
        "Newspapers and magazines",
        "Study space availability",
        "Book lending facility",
        "Reading competitions",
      ],
      schedule: "Everyday: 8:00 AM - 8:00 PM",
      location: "Main Building - Bodhon Center",
      ageGroup: "All ages",
      members: "200+ registered members",
      badge: "Knowledge Hub",
    },
  ];

  const upcomingEvents = [
    {
      title: "Annual Sports Tournament",
      program: "Sporting Club",
      date: "15 Dec 2024",
      participants: "200+ expected",
    },
    {
      title: "Digital Literacy Workshop",
      program: "Technical",
      date: "22 Dec 2024",
      participants: "50 seats available",
    },
    {
      title: "Crafts Exhibition & Sale",
      program: "Crafts",
      date: "30 Dec 2024",
      participants: "Open to all",
    },
  ];

  const programStats = [
    { number: "500+", label: "Active Participants" },
    { number: "15+", label: "Years Running" },
    { number: "50+", label: "Trained Volunteers" },
    { number: "1000+", label: "Lives Impacted" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Programs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive initiatives designed to develop every aspect of our
              youth's potential. From sports to skills, we provide holistic
              development opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {programStats.map((stat, index) => (
                <div key={index} className="text-center px-6">
                  <div className="text-2xl md:text-3xl font-bold text-green-600">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our <span className="text-blue-600">Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each program is carefully designed to address specific needs and
              create meaningful impact
            </p>
          </div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <Card
                key={program.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image Section */}
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    {program.badge && (
                      <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">
                        {program.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <program.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900">
                          {program.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 mt-1">
                          {program.description}
                        </CardDescription>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {program.longDescription}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {program.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Schedule & Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-blue-600" />
                        {program.schedule}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-green-600" />
                        {program.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-purple-600" />
                        {program.ageGroup}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Target className="w-4 h-4 text-orange-600" />
                        {program.members}
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <a href={`/programs/${program.id}`}>
                        Learn More & Enroll
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming <span className="text-orange-600">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our special events and activities across all programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader className="pb-4">
                  <Badge
                    variant="secondary"
                    className="w-fit bg-orange-100 text-orange-800"
                  >
                    {event.program}
                  </Badge>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-orange-600" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Register Interest
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How to <span className="text-green-600">Join</span>
              </h2>
              <p className="text-xl text-gray-600">
                Simple steps to become part of our programs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Visit Center</h3>
                  <p className="text-gray-600">
                    Come to our Bodhon center during working hours and meet our
                    program coordinators
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Get Guidance</h3>
                  <p className="text-gray-600">
                    Our team will guide you to choose the right program based on
                    your interests
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      3
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Start Learning</h3>
                  <p className="text-gray-600">
                    Begin your journey with orientation and regular program
                    sessions
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-gray-600 mb-6">
                  All our programs are free or heavily subsidized. We believe
                  financial constraints should never be a barrier to learning
                  and growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <MapPin className="w-5 h-5 mr-2" />
                    Visit Us Today
                  </Button>
                  <Button size="lg" variant="outline">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Lives Through Our Programs
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Your support helps us continue providing these essential programs to
            village youth. Together, we can create more success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              <Heart className="w-5 h-5 mr-2" />
              Support Our Programs
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
              <Users className="w-5 h-5 mr-2" />
              Become Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
