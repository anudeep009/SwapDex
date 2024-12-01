import { Wallet, Menu } from 'lucide-react';
import { useState } from 'react';
import NavLink from './NavLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <button className="hidden md:flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-accent-blue to-secondary hover:opacity-90 transition-opacity">
            <Wallet className="w-4 h-4 mr-2" />
            <span>Connect Wallet</span>
          </button>

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
          <NavLink href="#" active className="block py-2">Swap</NavLink>
          <NavLink href="#" className="block py-2">Transactions</NavLink>
          <button className="mt-2 w-full flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-accent-blue to-secondary hover:opacity-90 transition-opacity">
            <Wallet className="w-4 h-4 mr-2" />
            <span>Connect Wallet</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
