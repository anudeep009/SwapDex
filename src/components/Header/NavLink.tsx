import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink = ({ href, children, active = false }: NavLinkProps) => (
  <a
    href={href}
    className={`block py-2 text-sm font-medium transition-colors ${
      active ? 'text-primary' : 'text-gray-300 hover:text-primary'
    }`}
  >
    {children}
  </a>
);

export default NavLink;