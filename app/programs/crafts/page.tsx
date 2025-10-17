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
  Palette,
  Users,
  Calendar,
  Clock,
  MapPin,
  Award,
  ShoppingBag,
  Star,
  ArrowRight,
  Phone,
  MessageCircle,
  Heart,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Gem,
  Scissors,
} from "lucide-react";

export default function CraftsPage() {
  const crafts = [
    {
      name: "Pottery & Clay Work",
      icon: Palette,
      description:
        "Traditional pottery techniques using local clay and modern designs",
      image:
        "https://images.unsplash.com/photo-1577968897966-3d4325b3b3a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Beginner to Advanced",
      duration: "8 Weeks",
      schedule: "Tue, Thu: 2:00 PM - 5:00 PM",
      materials: ["Clay", "Pottery Wheel", "Kiln", "Glazes"],
      income: "₹2000-5000/month",
      products: ["Pots", "Vases", "Sculptures", "Tableware"],
    },
    {
      name: "Textile & Embroidery",
      icon: Scissors,
      description:
        "Traditional embroidery, weaving, and fabric painting techniques",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "All Levels",
      duration: "6 Weeks",
      schedule: "Mon, Wed, Fri: 10:00 AM - 1:00 PM",
      materials: ["Fabric", "Threads", "Needles", "Looms"],
      income: "₹3000-8000/month",
      products: ["Embroidered Clothes", "Wall Hangings", "Bags", "Accessories"],
    },
    {
      name: "Wood Carving",
      icon: Gem,
      description: "Artistic wood carving using traditional tools and patterns",
      image:
        "https://images.unsplash.com/photo-1608500218866-01c8eecf3b94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Intermediate",
      duration: "10 Weeks",
      schedule: "Sat, Sun: 9:00 AM - 12:00 PM",
      materials: ["Wood Blocks", "Carving Tools", "Sandpaper", "Varnish"],
      income: "₹5000-15000/month",
      products: ["Sculptures", "Furniture", "Decor Items", "Jewelry"],
    },
    {
      name: "Bamboo Craft",
      icon: Sparkles,
      description:
        "Sustainable bamboo products using traditional weaving techniques",
      image:
        "https://images.unsplash.com/photo-1580483046931-aaba29b81601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Beginner",
      duration: "6 Weeks",
      schedule: "Tue, Thu: 9:00 AM - 12:00 PM",
      materials: ["Bamboo", "Cutting Tools", "Binding Material", "Finishes"],
      income: "₹2000-6000/month",
      products: ["Baskets", "Lamps", "Furniture", "Home Decor"],
    },
    {
      name: "Jute Products",
      icon: ShoppingBag,
      description: "Eco-friendly jute products with contemporary designs",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Beginner",
      duration: "4 Weeks",
      schedule: "Mon, Wed: 3:00 PM - 6:00 PM",
      materials: ["Jute Fabric", "Dyes", "Sewing Tools", "Accessories"],
      income: "₹1500-4000/month",
      products: ["Bags", "Pouches", "Coasters", "Gift Items"],
    },
    {
      name: "Paper Mache",
      icon: Heart,
      description: "Colorful paper mache art using recycled materials",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      level: "Beginner",
      duration: "5 Weeks",
      schedule: "Fri, Sat: 2:00 PM - 5:00 PM",
      materials: ["Paper", "Glue", "Paints", "Varnish"],
      income: "₹1000-3000/month",
      products: ["Masks", "Decor Items", "Toys", "Festival Items"],
    },
  ];

  const masterArtisans = [
    {
      name: "Sunita Devi",
      role: "Master Potter",
      experience: "25 years in Pottery",
      specialization: "Traditional Terracotta",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      achievements: [
        "National Award Winner",
        "Taught 100+ Students",
        "Exhibited Internationally",
      ],
    },
    {
      name: "Ramesh Patel",
      role: "Wood Carving Expert",
      experience: "30 years in Woodwork",
      specialization: "Relief Carving",
      image:
        "https://images.unsplash.com/photo-1584308972278-6d42f70bfa2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      achievements: [
        "Master Craftsman",
        "Preservation Award",
        "Mentor to 50+ Artisans",
      ],
    },
    {
      name: "Laxmi Sharma",
      role: "Embroidery Specialist",
      experience: "20 years in Textiles",
      specialization: "Traditional Embroidery",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      achievements: [
        "State Award Winner",
        "Design Innovator",
        "Women Empowerment Leader",
      ],
    },
  ];

  const successStories = [
    {
      name: "Meena Kumari",
      craft: "Embroidery",
      outcome: "Started own boutique",
      story:
        "From learning basic stitches to running a successful boutique with 5 employees.",
      earnings: "₹15,000/month",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Rajesh Kumar",
      craft: "Wood Carving",
      outcome: "Export business started",
      story:
        "Now exports handmade wooden items to 3 countries through online platforms.",
      earnings: "₹25,000/month",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Anita Singh",
      craft: "Pottery",
      outcome: "Cooperative leader",
      story:
        "Leads a women cooperative of 15 potters supplying to major stores.",
      earnings: "₹12,000/month",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Income Generation",
      description:
        "Create sustainable livelihood through skilled craftsmanship",
    },
    {
      icon: Heart,
      title: "Cultural Preservation",
      description: "Keep traditional art forms alive for future generations",
    },
    {
      icon: Sparkles,
      title: "Creative Expression",
      description: "Express yourself through beautiful handmade creations",
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "Special focus on empowering women through craft skills",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Get recognition for your artistic talents and skills",
    },
    {
      icon: ShoppingBag,
      title: "Market Access",
      description: "Connect with markets through our sales channels",
    },
  ];

  const salesChannels = [
    {
      name: "Local Exhibitions",
      description: "Regular craft melas and exhibitions in nearby cities",
      frequency: "Monthly",
      earnings: "₹2000-10000 per event",
    },
    {
      name: "Online Store",
      description: "Dedicated e-commerce platform for artisan products",
      frequency: "24/7",
      earnings: "₹5000-20000 monthly",
    },
    {
      name: "Corporate Orders",
      description: "Bulk orders from companies for gifts and promotions",
      frequency: "Quarterly",
      earnings: "₹10000-50000 per order",
    },
    {
      name: "Export Opportunities",
      description: "International markets through partner organizations",
      frequency: "Seasonal",
      earnings: "₹20000-100000 per shipment",
    },
  ];

  const upcomingWorkshops = [
    {
      title: "Advanced Pottery Techniques",
      date: "15 Jan 2024",
      instructor: "Sunita Devi",
      seats: "12 Available",
      fee: "Free for Members",
    },
    {
      title: "Embroidery Design Workshop",
      date: "22 Jan 2024",
      instructor: "Laxmi Sharma",
      seats: "15 Available",
      fee: "Free for Members",
    },
    {
      title: "Wood Carving for Beginners",
      date: "29 Jan 2024",
      instructor: "Ramesh Patel",
      seats: "10 Available",
      fee: "Free for Members",
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
                <Palette className="w-4 h-4 mr-2" />
                Preserving Traditions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-serif">
                Bodhon <span className="text-primary">Crafts</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Where tradition meets innovation. Our crafts program preserves
                ancient artisan skills while creating sustainable income
                opportunities. Learn from master artisans and turn your
                creativity into livelihood.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Join Craft Program
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  Visit Workshop
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560393464-5c3a73b936c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Bodhon Crafts Program"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-6 border border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">45+</div>
                  <div className="text-muted-foreground">Active Artisans</div>
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
              Why Learn <span className="text-accent">Traditional Crafts?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More than just skills - it's about preserving heritage and
              creating livelihoods
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

      {/* Crafts Offered Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Crafts <span className="text-secondary">We Teach</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Traditional skills with modern market relevance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crafts.map((craft, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group bg-card"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={craft.image}
                      alt={craft.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-secondary hover:bg-secondary/90">
                        {craft.level}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <craft.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{craft.name}</CardTitle>
                        <CardDescription>{craft.duration}</CardDescription>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {craft.description}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {craft.schedule}
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm text-card-foreground mb-2">
                          Materials Provided:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {craft.materials.map((material, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs"
                            >
                              {material}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <h4 className="font-semibold text-card-foreground mb-1">
                            Income Potential:
                          </h4>
                          <div className="text-chart-2 font-medium">
                            {craft.income}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-card-foreground mb-1">
                            Products:
                          </h4>
                          <div className="text-secondary text-xs">
                            {craft.products.slice(0, 2).join(", ")}...
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Learn This Craft
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Master Artisans Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Learn from <span className="text-primary">Master Artisans</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generations of expertise passed down to new learners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {masterArtisans.map((artisan, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-shadow text-center overflow-hidden bg-card"
              >
                <CardContent className="p-0">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-1">
                      {artisan.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {artisan.role}
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {artisan.experience}
                      </span>
                      <span>{artisan.specialization}</span>
                    </div>
                    <div className="space-y-1 mb-4">
                      {artisan.achievements.map((achievement, idx) => (
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
                      Learn from Master
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sales & Marketing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Sales & <span className="text-chart-2">Marketing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We help artisans reach customers and earn fair prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {salesChannels.map((channel, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-shadow bg-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-chart-2/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="w-8 h-8 text-chart-2" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {channel.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {channel.description}
                  </p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Frequency:</span>
                      <span className="font-medium">{channel.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Earnings:</span>
                      <span className="font-medium text-chart-2">
                        {channel.earnings}
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Artisan <span className="text-secondary">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From learning to earning - real transformations through crafts
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
                        {story.craft} Artisan
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
                    <span className="text-muted-foreground">
                      Monthly Earnings:
                    </span>
                    <span className="font-bold text-chart-2">
                      {story.earnings}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Schedule */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="border-border shadow-lg max-w-4xl mx-auto bg-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif">
                Upcoming Workshops
              </CardTitle>
              <CardDescription>
                Specialized workshops to enhance your craft skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingWorkshops.map((workshop, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-border rounded-lg bg-background hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">
                        {workshop.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {workshop.date}
                        </span>
                        <span>By: {workshop.instructor}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">{workshop.seats}</Badge>
                      <Badge className="bg-chart-2/20 text-chart-2-foreground">
                        {workshop.fee}
                      </Badge>
                      <Button size="sm">Register</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Start Your Craft Journey Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Preserve traditions while creating sustainable income. Join our
            community of artisans and turn your creativity into livelihood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
            >
              Join Craft Program
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background bg-transparent text-background hover:bg-background hover:text-primary"
            >
              <Phone className="w-5 h-5 mr-2" />
              Visit Workshop
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
