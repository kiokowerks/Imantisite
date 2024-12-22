import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ScrollButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
}

const ScrollButton = ({ direction, onClick, disabled }: ScrollButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 -translate-y-1/2 ${
        direction === 'left' ? '-left-4' : '-right-4'
      } z-10 bg-[#9064ac]/90 backdrop-blur-sm shadow-lg rounded-full p-2 
      hover:bg-[#9064ac] disabled:opacity-50 disabled:cursor-not-allowed
      transition-all duration-300`}
    >
      {direction === 'left' ? (
        <ChevronLeft className="h-5 w-5 text-white" />
      ) : (
        <ChevronRight className="h-5 w-5 text-white" />
      )}
    </motion.button>
  );
};

export default ScrollButton;