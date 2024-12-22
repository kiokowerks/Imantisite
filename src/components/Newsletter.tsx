import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/subscribe-newsletter.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for subscribing! Please check your email for confirmation.',
        });
        setEmail('');
      } else {
        throw new Error(data.message || 'Failed to subscribe');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error processing your subscription. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
      <p className="text-gray-300 mb-4">
        Subscribe to our newsletter for updates and insights
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#9064ac] focus:border-transparent transition duration-200"
            required
          />
        </div>
        
        {status.message && (
          <div
            className={`p-4 rounded-lg ${
              status.type === 'success'
                ? 'bg-green-500/20 text-green-100'
                : 'bg-red-500/20 text-red-100'
            }`}
          >
            {status.message}
          </div>
        )}
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-[#9064ac] text-white py-3 px-4 rounded-lg hover:bg-[#a77bc0] transition-colors duration-300 transform hover:-translate-y-0.5 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </motion.button>
      </form>
    </div>
  );
};

export default Newsletter;