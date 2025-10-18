// components/programs-section.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Laptop, Palette, Languages, BookOpen } from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    title: "Bodhon Sporting Club",
    description:
      "Promoting physical health, teamwork, and discipline through various sports activities and fitness programs.",
    image:
      "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Laptop,
    title: "Bodhon Technical",
    description:
      "Providing digital literacy and technical skills to make our youth future-ready for the digital world.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Palette,
    title: "Bodhon Crafts",
    description:
      "Preserving traditional crafts while creating income opportunities through skill-based training.",
    image:
      "https://images.unsplash.com/photo-1560393464-5c3a73b936c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Languages,
    title: "Bodhon Language Club",
    description:
      "Enhancing communication skills and opening up wider educational and professional opportunities.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: BookOpen,
    title: "Bodhon Library",
    description:
      "A growing collection of books to encourage reading, learning, and intellectual growth in our community.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

export default function ProgramsSection() {
  return (
    // 1. Updated section background from gray-50 to theme's background
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* 2. Updated text colors to theme foreground */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our
            {/* 3. Highlight color changed from green-600 to theme's primary */}
            <span className="text-primary">Programs</span>
          </h2>
          {/* 4. Updated paragraph text color */}
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Comprehensive initiatives designed to develop every aspect of our
            youth's potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              // 5. Card background and shadow will now use theme variables
              className="group hover:shadow-xl transition-all duration-300 border shadow-md bg-card rounded-2xl overflow-hidden"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-[calc(var(--radius)-4px)]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    {/* 6. Icon background changed from white to theme card/popover, icon color changed to primary */}
                    <div className="w-12 h-12 bg-popover rounded-lg flex items-center justify-center shadow-lg">
                      <program.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {/* 7. Card Title text color uses theme foreground */}
                <CardTitle className="text-xl text-card-foreground mb-3">
                  {program.title}
                </CardTitle>
                {/* 8. Card Description text color uses muted foreground */}
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {program.description}
                </CardDescription>
                <Button
                  variant="link"
                  // 9. Link button color changed from blue-600 to primary
                  className="px-0 mt-4 text-primary hover:text-primary/90"
                >
                  Learn More →
                </Button>
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
