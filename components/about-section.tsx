import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Target, Eye } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About
              <span className="text-primary">Bodhon</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Since our establishment in 2008, Bodhon has been at the forefront
              of youth development and community transformation in our village.
              We believe in nurturing both mental and physical well-being to
              create empowered, self-reliant individuals.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    15 Years of Service
                  </h3>
                  <p className="text-muted-foreground">
                    Over a decade and a half of dedicated service to our
                    community, continuously adapting to meet evolving needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
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

              <div className="flex items-start gap-4">
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

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden shadow-md rounded-2xl">
              <img
                src="/about/about1.jpg"
                alt="Community Gathering"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="overflow-hidden shadow-md rounded-2xl">
              <img
                src="/about/about2.jpg"
                alt="Youth Activities"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="overflow-hidden shadow-md rounded-2xl">
              <img
                src="/about/about3.jpg"
                alt="Learning Session"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="overflow-hidden shadow-md rounded-2xl">
              <img
                src="/about/about4.jpg"
                alt="Sports Activity"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
