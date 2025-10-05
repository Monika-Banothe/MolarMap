import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  UserCheck,
  Calendar,
  Star,
  Shield,
  TrendingUp,
  Zap,
  Bell,
  Lock,
  Smartphone,
  Globe,
  CheckCircle2,
  ArrowRight,
  Users,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Product() {
  const coreFeatures = [
    {
      icon: MapPin,
      title: "GPS-Based Matching",
      description: "Our advanced location algorithm connects dental professionals based on proximity, ensuring quick response times and convenient meet-ups.",
      benefits: [
        "Real-time location tracking",
        "Smart radius-based search",
        "Distance and time estimates",
        "Multi-location support",
      ],
    },
    {
      icon: UserCheck,
      title: "Verified Professional Profiles",
      description: "Every user undergoes a rigorous verification process to ensure authenticity and maintain platform integrity.",
      benefits: [
        "License verification",
        "Education credentials check",
        "Experience validation",
        "Background screening",
      ],
    },
    {
      icon: Calendar,
      title: "Instant Booking System",
      description: "Book consultations, internships, or collaboration opportunities in real-time with our smart scheduling engine.",
      benefits: [
        "Real-time availability",
        "Automated reminders",
        "Calendar integration",
        "Flexible rescheduling",
      ],
    },
    {
      icon: Star,
      title: "Transparent Rating System",
      description: "Build and maintain your professional reputation with our comprehensive rating and review system.",
      benefits: [
        "Detailed performance metrics",
        "Verified reviews only",
        "Response rate tracking",
        "Quality score algorithm",
      ],
    },
    {
      icon: MessageSquare,
      title: "Secure Messaging",
      description: "Communicate safely with end-to-end encryption for all professional conversations and patient discussions.",
      benefits: [
        "HIPAA-compliant messaging",
        "File sharing capability",
        "Voice and video calls",
        "Message history archive",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track your professional growth with comprehensive analytics and insights about your network activity.",
      benefits: [
        "Connection analytics",
        "Booking trends",
        "Revenue tracking",
        "Performance insights",
      ],
    },
  ];

  const platformBenefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Find and connect with professionals in under 2 minutes on average.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get instant alerts for opportunities matching your preferences and location.",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level encryption and HIPAA compliance for all your data.",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Beautiful native apps for iOS and Android with offline capabilities.",
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Available in 12+ languages to serve dental professionals worldwide.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of professionals in a thriving dental network.",
    },
  ];

  const faqs = [
    {
      question: "How does MolarMap verify dental professionals?",
      answer: "We verify all professionals through a multi-step process including license verification, education credential checks, and background screening. Each profile displays a verification badge once approved.",
    },
    {
      question: "Is my patient data secure on MolarMap?",
      answer: "Absolutely. MolarMap is HIPAA compliant and uses end-to-end encryption for all communications. We employ bank-level security measures and never share your data with third parties.",
    },
    {
      question: "What's the difference between clinic owners, consultants, and interns?",
      answer: "Clinic owners post requirements and book consultants. Consultants offer their expertise and accept bookings. Interns search for learning opportunities and apply to clinics. Each user type has a tailored experience.",
    },
    {
      question: "How accurate is the GPS-based matching?",
      answer: "Our location algorithm is accurate within 50 meters and updates in real-time. You can set your preferred search radius and filter results based on distance and estimated travel time.",
    },
    {
      question: "Can I use MolarMap on multiple devices?",
      answer: "Yes! Your account syncs across all devices. Use the web app on desktop, tablet apps for in-clinic work, and mobile apps when on the go.",
    },
    {
      question: "What happens if I need to cancel a booking?",
      answer: "You can cancel or reschedule bookings through the app. Cancellation policies are set by individual consultants. The platform tracks cancellation rates to maintain accountability.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-primary/5 via-chart-2/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge className="mb-2" data-testid="badge-product">Product Features</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Everything You Need to{" "}
              <span className="text-primary">Grow Your Network</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              MolarMap combines cutting-edge technology with intuitive design to create the ultimate platform for dental professionals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-chart-3 text-white hover:bg-chart-3 border border-chart-3"
                data-testid="button-product-demo"
              >
                <Link href="/contact">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Core Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful tools designed to streamline your professional workflow and maximize your impact.
            </p>
          </div>

          <div className="space-y-12">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-core-feature-${index}`}>
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={`p-8 lg:p-12 space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <feature.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                      <div className="space-y-3 pt-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-chart-4 flex-shrink-0" />
                            <span className="text-sm text-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`bg-gradient-to-br from-primary/5 to-chart-2/5 p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div className="h-64 w-64 rounded-2xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                        <feature.icon className="h-32 w-32 text-white" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Platform Benefits
            </h2>
            <p className="text-lg text-muted-foreground">
              Built with the latest technology to deliver the best experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformBenefits.map((benefit, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-benefit-${index}`}>
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-chart-2/10 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-chart-2" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6 lg:sticky lg:top-32">
              <Badge className="mb-2" data-testid="badge-security">Security & Compliance</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Your Trust is Our Priority
              </h2>
              <p className="text-lg text-muted-foreground">
                MolarMap adheres to the highest industry standards for healthcare data protection and professional verification.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-chart-4/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-chart-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">HIPAA Compliant</h3>
                    <p className="text-sm text-muted-foreground">
                      Full compliance with healthcare privacy regulations for all patient-related communications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-chart-4/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-5 w-5 text-chart-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">End-to-End Encryption</h3>
                    <p className="text-sm text-muted-foreground">
                      All messages, files, and calls are encrypted using military-grade security protocols.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-chart-4/10 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="h-5 w-5 text-chart-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Verified Professionals Only</h3>
                    <p className="text-sm text-muted-foreground">
                      Multi-step verification ensures you're always connecting with legitimate dental professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline" data-testid={`accordion-faq-${index}`}>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-chart-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Start Building Your Network Today
          </h2>
          <p className="text-lg lg:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join the future of dental networking. Connect with the right professionals at the right time, every time.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-base px-8"
            data-testid="button-product-cta"
          >
            <Link href="/contact">
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
