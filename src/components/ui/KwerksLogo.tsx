import React from 'react';
import { Zap } from 'lucide-react';

const KwerksLogo = () => {
  return (
    <div className="flex items-center gap-1 text-[#9064ac] hover:text-[#a77bc0] transition-colors duration-300">
      <Zap className="h-4 w-4" />
      <span className="font-semibold">Kwerks</span>
    </div>
  );
};

export default KwerksLogo;