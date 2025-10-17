// app/about/page.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Users,
  Award,
  Heart,
  Calendar,
  ArrowRight,
  BookOpen,
  Dumbbell,
  Laptop,
  Palette,
  Languages,
} from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & President",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Leading Bodhon since 2008 with a vision for youth empowerment",
    },
    {
      name: "Priya Sharma",
      role: "Program Director",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Oversees all educational and skill development programs",
    },
    {
      name: "Amit Patel",
      role: "Sports Coordinator",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Manages sporting activities and physical health programs",
    },
    {
      name: "Sunita Devi",
      role: "Community Manager",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Bridges the gap between organization and community",
    },
  ];

  const milestones = [
    {
      year: "2008",
      event: "Bodhon Founded",
      description: "Started with a small library and sports activities",
    },
    {
      year: "2010",
      event: "First Technical Batch",
      description: "Launched computer literacy program for youth",
    },
    {
      year: "2013",
      event: "Crafts Center Inaugurated",
      description: "Established traditional crafts training center",
    },
    {
      year: "2015",
      event: "500+ Members",
      description: "Reached milestone of 500 active youth members",
    },
    {
      year: "2018",
      event: "Digital Expansion",
      description: "Introduced advanced digital skills training",
    },
    {
      year: "2020",
      event: "COVID Support",
      description: "Provided online education and community support",
    },
    {
      year: "2023",
      event: "15 Years Celebration",
      description: "Celebrated 15 years of community service",
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Community First",
      description:
        "We prioritize the needs of our community above all else, ensuring our programs serve real needs.",
    },
    {
      icon: Heart,
      title: "Empathy & Care",
      description:
        "We approach every individual with understanding and compassion, creating a supportive environment.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest quality in all our programs and initiatives.",
    },
    {
      icon: BookOpen,
      title: "Lifelong Learning",
      description:
        "We believe in continuous growth and development for both our members and our organization.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">Bodhon</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              For over 15 years, Bodhon has been the cornerstone of youth
              development and community transformation in our village. Our
              journey began with a simple vision: to create opportunities where
              none existed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary button */}
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Our Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              {/* Outline button uses theme defaults */}
              <Button size="lg" variant="outline">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-secondary">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In 2008, a group of passionate individuals came together with
                  a shared dream: to create a platform where village youth could
                  develop both mentally and physically. What started as a small
                  initiative with a handful of books and a makeshift sports
                  ground has now blossomed into a comprehensive youth
                  development organization.
                </p>
                <p>
                  The name <strong>"Bodhon"</strong> means "awakening" or
                  "initiation" - reflecting our mission to awaken the latent
                  potential in every young individual and initiate them into a
                  journey of self-discovery and growth.
                </p>
                <p>
                  Over the years, we've witnessed incredible transformations -
                  shy children becoming confident speakers, school dropouts
                  turning into skilled professionals, and disinterested youth
                  becoming community leaders.
                </p>
              </div>
            </div>
            {/* Image Grid retains styling */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Bodhon Early Days"
                className="rounded-lg shadow-lg h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Community Activities"
                className="rounded-lg shadow-lg h-48 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Youth Learning"
                className="rounded-lg shadow-lg h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Sports Activities"
                className="rounded-lg shadow-lg h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  {/* Icon Background: Primary/10, Icon Color: Primary */}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Our Mission
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  To empower village youth through comprehensive development
                  programs that enhance both mental capabilities and physical
                  health, creating self-reliant individuals who contribute
                  positively to society.
                </p>
                <div className="space-y-3">
                  {/* Mission Points use Chart Palette for distinct colors */}
                  <div className="flex items-center gap-3">
                    <Dumbbell className="w-5 h-5 text-chart-2" />
                    <span className="text-foreground">
                      Promote physical health through sports
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Laptop className="w-5 h-5 text-primary" />
                    <span className="text-foreground">
                      Provide technical and digital skills
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Palette className="w-5 h-5 text-chart-3" />
                    <span className="text-foreground">
                      Preserve and teach traditional crafts
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Languages className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">
                      Enhance communication abilities
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  {/* Icon Background: Secondary/10, Icon Color: Secondary */}
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Our Vision
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  A self-reliant, skilled, and healthy youth society that
                  actively contributes to sustainable community development,
                  where every young individual has the opportunity to realize
                  their full potential.
                </p>
                <div className="space-y-3">
                  {/* Vision Points use Chart Palette for distinct colors */}
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-foreground">
                      Youth-led community development
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-chart-4" />
                    <span className="text-foreground">
                      Skilled and employable youth
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-chart-1" />
                    <span className="text-foreground">
                      Healthy mind and body for all
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">
                      Lifelong learning culture
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-chart-3">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Bodhon
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <CardContent className="p-6">
                  {/* Icon uses Chart-3/10 background for accent */}
                  <div className="w-16 h-16 bg-chart-3/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-chart-3" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-secondary">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Milestones in our 15-year journey of transforming lives
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line uses border color */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                      }`}
                    >
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                          {/* Year and icon use Primary color */}
                          <div className="flex items-center gap-3 mb-2">
                            <Calendar className="w-5 h-5 text-primary" />
                            <span className="font-bold text-foreground">
                              {milestone.year}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {milestone.event}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Dot uses Primary color and Card background border for contrast */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-card shadow-lg"></div>

                    {/* Empty space for alternating sides */}
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated individuals working tirelessly for community
              transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center overflow-hidden"
              >
                <CardContent className="p-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    {/* Role text uses Primary color */}
                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Team Members
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Mission?
          </h2>
          {/* Secondary text uses primary-foreground/80 for contrast */}
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you want to volunteer, donate, or simply learn more about
            our work, we'd love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              // Inverted Primary Button: white background, dark text
              className="bg-primary-foreground text-foreground hover:bg-card"
            >
              Become a Volunteer
            </Button>
            <Button
              size="lg"
              variant="outline"
              // Outline button: white border, white text, primary hover
              className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
