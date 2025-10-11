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
      <div className="bubbles opacity-25">
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#E6EDF2]">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#009293] to-[#00787A] opacity-60 mx-auto rounded-full mb-4" />
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#E6EDF2]">Let&apos;s Connect</h3>
              <p className="text-[#94A3B8] mb-6">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4 hover:shadow-md hover:shadow-black/20 transition-shadow border border-white/15 bg-[#112B3C]/60 backdrop-blur-sm rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#009293]/10 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-[#009293]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#94A3B8]">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="font-semibold text-[#E6EDF2] hover:text-[#009293] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-[#E6EDF2]">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-gradient-to-br from-[#009293]/10 to-[#00787A]/10 border border-[#009293]/20 rounded-2xl">
              <h4 className="font-semibold mb-2 text-[#E6EDF2]">💡 Fun Fact</h4>
              <p className="text-sm text-[#94A3B8]">
                I typically respond within 24 hours. Let&apos;s build something amazing
                together!
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 border border-white/15 bg-[#112B3C]/60 backdrop-blur-sm rounded-2xl">
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
                  className="w-full px-4 py-2 rounded-md border border-white/15 bg-[#112B3C]/80 focus:outline-none focus:ring-2 focus:ring-[#009293] text-[#E6EDF2] backdrop-blur-sm transition-all duration-300"
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
                  className="w-full px-4 py-2 rounded-md border border-white/15 bg-[#112B3C]/80 focus:outline-none focus:ring-2 focus:ring-[#009293] text-[#E6EDF2] backdrop-blur-sm transition-all duration-300"
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
                  className="w-full px-4 py-2 rounded-md border border-white/15 bg-[#112B3C]/80 focus:outline-none focus:ring-2 focus:ring-[#009293] text-[#E6EDF2] resize-none backdrop-blur-sm transition-all duration-300"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#009293] hover:bg-[#F8A58E] text-white border-0 shadow-lg shadow-black/20 transition-all duration-300" 
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
