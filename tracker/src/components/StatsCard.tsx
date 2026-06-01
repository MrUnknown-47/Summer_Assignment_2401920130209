"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  subtitle?: string;
  glowColor: "blue" | "purple" | "cyan";
}

export default function StatsCard({ title, value, icon, subtitle, glowColor }: StatsCardProps) {
  const glowClasses = {
    blue: "glow-blue border-blue-500/10 hover:border-blue-500/30",
    purple: "glow-purple border-purple-500/10 hover:border-purple-500/30",
    cyan: "glow-cyan border-cyan-500/10 hover:border-cyan-500/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className={`glass-panel rounded-2xl p-6 transition-all duration-300 ${glowClasses[glowColor]}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-text-secondary text-sm font-sans font-medium">{title}</p>
          <motion.h3 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="text-text-primary text-3xl font-sans font-extrabold mt-1 tracking-tight"
          >
            {value}
          </motion.h3>
          {subtitle && (
            <p className="text-xs text-text-secondary mt-1 font-sans">{subtitle}</p>
          )}
        </div>
        <div className={`p-3.5 rounded-xl bg-gradient-to-br flex items-center justify-center text-white
          ${glowColor === "blue" ? "from-blue-600 to-blue-400 shadow-md shadow-blue-500/20" : ""}
          ${glowColor === "purple" ? "from-purple-600 to-purple-400 shadow-md shadow-purple-500/20" : ""}
          ${glowColor === "cyan" ? "from-cyan-600 to-cyan-400 shadow-md shadow-cyan-500/20" : ""}
        `}>
          {icon}
        </div>
      </div>
    </motion.div>
  );
}
