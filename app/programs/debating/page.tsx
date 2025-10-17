import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Brain,
  CheckCircle2,
  Clock,
  Lightbulb,
  MessageCircle,
  Mic,
  Phone,
  Shield,
  Speech,
  Star,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";

export default function DebatingPage() {
  const debateFormats = [
    {
      name: "British Parliamentary",
      icon: Trophy,
      description:
        "The most popular international debate format with four teams of two speakers",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      speakers: "8 speakers (4 teams)",
      duration: "60 minutes",
      skills: ["Quick Thinking", "Team Strategy", "Persuasion", "Rebuttal"],
      level: "Advanced",
    },
    {
      name: "World Schools Style",
      icon: Speech,
      description:
        "Balanced format focusing on content, style, and strategy with prepared and impromptu topics",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      speakers: "6 speakers (2 teams)",
      duration: "45 minutes",
      skills: [
        "Content Development",
        "Delivery Style",
        "Logical Reasoning",
        "Teamwork",
      ],
      level: "Intermediate",
    },
    {
      name: "Lincoln-Douglas",
      icon: Speech,
      description:
        "One-on-one debate focusing on values, ethics, and philosophical arguments",
      image:
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      speakers: "2 speakers",
      duration: "45 minutes",
      skills: [
        "Ethical Reasoning",
        "Value Analysis",
        "Individual Performance",
        "Deep Thinking",
      ],
      level: "All Levels",
    },
    {
      name: "Public Forum",
      icon: Users,
      description:
        "Team debate on current events and controversial topics for public audience",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      speakers: "4 speakers (2 teams)",
      duration: "40 minutes",
      skills: [
        "Current Affairs",
        "Public Speaking",
        "Evidence Use",
        "Cross-examination",
      ],
      level: "Beginner to Advanced",
    },
    {
      name: "Asian Parliamentary",
      icon: Award,
      description:
        "Adapted format popular in Asian countries with government and opposition teams",
      image:
        "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      speakers: "6 speakers (2 teams)",
      duration: "50 minutes",
      skills: [
        "Argument Structure",
        "Point of Information",
        "Case Building",
        "Team Coordination",
      ],
      level: "Intermediate",
    },
    {
      name: "Mock Parliament",
      icon: Speech,
      description:
        "Simulated parliamentary proceedings with roles of ministers and opposition",
      image:
        "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      speakers: "15-20 participants",
      duration: "2 hours",
      skills: [
        "Political Awareness",
        "Procedure Knowledge",
        "Leadership",
        "Public Policy",
      ],
      level: "Advanced",
    },
  ];

  const coaches = [
    {
      name: "Dr. Anjali Sharma",
      role: "Head Debate Coach",
      experience: "15 years in Competitive Debating",
      specialization: "British Parliamentary & WSDC",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      achievements: [
        "National Debate Champion",
        "WSDC Adjudicator",
        "Trained 500+ Debaters",
      ],
    },
    {
      name: "Rahul Mehta",
      role: "Public Speaking Expert",
      experience: "12 years in Oratory Training",
      specialization: "Rhetoric & Persuasion",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      achievements: [
        "Toastmasters Champion",
        "Corporate Trainer",
        "Communication Specialist",
      ],
    },
    {
      name: "Priya Kapoor",
      role: "Logic & Reasoning Coach",
      experience: "10 years in Academic Debate",
      specialization: "Logical Fallacies & Argumentation",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      achievements: [
        "Philosophy Graduate",
        "Critical Thinking Expert",
        "Debate Adjudicator",
      ],
    },
  ];

  const achievements = [
    {
      year: "2023",
      event: "National Youth Debate Championship",
      achievement: "Semi-Finalists",
      category: "British Parliamentary",
    },
    {
      year: "2023",
      event: "State Level School Debate",
      achievement: "Runners Up",
      category: "World Schools",
    },
    {
      year: "2022",
      event: "Inter-College Debate Competition",
      achievement: "Best Speaker Award",
      category: "Public Forum",
    },
    {
      year: "2022",
      event: "Regional Parliamentary Debate",
      achievement: "Quarter-Finalists",
      category: "Asian Parliamentary",
    },
    {
      year: "2021",
      event: "Online International Debate",
      achievement: "Top 16 Teams",
      category: "British Parliamentary",
    },
    {
      year: "2021",
      event: "State Youth Parliament",
      achievement: "Best Delegate",
      category: "Mock Parliament",
    },
  ];

  const benefits = [
    {
      icon: Brain,
      title: "Critical Thinking",
      description: "Develop analytical skills and logical reasoning abilities",
    },
    {
      icon: Mic,
      title: "Confidence Building",
      description: "Overcome stage fear and speak confidently in public",
    },
    {
      icon: Lightbulb,
      title: "Quick Thinking",
      description: "Learn to think on your feet and respond effectively",
    },
    {
      icon: TrendingUp,
      title: "Career Advantage",
      description:
        "Valuable skill for leadership roles and professional success",
    },
    {
      icon: Users,
      title: "Teamwork Skills",
      description: "Learn to collaborate and coordinate with team members",
    },
    {
      icon: Shield,
      title: "Mental Agility",
      description: "Enhance mental flexibility and adaptability in arguments",
    },
  ];

  const trainingModules = [
    {
      module: "Foundation Skills",
      duration: "4 weeks",
      topics: [
        "Basic Argument Structure",
        "Evidence Collection",
        "Speech Organization",
        "Body Language",
      ],
      level: "Beginner",
    },
    {
      module: "Advanced Argumentation",
      duration: "6 weeks",
      topics: [
        "Logical Fallacies",
        "Rhetorical Devices",
        "Rebuttal Techniques",
        "Case Construction",
      ],
      level: "Intermediate",
    },
    {
      module: "Competition Preparation",
      duration: "8 weeks",
      topics: [
        "Format Mastery",
        "Strategy Development",
        "Adjudicator Perspective",
        "Pressure Management",
      ],
      level: "Advanced",
    },
    {
      module: "Specialized Formats",
      duration: "4 weeks",
      topics: ["BP Strategy", "WSDC Style", "PF Techniques", "LD Values"],
      level: "All Levels",
    },
  ];

  const successStories = [
    {
      name: "Arjun Patel",
      duration: "2 years in club",
      achievement: "Won Best Speaker at National Level",
      story:
        "Started as a shy speaker, now represents state in national competitions.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Neha Sharma",
      duration: "1.5 years in club",
      achievement: "Selected for International Debate Camp",
      story:
        "From local competitions to international recognition through dedicated practice.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Rohan Kumar",
      duration: "3 years in club",
      achievement: "Debate Scholarship to University",
      story: "Earned full scholarship based on debate achievements and skills.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
                <Mic className="w-4 h-4 mr-2" />
                Think. Speak. Persuade.
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-serif">
                Bodhon <span className="text-primary">Debating Club</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Where ideas clash and minds grow. Our debating club transforms
                hesitant speakers into confident orators, critical thinkers, and
                persuasive communicators ready to make their mark in the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Join Debate Club
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  Free Trial Session
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Bodhon Debating Club"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-6 border border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">80+</div>
                  <div className="text-muted-foreground">Active Debaters</div>
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
              Why Learn <span className="text-accent">Debating?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More than just arguments - it's about developing essential life
              skills
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

      {/* Debate Formats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Debate <span className="text-primary">Formats</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master various international and local debate styles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {debateFormats.map((format, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group bg-card"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={format.image}
                      alt={format.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary hover:bg-primary/90">
                        {format.level}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <format.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{format.name}</CardTitle>
                        <CardDescription>{format.speakers}</CardDescription>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {format.description}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        Duration: {format.duration}
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm text-card-foreground mb-2">
                          Skills Developed:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {format.skills.map((skill, idx) => (
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
                    </div>

                    <Button variant="outline" className="w-full">
                      Learn This Format
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Meet Our <span className="text-secondary">Coaches</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced mentors guiding your debating journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-shadow text-center overflow-hidden bg-card"
              >
                <CardContent className="p-0">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-1">
                      {coach.name}
                    </h3>
                    <p className="text-secondary font-medium mb-2">
                      {coach.role}
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {coach.experience}
                      </span>
                      <span>{coach.specialization}</span>
                    </div>
                    <div className="space-y-1 mb-4">
                      {coach.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <Star className="w-3 h-3 text-chart-4" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Schedule Session
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Structured <span className="text-chart-2">Training</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Progressive learning path from beginner to competitive debater
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {trainingModules.map((module, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-shadow bg-card"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {module.module}
                    </h3>
                    <Badge
                      className={
                        module.level === "Beginner"
                          ? "bg-chart-2/20 text-chart-2-foreground"
                          : module.level === "Intermediate"
                          ? "bg-accent/20 text-accent-foreground"
                          : "bg-primary/20 text-primary-foreground"
                      }
                    >
                      {module.level}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="w-4 h-4" />
                    Duration: {module.duration}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-card-foreground mb-2">
                      Topics Covered:
                    </h4>
                    <div className="space-y-2">
                      {module.topics.map((topic, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-chart-2" />
                          {topic}
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

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Our <span className="text-chart-4">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Celebrating success in competitive debating circuits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-shadow bg-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-chart-4/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-chart-4" />
                  </div>
                  <div className="text-2xl font-bold text-chart-4 mb-2">
                    {achievement.year}
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">
                    {achievement.event}
                  </h3>
                  <Badge className="bg-chart-2/20 text-chart-2-foreground hover:bg-chart-2/20 mb-2">
                    {achievement.achievement}
                  </Badge>
                  <div className="text-sm text-muted-foreground">
                    {achievement.category}
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
              Success <span className="text-secondary">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From hesitant speakers to confident debaters
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
                        {story.duration}
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-secondary/20 text-secondary-foreground hover:bg-secondary/20 mb-3">
                    {story.achievement}
                  </Badge>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    "{story.story}"
                  </p>
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
            Ready to Find Your Voice?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our debating community and transform your thinking, speaking,
            and persuasion skills. From classroom discussions to competitive
            stages, we prepare you for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
            >
              Join Debate Club
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background bg-transparent text-background hover:bg-background hover:text-primary"
            >
              <Phone className="w-5 h-5 mr-2" />
              Free Trial Session
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
