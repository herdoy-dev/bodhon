// components/hero-section.tsx
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Users, BookOpen, Heart } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-card text-foreground">
      <div className="absolute inset-0 bg-grid-border/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4 text-primary" />
            Empowering Youth Since 2008
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Building a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Better Society
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bodhon is dedicated to transforming our youth through sports,
            education, and community development. Join us in creating a brighter
            future for our society.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg">
              Join Our Movement
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Link
              href="/about"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Learn More
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/30 rounded-full mx-auto mb-2">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-white">Youth Members</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/30 rounded-full mx-auto mb-2">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-sm text-white">Programs</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/30 rounded-full mx-auto mb-2">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-white">2000+</div>
              <div className="text-sm text-white">Lives Impacted</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/30 rounded-full mx-auto mb-2">
                <BookOpen className="w-6 h-6 text-chart-4" />
              </div>
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-sm text-white">Books in Library</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
        <div className="bg-gradient-to-t from-card via-card/80 to-transparent h-32" />
        <img
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          alt="Community Youth Activities"
          className="w-full h-64 md:h-80 object-cover rounded-t-3xl shadow-2xl"
        />
      </div>
    </section>
  );
}
