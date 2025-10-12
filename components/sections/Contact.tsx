"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zmelina@gmail.com",
      link: "mailto:zmelina@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Switzerland/Spain",
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-major relative overflow-hidden">
      {/* Bubbles */}
      <div className="bubbles opacity-15">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="container-standard relative z-10">
        <SectionHeader 
          title="Get In Touch"
          description="Have a project in mind or just want to chat? Feel free to reach out!"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#E6EDF2]">Let&apos;s Connect</h3>
              <p className="text-[#A7B3C2] mb-6 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#009293]/10 p-3 rounded-lg">
                      <info.icon className="h-5 w-5 text-[#009293]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#7B8A9A]">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="font-medium text-[#E6EDF2] hover:text-[#009293] transition-colors hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-[#E6EDF2]">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-5 bg-gradient-to-br from-[#009293]/10 to-[#00787A]/10 border-[#009293]/20">
              <h4 className="font-medium mb-2 text-[#E6EDF2]">💡 Quick Response</h4>
              <p className="text-sm text-[#A7B3C2] leading-relaxed">
                I typically respond within 24 hours. Let&apos;s build something amazing
                together!
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-[#E6EDF2]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-[rgba(100,116,139,0.60)] bg-[rgba(30,41,59,0.70)] focus:outline-none focus:ring-2 focus:ring-[#009293] focus:border-[#009293] text-[#E6EDF2] placeholder:text-[#7B8A9A] transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-[#E6EDF2]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-[rgba(100,116,139,0.60)] bg-[rgba(30,41,59,0.70)] focus:outline-none focus:ring-2 focus:ring-[#009293] focus:border-[#009293] text-[#E6EDF2] placeholder:text-[#7B8A9A] transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-[#E6EDF2]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg border border-[rgba(100,116,139,0.60)] bg-[rgba(30,41,59,0.70)] focus:outline-none focus:ring-2 focus:ring-[#009293] focus:border-[#009293] text-[#E6EDF2] placeholder:text-[#7B8A9A] resize-none transition-all duration-200"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#009293] hover:bg-[#00787A] text-white shadow-lg shadow-black/20 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#14B8BA]" 
                size="lg"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
