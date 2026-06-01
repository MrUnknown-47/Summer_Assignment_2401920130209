"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, CheckCircle2, Circle, AlertCircle } from "lucide-react";
import { Week } from "../app/data";

interface OopsAssignmentsProps {
  weeks: Week[];
  completedOops: Record<string, boolean>;
  toggleOops: (oopsId: string) => void;
}

export default function OopsAssignments({ weeks, completedOops, toggleOops }: OopsAssignmentsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="oops" className="py-12 relative border-t border-border-card">
      <div className="text-center mb-10">
        <h2 className="text-text-primary text-3xl font-sans font-extrabold tracking-tight">
          OOPS Weekly Assignments
        </h2>
        <p className="text-text-secondary text-sm font-sans mt-2 max-w-xl mx-auto">
          Explore weekly programming challenges focusing on Abstraction, Encapsulation, Interface segregation, and dynamic Polymorphism.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4 px-4">
        {weeks.map((week, idx) => {
          const oopsId = `oops_w${week.week_no}`;
          const isComplete = completedOops[oopsId] || false;
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={week.week_no}
              className={`glass-panel rounded-2xl overflow-hidden border transition-all duration-300
                ${isComplete 
                  ? "border-purple-500/20 bg-purple-500/[0.01]" 
                  : "border-border-card"
                }
              `}
            >
              {/* Header Bar */}
              <div
                onClick={() => toggleExpand(idx)}
                className="p-5 flex items-center justify-between cursor-pointer select-none"
              >
                <div className="flex items-center space-x-4">
                  {/* Status Toggle Box */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation(); // Stop expansion toggle
                      toggleOops(oopsId);
                    }}
                    className="p-1 rounded-full text-text-secondary hover:text-purple-500 transition-colors"
                    title={isComplete ? "Mark incomplete" : "Mark complete"}
                  >
                    {isComplete ? (
                      <CheckCircle2 size={22} className="text-purple-500" />
                    ) : (
                      <Circle size={22} className="text-text-secondary" />
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-sans font-bold text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded">
                      Week {week.week_no} OOPS
                    </span>
                    <h3 className="text-text-primary font-sans font-extrabold text-base mt-1">
                      {week.oops.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-text-secondary">
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>

              {/* Expandable Specifications Panel */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 pt-2 border-t border-border-card space-y-4">
                      {/* Objective */}
                      <div className="flex items-start space-x-2 text-xs font-sans text-text-secondary">
                        <AlertCircle size={16} className="text-purple-500 shrink-0 mt-0.5" />
                        <span>
                          <strong>Objective:</strong> {week.oops.objective}
                        </span>
                      </div>

                      {/* Main Paragraph */}
                      <div className="text-xs font-sans text-text-secondary leading-relaxed bg-white/5 border border-border-card p-4 rounded-xl">
                        <p>{week.oops.description}</p>
                      </div>

                      {/* Detailed Specs */}
                      <div>
                        <h4 className="font-sans font-bold text-xs text-text-primary mb-2">
                          Detailed Specifications &amp; Tasks:
                        </h4>
                        <div className="text-[11px] font-mono text-text-secondary leading-relaxed bg-black/15 p-4 rounded-xl border border-border-card/60 whitespace-pre-wrap">
                          {week.oops.specs}
                        </div>
                      </div>

                      {/* Complete Checkbox */}
                      <div className="flex justify-end">
                        <button
                          onClick={() => toggleOops(oopsId)}
                          className={`font-sans font-bold text-xs px-4 py-2 rounded-xl border transition-all duration-300
                            ${isComplete
                              ? "bg-purple-500/10 border-purple-500 text-purple-500"
                              : "bg-white/5 border-border-card text-text-secondary hover:text-text-primary hover:border-border-card-hover"
                            }
                          `}
                        >
                          {isComplete ? "Assignment Completed" : "Mark as Completed"}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
