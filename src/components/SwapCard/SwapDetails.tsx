
const SwapDetails = () => {
  return (
    <div className="mt-4 space-y-3">
      <div className="flex justify-between text-sm text-gray-400">
        <span>Estimated Gas:</span>
        <span>0.0042 ETH</span>
      </div>
      <div className="flex justify-between text-sm text-gray-400">
        <span>Price Impact:</span>
        <span className="text-accent-cyan">{'<0.01%'}</span>
      </div>
    </div>
  );
};

export default SwapDetails;