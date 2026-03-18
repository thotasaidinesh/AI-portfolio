"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-foreground">
          Let's Connect
        </h3>
        <p className="text-muted-foreground mb-8">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-start space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Email</h4>
              <p className="text-muted-foreground">
                saidinesh@example.com
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex items-start space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Phone</h4>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="flex items-start space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Location</h4>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="mt-12">
          <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
          <div className="flex space-x-4">
            {[
              { name: "GitHub", href: "https://github.com", icon: "🐙" },
              { name: "LinkedIn", href: "https://linkedin.com", icon: "💼" },
              { name: "Twitter", href: "https://twitter.com", icon: "🐦" },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <span className="text-xl">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-card border rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">
            Send a Message
          </h3>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Message Sent Successfully!
              </h4>
              <p className="text-muted-foreground">
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
