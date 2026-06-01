"use client";

import { useState } from "react";
import { Folder, FolderOpen, FileText, ChevronRight, ChevronDown, Terminal } from "lucide-react";

interface TreeNodeProps {
  name: string;
  isFolder?: boolean;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}

function TreeNode({ name, isFolder = false, children, defaultOpen = false }: TreeNodeProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => {
    if (isFolder) setIsOpen(!isOpen);
  };

  return (
    <div className="font-mono text-xs select-none">
      <div
        onClick={toggle}
        className={`flex items-center space-x-2 py-1.5 px-2 rounded-lg transition-colors cursor-pointer
          ${isFolder ? "hover:bg-white/5 text-text-primary" : "text-text-secondary hover:text-text-primary"}
        `}
      >
        {isFolder && (
          <span className="text-text-secondary">
            {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </span>
        )}
        
        <span className={isFolder ? "text-blue-500" : "text-text-secondary ml-5"}>
          {isFolder ? (
            isOpen ? <FolderOpen size={16} className="text-blue-400" /> : <Folder size={16} className="text-blue-500" />
          ) : (
            <FileText size={16} className="text-zinc-500" />
          )}
        </span>

        <span className="font-sans font-semibold tracking-tight">{name}</span>
      </div>

      {isFolder && isOpen && children && (
        <div className="pl-6 border-l border-border-card/60 ml-3.5 mt-0.5 space-y-0.5">
          {children}
        </div>
      )}
    </div>
  );
}

export default function RepoTree() {
  return (
    <section id="repository" className="py-12 relative border-t border-border-card">
      <div className="text-center mb-8">
        <h2 className="text-text-primary text-3xl font-sans font-extrabold tracking-tight">
          Repository Structure
        </h2>
        <p className="text-text-secondary text-sm font-sans mt-2 max-w-xl mx-auto">
          Explore the organized directory layout required for the summer assignment. Click folders to expand.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4">
        <div className="glass-panel rounded-2xl p-6 glow-cyan bg-black/20">
          <div className="flex items-center justify-between border-b border-border-card pb-3 mb-4">
            <div className="flex items-center space-x-2 text-text-secondary text-xs">
              <Terminal size={14} />
              <span>Workspace Directory Explorer</span>
            </div>
            <span className="text-[10px] font-sans font-bold uppercase text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded">
              Local Git Workspace
            </span>
          </div>

          <div className="space-y-1 bg-black/20 p-4 rounded-xl border border-border-card/60">
            {/* Root Node */}
            <TreeNode name="Summer_Assignment_2401920130209" isFolder defaultOpen>
              <TreeNode name=".gitignore" />
              <TreeNode name="README.md" />
              
              {/* Week 1 */}
              <TreeNode name="Week_1" isFolder>
                <TreeNode name="README.md" />
                <TreeNode name="Day_1" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="Day_2" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="Day_3" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="Day_4" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="Day_5" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="OOPS" isFolder><TreeNode name="README.md" /></TreeNode>
              </TreeNode>

              {/* Week 2 */}
              <TreeNode name="Week_2" isFolder>
                <TreeNode name="README.md" />
                <TreeNode name="Day_1" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="Day_2" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="Day_3" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="Day_4" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="Day_5" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="OOPS" isFolder><TreeNode name="README.md" /></TreeNode>
              </TreeNode>

              {/* Week 3 */}
              <TreeNode name="Week_3" isFolder>
                <TreeNode name="README.md" />
                <TreeNode name="Day_1" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="Day_2" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="Day_3" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="Day_4" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="Day_5" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="OOPS" isFolder><TreeNode name="README.md" /></TreeNode>
              </TreeNode>

              {/* Week 4 */}
              <TreeNode name="Week_4" isFolder>
                <TreeNode name="README.md" />
                <TreeNode name="Day_1" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="Day_2" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="Day_3" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="Day_4" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="Day_5" isFolder><TreeNode name="README.md" /></TreeNode>
                <TreeNode name="OOPS" isFolder><TreeNode name="README.md" /></TreeNode>
              </TreeNode>
            </TreeNode>
          </div>
        </div>
      </div>
    </section>
  );
}
