import { ArrowDownUp, Settings } from 'lucide-react';
import TokenInput from './TokenInput';
import SwapDetails from './SwapDetails';
import SwapButton from './SwapButton';

const SwapCard = () => {
  return (
    <div className="w-full max-w-md bg-dark-card rounded-2xl border border-dark-hover/20 shadow-xl shadow-primary/5 p-4 backdrop-blur-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Swap</h2>
        <button className="p-2 hover:bg-dark-hover rounded-lg transition-colors">
          <Settings className="w-5 h-5 text-primary" />
        </button>
      </div>

      <TokenInput label="From" defaultToken="ETH" />
      
      <div className="flex justify-center -my-2 z-10">
        <button className="bg-dark-hover p-2 rounded-lg hover:bg-dark-hover/80 transition-colors border border-dark-hover/20">
          <ArrowDownUp className="w-5 h-5 text-primary" />
        </button>
      </div>

      <TokenInput label="To" defaultToken="USDC" />
      <SwapDetails />
      <SwapButton />
    </div>
  );
};

export default SwapCard;