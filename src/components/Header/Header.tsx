import { Wallet, Menu } from 'lucide-react';
import { useState } from 'react';
import NavLink from './NavLink';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { connected } = useWallet();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-dark-card border-b border-dark-hover/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent-purple to-secondary bg-clip-text text-transparent">
            SwapDex
          </h1>
          <div className="hidden md:flex space-x-6">
            <NavLink href="#" active>Swap</NavLink>
            <NavLink href="#">Transactions</NavLink>
          </div>
        </div>

        <div className="flex items-center">
          {connected ? (
            <WalletDisconnectButton />
          ) : (
            <WalletMultiButton>
              <Wallet className="w-4 h-4 mr-2" /> Select Wallet
            </WalletMultiButton>
          )}

          <button
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-accent-blue to-secondary hover:opacity-90 transition-opacity"
            onClick={toggleMenu}
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-dark-card px-4 py-2">
          <NavLink href="#">Swap</NavLink>
          <NavLink href="#">Transactions</NavLink>
          {connected ? (
            <WalletDisconnectButton />
          ) : (
            <WalletMultiButton>
              <Wallet className="w-4 h-4 mr-2" /> Select Wallet
            </WalletMultiButton>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
