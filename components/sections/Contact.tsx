"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

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
      icon: Phone,
      label: "Phone",
      value: "+34 662 266 753",
      link: "tel:+34662266753",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Switzerland/Spain",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Bubbles */}
      <div className="bubbles opacity-40">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#faf7f5]">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#f1c6d9] via-[#c4b5fd] to-[#a8dadc] mx-auto rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
              <p className="text-muted-foreground mb-6">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4 hover:shadow-md hover:shadow-[#f1c6d9]/20 transition-shadow border-[#a8dadc]/20 bg-card/80 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#f1c6d9]/20 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-[#f1c6d9]" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="font-semibold hover:text-[#f1c6d9] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-[#faf7f5]">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-gradient-to-br from-[#f1c6d9]/20 to-[#c4b5fd]/20 border-[#f1c6d9]/30">
              <h4 className="font-semibold mb-2 text-[#faf7f5]">💡 Fun Fact</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond within 24 hours. Let&apos;s build something amazing
                together!
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 border-[#a8dadc]/20 bg-card/80 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
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
                  className="w-full px-4 py-2 rounded-md border border-[#a8dadc] bg-[#1a1f3a]/50 focus:outline-none focus:ring-2 focus:ring-[#f1c6d9] text-[#faf7f5]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
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
                  className="w-full px-4 py-2 rounded-md border border-[#a8dadc] bg-[#1a1f3a]/50 focus:outline-none focus:ring-2 focus:ring-[#f1c6d9] text-[#faf7f5]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
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
                  className="w-full px-4 py-2 rounded-md border border-[#a8dadc] bg-[#1a1f3a]/50 focus:outline-none focus:ring-2 focus:ring-[#f1c6d9] text-[#faf7f5] resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-[#ffa6b8] to-[#f1c6d9] hover:opacity-90 text-[#1a1f3a] border-0 shadow-lg shadow-[#f1c6d9]/20" size="lg">
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

