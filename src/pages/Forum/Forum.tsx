import React from 'react';
import { CreatePost } from '../../components/forum/CreatePost';
import { ScrollReveal } from '../../components/animations/ScrollReveal';
import { User, MessageSquare } from 'lucide-react';

const MOCK_FEED = [
  { id: '1', author: 'Elena Root', handle: '@eroot', content: 'Does anyone have a good pattern for managing WebSocket state in React without causing excessive re-renders?', time: '1h ago', likes: 12, replies: 4 },
  { id: '2', author: 'Mark Syntax', handle: '@msyntax', content: 'Just published a new guide on advanced TypeScript generics in our labs section. Check it out!', time: '3h ago', likes: 34, replies: 8 },
  { id: '3', author: 'Sarah Node', handle: '@snode', content: 'Opinion: CSS modules are still superior to Tailwind for highly complex, specific animations. Fight me. 🤺', time: '5h ago', likes: 45, replies: 22 },
];

export const Forum: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <ScrollReveal>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-100 mb-2">Developer Forum</h1>
          <p className="text-gray-400">Share knowledge, ask questions, and connect with the community.</p>
        </div>

        <CreatePost />
      </ScrollReveal>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
          <MessageSquare size={20} className="text-cyan-500" />
          Recent Discussions
        </h2>

        <div className="space-y-4">
          <ScrollReveal staggerChildren={true}>
            {MOCK_FEED.map((post) => (
              <div key={post.id} className="p-5 bg-[#0a0a0f] border border-gray-800 rounded-xl hover:border-cyan-900/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.05)] transition-all mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-200">{post.author}</span>
                      <span className="text-gray-500 text-sm">{post.handle}</span>
                    </div>
                    <div className="text-xs text-gray-500">{post.time}</div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4">{post.content}</p>

                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <button className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                    <span>♥</span> {post.likes}
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                    <MessageSquare size={14} /> {post.replies}
                  </button>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
