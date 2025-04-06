import React from 'react';
import { FaFire, FaMobileAlt, FaBrain, FaFileAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="fixed top-16 left-0 h-full w-48 bg-zinc-900 border-r border-zinc-800 text-white flex flex-col pt-6 z-40">
      <NavItem icon={<FaFire className="text-orange-400" />} label="Firebase Config" />
      <NavItem icon={<FaMobileAlt className="text-cyan-400" />} label="Devices" />
      <NavItem icon={<FaBrain className="text-pink-400" />} label="Commands" />
      <NavItem icon={<FaFileAlt className="text-yellow-400" />} label="Logs" />
    </div>
  );
};

const NavItem = ({ icon, label }) => (
  <div className="flex items-center space-x-3 px-5 py-3 hover:bg-zinc-800 cursor-pointer transition">
    <div className="text-lg">{icon}</div>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default Sidebar;
