"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAVIGATION } from "@/lib/constants";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAVIGATION.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </motion.button>
              ))}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        className="md:hidden bg-background/95 backdrop-blur-md"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAVIGATION.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
