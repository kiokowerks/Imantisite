import React, { useState } from 'react';
import { Share2, X, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShareButtonProps {
  url: string;
  title: string;
}

const ShareButton = ({ url, title }: ShareButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="h-5 w-5" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`,
      color: 'bg-[#1877F2]',
      hoverColor: 'hover:bg-[#0d6ae4]',
      shadow: 'shadow-[#1877F2]/20'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      color: 'bg-[#1DA1F2]',
      hoverColor: 'hover:bg-[#0c90e1]',
      shadow: 'shadow-[#1DA1F2]/20'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: 'bg-[#0A66C2]',
      hoverColor: 'hover:bg-[#0958a8]',
      shadow: 'shadow-[#0A66C2]/20'
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-600 hover:text-[#282c64] transition-colors duration-300"
      >
        <Share2 className="h-5 w-5" />
        <span>Share</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute left-0 mt-2 w-60 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 z-50 p-3"
            >
              <div className="space-y-2">
                {shareLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white ${link.color} ${link.hoverColor} shadow-lg ${link.shadow} transition-all duration-300 transform hover:-translate-y-0.5`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.icon}
                    <span className="font-medium">Share on {link.name}</span>
                  </motion.a>
                ))}
                
                <motion.button
                  onClick={copyToClipboard}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-white bg-gray-600 hover:bg-gray-700 shadow-lg shadow-gray-600/20 transition-all duration-300 transform hover:-translate-y-0.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <LinkIcon className="h-5 w-5" />
                  <span className="font-medium">Copy Link</span>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareButton;