import { WalletIcon } from 'lucide-react';
// import NavLink from './NavLink';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  const { connected } = useWallet();

  return (
    <header className="bg-dark-card border-b border-dark-hover/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-2 justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-accent-purple to-secondary bg-clip-text text-transparent">
            SwapDex
          </h1>
        </div>
        <div className=''>
          {connected ? (
                <WalletDisconnectButton />
            ) : (
                <WalletMultiButton >
                    <WalletIcon className="mr-1 h-4 w-4" />Connect
                </WalletMultiButton>
            )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
