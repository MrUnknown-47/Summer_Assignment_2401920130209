"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, CheckCircle2, Circle, Calendar } from "lucide-react";
import { Week } from "../app/data";

interface LeetCodeTrackerProps {
  weeks: Week[];
  completedProblems: Record<string, boolean>;
  toggleProblem: (problemId: string) => void;
}

export default function LeetCodeTracker({ weeks, completedProblems, toggleProblem }: LeetCodeTrackerProps) {
  const [activeWeekTab, setActiveWeekTab] = useState<number>(1);

  const activeWeek = weeks.find((w) => w.week_no === activeWeekTab) || weeks[0];

  // Calculate week-specific statistics
  const activeWeekProblems = activeWeek.days.flatMap((d) => d.problems);
  const solvedActiveProblems = activeWeekProblems.filter((p) => completedProblems[p.id]).length;
  const totalActiveProblems = activeWeekProblems.length;
  const activeWeekPercent = Math.round((solvedActiveProblems / totalActiveProblems) * 100) || 0;

  return (
    <section id="leetcode" className="py-12 relative border-t border-border-card">
      <div className="text-center mb-8">
        <h2 className="text-text-primary text-3xl font-sans font-extrabold tracking-tight">
          LeetCode Progress Tracker
        </h2>
        <p className="text-text-secondary text-sm font-sans mt-2 max-w-xl mx-auto">
          Tick off problems as you solve them. Your stats, progress charts, and current streaks will auto-calculate in real-time.
        </p>
      </div>

      {/* Week Switcher Tabs */}
      <div className="flex justify-center space-x-2 mb-8 px-2 max-w-lg mx-auto">
        {weeks.map((w) => {
          const isActive = w.week_no === activeWeekTab;
          const weekProbs = w.days.flatMap((d) => d.problems);
          const doneProbs = weekProbs.filter((p) => completedProblems[p.id]).length;
          const isDone = doneProbs === weekProbs.length;

          return (
            <button
              key={w.week_no}
              onClick={() => setActiveWeekTab(w.week_no)}
              className={`flex-1 font-sans font-semibold text-xs py-3 px-1.5 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 relative
                ${isActive 
                  ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/15" 
                  : "bg-bg-card border-border-card text-text-secondary hover:text-text-primary hover:border-border-card-hover"
                }
              `}
            >
              <span>Week {w.week_no}</span>
              <span className={`text-[10px] mt-1 ${isActive ? "text-blue-100" : "text-text-secondary"}`}>
                {doneProbs}/{weekProbs.length} {isDone && "✔️"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Week Dashboard */}
      <div className="max-w-4xl mx-auto mb-6 px-4">
        <div className="glass-panel rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <Calendar className="text-blue-500" size={20} />
            <h3 className="font-sans font-bold text-sm text-text-primary">
              Week {activeWeek.week_no}: {activeWeek.theme}
            </h3>
          </div>
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <span className="text-xs font-sans font-semibold text-text-secondary">
              Progress: <strong>{activeWeekPercent}%</strong>
            </span>
            <div className="w-32 bg-border-card rounded-full h-2 overflow-hidden shrink-0">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${activeWeekPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Days Timeline */}
      <div className="max-w-4xl mx-auto space-y-6 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWeekTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {activeWeek.days.map((day) => {
              const daySolved = day.problems.filter((p) => completedProblems[p.id]).length;
              const isDayComplete = daySolved === day.problems.length;

              return (
                <div 
                  key={day.day_no} 
                  id={`leetcode-week-${activeWeekTab}-day-${day.day_no}`}
                  className="glass-panel rounded-2xl p-5 border border-border-card transition-all duration-300"
                >
                  {/* Day Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border-card pb-3 mb-4 gap-2">
                    <div>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-blue-500">
                        Day {day.day_no}
                      </span>
                      <h4 className="text-text-primary font-sans font-extrabold text-base mt-0.5">
                        {day.topic}
                      </h4>
                    </div>
                    <div className={`self-start sm:self-center text-xs font-sans font-bold px-2.5 py-1 rounded-full flex items-center space-x-1.5
                      ${isDayComplete 
                        ? "bg-green-500/10 text-green-500 border border-green-500/20" 
                        : "bg-white/5 text-text-secondary border border-border-card"
                      }
                    `}>
                      {isDayComplete ? <CheckCircle2 size={12} /> : <Circle size={12} />}
                      <span>{daySolved} of 3 Solved</span>
                    </div>
                  </div>

                  {/* Problems Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {day.problems.map((p) => {
                      const isComplete = completedProblems[p.id] || false;
                      const diffColors = {
                        Easy: "text-green-500 bg-green-500/10 border-green-500/20",
                        Medium: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
                        Hard: "text-red-500 bg-red-500/10 border-red-500/20",
                      };

                      return (
                        <div
                          key={p.id}
                          onClick={() => toggleProblem(p.id)}
                          className={`group cursor-pointer rounded-xl p-4 border transition-all duration-300 flex flex-col justify-between h-40
                            ${isComplete 
                              ? "bg-blue-500/[0.03] border-blue-500/30 hover:border-blue-500/50" 
                              : "bg-white/[0.01] border-border-card hover:border-border-card-hover hover:bg-white/[0.02]"
                            }
                          `}
                        >
                          <div>
                            {/* Problem Title & Checkbox */}
                            <div className="flex items-start justify-between space-x-2">
                              <span className="font-sans font-bold text-xs text-text-primary line-clamp-2 leading-tight">
                                {p.no}. {p.title}
                              </span>
                              <div className="shrink-0 mt-0.5">
                                {isComplete ? (
                                  <CheckCircle2 size={18} className="text-blue-500" />
                                ) : (
                                  <Circle size={18} className="text-text-secondary group-hover:text-blue-500 transition-colors" />
                                )}
                              </div>
                            </div>

                            {/* Description Hint */}
                            <p className="text-[11px] text-text-secondary font-sans mt-2 line-clamp-3 leading-relaxed">
                              {p.description}
                            </p>
                          </div>

                          {/* Difficulty Pill & Action Link */}
                          <div className="flex items-center justify-between mt-3 pt-3 border-t border-border-card/40">
                            <span className={`text-[10px] font-sans font-bold px-2 py-0.5 rounded border ${diffColors[p.difficulty]}`}>
                              {p.difficulty}
                            </span>
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()} // Avoid checking box on link click
                              className="text-text-secondary hover:text-blue-500 p-1 transition-colors"
                              title="Solve on LeetCode"
                            >
                              <ExternalLink size={14} />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
