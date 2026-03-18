"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    image: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div
        ref={cardRef}
        className="bg-card border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform-gpu"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                {project.title.charAt(0)}
              </span>
            </div>
          </div>
          
          {/* Overlay with tech stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="flex flex-wrap gap-2 p-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-3">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
              >
                <Github className="h-4 w-4" />
                <span className="text-sm font-medium">Code</span>
              </motion.a>
              
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="text-sm font-medium">Live Demo</span>
              </motion.a>
            </div>
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{project.tech.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
