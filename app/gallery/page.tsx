"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  X,
  Play,
  Calendar,
  Users,
  MapPin,
  Heart,
  Award,
  BookOpen,
  Dumbbell,
  Laptop,
  Palette,
  Languages,
} from "lucide-react";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All Activities", icon: Heart },
    { id: "sports", name: "Sports", icon: Dumbbell },
    { id: "technical", name: "Technical", icon: Laptop },
    { id: "crafts", name: "Crafts", icon: Palette },
    { id: "language", name: "Language Club", icon: Languages },
    { id: "library", name: "Library", icon: BookOpen },
    { id: "events", name: "Special Events", icon: Award },
    { id: "community", name: "Community", icon: Users },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Annual Sports Tournament 2024",
      category: "sports",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "image",
      date: "15 Nov 2024",
      participants: "200+ Students",
      location: "Village Sports Ground",
      description:
        "Our biggest sports event of the year featuring cricket, football, and athletics competitions.",
    },
    {
      id: 2,
      title: "Computer Literacy Workshop",
      category: "technical",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "image",
      date: "10 Nov 2024",
      participants: "45 Students",
      location: "Computer Lab",
      description:
        "Basic computer skills training for village youth to bridge the digital divide.",
    },
    {
      id: 3,
      title: "Traditional Crafts Exhibition",
      category: "crafts",
      image:
        "https://images.unsplash.com/photo-1560393464-5c3a73b936c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "image",
      date: "5 Nov 2024",
      participants: "30 Artisans",
      location: "Crafts Center",
      description:
        "Showcasing beautiful handmade products created by our crafts program participants.",
    },
    {
      id: 4,
      title: "English Speaking Competition",
      category: "language",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "image",
      date: "2 Nov 2024",
      participants: "60 Students",
      location: "Library Hall",
      description:
        "Students showcasing their English communication skills in various competitions.",
    },
    {
      id: 5,
      title: "Library Reading Session",
      category: "library",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "image",
      date: "28 Oct 2024",
      participants: "35 Readers",
      location: "Bodhon Library",
      description:
        "Weekly reading session where children explore new books and share stories.",
    },
    {
      id: 6,
      title: "Community Clean-up Drive",
      category: "community",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "image",
      date: "25 Oct 2024",
      participants: "80 Volunteers",
      location: "Village Areas",
      description:
        "Youth volunteers taking initiative to keep our village clean and green.",
    },
    {
      id: 7,
      title: "15th Anniversary Celebration",
      category: "events",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "image",
      date: "15 Oct 2024",
      participants: "300+ Community",
      location: "Bodhon Campus",
      description:
        "Celebrating 15 years of Bodhon with cultural programs and success stories.",
    },
    {
      id: 8,
      title: "Cricket Training Session",
      category: "sports",
      image:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "image",
      date: "20 Oct 2024",
      participants: "40 Players",
      location: "Sports Ground",
      description:
        "Regular cricket practice sessions under experienced coaches.",
    },
    {
      id: 9,
      title: "Digital Skills Workshop",
      category: "technical",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "image",
      date: "18 Oct 2024",
      participants: "25 Students",
      location: "Computer Lab",
      description:
        "Advanced digital skills training including programming basics.",
    },
    {
      id: 10,
      title: "Pottery Workshop",
      category: "crafts",
      image:
        "https://images.unsplash.com/photo-1577968897966-3d4325b3b3a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "image",
      date: "15 Oct 2024",
      participants: "20 Learners",
      location: "Crafts Center",
      description:
        "Traditional pottery making workshop preserving our cultural heritage.",
    },
    {
      id: 11,
      title: "Public Speaking Session",
      category: "language",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "image",
      date: "12 Oct 2024",
      participants: "35 Students",
      location: "Activity Hall",
      description:
        "Building confidence through public speaking and presentation skills.",
    },
    {
      id: 12,
      title: "Book Donation Drive",
      category: "library",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "image",
      date: "10 Oct 2024",
      participants: "Whole Community",
      location: "Library Entrance",
      description:
        "Community members donating books to expand our library collection.",
    },
    {
      id: 13,
      title: "Bodhon Journey Video",
      category: "events",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "video",
      date: "8 Oct 2024",
      participants: "Documentary",
      location: "Various Locations",
      description:
        "A documentary showcasing 15 years of Bodhon journey and impact.",
    },
    {
      id: 14,
      title: "Yoga and Meditation",
      category: "sports",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "image",
      date: "5 Oct 2024",
      participants: "50 Participants",
      location: "Morning Ground",
      description:
        "Mental health and wellness sessions through yoga and meditation.",
    },
    {
      id: 15,
      title: "Career Guidance Session",
      category: "technical",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      type: "image",
      date: "3 Oct 2024",
      participants: "55 Students",
      location: "Conference Room",
      description:
        "Career guidance and counseling for higher education and job opportunities.",
    },
  ];

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredItems = galleryItems.filter((item) =>
    ["1", "7", "13"].includes(item.id.toString())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-card to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-serif">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A visual journey through Bodhon's activities, events, and the
              smiles we've created over 15 years of community service.
            </p>
            <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search photos and events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-32 bg-card">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      <category.icon className="w-4 h-4 inline mr-2" />
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Featured <span className="text-accent">Moments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Highlighting our most memorable events and success stories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredItems.map((item) => (
              <Card
                key={item.id}
                className="border-border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer bg-card"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-16 h-16 bg-background/90 rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-primary fill-current" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {
                          categories.find((cat) => cat.id === item.category)
                            ?.name
                        }
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {item.participants}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Gallery Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif">
                All Photos & Events
              </h2>
              <p className="text-muted-foreground mt-2">
                {filteredItems.length} items found
                {selectedCategory !== "all" &&
                  ` in ${
                    categories.find((cat) => cat.id === selectedCategory)?.name
                  }`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            {(selectedCategory !== "all" || searchQuery) && (
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Clear Filters
              </Button>
            )}
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No results found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
              >
                Show All Photos
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="border-border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer bg-card"
                  onClick={() => setSelectedImage(item.id)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.type === "video" && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-12 h-12 bg-background/90 rounded-full flex items-center justify-center">
                            <Play className="w-6 h-6 text-primary fill-current" />
                          </div>
                        </div>
                      )}
                      <div className="absolute top-2 left-2">
                        <div className="bg-background/90 backdrop-blur-sm text-foreground px-2 py-1 rounded text-xs font-medium">
                          {
                            categories.find((cat) => cat.id === item.category)
                              ?.name
                          }
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location.split(" - ")[0]}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Category Statistics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Gallery <span className="text-secondary">Statistics</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Capturing memories across all our programs and activities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {categories
              .filter((cat) => cat.id !== "all")
              .map((category, index) => {
                const count = galleryItems.filter(
                  (item) => item.category === category.id
                ).length;
                return (
                  <Card
                    key={category.id}
                    className="border-border shadow-lg text-center hover:shadow-xl transition-shadow bg-card"
                  >
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <category.icon className="w-8 h-8 text-secondary" />
                      </div>
                      <div className="text-2xl font-bold text-card-foreground mb-2">
                        {count}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {category.name}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Share Your Bodhon Moments
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Have photos or videos from our events? Share them with us to be
            featured in our gallery!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
            >
              Share Photos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background text-background bg-transparent hover:bg-background hover:text-primary"
            >
              Follow on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>

            {galleryItems.find((item) => item.id === selectedImage)?.type ===
            "video" ? (
              <div className="bg-black rounded-lg overflow-hidden">
                <div className="aspect-video w-full bg-muted flex items-center justify-center">
                  <Play className="w-16 h-16 text-white fill-current" />
                </div>
              </div>
            ) : (
              <img
                src={
                  galleryItems.find((item) => item.id === selectedImage)?.image
                }
                alt={
                  galleryItems.find((item) => item.id === selectedImage)?.title
                }
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-xl font-bold mb-2">
                {galleryItems.find((item) => item.id === selectedImage)?.title}
              </h3>
              <p className="text-white/80 mb-3">
                {
                  galleryItems.find((item) => item.id === selectedImage)
                    ?.description
                }
              </p>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {galleryItems.find((item) => item.id === selectedImage)?.date}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {
                    galleryItems.find((item) => item.id === selectedImage)
                      ?.participants
                  }
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {
                    galleryItems.find((item) => item.id === selectedImage)
                      ?.location
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
