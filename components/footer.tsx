// components/footer.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // 1. Footer background uses the theme's background color (dark mode equivalent)
    <footer className="bg-background text-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                BODHON
              </h3>
              {/* 2. Secondary text uses muted-foreground */}
              <p className="text-muted-foreground leading-relaxed">
                Empowering village youth since 2008 through sports, education,
                and community development programs.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  // 3. Input styles use theme's input/border colors
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
                {/* 4. Button uses primary color */}
                <Button className="bg-primary hover:bg-primary/90">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {/* 5. Social icons retain brand colors on hover for recognition, border uses theme border */}
                <Button
                  variant="outline"
                  size="icon"
                  className="border-border bg-transparent hover:bg-blue-600 hover:border-blue-600 text-foreground hover:text-white"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-border bg-transparent hover:bg-blue-400 hover:border-blue-400 text-foreground hover:text-white"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-border bg-transparent hover:bg-pink-600 hover:border-pink-600 text-foreground hover:text-white"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-border bg-transparent hover:bg-red-600 hover:border-red-600 text-foreground hover:text-white"
                >
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {/* 6. Link colors use muted-foreground and hover on foreground */}
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  All Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/volunteer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs Links (Same link styling as Quick Links) */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/programs/sports"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bodhon Sporting Club
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/technical"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bodhon Technical
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/crafts"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bodhon Crafts
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/language"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bodhon Language Club
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/library"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bodhon Library
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/events"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Upcoming Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              {/* 7. Contact icons use primary/secondary/chart-3 for accents */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                    Kathulia, Swastipur
                    <br />
                    Kushtia - 7002
                    <br />
                    Khulna, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  +8801715388066
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-chart-3 flex-shrink-0" />
                <a
                  href="mailto:contact@bodhon.org"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  contactbodhon@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      {/* 8. Divider uses theme border color */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* 9. Copyright text uses muted-foreground */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>&copy; {currentYear} Bodhon. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </div>

            {/* 10. Policy links use muted-foreground and hover on foreground */}
            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/code-of-conduct"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Code of Conduct
              </Link>
              <Link
                href="/sitemap"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-6 pt-6 border-t border-border">
            <p className="text-muted-foreground text-sm">
              Bodhon is a registered non-profit organization under Section 8
              Company Act, 2013. All donations are eligible for tax exemption
              under 80G.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
