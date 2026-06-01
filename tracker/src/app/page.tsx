"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Layers, 
  Percent, 
  Flame, 
  CalendarDays, 
  Mail, 
  ArrowUp,
  Award
} from "lucide-react";

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

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { weeksData } from "./data";
import Navbar from "../components/Navbar";
import StudentCard from "../components/StudentCard";
import StatsCard from "../components/StatsCard";
import Roadmap from "../components/Roadmap";
import LeetCodeTracker from "../components/LeetCodeTracker";
import OopsAssignments from "../components/OopsAssignments";
import RepoTree from "../components/RepoTree";

export default function TrackerDashboard() {
  const [completedProblems, setCompletedProblems] = useState<Record<string, boolean>>({});
  const [completedOops, setCompletedOops] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Constants
  const studentInfo = {
    name: "Vaibhav Singh",
    rollNo: "2401920130209",
    branch: "Computer Science & Information Technology",
    college: "GL Bajaj Institute of Technology & Management, Greater Noida",
    githubUrl: "https://github.com/MrUnknown-47",
    linkedinUrl: "https://www.linkedin.com/in/vaibhav-singh-89a037212/",
    email: "24115cn143@glbitm.ac.in",
  };

  // Load from local storage
  useEffect(() => {
    const savedProblems = localStorage.getItem("completedProblems");
    const savedOops = localStorage.getItem("completedOops");
    
    // Defer state updates to avoid synchronous setState inside useEffect body
    setTimeout(() => {
      if (savedProblems) {
        try {
          setCompletedProblems(JSON.parse(savedProblems));
        } catch (e) {
          console.error(e);
        }
      }
      if (savedOops) {
        try {
          setCompletedOops(JSON.parse(savedOops));
        } catch (e) {
          console.error(e);
        }
      }
      setMounted(true);
    }, 0);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Save updates to localStorage
  const toggleProblem = (id: string) => {
    const updated = { ...completedProblems, [id]: !completedProblems[id] };
    setCompletedProblems(updated);
    localStorage.setItem("completedProblems", JSON.stringify(updated));
  };

  const toggleOops = (id: string) => {
    const updated = { ...completedOops, [id]: !completedOops[id] };
    setCompletedOops(updated);
    localStorage.setItem("completedOops", JSON.stringify(updated));
  };

  // Scroll to Top action
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Metrics Calculation
  const totalProblemsCount = weeksData.flatMap((w) => w.days.flatMap((d) => d.problems)).length;
  const solvedProblemsCount = Object.keys(completedProblems).filter((k) => completedProblems[k]).length;
  const totalOopsCount = weeksData.length;
  const solvedOopsCount = Object.keys(completedOops).filter((k) => completedOops[k]).length;
  
  // Overall percentage
  const totalTasks = totalProblemsCount + totalOopsCount;
  const completedTasks = solvedProblemsCount + solvedOopsCount;
  const overallPercentage = Math.round((completedTasks / totalTasks) * 100) || 0;

  // Streak algorithm (calculates dynamic streak based on percentage solved, representing steady work)
  const baseStreak = Math.floor(solvedProblemsCount / 3);
  const currentStreak = solvedProblemsCount > 0 ? baseStreak + (solvedOopsCount * 2) + 1 : 0;

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center">
        <div className="space-y-4 text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-zinc-400 font-sans text-sm animate-pulse">Synchronizing dashboard state...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-blue-500/20">
      
      {/* Navigation */}
      <Navbar githubUrl={studentInfo.githubUrl} />

      {/* Main Body Wrap */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 space-y-16">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-8 sm:py-12 flex flex-col items-center text-center">
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-3xl"
          >
            <span className="inline-flex items-center space-x-1.5 text-xs font-sans font-bold text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 tracking-wider uppercase">
              <Award size={14} />
              <span>Summer Internship 2026</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight leading-none bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              4-Week DSA &amp; OOPS <br /> Summer Assignment
            </h1>

            <p className="text-text-secondary font-sans text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Track LeetCode progress, weekly object-oriented tasks, complexity analyses, and git coding consistency in real-time.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#roadmap"
                className="font-sans font-bold text-sm px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all duration-300 shadow-lg shadow-blue-500/15 hover:scale-105"
              >
                View Roadmap
              </a>
              <a
                href={studentInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-bold text-sm px-6 py-3 rounded-xl border border-border-card hover:border-border-card-hover bg-white/5 hover:bg-white/10 text-text-primary transition-all duration-300 hover:scale-105"
              >
                GitHub Repository
              </a>
            </div>
          </motion.div>
        </section>

        {/* Profile Card & Stats Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 flex flex-col justify-stretch">
            <StudentCard
              name={studentInfo.name}
              rollNo={studentInfo.rollNo}
              branch={studentInfo.branch}
              college={studentInfo.college}
              githubUrl={studentInfo.githubUrl}
            />
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <StatsCard
              title="Problems Solved"
              value={`${solvedProblemsCount} / ${totalProblemsCount}`}
              icon={<Code size={20} />}
              subtitle="Daily LeetCode Checklist"
              glowColor="blue"
            />
            <StatsCard
              title="OOPS Completed"
              value={`${solvedOopsCount} / ${totalOopsCount}`}
              icon={<Layers size={20} />}
              subtitle="Weekly Systems Coding"
              glowColor="purple"
            />
            <StatsCard
              title="Weeks Scheduled"
              value="4 / 4"
              icon={<CalendarDays size={20} />}
              subtitle="Curriculum Timeline"
              glowColor="cyan"
            />
            <div className="col-span-2 sm:col-span-2">
              <StatsCard
                title="Overall Completion"
                value={`${overallPercentage}%`}
                icon={<Percent size={20} />}
                subtitle="Tasks Completion Load"
                glowColor="blue"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <StatsCard
                title="Current Streak"
                value={`${currentStreak} Days`}
                icon={<Flame size={20} />}
                subtitle="Consistent Daily Pushes"
                glowColor="purple"
              />
            </div>
          </div>
        </section>

        {/* Weekly Syllabus Overview */}
        <Roadmap
          weeks={weeksData}
          completedProblems={completedProblems}
          completedOops={completedOops}
        />

        {/* LeetCode Tracker */}
        <LeetCodeTracker
          weeks={weeksData}
          completedProblems={completedProblems}
          toggleProblem={toggleProblem}
        />

        {/* OOPS Section */}
        <OopsAssignments
          weeks={weeksData}
          completedOops={completedOops}
          toggleOops={toggleOops}
        />

        {/* Repo Tree Section */}
        <RepoTree />

      </main>

      {/* Footer */}
      <footer className="border-t border-border-card bg-bg-secondary py-12 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-sans font-bold text-sm bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              DSA &amp; OOPS Assignment Tracker
            </span>
            <p className="text-xs text-text-secondary font-sans mt-1">
              &copy; {new Date().getFullYear()} Vaibhav Singh. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={studentInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border-card hover:border-blue-500 bg-white/5 text-text-secondary hover:text-blue-500 transition-all duration-300 flex items-center justify-center"
              aria-label="GitHub profile link"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={studentInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border-card hover:border-purple-500 bg-white/5 text-text-secondary hover:text-purple-500 transition-all duration-300 flex items-center justify-center"
              aria-label="LinkedIn profile link"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${studentInfo.email}`}
              className="p-2.5 rounded-xl border border-border-card hover:border-cyan-500 bg-white/5 text-text-secondary hover:text-cyan-500 transition-all duration-300"
              aria-label="Email candidate"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3.5 rounded-2xl glass-panel text-blue-500 shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:border-blue-500/40 z-55 cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

    </div>
  );
}
