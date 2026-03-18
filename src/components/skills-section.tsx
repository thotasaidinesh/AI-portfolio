"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILLS } from "@/lib/constants";

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  className="text-primary font-semibold"
                >
                  {skill.level}%
                </motion.span>
              </div>
              
              <div className="relative">
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  />
                </div>
                
                {/* Animated particles */}
                {isInView && (
                  <motion.div
                    className="absolute top-0 left-0 h-full w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ 
                      duration: 2, 
                      delay: index * 0.1 + 0.5,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  </motion.div>
                )}
              </div>

              {/* Skill level indicator */}
              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Advanced</span>
                <span>Expert</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git", "REST APIs", "GraphQL", "AWS", "Firebase", 
              "MongoDB", "MySQL", "Redis", "Docker", "Kubernetes",
              "Jest", "Cypress", "Webpack", "Vite", "Figma"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
