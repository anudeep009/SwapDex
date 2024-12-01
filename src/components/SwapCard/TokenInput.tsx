import React from 'react';
import { ChevronDown } from 'lucide-react';

interface TokenInputProps {
  label: string;
  defaultToken: string;
}

const TokenInput: React.FC<TokenInputProps> = ({ label, defaultToken }) => {
  return (
    <div className="bg-dark rounded-xl p-4 border border-dark-hover/10">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-400">{label}</span>
        <span className="text-sm text-gray-400">Balance: 0.0</span>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="number"
          placeholder="0.0"
          className="w-full bg-transparent text-2xl outline-none focus:ring-1 focus:ring-primary/20 rounded-lg"
        />
        <button className="flex items-center space-x-2 bg-dark-hover rounded-xl px-3 py-2 hover:bg-dark-hover/80 transition-colors border border-dark-hover/20">
          <img
            src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/color/${defaultToken.toLowerCase()}.png`}
            alt={defaultToken}
            className="w-6 h-6"
          />
          <span>{defaultToken}</span>
          <ChevronDown className="w-4 h-4 text-primary" />
        </button>
      </div>
    </div>
  );
};

export default TokenInput;