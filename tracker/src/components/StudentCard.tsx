"use client";

import { motion } from "framer-motion";
import { User, Award, BookOpen, GraduationCap } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface StudentCardProps {
  name: string;
  rollNo: string;
  branch: string;
  college: string;
  githubUrl: string;
}

export default function StudentCard({ name, rollNo, branch, college, githubUrl }: StudentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass-panel rounded-3xl p-6 glow-purple flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 relative overflow-hidden"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />

      {/* Avatar/Badge */}
      <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-xl shadow-purple-500/10 shrink-0">
        <User size={48} className="text-white" />
      </div>

      {/* Profile Details */}
      <div className="flex-1 text-center md:text-left space-y-4">
        <div>
          <span className="text-xs font-sans font-bold uppercase tracking-wider text-purple-500 bg-purple-500/10 px-2.5 py-1 rounded-md">
            Candidate Profile
          </span>
          <h2 className="text-text-primary text-2xl font-sans font-extrabold mt-2 tracking-tight">
            {name}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-sans">
          <div className="flex items-center justify-center md:justify-start space-x-2 text-text-secondary">
            <Award size={16} className="text-blue-500 shrink-0" />
            <span>Roll: <strong>{rollNo}</strong></span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2 text-text-secondary">
            <BookOpen size={16} className="text-purple-500 shrink-0" />
            <span>Branch: <strong>{branch}</strong></span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2 text-text-secondary sm:col-span-2">
            <GraduationCap size={16} className="text-cyan-500 shrink-0" />
            <span>{college}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center md:justify-start pt-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 font-sans font-semibold text-xs px-4 py-2 rounded-xl border border-border-card hover:border-purple-500/40 bg-white/5 hover:bg-white/10 text-text-primary transition-all duration-300"
          >
            <GithubIcon size={16} />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
