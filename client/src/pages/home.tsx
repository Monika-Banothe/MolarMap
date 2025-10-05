import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  UserCheck,
  Calendar,
  Star,
  Clock,
  Shield,
  TrendingUp,
  Users,
  Building2,
  GraduationCap,
  Stethoscope,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const problems = [
    {
      icon: Building2,
      title: "Inefficient Networking",
      description: "Dentists rely on manual distribution of visiting cards to build connections, which is inefficient and outdated.",
    },
    {
      icon: Clock,
      title: "Instant Access Challenges",
      description: "Clinic owners face difficulty in finding specialists instantly, leading to patient loss and poor service.",
    },
    {
      icon: MapPin,
      title: "Limited Visibility",
      description: "Consultant dentists lack visibility into where their expertise is needed in real time.",
    },
    {
      icon: GraduationCap,
      title: "Internship Gaps",
      description: "Dental students face a lack of structured platforms for internships, missing out on critical learning opportunities.",
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: "GPS Tracking",
      description: "Real-time location-based matching connects the right professionals at the right time.",
      gradient: "from-chart-2 to-chart-2/80",
    },
    {
      icon: UserCheck,
      title: "Verified Profiles",
      description: "Every professional is verified to ensure trust and quality in every connection.",
      gradient: "from-chart-4 to-chart-4/80",
    },
    {
      icon: Calendar,
      title: "Instant Bookings",
      description: "Book consultations and appointments in real-time with just a few taps.",
      gradient: "from-chart-3 to-chart-3/80",
    },
    {
      icon: Star,
      title: "Ratings & Reviews",
      description: "Transparent feedback system helps maintain quality and build reputation.",
      gradient: "from-primary to-primary/80",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "HIPAA compliant with end-to-end encryption for all communications.",
      gradient: "from-chart-5 to-chart-5/80",
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Track your connections, bookings, and performance metrics in real-time.",
      gradient: "from-chart-1 to-chart-1/80",
    },
  ];

  const userTypes = [
    {
      title: "Clinic Owners",
      icon: Building2,
      description: "Find and connect with specialist consultants instantly when you need expert care for your patients.",
      steps: [
        "Post your requirement with specialty needed",
        "View nearby verified consultants in real-time",
        "Book appointments instantly",
        "Rate and review after consultation",
      ],
    },
    {
      title: "Consultant Dentists",
      icon: Stethoscope,
      description: "Discover clinics that need your expertise and expand your practice reach effortlessly.",
      steps: [
        "Create your verified professional profile",
        "Get notified of nearby opportunities",
        "Accept bookings on your schedule",
        "Build your reputation with ratings",
      ],
    },
    {
      title: "Dental Interns",
      icon: GraduationCap,
      description: "Find structured internship opportunities and gain hands-on experience with verified clinics.",
      steps: [
        "Browse verified internship opportunities",
        "Apply directly through the platform",
        "Track your learning progress",
        "Build your professional network",
      ],
    },
  ];

  const stats = [
    { value: "10,000+", label: "Active Users" },
    { value: "500+", label: "Verified Clinics" },
    { value: "2,000+", label: "Consultants" },
    { value: "<2 min", label: "Avg. Response Time" },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Clinic Owner",
      clinic: "SmileCare Dental, New York",
      content: "MolarMap has transformed how we connect with specialists. We can now provide expert care to our patients instantly, without any delays.",
      rating: 5,
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist Consultant",
      clinic: "Elite Orthodontics",
      content: "The platform's GPS tracking and instant booking features have doubled my consultation requests. It's a game-changer for expanding my practice.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-2/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-2/10 border border-chart-2/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chart-2 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-chart-2"></span>
                </span>
                <span className="text-sm font-medium text-chart-2">Live Platform</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Connect Dental Professionals{" "}
                  <span className="text-primary">In Real-Time</span>
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
                  MolarMap matches clinic owners, consultant dentists, and interns based on location, proximity, and convenience. Your dental network, reimagined.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-chart-3 text-white hover:bg-chart-3 border border-chart-3 text-base px-8"
                  data-testid="button-hero-demo"
                >
                  <Link href="/contact">
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base px-8 bg-background/60 backdrop-blur-sm"
                  data-testid="button-hero-learn"
                >
                  <Link href="/product">
                    Learn More
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary" data-testid={`text-hero-stat-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl bg-gradient-to-br from-primary/10 to-chart-2/10 p-8 backdrop-blur-sm border border-primary/20">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center text-white">
                  <div className="text-center space-y-4">
                    <MapPin className="h-24 w-24 mx-auto" />
                    <p className="text-xl font-semibold">Real-Time Matching</p>
                    <p className="text-sm opacity-90">Connect instantly with nearby professionals</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-chart-4 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-semibold">Verified Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4" data-testid="badge-problems">Current Challenges</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Problems in the Dental Market
            </h2>
            <p className="text-lg text-muted-foreground">
              The dental industry faces critical networking and access challenges that impact patient care and professional growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-problem-${index}`}>
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <problem.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-chart-4/10 text-chart-4 border-chart-4/20" data-testid="badge-solution">Our Solution</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              One Platform, Infinite Connections
            </h2>
            <p className="text-lg text-muted-foreground">
              MolarMap brings the entire dental ecosystem together with powerful features designed for modern healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 overflow-hidden" data-testid={`card-feature-${index}`}>
                <CardContent className="p-6 space-y-4">
                  <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4" data-testid="badge-how-it-works">How It Works</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Designed for Every Dental Professional
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you're a clinic owner, consultant, or intern, MolarMap streamlines your workflow.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {userTypes.map((userType, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-usertype-${index}`}>
                <CardContent className="p-8 space-y-6">
                  <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <userType.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground mb-2">{userType.title}</h3>
                    <p className="text-sm text-muted-foreground">{userType.description}</p>
                  </div>
                  <div className="space-y-3 pt-2">
                    {userType.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-chart-2/10 text-chart-2 flex items-center justify-center text-xs font-semibold">
                          {stepIndex + 1}
                        </div>
                        <p className="text-sm text-muted-foreground pt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-chart-2 rounded-2xl p-8 lg:p-16 text-white">
            <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" data-testid={`stat-${index}`}>
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm lg:text-base opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4" data-testid="badge-testimonials">Testimonials</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trusted by Dental Professionals
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our users have to say about their experience with MolarMap.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-8 space-y-6">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-chart-3 text-chart-3" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed">{testimonial.content}</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <UserCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground flex items-center gap-2">
                        {testimonial.name}
                        <Badge variant="secondary" className="text-xs">Verified</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.clinic}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Dental Practice?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of dental professionals already using MolarMap to grow their network and improve patient care.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-chart-3 text-white hover:bg-chart-3 border border-chart-3 text-base px-8"
              data-testid="button-cta-demo"
            >
              <Link href="/contact">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base px-8"
              data-testid="button-cta-features"
            >
              <Link href="/product">
                Explore Features
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
