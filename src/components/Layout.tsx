import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Users, Briefcase, BarChart2, Settings, Calendar } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">ResourcePro</h1>
        </div>
        <ul className="mt-4">
          <NavItem to="/" icon={<LayoutDashboard />} text="Dashboard" />
          <NavItem to="/resources" icon={<Users />} text="Resources" />
          <NavItem to="/projects" icon={<Briefcase />} text="Projects" />
          <NavItem to="/bookings" icon={<Calendar />} text="Bookings" />
          <NavItem to="/reports" icon={<BarChart2 />} text="Reports" />
          <NavItem to="/settings" icon={<Settings />} text="Settings" />
        </ul>
      </nav>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

const NavItem: React.FC<{ to: string; icon: React.ReactNode; text: string }> = ({ to, icon, text }) => (
  <li className="mb-2">
    <Link to={to} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  </li>
);