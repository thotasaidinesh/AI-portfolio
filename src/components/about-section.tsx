"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Award, BookOpen } from "lucide-react";

export function AboutSection() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2018 - 2022",
      description: "Graduated with honors, specialized in Software Engineering and AI",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Tech Academy",
      period: "2022",
      description: "Intensive 6-month program covering modern web technologies",
    },
  ];

  const experience = [
    {
      position: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications and mentoring junior developers",
    },
    {
      position: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2021 - 2022",
      description: "Developed responsive user interfaces and improved application performance",
    },
    {
      position: "Junior Developer Intern",
      company: "StartUp Hub",
      period: "2020 - 2021",
      description: "Assisted in developing MVPs for various startup projects",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              My Story
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Hello! I'm T.P.V.SAI DINESH, a passionate full-stack developer with a love for creating
              elegant solutions to complex problems. My journey in tech started with a
              curiosity about how things work on the internet, and it has evolved into a
              career dedicated to building meaningful digital experiences.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I specialize in modern JavaScript frameworks, responsive design, and creating
              scalable applications. With a strong foundation in both frontend and backend
              technologies, I enjoy working on projects that challenge me to learn and grow.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing my knowledge through tech blogs and
              community meetups.
            </p>
          </motion.div>

          {/* Education & Experience */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-primary">{edu.school}</p>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">Experience</h3>
              </div>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{exp.position}</h4>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
