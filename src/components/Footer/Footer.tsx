import { Github, Twitter } from 'lucide-react';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <footer className="bg-dark-card border-t border-dark-hover/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <h3 className="text-lg font-semibold text-primary mb-4">SwapDex</h3>
            <p className="text-gray-400 text-sm">
              &copy; 2024 SwapDex. Made with ❤️ by Anudeep. All rights reserved.
            </p>
          <div>
            <div className="flex space-x-4">
              <SocialLink icon={<Twitter />} href="#" />
              <SocialLink icon={<Github />} href="#" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;