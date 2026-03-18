"use client";

import React from "react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              T.P.V.SAI DINESH
            </h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Email: saidinesh@example.com
              </p>
              <p className="text-muted-foreground">
                Phone: +1 (555) 123-4567
              </p>
              <p className="text-muted-foreground">
                Location: San Francisco, CA
              </p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center">
            Made with{" "}
            <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" />
            by T.P.V.SAI DINESH © {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
