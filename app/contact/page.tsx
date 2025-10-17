"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Send,
  MessageCircle,
  Heart,
  Building,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// Define the shape for the form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  program: string;
  message: string;
}

// Define the shape for form errors
type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  program: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // NEW: State for validation errors
  const [errors, setErrors] = useState<FormErrors>({});

  const contactMethods = [
    {
      icon: MapPin,
      title: "Visit Our Center",
      description:
        "Main Street, Our Village, District - 123456, State, Country",
      details: "Near Community Hall, Opposite Primary School",
      action: "Get Directions",
      color: "bg-secondary/20 text-secondary-foreground",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+91 12345 67890",
      details: "Monday to Saturday, 8:00 AM to 8:00 PM",
      action: "Call Now",
      color: "bg-primary/20 text-primary",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "contact@bodhon.org",
      details: "We respond within 24 hours",
      action: "Send Email",
      color: "bg-accent/20 text-accent-foreground",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "+91 98765 43210",
      details: "Quick responses for queries",
      action: "Message Now",
      color: "bg-chart-2/20 text-chart-2",
    },
  ];

  const programContacts = [
    {
      program: "Sports Club",
      value: "sports",
      contact: "Amit Patel",
      phone: "+91 98765 43211",
      availability: "6:00 AM - 8:00 AM, 4:00 PM - 6:00 PM",
    },
    {
      program: "Technical Skills",
      value: "technical",
      contact: "Priya Sharma",
      phone: "+91 98765 43212",
      availability: "10:00 AM - 5:00 PM (Mon-Sat)",
    },
    {
      program: "Crafts Center",
      value: "crafts",
      contact: "Sunita Devi",
      phone: "+91 98765 43213",
      availability: "2:00 PM - 5:00 PM (Tue & Thu)",
    },
    {
      program: "Language Club",
      value: "language",
      contact: "Rajesh Kumar",
      phone: "+91 98765 43214",
      availability: "5:00 PM - 7:00 PM (Mon-Fri)",
    },
    {
      program: "Library",
      value: "library",
      contact: "Meena Singh",
      phone: "+91 98765 43215",
      availability: "8:00 AM - 8:00 PM (Daily)",
    },
    { program: "Volunteering", value: "volunteer", contact: "General" },
    { program: "Donation", value: "donation", contact: "General" },
    { program: "Other Query", value: "other", contact: "General" },
  ];

  const operatingHours = [
    { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
    { day: "Saturday", time: "8:00 AM - 6:00 PM" },
    { day: "Sunday", time: "9:00 AM - 1:00 PM" },
    { day: "Public Holidays", time: "10:00 AM - 2:00 PM" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // NEW: Function to validate form data
  const validateForm = (data: FormData): FormErrors => {
    let newErrors: FormErrors = {};
    if (!data.name.trim()) newErrors.name = "Full Name is required.";
    if (!data.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!data.subject.trim()) newErrors.subject = "Subject is required.";
    if (!data.message.trim()) newErrors.message = "Message is required.";
    // Phone number is optional, so no validation here unless provided.
    // Program is optional for general queries, but you can enforce it if needed.
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // If there are errors, stop the submission
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (e.g., API call)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    // NEW: Reset form data after successful submission
    setFormData(initialFormData);
    setErrors({}); // Clear errors
  };

  // Helper component for error display
  const ErrorMessage = ({ message }: { message: string | undefined }) =>
    message ? (
      <p className="text-destructive text-xs mt-1" role="alert">
        {message}
      </p>
    ) : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-card to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-serif">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We'd love to hear from you! Whether you want to join our programs,
              volunteer, or just learn more about Bodhon, we're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button size="lg" variant="outline">
                <MapPin className="w-5 h-5 mr-2" />
                Visit Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Multiple Ways to <span className="text-secondary">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the most convenient way to reach out to us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="border-border shadow-lg hover:shadow-xl transition-shadow text-center bg-card"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <method.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {method.title}
                  </h3>
                  <p className="text-card-foreground font-medium mb-2">
                    {method.description}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {method.details}
                  </p>
                  <Button variant="outline" className="w-full">
                    {method.action}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-border shadow-lg bg-card">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-serif">
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as
                    possible
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle2 className="w-16 h-16 text-chart-2 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-card-foreground mb-2">
                        Message Sent! 🎉
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for contacting Bodhon. We'll get back to you
                        within 24 hours.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium text-card-foreground"
                          >
                            Full Name{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                            aria-invalid={!!errors.name}
                            aria-describedby="name-error"
                          />
                          <ErrorMessage message={errors.name} />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-card-foreground"
                          >
                            Email Address{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                            aria-invalid={!!errors.email}
                            aria-describedby="email-error"
                          />
                          <ErrorMessage message={errors.email} />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="phone"
                            className="text-sm font-medium text-card-foreground"
                          >
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number (Optional)"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="program"
                            className="text-sm font-medium text-card-foreground"
                          >
                            Interested Program
                          </label>
                          <Select
                            value={formData.program}
                            onValueChange={(value) =>
                              handleSelectChange("program", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a program (Optional)" />
                            </SelectTrigger>
                            <SelectContent>
                              {programContacts.map((p) => (
                                <SelectItem key={p.value} value={p.value}>
                                  {p.program}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="text-sm font-medium text-card-foreground"
                        >
                          Subject <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What is this regarding?"
                          required
                          aria-invalid={!!errors.subject}
                          aria-describedby="subject-error"
                        />
                        <ErrorMessage message={errors.subject} />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-card-foreground"
                        >
                          Message <span className="text-destructive">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us how we can help you..."
                          rows={5}
                          required
                          aria-invalid={!!errors.message}
                          aria-describedby="message-error"
                        />
                        <ErrorMessage message={errors.message} />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div
                              className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"
                              role="status"
                            >
                              <span className="sr-only">Sending...</span>
                            </div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Operating Hours */}
              <Card className="border-border shadow-lg bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Operating Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {operatingHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                      >
                        <span className="font-medium text-card-foreground">
                          {schedule.day}
                        </span>
                        <span className="text-muted-foreground">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary">
                      <strong>Note:</strong> For emergency matters outside
                      operating hours, please call our helpline:{" "}
                      <strong>+91 98765 43210</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Program Specific Contacts */}
              <Card className="border-border shadow-lg bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-secondary" />
                    Program Coordinators
                  </CardTitle>
                  <CardDescription>
                    Contact specific coordinators for program-related queries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {programContacts
                      .filter((p) => p.availability)
                      .map((contact, index) => (
                        <div
                          key={index}
                          className="p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="font-semibold text-card-foreground">
                            {contact.program}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            <strong>{contact.contact}</strong> • {contact.phone}
                          </div>
                          <div className="text-xs text-muted-foreground/70 mt-1">
                            Available: {contact.availability}
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-border shadow-lg bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-accent" />
                    Follow Us
                  </CardTitle>
                  <CardDescription>
                    Stay updated with our latest activities and events
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="flex-1"
                      aria-label="Follow us on Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="flex-1"
                      aria-label="Follow us on Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="flex-1"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="flex-1"
                      aria-label="Subscribe to our YouTube channel"
                    >
                      <Youtube className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Find Our <span className="text-accent">Location</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit our center and see our work in person
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Map Placeholder */}
              <Card className="border-border shadow-lg overflow-hidden bg-card">
                <CardContent className="p-0">
                  <div className="bg-muted h-96 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                        Interactive Map
                      </h3>
                      <p className="text-muted-foreground">
                        Google Maps integration would go here
                      </p>
                      <Button className="mt-4 bg-primary hover:bg-primary/90">
                        Open in Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-border shadow-lg bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-chart-3" />
                    Bodhon Center
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">
                      Address
                    </h4>
                    <p className="text-muted-foreground">
                      Main Street, Our Village
                      <br />
                      District - 123456
                      <br />
                      State, Country
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">
                      Landmarks
                    </h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Near Community Hall</li>
                      <li>• Opposite Primary School</li>
                      <li>• Next to Post Office</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">
                      Transport
                    </h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Bus Stop: 200m walk</li>
                      <li>• Auto Stand: 100m walk</li>
                      <li>• Parking: Available</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border shadow-lg bg-card">
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    aria-label="Call Emergency Helpline"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency Helpline
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    aria-label="Send Email Support"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Support
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    aria-label="Open WhatsApp Chat"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-12 bg-destructive/10 border-t border-b border-destructive/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-destructive mb-4">
              🚨 Emergency Contact
            </h3>
            <p className="text-destructive mb-4 max-w-2xl mx-auto">
              For urgent matters, emergencies, or immediate assistance outside
              operating hours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-destructive hover:bg-destructive/90">
                <Phone className="w-4 h-4 mr-2" />
                Emergency Helpline: +91 98765 43210
              </Button>
              <Button
                variant="outline"
                className="border-destructive text-destructive hover:bg-destructive hover:text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Emergency
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
