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
  Languages,
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
  Mic,
  Globe,
  Trophy,
  CheckCircle2,
  TrendingUp,
  GraduationCap,
} from "lucide-react";

export default function LanguagePage() {
  const courses = [
    {
      name: "Spoken English",
      icon: Mic,
      description:
        "Build confidence in everyday English conversation and communication",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Beginner to Advanced",
      duration: "12 Weeks",
      schedule: "Mon, Wed, Fri: 5:00 PM - 7:00 PM",
      focus: ["Conversation", "Pronunciation", "Vocabulary", "Fluency"],
      outcomes: [
        "Confident Speaking",
        "Better Job Opportunities",
        "Social Confidence",
      ],
    },
    {
      name: "Business English",
      icon: TrendingUp,
      description: "Professional communication for workplace and career growth",
      image:
        "https://images.unsplash.com/photo-1551836026-d5c2e0c49b98?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Intermediate to Advanced",
      duration: "8 Weeks",
      schedule: "Tue, Thu: 6:00 PM - 8:00 PM",
      focus: ["Email Writing", "Meetings", "Presentations", "Negotiations"],
      outcomes: [
        "Career Advancement",
        "Professional Communication",
        "Business Writing",
      ],
    },
    {
      name: "Grammar & Writing",
      icon: BookOpen,
      description: "Master English grammar and improve writing skills",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "All Levels",
      duration: "10 Weeks",
      schedule: "Sat, Sun: 10:00 AM - 12:00 PM",
      focus: [
        "Grammar Rules",
        "Sentence Structure",
        "Essay Writing",
        "Creative Writing",
      ],
      outcomes: [
        "Error-free Writing",
        "Academic Success",
        "Professional Documents",
      ],
    },
    {
      name: "Public Speaking",
      icon: Globe,
      description: "Overcome stage fear and become an effective public speaker",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Intermediate",
      duration: "6 Weeks",
      schedule: "Fri: 4:00 PM - 6:00 PM",
      focus: [
        "Speech Delivery",
        "Body Language",
        "Audience Engagement",
        "Confidence",
      ],
      outcomes: [
        "Leadership Skills",
        "Presentation Excellence",
        "Self-Confidence",
      ],
    },
    {
      name: "Accent Training",
      icon: Languages,
      description: "Improve pronunciation and reduce mother tongue influence",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Intermediate to Advanced",
      duration: "8 Weeks",
      schedule: "Tue, Thu: 3:00 PM - 5:00 PM",
      focus: ["Pronunciation", "Intonation", "Stress Patterns", "Clarity"],
      outcomes: ["Clear Speech", "Better Comprehension", "Professional Image"],
    },
    {
      name: "Interview Preparation",
      icon: GraduationCap,
      description: "Ace job interviews with perfect English communication",
      image:
        "https://images.unsplash.com/photo-1551836026-d5c2e0c49b98?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Advanced",
      duration: "4 Weeks",
      schedule: "Sat: 2:00 PM - 5:00 PM",
      focus: [
        "Interview Questions",
        "Body Language",
        "Company Research",
        "Follow-ups",
      ],
      outcomes: ["Job Success", "Confident Interviews", "Career Growth"],
    },
  ];

  const instructors = [
    {
      name: "Rajesh Kumar",
      role: "Head Language Trainer",
      experience: "12 years in Language Teaching",
      specialization: "Spoken English & Accent Training",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      certifications: [
        "CELTA Certified",
        "IELTS Trainer",
        "Public Speaking Coach",
      ],
    },
    {
      name: "Priya Sharma",
      role: "Business English Expert",
      experience: "8 years in Corporate Training",
      specialization: "Business Communication",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      certifications: ["MBA in HR", "Corporate Trainer", "Soft Skills Expert"],
    },
    {
      name: "Anita Patel",
      role: "Grammar & Writing Specialist",
      experience: "10 years in Academic English",
      specialization: "Writing & Grammar",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      certifications: [
        "MA in English",
        "Content Writer",
        "Editorial Experience",
      ],
    },
  ];

  const successStories = [
    {
      name: "Rahul Verma",
      course: "Spoken English",
      outcome: "Got promoted to Team Lead",
      story:
        "From struggling with basic English to confidently leading team meetings and client calls.",
      improvement: "Fluency improved by 80%",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Sunita Devi",
      course: "Business English",
      outcome: "Started own business",
      story:
        "Gained confidence to communicate with suppliers and customers in English, expanding business reach.",
      improvement: "Business grew by 200%",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Amit Singh",
      course: "Interview Preparation",
      outcome: "Landed dream job at MNC",
      story:
        "From multiple rejections to getting selected in first attempt after interview training.",
      improvement: "Salary increased by 150%",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const activities = [
    {
      name: "Conversation Circles",
      description: "Group discussions on various topics to practice speaking",
      frequency: "Weekly",
      participants: "Small groups of 5-6",
      benefits: "Real conversation practice",
    },
    {
      name: "Debate Competitions",
      description: "Friendly debates to improve argumentation skills",
      frequency: "Monthly",
      participants: "All members",
      benefits: "Critical thinking & quick responses",
    },
    {
      name: "Movie Sessions",
      description: "English movie screenings with discussions",
      frequency: "Bi-weekly",
      participants: "Open to all",
      benefits: "Listening comprehension & culture",
    },
    {
      name: "Book Club",
      description: "Reading and discussing English books",
      frequency: "Monthly",
      participants: "Reading enthusiasts",
      benefits: "Vocabulary & comprehension",
    },
    {
      name: "Role Play Sessions",
      description: "Real-life scenario practice",
      frequency: "Weekly",
      participants: "Small groups",
      benefits: "Practical communication skills",
    },
    {
      name: "Pronunciation Labs",
      description: "Focused practice on difficult sounds",
      frequency: "Weekly",
      participants: "Individual attention",
      benefits: "Accent improvement",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Better job opportunities and career advancement",
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Connect with people and opportunities worldwide",
    },
    {
      icon: Users,
      title: "Social Confidence",
      description: "Communicate confidently in social situations",
    },
    {
      icon: GraduationCap,
      title: "Academic Success",
      description: "Excel in studies and competitive exams",
    },
    {
      icon: Trophy,
      title: "Personal Development",
      description: "Enhanced thinking and expression abilities",
    },
    {
      icon: Award,
      title: "Cultural Exchange",
      description: "Understand and appreciate different cultures",
    },
  ];

  const levels = [
    {
      level: "Beginner",
      description: "Basic vocabulary and simple sentences",
      duration: "12 weeks",
      focus: "Foundation building",
      students: "40% of learners",
    },
    {
      level: "Intermediate",
      description: "Conversational fluency and grammar",
      duration: "16 weeks",
      focus: "Fluency development",
      students: "35% of learners",
    },
    {
      level: "Advanced",
      description: "Professional and academic English",
      duration: "20 weeks",
      focus: "Mastery & specialization",
      students: "25% of learners",
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
                <Languages className="w-4 h-4 mr-2" />
                Communication Excellence
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-serif">
                Bodhon <span className="text-primary">Language Club</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Unlock your potential through the power of language. Our
                comprehensive English language program builds confidence, opens
                career opportunities, and connects you with the world through
                effective communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Join Language Club
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  Free Level Test
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Bodhon Language Club"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-6 border border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">120+</div>
                  <div className="text-muted-foreground">Active Learners</div>
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
              Why Learn <span className="text-accent">English?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              English proficiency opens doors to opportunities and personal
              growth
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
              Our <span className="text-primary">Courses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive English language programs for all needs
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
                      <Badge className="bg-primary hover:bg-primary/90">
                        {course.level}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <course.icon className="w-6 h-6 text-primary" />
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
                          Focus Areas:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {course.focus.map((area, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs"
                            >
                              {area}
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
              Meet Our <span className="text-secondary">Instructors</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced language experts passionate about teaching
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
                    <p className="text-secondary font-medium mb-2">
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

      {/* Learning Levels */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Learning <span className="text-chart-2">Pathways</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Structured progression from beginner to advanced levels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {levels.map((level, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-shadow text-center bg-card"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-chart-2/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-chart-2">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {level.level}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {level.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{level.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Focus:</span>
                      <span className="font-medium">{level.focus}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Students:</span>
                      <span className="font-medium">{level.students}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Club Activities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Club <span className="text-secondary">Activities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fun and engaging activities to practice English in real contexts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-shadow bg-card"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {activity.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {activity.description}
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Frequency:</span>
                      <span className="font-medium">{activity.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Participants:</span>
                      <span className="font-medium">
                        {activity.participants}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Benefits:</span>
                      <span className="font-medium text-secondary">
                        {activity.benefits}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Success <span className="text-chart-2">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real transformations through English language learning
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
                        {story.course} Student
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-chart-2/20 text-chart-2-foreground hover:bg-chart-2/20 mb-3">
                    {story.outcome}
                  </Badge>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    "{story.story}"
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Improvement:</span>
                    <span className="font-bold text-chart-2">
                      {story.improvement}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Start Your English Journey Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't let language be a barrier to your dreams. Join our supportive
            community and transform your communication skills for life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
            >
              Take Level Test
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
              WhatsApp Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
