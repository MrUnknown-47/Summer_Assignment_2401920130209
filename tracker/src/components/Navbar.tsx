"use client";

import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  githubUrl: string;
}

export default function Navbar({ githubUrl }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Syllabus", href: "#roadmap" },
    { label: "DSA Tracker", href: "#leetcode" },
    { label: "OOPS Projects", href: "#oops" },
    { label: "Repository", href: "#repository" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Glass backdrop container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="glass-panel rounded-2xl px-4 py-3 sm:px-6 flex items-center justify-between shadow-lg">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="text-blue-500" size={24} />
            <span className="font-sans font-bold text-lg tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              DSA & OOPS Tracker
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans font-medium text-sm text-text-secondary hover:text-blue-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Area (ThemeToggle + GitHub Button + Mobile Toggle) */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center font-sans font-semibold text-xs px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all duration-300 hover:scale-105 shadow-md shadow-blue-500/10"
            >
              GitHub Repo
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-text-primary p-1 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="px-4 sm:px-6 mt-2 md:hidden">
          <div className="glass-panel rounded-2xl py-4 px-6 flex flex-col space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans font-medium text-base text-text-secondary hover:text-blue-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-center inline-block font-sans font-semibold text-sm px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white transition-all duration-300"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
