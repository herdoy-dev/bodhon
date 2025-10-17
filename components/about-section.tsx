// components/about-section.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Target, Eye } from "lucide-react";

export default function AboutSection() {
  return (
    // 1. Updated section background from white to theme's card/background
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            {/* 2. Text colors use theme foreground */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About
              {/* 3. Highlight color changed from blue-600 to theme's primary */}
              <span className="text-primary">Bodhon</span>
            </h2>
            {/* 4. Paragraph text color uses muted-foreground */}
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Since our establishment in 2008, Bodhon has been at the forefront
              of youth development and community transformation in our village.
              We believe in nurturing both mental and physical well-being to
              create empowered, self-reliant individuals.
            </p>

            <div className="space-y-6">
              {/* Feature 1: Primary Palette */}
              <div className="flex items-start gap-4">
                {/* 5. Icon background uses primary/10, icon color uses primary */}
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  {/* 6. Text colors use theme foreground and muted-foreground */}
                  <h3 className="font-semibold text-foreground mb-2">
                    15 Years of Service
                  </h3>
                  <p className="text-muted-foreground">
                    Over a decade and a half of dedicated service to our
                    community, continuously adapting to meet evolving needs.
                  </p>
                </div>
              </div>

              {/* Feature 2: Secondary Palette */}
              <div className="flex items-start gap-4">
                {/* 7. Icon background uses secondary/10, icon color uses secondary */}
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To empower village youth through comprehensive development
                    programs that enhance both mental capabilities and physical
                    health.
                  </p>
                </div>
              </div>

              {/* Feature 3: Accent/Chart Palette (using Chart-3 for contrast) */}
              <div className="flex items-start gap-4">
                {/* 8. Icon background uses chart-3/10, icon color uses chart-3 */}
                <div className="flex-shrink-0 w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-chart-3" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    A self-reliant, skilled, and healthy youth society that
                    actively contributes to sustainable community development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* 9. Cards use theme card/shadow styles automatically */}
            <Card className="overflow-hidden bg-card shadow-md">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Community Gathering"
                  className="w-full h-48 object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden mt-8 bg-card shadow-md">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Youth Activities"
                  className="w-full h-48 object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden bg-card shadow-md">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Learning Session"
                  className="w-full h-48 object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden mt-8 bg-card shadow-md">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Sports Activity"
                  className="w-full h-48 object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
