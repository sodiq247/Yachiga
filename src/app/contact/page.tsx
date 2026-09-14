"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  enquiryType: z.string().min(1, "Please select an enquiry type."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      enquiryType: "Legal Services",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call for now since we only need UI and validation
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="py-20 lg:py-24 bg-[#faf8f5] border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-primary font-heading font-bold text-5xl md:text-7xl mb-6">Contact</h1>
          <p className="text-muted-foreground text-xl md:text-2xl font-serif italic">
            Let's start a conversation.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-10">
              <div>
                <h3 className="font-heading font-semibold text-2xl text-primary mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you need legal counsel, policy analysis, a compelling host for your next event, or guidance through mentorship, I look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#faf8f5] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Email</h4>
                    <a href="mailto:info@yachiga.com" className="text-muted-foreground hover:text-accent transition-colors">
                      info@yachiga.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#faf8f5] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Phone</h4>
                    <a href="tel:+2348030742373" className="text-muted-foreground hover:text-accent transition-colors">
                      +234 (0) 803 074 2373
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 bg-white p-8 md:p-12 shadow-2xl border border-border/50 rounded-sm">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-4">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-3xl text-primary">Message Sent</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-6">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-primary">Full Name *</label>
                        <Input 
                          placeholder="Jane Doe" 
                          className="bg-[#faf8f5] border-transparent focus-visible:ring-accent" 
                          {...form.register("name")} 
                        />
                        {form.formState.errors.name && (
                          <p className="text-sm text-red-500 font-medium">{form.formState.errors.name.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-primary">Email Address *</label>
                        <Input 
                          placeholder="jane@example.com" 
                          className="bg-[#faf8f5] border-transparent focus-visible:ring-accent" 
                          {...form.register("email")} 
                        />
                        {form.formState.errors.email && (
                          <p className="text-sm text-red-500 font-medium">{form.formState.errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-primary">Phone Number</label>
                        <Input 
                          placeholder="+234 ..." 
                          className="bg-[#faf8f5] border-transparent focus-visible:ring-accent" 
                          {...form.register("phone")} 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-primary">Enquiry Type *</label>
                        <select 
                          className="flex h-10 w-full rounded-md border border-transparent bg-[#faf8f5] px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          {...form.register("enquiryType")}
                        >
                          <option value="Legal Services">Legal Services</option>
                          <option value="Public Policy">Public Policy</option>
                          <option value="Speaking/Event Hosting">Speaking / Event Hosting</option>
                          <option value="Mentorship">Mentorship</option>
                          <option value="General">General Enquiry</option>
                        </select>
                        {form.formState.errors.enquiryType && (
                          <p className="text-sm text-red-500 font-medium">{form.formState.errors.enquiryType.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Message *</label>
                      <Textarea 
                        placeholder="How can I help you?" 
                        className="min-h-[150px] bg-[#faf8f5] border-transparent focus-visible:ring-accent resize-y" 
                        {...form.register("message")} 
                      />
                      {form.formState.errors.message && (
                        <p className="text-sm text-red-500 font-medium">{form.formState.errors.message.message}</p>
                      )}
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-accent hover:bg-accent/90 text-white h-12 text-base font-semibold">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
