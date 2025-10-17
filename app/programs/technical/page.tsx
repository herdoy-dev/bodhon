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
  Laptop,
  Users,
  Calendar,
  Clock,
  MapPin,
  Award,
  BookOpen,
  Star,
  ArrowRight,
  Phone,
  MessageCircle,
  Code,
  Smartphone,
  Database,
  Globe,
  Shield,
  TrendingUp,
  CheckCircle2,
  Briefcase,
} from "lucide-react";

export default function TechnicalPage() {
  const courses = [
    {
      name: "Computer Basics",
      icon: Laptop,
      description:
        "Fundamental computer operations, typing, and file management",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Beginner",
      duration: "4 Weeks",
      schedule: "Mon, Wed, Fri: 10:00 AM - 12:00 PM",
      skills: ["Typing", "File Management", "Internet Basics", "Email"],
      outcomes: [
        "Basic Computer Literacy",
        "Internet Navigation",
        "Document Creation",
      ],
    },
    {
      name: "MS Office Mastery",
      icon: BookOpen,
      description: "Complete training in Microsoft Word, Excel, PowerPoint",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Beginner to Intermediate",
      duration: "6 Weeks",
      schedule: "Tue, Thu, Sat: 2:00 PM - 4:00 PM",
      skills: [
        "Word Processing",
        "Spreadsheets",
        "Presentations",
        "Data Analysis",
      ],
      outcomes: [
        "Professional Documentation",
        "Data Management",
        "Business Presentations",
      ],
    },
    {
      name: "Web Development",
      icon: Code,
      description: "Build websites using HTML, CSS, and JavaScript",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Intermediate",
      duration: "8 Weeks",
      schedule: "Mon, Wed, Fri: 4:00 PM - 6:00 PM",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      outcomes: [
        "Website Development",
        "Frontend Skills",
        "Portfolio Projects",
      ],
    },
    {
      name: "Digital Marketing",
      icon: TrendingUp,
      description: "Social media, SEO, and online business promotion",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Beginner to Advanced",
      duration: "6 Weeks",
      schedule: "Tue, Thu: 3:00 PM - 5:00 PM",
      skills: ["Social Media", "SEO", "Content Creation", "Analytics"],
      outcomes: ["Brand Building", "Online Presence", "Marketing Strategy"],
    },
    {
      name: "Mobile App Basics",
      icon: Smartphone,
      description: "Introduction to mobile applications and usage",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Beginner",
      duration: "4 Weeks",
      schedule: "Sat, Sun: 10:00 AM - 1:00 PM",
      skills: [
        "App Usage",
        "Mobile Security",
        "Productivity Apps",
        "Communication",
      ],
      outcomes: ["Smartphone Proficiency", "App Management", "Digital Safety"],
    },
    {
      name: "Data Entry & Excel",
      icon: Database,
      description: "Professional data entry skills and advanced Excel",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Intermediate",
      duration: "5 Weeks",
      schedule: "Mon, Wed, Fri: 11:00 AM - 1:00 PM",
      skills: ["Data Entry", "Excel Formulas", "Charts", "Data Analysis"],
      outcomes: ["Job-ready Skills", "Office Employment", "Data Management"],
    },
  ];

  const instructors = [
    {
      name: "Priya Sharma",
      role: "Lead Technical Instructor",
      experience: "8 years in IT Training",
      specialization: "Web Development & Office Suite",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      certifications: [
        "Microsoft Certified",
        "Google Digital Garage",
        "Web Development Expert",
      ],
    },
    {
      name: "Rohan Kumar",
      role: "Digital Skills Trainer",
      experience: "6 years in Digital Literacy",
      specialization: "Computer Basics & Mobile Apps",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      certifications: [
        "Digital Literacy Expert",
        "Mobile Technology",
        "Cybersecurity Basics",
      ],
    },
    {
      name: "Anita Patel",
      role: "Advanced Technical Coach",
      experience: "10 years in Software Development",
      specialization: "Programming & Data Analysis",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      certifications: [
        "Full Stack Developer",
        "Data Science",
        "Python Programming",
      ],
    },
  ];

  const successStories = [
    {
      name: "Rahul Verma",
      course: "Computer Basics & Data Entry",
      outcome: "Got job as Data Entry Operator",
      story:
        "After completing the course, I secured a job at a local company with 50% higher salary than before.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Sunita Devi",
      course: "Digital Marketing",
      outcome: "Started online business",
      story:
        "Learned digital marketing skills and now successfully run my handmade crafts business online.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Amit Singh",
      course: "Web Development",
      outcome: "Freelance Web Developer",
      story:
        "From zero coding knowledge to building websites for local businesses as a freelancer.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const facilities = [
    {
      name: "Computer Lab",
      description: "20 computers with latest software",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "High-speed Internet",
        "Projector",
        "Air Conditioned",
        "Printing Facility",
      ],
    },
    {
      name: "Digital Library",
      description: "E-books and online learning resources",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Online Courses",
        "E-books Access",
        "Video Tutorials",
        "Research Materials",
      ],
    },
    {
      name: "Project Room",
      description: "Dedicated space for practical projects",
      image:
        "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Group Work",
        "Project Development",
        "Mentor Guidance",
        "Presentation Practice",
      ],
    },
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: "Employment Ready",
      description: "Skills that directly translate to job opportunities",
    },
    {
      icon: Globe,
      title: "Digital Inclusion",
      description: "Bridge the digital divide in our community",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Pathway to better jobs and higher income",
    },
    {
      icon: Shield,
      title: "Cyber Safety",
      description: "Learn to stay safe in the digital world",
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with like-minded learners",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Recognized certificates for course completion",
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
                <Laptop className="w-4 h-4 mr-2" />
                Future-Ready Skills
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-serif">
                Bodhon <span className="text-primary">Technical</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Empowering youth with digital literacy and technical skills for
                the 21st century. From basic computer operations to advanced
                programming, we provide comprehensive training that opens doors
                to better opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  Free Demo Class
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Bodhon Technical Program"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-6 border border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">80+</div>
                  <div className="text-muted-foreground">Students Trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Why Learn <span className="text-accent">Technical Skills?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Digital literacy is no longer optional - it's essential for
              success in today's world
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

      {/* Courses Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Our <span className="text-secondary">Courses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs designed for different skill
              levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group bg-card"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-secondary hover:bg-secondary/90">
                        {course.level}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <course.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{course.name}</CardTitle>
                        <CardDescription>{course.duration}</CardDescription>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {course.schedule}
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm text-card-foreground mb-2">
                          Skills You'll Learn:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {course.skills.map((skill, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm text-card-foreground mb-2">
                          Learning Outcomes:
                        </h4>
                        <div className="space-y-1">
                          {course.outcomes.map((outcome, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-xs text-muted-foreground"
                            >
                              <CheckCircle2 className="w-3 h-3 text-chart-2" />
                              {outcome}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Enroll Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Meet Our <span className="text-primary">Instructors</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals passionate about teaching and technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-shadow text-center overflow-hidden bg-card"
              >
                <CardContent className="p-0">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-1">
                      {instructor.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {instructor.role}
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {instructor.experience}
                      </span>
                      <span>{instructor.specialization}</span>
                    </div>
                    <div className="space-y-1 mb-4">
                      {instructor.certifications.map((cert, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <Star className="w-3 h-3 text-chart-4" />
                          {cert}
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact Instructor
                    </Button>
                  </div>
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
              Our <span className="text-accent">Facilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern infrastructure to support effective learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-card"
              >
                <CardContent className="p-0">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      {facility.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {facility.description}
                    </p>
                    <div className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-chart-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Success <span className="text-chart-2">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real people, real transformations through technical education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-shadow bg-card"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-card-foreground">
                        {story.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {story.course}
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-chart-2/20 text-chart-2-foreground hover:bg-chart-2/20 mb-3">
                    {story.outcome}
                  </Badge>
                  <p className="text-muted-foreground leading-relaxed">
                    "{story.story}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Batch Schedule */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="border-border shadow-lg max-w-4xl mx-auto bg-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif">
                Upcoming Batch Schedule
              </CardTitle>
              <CardDescription>
                New batches starting every month. Limited seats available.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">
                    January 2024 Batches
                  </h4>
                  <div className="space-y-3">
                    {courses.slice(0, 3).map((course, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-border rounded-lg bg-background"
                      >
                        <div>
                          <div className="font-medium text-foreground">
                            {course.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Starts: Jan 15, 2024
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-chart-2/20 text-chart-2-foreground"
                        >
                          {course.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-4">
                    February 2024 Batches
                  </h4>
                  <div className="space-y-3">
                    {courses.slice(3).map((course, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-border rounded-lg bg-background"
                      >
                        <div>
                          <div className="font-medium text-foreground">
                            {course.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Starts: Feb 1, 2024
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-accent/20 text-accent-foreground"
                        >
                          {course.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Start Your Technical Journey Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't get left behind in the digital age. Learn essential technical
            skills that open doors to better career opportunities and personal
            growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
            >
              Enroll in Course
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background bg-transparent text-background hover:bg-background hover:text-primary"
            >
              <Phone className="w-5 h-5 mr-2" />
              Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background bg-transparent text-background hover:bg-background hover:text-primary"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Inquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
