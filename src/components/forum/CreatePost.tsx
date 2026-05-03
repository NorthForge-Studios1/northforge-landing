import React, { useState } from 'react';
import axios from 'axios';
import { Send, Loader2 } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

interface CreatePostProps {
  onPostCreated?: () => void;
}

export const CreatePost: React.FC<CreatePostProps> = ({ onPostCreated }) => {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);
    try {
      // In a real app with auth, the token would be sent to associate with user
      await axios.post(`${API_URL}/forum/posts`, {
        content: content.trim(),
        type: 'discussion', // Example field
      });

      setContent('');
      if (onPostCreated) {
        onPostCreated();
      }
    } catch (error) {
      console.error('Error creating post:', error);
      // Fallback or handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#0a0a0f] border border-gray-800 rounded-xl p-4 shadow-sm mb-6 transition-all focus-within:border-cyan-900/50 focus-within:shadow-[0_0_15px_rgba(6,182,212,0.05)]">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share an opinion, question, or snippet..."
          className="w-full bg-transparent text-gray-200 placeholder-gray-500 resize-none outline-none min-h-[80px]"
          disabled={isSubmitting}
        />
        <div className="flex justify-between items-center mt-3 border-t border-gray-800/50 pt-3">
          <div className="text-xs text-gray-500">
            Supports plain text and snippets.
          </div>
          <button
            type="submit"
            disabled={!content.trim() || isSubmitting}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              !content.trim() || isSubmitting
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_10px_rgba(6,182,212,0.2)]'
            }`}
          >
            {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            Post
          </button>
        </div>
      </form>
    </div>
  );
};
