import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Clock, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertContactSubmission) => {
    try {
      const response = await apiRequest("POST", "/api/contact", data);
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: response.message || "We'll get back to you within 24 hours.",
      });
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: "Please try again later.",
      });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      content: "123 Dental Street, Healthcare District, New York, NY 10001",
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "hello@molarmap.com",
      link: "mailto:hello@molarmap.com",
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+1 (234) 567-890",
      link: "tel:+1234567890",
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "We typically respond within 24 hours",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-primary/5 via-chart-2/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Badge className="mb-2" data-testid="badge-contact">Get In Touch</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Let's <span className="text-primary">Connect</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Have questions about MolarMap? Our team is here to help you get started with the platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels. We're always happy to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-contact-info-${index}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors"
                              data-testid={`link-contact-${index}`}
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-sm text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-chart-4/10 to-chart-4/5 border-chart-4/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-chart-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Verified & Secure</h3>
                      <p className="text-sm text-muted-foreground">
                        All communication through MolarMap is encrypted and HIPAA compliant. Your information is safe with us.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-sm text-muted-foreground pt-2">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Dr. John Smith"
                              {...field}
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john.smith@example.com"
                              {...field}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>I am a...</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-role">
                                <SelectValue placeholder="Select your role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="clinic-owner">Clinic Owner</SelectItem>
                              <SelectItem value="consultant">Consultant Dentist</SelectItem>
                              <SelectItem value="intern">Dental Intern/Student</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us how we can help you..."
                              className="min-h-32 resize-none"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-chart-3 text-white hover:bg-chart-3 border border-chart-3"
                      disabled={form.formState.isSubmitting}
                      data-testid="button-submit"
                    >
                      {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Prefer to Schedule a Demo?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            See MolarMap in action with a personalized demo from our team. We'll walk you through all the features and answer your questions.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary border border-primary"
            data-testid="button-schedule-demo"
          >
            Schedule a Demo Call
          </Button>
        </div>
      </section>
    </div>
  );
}
