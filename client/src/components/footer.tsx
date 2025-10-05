import { Link } from "wouter";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-lg text-foreground">MolarMap</div>
                <div className="text-xs text-muted-foreground">by The Molar Company</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Connecting dental professionals in real-time based on location, proximity, and convenience.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="hover-elevate active-elevate-2 p-2 rounded-md bg-muted"
                aria-label="LinkedIn"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="hover-elevate active-elevate-2 p-2 rounded-md bg-muted"
                aria-label="Twitter"
                data-testid="link-social-twitter"
              >
                <Twitter className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="hover-elevate active-elevate-2 p-2 rounded-md bg-muted"
                aria-label="Facebook"
                data-testid="link-social-facebook"
              >
                <Facebook className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/product" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-features">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-how-it-works">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">
                  About Us
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-careers">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  123 Dental Street, Healthcare District
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@molarmap.com" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-email">
                  hello@molarmap.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-phone">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} The Molar Company. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-privacy">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-terms">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
