import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex items-start pt-20 justify-center bg-card text-foreground mb-16 flex-col">
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
        </div>
      </div>
    </section>
  );
}
