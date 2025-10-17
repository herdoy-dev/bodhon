// components/cta-section.tsx
import { Button } from "@/components/ui/button";
import { HeartHandshake, Users, BookOpen, Mail } from "lucide-react";

export default function CTASection() {
  return (
    // 1. Changed section background from blue/green gradient to primary/secondary gradient
    // This creates a warm, vibrant CTA that contrasts with the main backgrounds.
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          {/* 2. Text color changed from blue-100 to primary-foreground/80 for contrast */}
          <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            Join Bodhon today and be part of the movement that's transforming
            our village, one youth at a time. Together, we can build a brighter
            future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* 3. Primary Button: Inverted style for high contrast. 
                Background is primary-foreground (white), text is the theme's dark foreground. */}
            <Button
              size="lg"
              className="bg-primary-foreground text-foreground hover:bg-card px-8 py-3 text-lg font-semibold"
            >
              <Users className="mr-2 w-5 h-5" />
              Join as Volunteer
            </Button>

            {/* 4. Outline Buttons: Adjusted to use theme colors for border and hover state. 
                Text remains white (primary-foreground) for contrast. */}
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg font-semibold"
            >
              <HeartHandshake className="mr-2 w-5 h-5" />
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg font-semibold"
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Visit Library
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* 5. Contact info circles use primary-foreground/20 (white/20) for background */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Get in Touch</h3>
              <p className="text-primary-foreground/80">contact@bodhon.org</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-primary-foreground/80">
                Main Street, Our Village
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
              <p className="text-primary-foreground/80">@BodhonCommunity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
