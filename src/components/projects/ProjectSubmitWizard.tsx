import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

type ProjectFormData = {
  name: string;
  pitch: string;
  demoUrl: string;
  stack: string;
};

const initialFormData: ProjectFormData = {
  name: '',
  pitch: '',
  demoUrl: '',
  stack: '',
};

export const ProjectSubmitWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ProjectFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Mapped directly to root endpoint without /api as per instructions
      const payload = {
        ...formData,
        status: 'pending'
      };

      // In a real scenario with auth, we would pass headers.
      // Assuming a generic endpoint for now.
      await axios.post(`${API_URL}/projects/submit`, payload);

      setIsSuccess(true);
      setTimeout(() => {
        navigate('/dashboard'); // or redirect to profile
      }, 3000);
    } catch (error) {
      console.error('Error submitting project:', error);
      alert('Failed to submit project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-[#0a0a0f] border border-cyan-900/30 rounded-2xl shadow-[0_0_15px_rgba(6,182,212,0.1)] relative overflow-hidden">
      {/* Toast Notification for Success */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="absolute top-4 left-0 right-0 mx-auto w-3/4 bg-green-900/80 border border-green-500 text-green-100 p-3 rounded-lg shadow-lg flex items-center justify-center gap-2 z-50 backdrop-blur-sm"
          >
            <CheckCircle size={20} />
            <span>Proyecto enviado a revisión exitosamente</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-2">Submit Your Project</h2>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                step >= i ? 'bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]' : 'bg-gray-800'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="min-h-[250px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-200">What is the name of your project?</h3>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Nexus Core"
                className="w-full bg-[#13131a] border border-gray-800 rounded-lg p-4 text-gray-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-200">Elevator Pitch</h3>
              <p className="text-sm text-gray-400">Describe your project in one or two sentences.</p>
              <textarea
                name="pitch"
                value={formData.pitch}
                onChange={handleChange}
                placeholder="A revolutionary platform that..."
                rows={4}
                className="w-full bg-[#13131a] border border-gray-800 rounded-lg p-4 text-gray-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
              />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-200">Tech Stack</h3>
              <p className="text-sm text-gray-400">What technologies did you use?</p>
              <input
                type="text"
                name="stack"
                value={formData.stack}
                onChange={handleChange}
                placeholder="e.g. React, FastAPI, PostgreSQL"
                className="w-full bg-[#13131a] border border-gray-800 rounded-lg p-4 text-gray-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-200">Demo URL</h3>
              <p className="text-sm text-gray-400">Where can we see it in action?</p>
              <input
                type="url"
                name="demoUrl"
                value={formData.demoUrl}
                onChange={handleChange}
                placeholder="https://myproject.tech"
                className="w-full bg-[#13131a] border border-gray-800 rounded-lg p-4 text-gray-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />

              <div className="mt-6 p-4 bg-[#13131a] rounded-lg border border-gray-800">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Summary</h4>
                <p className="text-gray-200"><span className="text-gray-500">Name:</span> {formData.name || 'Not provided'}</p>
                <p className="text-gray-200"><span className="text-gray-500">Stack:</span> {formData.stack || 'Not provided'}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={handlePrev}
          disabled={step === 1 || isSubmitting || isSuccess}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            step === 1 || isSubmitting || isSuccess
              ? 'text-gray-600 cursor-not-allowed'
              : 'text-gray-300 hover:text-white hover:bg-gray-800'
          }`}
        >
          <ChevronLeft size={20} />
          Back
        </button>

        {step < 4 ? (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-all shadow-[0_0_10px_rgba(6,182,212,0.3)] hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]"
          >
            Next
            <ChevronRight size={20} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || isSuccess}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all ${
              isSubmitting || isSuccess
                ? 'bg-cyan-800 text-gray-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]'
            }`}
          >
            {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : 'Submit Project'}
          </button>
        )}
      </div>
    </div>
  );
};
