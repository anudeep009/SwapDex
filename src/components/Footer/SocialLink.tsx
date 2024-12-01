import React from 'react';

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink = ({ icon, href }: SocialLinkProps) => (
  <a
    href={href}
    className="p-2 text-gray-400 hover:text-primary hover:bg-dark-hover rounded-lg transition-colors"
  >
    {icon}
  </a>
);

export default SocialLink;