import React from 'react';
import { FaGithub, FaYoutube, FaDiscord } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-zinc-950 border-b border-zinc-800 text-white flex items-center justify-between px-6 z-50 shadow-md">
      
      {/* Left - Logo & Name */}
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="logo" className="w-10 h-10 rounded shadow" />
        <span className="text-xl font-bold tracking-wide">InvisiaUI</span>
      </div>

      {/* Center - Social Links */}
      <div className="flex space-x-6 items-center text-sm text-gray-300">
        <a href="#" className="hover:text-white flex items-center gap-1">
          <FaGithub /> GitHub
        </a>
        <a href="#" className="hover:text-white flex items-center gap-1">
          <FaYoutube /> YouTube
        </a>
        <a href="#" className="hover:text-white flex items-center gap-1">
          <FaDiscord /> Discord
        </a>
      </div>

      {/* Right - Build ID or User */}
      <div className="text-sm text-emerald-400 font-mono">v1.0.0</div>
    </div>
  );
};

export default Navbar;
