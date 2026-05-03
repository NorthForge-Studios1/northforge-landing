import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ScrollReveal } from '../../components/animations/ScrollReveal';
import { User, Activity, FolderGit2, Calendar, MapPin, Link as LinkIcon, Loader2 } from 'lucide-react';
import { useParams } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

interface UserProfileData {
  id: string;
  name: string;
  handle: string;
  bio: string;
  joinDate: string;
  location: string;
  website: string;
  avatar?: string;
}

interface ActivityItem {
  id: string;
  content: string;
  date: string;
  likes: number;
}

interface ProjectItem {
  id: string;
  name: string;
  pitch: string;
  stack: string[];
  status: 'approved' | 'pending';
}

const MOCK_USER: UserProfileData = {
  id: 'u1',
  name: 'Alex Developer',
  handle: '@alexdev',
  bio: 'Fullstack builder & UI enthusiast. Passionate about creating premium web experiences.',
  joinDate: 'Joined March 2024',
  location: 'Remote',
  website: 'alex.dev'
};

const MOCK_ACTIVITIES: ActivityItem[] = [
  { id: 'a1', content: 'Just deployed my first project using FastAPI and React! The combination is incredibly fast.', date: '2h ago', likes: 12 },
  { id: 'a2', content: 'Does anyone have recommendations for good animation libraries besides Framer Motion?', date: '1d ago', likes: 5 },
  { id: 'a3', content: 'The new Dark Mode UI on NorthForge is looking super clean.', date: '3d ago', likes: 24 },
];

const MOCK_PROJECTS: ProjectItem[] = [
  { id: 'p1', name: 'Nexus Analytics', pitch: 'Real-time dashboard for developer metrics.', stack: ['React', 'FastAPI', 'PostgreSQL'], status: 'approved' },
  { id: 'p2', name: 'Cyber Terminal', pitch: 'A web-based terminal emulator with custom themes.', stack: ['Vue', 'Node.js'], status: 'approved' },
];

export const UserProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'activity' | 'projects'>('activity');
  const [userData, setUserData] = useState<UserProfileData | null>(null);
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        const userId = id || 'me';

        // Attempting real API call without /api prefix
        const [profileRes, activityRes, projectsRes] = await Promise.all([
          axios.get(`${API_URL}/users/${userId}/profile`),
          axios.get(`${API_URL}/users/${userId}/activity`),
          axios.get(`${API_URL}/users/${userId}/projects`)
        ]);

        setUserData(profileRes.data);
        setActivities(activityRes.data);
        // Only show approved projects in profile public view
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setProjects(projectsRes.data.filter((p: any) => p.status === 'approved'));

      } catch (error) {
        console.warn('API call failed, falling back to mock data', error);
        // Fallback to elegant mocks
        setUserData(MOCK_USER);
        setActivities(MOCK_ACTIVITIES);
        setProjects(MOCK_PROJECTS);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-cyan-500" size={40} />
      </div>
    );
  }

  if (!userData) return <div className="text-center text-gray-500 mt-20">User not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <ScrollReveal>
        <div className="bg-[#0a0a0f] border border-gray-800 rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
            <div className="w-24 h-24 rounded-full bg-gray-800 border-2 border-cyan-900/50 flex items-center justify-center flex-shrink-0">
              <User size={40} className="text-gray-400" />
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-100">{userData.name}</h1>
              <p className="text-cyan-500 font-medium mb-3">{userData.handle}</p>
              <p className="text-gray-300 max-w-2xl mb-4 leading-relaxed">{userData.bio}</p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1"><MapPin size={14} /> {userData.location}</div>
                <div className="flex items-center gap-1"><LinkIcon size={14} /> <a href={`https://${userData.website}`} className="hover:text-cyan-400 transition-colors">{userData.website}</a></div>
                <div className="flex items-center gap-1"><Calendar size={14} /> {userData.joinDate}</div>
              </div>
            </div>

            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors border border-gray-700">
              Follow
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-800 mb-8">
        <button
          onClick={() => setActiveTab('activity')}
          className={`pb-4 flex items-center gap-2 font-medium transition-colors relative ${
            activeTab === 'activity' ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          <Activity size={18} /> Actividad
          {activeTab === 'activity' && (
            <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`pb-4 flex items-center gap-2 font-medium transition-colors relative ${
            activeTab === 'projects' ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          <FolderGit2 size={18} /> Proyectos
          {activeTab === 'projects' && (
            <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className="w-full">
        {activeTab === 'activity' && (
          <ScrollReveal staggerChildren={true} className="space-y-4">
            {activities.length > 0 ? activities.map(activity => (
              <div key={activity.id} className="p-5 bg-[#0a0a0f] border border-gray-800 rounded-xl hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <User size={14} className="text-gray-500" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-200">{userData.name}</span>
                    <span className="text-gray-500 text-sm ml-2">{activity.date}</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{activity.content}</p>
                <div className="mt-4 text-sm text-gray-500 flex items-center gap-4">
                  <span className="cursor-pointer hover:text-cyan-400 transition-colors">♥ {activity.likes} Likes</span>
                  <span className="cursor-pointer hover:text-cyan-400 transition-colors">Reply</span>
                </div>
              </div>
            )) : (
              <p className="text-gray-500 text-center py-10">No recent activity.</p>
            )}
          </ScrollReveal>
        )}

        {activeTab === 'projects' && (
          <ScrollReveal staggerChildren={true} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.length > 0 ? projects.map(project => (
              <div key={project.id} className="p-6 bg-[#0a0a0f] border border-gray-800 rounded-xl hover:border-cyan-900/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.05)] transition-all group">
                <h3 className="text-xl font-bold text-gray-200 group-hover:text-cyan-400 transition-colors mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4 h-10 line-clamp-2">{project.pitch}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-[#13131a] border border-gray-800 rounded text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )) : (
              <div className="col-span-full text-center py-10">
                <FolderGit2 size={32} className="mx-auto text-gray-600 mb-3" />
                <p className="text-gray-500">No approved projects yet.</p>
              </div>
            )}
          </ScrollReveal>
        )}
      </div>
    </div>
  );
};
