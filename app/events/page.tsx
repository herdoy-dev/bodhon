"use client";

import { useState } from "react";
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
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Search,
  Filter,
  X,
  Play,
  Image as ImageIcon,
  BookOpen,
  Dumbbell,
  Laptop,
  Palette,
  Languages,
  Award,
  Heart,
} from "lucide-react";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("upcoming");
  const [searchQuery, setSearchQuery] = useState("");

  const eventCategories = [
    { id: "all", name: "All Events", icon: Calendar },
    { id: "sports", name: "Sports", icon: Dumbbell },
    { id: "technical", name: "Technical", icon: Laptop },
    { id: "crafts", name: "Crafts", icon: Palette },
    { id: "language", name: "Language", icon: Languages },
    { id: "library", name: "Library", icon: BookOpen },
    { id: "community", name: "Community", icon: Users },
    { id: "celebration", name: "Celebrations", icon: Award },
  ];

  const events = [
    {
      id: 1,
      title: "Annual Sports Tournament 2024",
      category: "sports",
      description:
        "Our biggest sports event of the year featuring cricket, football, volleyball, and athletics competitions for all age groups.",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "2024-12-15",
      time: "7:00 AM - 6:00 PM",
      location: "Village Sports Ground",
      participants: "200+ Expected",
      status: "upcoming",
      registration: "open",
      type: "tournament",
      highlights: [
        "Inter-village competitions",
        "Trophies and medals",
        "Guest coaches",
        "Food stalls",
      ],
    },
    {
      id: 2,
      title: "Digital Literacy Workshop",
      category: "technical",
      description:
        "Free computer basics workshop covering MS Office, internet usage, and digital safety for beginners.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "2024-12-22",
      time: "10:00 AM - 4:00 PM",
      location: "Bodhon Computer Lab",
      participants: "50 Seats Available",
      status: "upcoming",
      registration: "open",
      type: "workshop",
      highlights: [
        "Hands-on training",
        "Certificate provided",
        "Free materials",
        "Career guidance",
      ],
    },
    {
      id: 3,
      title: "Traditional Crafts Exhibition & Sale",
      category: "crafts",
      description:
        "Showcasing beautiful handmade products created by our crafts program participants. Perfect for holiday shopping!",
      image:
        "https://images.unsplash.com/photo-1560393464-5c3a73b936c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "2024-12-30",
      time: "9:00 AM - 8:00 PM",
      location: "Bodhon Crafts Center",
      participants: "30+ Artisans",
      status: "upcoming",
      registration: "open",
      type: "exhibition",
      highlights: [
        "Live demonstrations",
        "Custom orders",
        "Cultural performances",
        "Food court",
      ],
    },
    {
      id: 4,
      title: "Winter Reading Challenge",
      category: "library",
      description:
        "Encourage reading habits among children with our winter reading challenge. Prizes for top readers!",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "2024-12-01",
      time: "All Day",
      location: "Bodhon Library",
      participants: "All Members",
      status: "ongoing",
      registration: "open",
      type: "challenge",
      highlights: [
        "Book recommendations",
        "Reading tracker",
        "Weekly activities",
        "Grand finale",
      ],
    },
    {
      id: 5,
      title: "English Speaking Competition Finals",
      category: "language",
      description:
        "Final round of our annual English speaking competition. Come support our talented participants!",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "2024-11-28",
      time: "3:00 PM - 6:00 PM",
      location: "Community Hall",
      participants: "20 Finalists",
      status: "past",
      registration: "closed",
      type: "competition",
      highlights: [
        "Speech competition",
        "Debate rounds",
        "Cultural performances",
        "Prize distribution",
      ],
    },
    {
      id: 6,
      title: "Community Clean-up Drive",
      category: "community",
      description:
        "Join hands to keep our village clean and green. All volunteers welcome!",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "2024-11-25",
      time: "6:00 AM - 9:00 AM",
      location: "Various Village Locations",
      participants: "100+ Volunteers",
      status: "past",
      registration: "closed",
      type: "volunteer",
      highlights: [
        "Clean-up kits provided",
        "Refreshments",
        "Community bonding",
        "Awareness campaign",
      ],
    },
    {
      id: 7,
      title: "15th Anniversary Celebration",
      category: "celebration",
      description:
        "Celebrating 15 years of Bodhon with cultural programs, success stories, and community feasts.",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "2024-10-15",
      time: "4:00 PM - 10:00 PM",
      location: "Bodhon Campus",
      participants: "500+ Attendees",
      status: "past",
      registration: "closed",
      type: "celebration",
      highlights: [
        "Cultural performances",
        "Success stories",
        "Award ceremony",
        "Community dinner",
      ],
    },
    {
      id: 8,
      title: "Career Guidance Seminar",
      category: "technical",
      description:
        "Expert guidance on career choices, higher education, and job opportunities for youth.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "2024-11-20",
      time: "2:00 PM - 5:00 PM",
      location: "Conference Room",
      participants: "80 Students",
      status: "past",
      registration: "closed",
      type: "seminar",
      highlights: [
        "Industry experts",
        "One-on-one counseling",
        "Resource materials",
        "Networking",
      ],
    },
    {
      id: 9,
      title: "New Year Cultural Festival",
      category: "celebration",
      description:
        "Welcome the new year with traditional performances, games, and community celebrations.",
      image:
        "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "2024-12-31",
      time: "6:00 PM - 12:30 AM",
      location: "Bodhon Ground",
      participants: "Whole Community",
      status: "upcoming",
      registration: "open",
      type: "festival",
      highlights: [
        "Cultural performances",
        "Traditional games",
        "Food stalls",
        "Midnight countdown",
      ],
    },
    {
      id: 10,
      title: "Youth Leadership Camp",
      category: "community",
      description:
        "3-day residential camp focusing on leadership skills, teamwork, and personal development.",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "2025-01-10",
      time: "3 Days",
      location: "Bodhon Campus",
      participants: "30 Selected Youth",
      status: "upcoming",
      registration: "open",
      type: "camp",
      highlights: [
        "Leadership workshops",
        "Team activities",
        "Guest speakers",
        "Certificate program",
      ],
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || event.status === selectedStatus;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const upcomingEvents = events.filter((event) => event.status === "upcoming");
  const pastEvents = events.filter((event) => event.status === "past");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "ongoing":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "past":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getRegistrationColor = (registration: string) => {
    return registration === "open"
      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      : "bg-destructive/20 text-destructive dark:bg-destructive/30 dark:text-destructive-foreground";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-card to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-serif">
              Our <span className="text-primary">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join us in our exciting events, workshops, and celebrations. From
              sports tournaments to cultural festivals, there's always something
              happening at Bodhon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-40 bg-card">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {eventCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      <category.icon className="w-4 h-4 inline mr-2" />
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-40 bg-card">
                  <Calendar className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                  <SelectItem value="past">Past Events</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Highlight */}
      {upcomingEvents.length > 0 && selectedStatus !== "past" && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
                <span className="text-secondary">Upcoming</span> Events
              </h2>
              <p className="text-xl text-muted-foreground">
                Don't miss these exciting events. Register now!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.slice(0, 3).map((event) => (
                <Card
                  key={event.id}
                  className="border-border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group bg-card"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className={getStatusColor(event.status)}>
                          {event.status.charAt(0).toUpperCase() +
                            event.status.slice(1)}
                        </Badge>
                        <Badge
                          className={getRegistrationColor(event.registration)}
                        >
                          {event.registration === "open"
                            ? "Register Now"
                            : "Closed"}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-medium text-primary">
                          {
                            eventCategories.find(
                              (cat) => cat.id === event.category
                            )?.name
                          }
                        </span>
                      </div>

                      <CardTitle className="text-xl mb-3 line-clamp-2">
                        {event.title}
                      </CardTitle>

                      <CardDescription className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                        {event.description}
                      </CardDescription>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          {event.participants}
                        </div>
                      </div>

                      <Button className="w-full bg-primary hover:bg-primary/90">
                        {event.registration === "open"
                          ? "Register Now"
                          : "View Details"}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Events Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif">
                {selectedStatus === "all"
                  ? "All Events"
                  : selectedStatus === "upcoming"
                  ? "Upcoming Events"
                  : selectedStatus === "ongoing"
                  ? "Ongoing Events"
                  : "Past Events"}
              </h2>
              <p className="text-muted-foreground mt-2">
                {filteredEvents.length} events found
                {selectedCategory !== "all" &&
                  ` in ${
                    eventCategories.find((cat) => cat.id === selectedCategory)
                      ?.name
                  }`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            {(selectedCategory !== "all" ||
              selectedStatus !== "all" ||
              searchQuery) && (
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedStatus("all");
                  setSearchQuery("");
                }}
                className="flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Clear Filters
              </Button>
            )}
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No events found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedStatus("all");
                  setSearchQuery("");
                }}
              >
                Show All Events
              </Button>
            </div>
          ) : (
            <div className="grid gap-6">
              {filteredEvents.map((event) => (
                <Card
                  key={event.id}
                  className="border-border shadow-md hover:shadow-lg transition-shadow overflow-hidden bg-card"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-2 p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge
                          variant="secondary"
                          className="bg-primary/20 text-primary"
                        >
                          {
                            eventCategories.find(
                              (cat) => cat.id === event.category
                            )?.name
                          }
                        </Badge>
                        <Badge className={getStatusColor(event.status)}>
                          {event.status.charAt(0).toUpperCase() +
                            event.status.slice(1)}
                        </Badge>
                        <Badge
                          className={getRegistrationColor(event.registration)}
                        >
                          Registration{" "}
                          {event.registration === "open" ? "Open" : "Closed"}
                        </Badge>
                        <Badge variant="outline">{event.type}</Badge>
                      </div>

                      <CardTitle className="text-2xl mb-3">
                        {event.title}
                      </CardTitle>

                      <CardDescription className="text-muted-foreground mb-4 text-base leading-relaxed">
                        {event.description}
                      </CardDescription>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">
                              {formatDate(event.date)}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span>{event.participants}</span>
                          </div>
                        </div>
                      </div>

                      {event.highlights && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-2">
                            Event Highlights:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {event.highlights.map((highlight, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="bg-secondary/20 text-secondary-foreground"
                              >
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-primary hover:bg-primary/90 flex-1">
                          {event.registration === "open"
                            ? "Register Now"
                            : "View Photos"}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Add to Calendar
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Event Calendar Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Event <span className="text-accent">Calendar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plan ahead and never miss an important event at Bodhon
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-border shadow-lg bg-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif">
                  December 2024 Events
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {upcomingEvents
                    .filter((event) => event.date.startsWith("2024-12"))
                    .map((event) => (
                      <div
                        key={event.id}
                        className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex flex-col items-center justify-center">
                          <span className="text-lg font-bold text-primary">
                            {new Date(event.date).getDate()}
                          </span>
                          <span className="text-xs text-primary">
                            {new Date(event.date).toLocaleDateString("en-US", {
                              month: "short",
                            })}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">
                            {event.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {event.time} • {event.location}
                          </p>
                        </div>
                        <Badge className={getStatusColor(event.status)}>
                          {event.status}
                        </Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Want to Host an Event with Us?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Have an idea for a workshop, tournament, or community event? Partner
            with Bodhon to make it happen!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
            >
              Propose an Event
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background text-background bg-transparent hover:bg-background hover:text-primary"
            >
              Download Calendar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
