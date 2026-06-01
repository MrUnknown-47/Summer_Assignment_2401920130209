"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { Week } from "../app/data";

interface RoadmapProps {
  weeks: Week[];
  completedProblems: Record<string, boolean>;
  completedOops: Record<string, boolean>;
}

export default function Roadmap({ weeks, completedProblems, completedOops }: RoadmapProps) {
  return (
    <section id="roadmap" className="py-12 relative">
      {/* Visual Header */}
      <div className="text-center mb-10">
        <h2 className="text-text-primary text-3xl font-sans font-extrabold tracking-tight">
          Syllabus &amp; Weekly Roadmap
        </h2>
        <p className="text-text-secondary text-sm font-sans mt-2 max-w-xl mx-auto">
          Explore the weekly progression of DSA concepts and practical OOPS implementation assignments.
        </p>
      </div>

      {/* Grid of Weeks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {weeks.map((week, index) => {
          // Compute LeetCode completion rate
          const weekProblems = week.days.flatMap((d) => d.problems);
          const solvedProblemsCount = weekProblems.filter((p) => completedProblems[p.id]).length;
          const totalProblemsCount = weekProblems.length;
          const leetcodePercentage = Math.round((solvedProblemsCount / totalProblemsCount) * 100) || 0;

          // Check if OOPS is complete
          const oopsId = `oops_w${week.week_no}`;
          const isOopsComplete = completedOops[oopsId] || false;
          
          // Overall Completion calculation: LeetCode counts as 75%, OOPS counts as 25% of the week
          const overallProgress = Math.round((solvedProblemsCount / totalProblemsCount) * 75 + (isOopsComplete ? 25 : 0));
          const isWeekFullyComplete = solvedProblemsCount === totalProblemsCount && isOopsComplete;

          return (
            <motion.div
              key={week.week_no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-6 glow-blue flex flex-col justify-between"
            >
              <div>
                {/* Week Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-sans font-bold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded">
                      Week {week.week_no}
                    </span>
                    <h3 className="text-text-primary text-lg font-sans font-extrabold mt-1">
                      {week.theme}
                    </h3>
                  </div>
                  {isWeekFullyComplete ? (
                    <CheckCircle2 size={24} className="text-green-500" />
                  ) : (
                    <Circle size={24} className="text-text-secondary" />
                  )}
                </div>

                {/* Week Description */}
                <p className="text-text-secondary text-xs font-sans mb-5 leading-relaxed">
                  {week.description}
                </p>

                {/* Progress Indicators */}
                <div className="space-y-4 mb-6">
                  {/* Overall Week Progress */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-sans font-medium mb-1">
                      <span className="text-text-secondary">Overall Week Completion</span>
                      <span className="text-text-primary">{overallProgress}%</span>
                    </div>
                    <div className="w-full bg-border-card rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${overallProgress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full"
                      />
                    </div>
                  </div>

                  {/* Tasks Breakdown */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                    <div className="flex items-center space-x-1.5 text-text-secondary">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span>DSA: <strong>{solvedProblemsCount}/{totalProblemsCount}</strong> ({leetcodePercentage}%)</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-text-secondary">
                      <div className={`w-2 h-2 rounded-full ${isOopsComplete ? "bg-green-500" : "bg-zinc-500"}`} />
                      <span>OOPS: <strong>{isOopsComplete ? "1/1" : "0/1"}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Topics Covered Tag Cloud */}
                <div>
                  <h4 className="text-text-primary text-xs font-sans font-bold mb-2">Topics:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {week.days.map((d) => (
                      <span
                        key={d.day_no}
                        className="text-[10px] font-sans font-semibold px-2 py-0.5 rounded-md bg-white/5 border border-border-card text-text-secondary"
                      >
                        {d.topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-border-card flex justify-end">
                <a
                  href={`#leetcode-week-${week.week_no}`}
                  className="inline-flex items-center space-x-1 text-xs font-sans font-bold text-blue-500 hover:text-cyan-400 transition-colors"
                >
                  <span>Solve Problems</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
