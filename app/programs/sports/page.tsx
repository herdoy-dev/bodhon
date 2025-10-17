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
  Users,
  Calendar,
  Clock,
  MapPin,
  Award,
  Trophy,
  Star,
  ArrowRight,
  Phone,
  MessageCircle,
  Shield,
  Heart,
  Target,
  TrendingUp,
} from "lucide-react";

export default function SportsPage() {
  const sports = [
    {
      name: "Cricket",
      icon: Trophy,
      description:
        "Learn batting, bowling, and fielding techniques with professional coaching",
      image:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Beginner to Advanced",
      ageGroup: "8-25 years",
      schedule: "Mon, Wed, Fri: 6:00 AM - 8:00 AM",
    },
    {
      name: "Football",
      icon: Trophy,
      description: "Develop football skills, teamwork, and strategic play",
      image:
        "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "All Levels",
      ageGroup: "10-22 years",
      schedule: "Tue, Thu, Sat: 4:00 PM - 6:00 PM",
    },
    {
      name: "Volleyball",
      icon: Trophy,
      description: "Master serving, spiking, and blocking techniques",
      image:
        "https://images.unsplash.com/photo-1592656094267-764a45160876?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Beginner to Intermediate",
      ageGroup: "12-30 years",
      schedule: "Mon, Wed, Fri: 4:00 PM - 6:00 PM",
    },
    {
      name: "Athletics",
      icon: Trophy,
      description:
        "Track and field events including running, jumping, and throwing",
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "All Levels",
      ageGroup: "8-35 years",
      schedule: "Daily: 6:00 AM - 8:00 AM",
    },
    {
      name: "Kabaddi",
      icon: Trophy,
      description: "Traditional Indian sport focusing on strength and strategy",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0ea3ff8db41?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Beginner to Advanced",
      ageGroup: "14-28 years",
      schedule: "Tue, Thu, Sat: 6:00 AM - 8:00 AM",
    },
    {
      name: "Basketball",
      icon: Trophy,
      description: "Learn dribbling, shooting, and team coordination",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Beginner",
      ageGroup: "10-20 years",
      schedule: "Sat, Sun: 3:00 PM - 5:00 PM",
    },
  ];

  const coaches = [
    {
      name: "Amit Patel",
      role: "Head Coach - Cricket",
      experience: "8 years",
      specialization: "Batting & Fielding",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      achievements: [
        "State Level Player",
        "NIS Certified",
        "Coached 50+ Students",
      ],
    },
    {
      name: "Rahul Sharma",
      role: "Football Coach",
      experience: "6 years",
      specialization: "Midfield & Strategy",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      achievements: [
        "District Level Player",
        "FIFA Certified",
        "Youth Development Expert",
      ],
    },
    {
      name: "Priya Singh",
      role: "Athletics Coach",
      experience: "10 years",
      specialization: "Sprinting & Long Jump",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      achievements: [
        "National Level Athlete",
        "Sports Authority Certified",
        "10+ Years Experience",
      ],
    },
  ];

  const achievements = [
    {
      year: "2023",
      event: "District Cricket Tournament",
      achievement: "Runners Up",
    },
    {
      year: "2022",
      event: "Inter-Village Football League",
      achievement: "Champions",
    },
    {
      year: "2022",
      event: "State Level Athletics",
      achievement: "3 Gold Medals",
    },
    {
      year: "2021",
      event: "Youth Kabaddi Championship",
      achievement: "Semi-Finalists",
    },
    {
      year: "2020",
      event: "Community Sports Festival",
      achievement: "Best Team Spirit",
    },
    { year: "2019", event: "District Volleyball", achievement: "Third Place" },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Physical Health",
      description:
        "Improve cardiovascular health, strength, and overall fitness",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Learn cooperation, communication, and team building skills",
    },
    {
      icon: Shield,
      title: "Discipline",
      description:
        "Develop self-control, punctuality, and regular practice habits",
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Learn to set and achieve personal and team objectives",
    },
    {
      icon: TrendingUp,
      title: "Confidence",
      description:
        "Build self-esteem through skill development and achievements",
    },
    {
      icon: Award,
      title: "Competition",
      description: "Healthy competitive spirit and sportsmanship values",
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
                <Dumbbell className="w-4 h-4 mr-2" />
                Most Popular Program
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-serif">
                Bodhon <span className="text-primary">Sporting Club</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Building champions on and off the field. Our sporting club
                offers professional coaching, state-of-the-art facilities, and a
                supportive environment for youth to excel in sports while
                developing essential life skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Join Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to Coach
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Bodhon Sporting Club"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-6 border border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-muted-foreground">Active Members</div>
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
              Why Choose <span className="text-accent">Sports?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sports development goes beyond physical fitness - it builds
              character and life skills
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

      {/* Sports Offered Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Sports <span className="text-secondary">We Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional coaching and facilities for various sports
              disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sports.map((sport, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group bg-card"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={sport.image}
                      alt={sport.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-secondary hover:bg-secondary/90">
                        {sport.level}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <sport.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{sport.name}</CardTitle>
                        <CardDescription>{sport.ageGroup}</CardDescription>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {sport.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {sport.schedule}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {sport.ageGroup}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      Learn More
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
              Meet Our <span className="text-primary">Coaches</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced and certified coaches dedicated to your sports
              development
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
                    <p className="text-primary font-medium mb-2">
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
                      Contact Coach
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule & Facilities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Training Schedule */}
            <Card className="border-border shadow-lg bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Weekly Training Schedule
                </CardTitle>
                <CardDescription>
                  Regular training sessions for all sports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      time: "6:00 AM - 8:00 AM",
                      activities: ["Cricket", "Athletics", "Kabaddi"],
                    },
                    {
                      time: "4:00 PM - 6:00 PM",
                      activities: ["Football", "Volleyball", "Basketball"],
                    },
                    {
                      time: "6:00 PM - 7:00 PM",
                      activities: ["Fitness Training", "Yoga"],
                    },
                  ].map((session, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 border border-border rounded-lg bg-background"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {session.time}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {session.activities.map((activity, idx) => (
                            <Badge key={idx} variant="secondary">
                              {activity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card className="border-border shadow-lg bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  Our Facilities
                </CardTitle>
                <CardDescription>
                  Well-maintained sports infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      facility: "Cricket Ground",
                      status: "Full-size pitch with nets",
                    },
                    {
                      facility: "Football Field",
                      status: "Grass turf with goal posts",
                    },
                    {
                      facility: "Volleyball Court",
                      status: "2 professional courts",
                    },
                    {
                      facility: "Athletics Track",
                      status: "200m running track",
                    },
                    {
                      facility: "Basketball Court",
                      status: "Full court with hoops",
                    },
                    {
                      facility: "Equipment Room",
                      status: "Sports gear available",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border border-border rounded-lg bg-background"
                    >
                      <div>
                        <div className="font-medium text-foreground">
                          {item.facility}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {item.status}
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-secondary/20 text-secondary-foreground"
                      >
                        Available
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Our <span className="text-chart-4">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Celebrating success and milestones in sports competitions
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
                  <Badge className="bg-secondary/20 text-secondary-foreground hover:bg-secondary/20">
                    {achievement.achievement}
                  </Badge>
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
            Ready to Join the Sporting Club?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Start your sports journey today. Professional coaching, excellent
            facilities, and a supportive community await you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
            >
              Register Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background bg-transparent text-background hover:bg-background hover:text-primary"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background bg-transparent text-background hover:bg-background hover:text-primary"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
