"use client";

import React from "react";
import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        className="relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-16 h-16 border-4 border-primary/20 rounded-full"></div>
        <motion.div
          className="absolute top-0 left-0 w-16 h-16 border-4 border-primary rounded-full border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
