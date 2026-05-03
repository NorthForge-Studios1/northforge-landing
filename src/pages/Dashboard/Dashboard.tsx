import React from 'react';
import { ProjectSubmitWizard } from '../../components/projects/ProjectSubmitWizard';
import { ScrollReveal } from '../../components/animations/ScrollReveal';
import { LayoutDashboard, PlusCircle, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-800">
          <LayoutDashboard className="text-cyan-500" size={28} />
          <h1 className="text-3xl font-bold text-gray-100">Creator Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Activity size={80} />
            </div>
            <h3 className="text-gray-400 font-medium mb-1">Total Views</h3>
            <p className="text-3xl font-bold text-gray-100">12,450</p>
            <div className="mt-4 text-sm text-green-400 flex items-center gap-1">
              <span>↑ 12% from last week</span>
            </div>
          </div>
          <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6">
            <h3 className="text-gray-400 font-medium mb-1">Active Projects</h3>
            <p className="text-3xl font-bold text-gray-100">3</p>
          </div>
          <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 flex flex-col justify-center items-center text-center hover:border-cyan-900/50 transition-colors group cursor-pointer">
            <Link to="/profile/me" className="w-full h-full flex flex-col items-center justify-center">
               <UserCircle size={32} className="text-gray-500 group-hover:text-cyan-400 mb-2 transition-colors" />
               <span className="font-medium text-gray-300 group-hover:text-cyan-400">View Public Profile</span>
            </Link>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-100 flex items-center gap-2">
            <PlusCircle size={24} className="text-cyan-500" />
            Submit New Project
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <ProjectSubmitWizard />
      </ScrollReveal>
    </div>
  );
};

const UserCircle = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="10" r="3"/>
    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
  </svg>
);
