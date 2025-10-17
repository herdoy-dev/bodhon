// components/impact-section.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Book, Heart, TrendingUp } from "lucide-react";

const impacts = [
  {
    icon: Users,
    value: "85%",
    description: "Youth actively participating in our programs",
  },
  {
    icon: Book,
    value: "200+",
    description: "Students using library regularly",
  },
  {
    icon: Award,
    value: "50+",
    description: "Skills training sessions conducted",
  },
  {
    icon: Heart,
    value: "100%",
    description: "Community satisfaction rate",
  },
  {
    icon: TrendingUp,
    value: "60%",
    description: "Improvement in digital literacy",
  },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our
            <span className="text-secondary ms-2">Impact</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Measurable results that demonstrate our commitment to community
            transformation
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <Card
              key={index}
              className="text-center bg-card shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <impact.icon className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {impact.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {impact.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card shadow-xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Success Story: Rohan's Journey
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Before joining Bodhon's Technical program, I had never used a
                  computer. Today, I work as a data entry operator and support
                  my family. Bodhon didn't just teach me skills; it transformed
                  my life."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full"></div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Rohan Kumar
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Bodhon Technical Program Alumni
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card/70 flex items-center justify-center p-8">
                <img
                  src="https://images.unsplash.com/photo-1529066516367-36973222c957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Success Story"
                  className="rounded-lg shadow-md w-full max-w-sm"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
