import React, { useState, useEffect } from 'react';
import { saveConfig, loadConfig } from '../firebase/configLoader';
import { FaKey, FaServer, FaDatabase, FaProjectDiagram, FaCloud, FaEnvelope, FaAppStore } from 'react-icons/fa';

const iconMap = {
  apiKey: <FaKey />,
  authDomain: <FaServer />,
  databaseURL: <FaDatabase />,
  projectId: <FaProjectDiagram />,
  storageBucket: <FaCloud />,
  messagingSenderId: <FaEnvelope />,
  appId: <FaAppStore />
};

const FirebaseConfigForm = ({ onConfigSubmit }) => {
  const [config, setConfig] = useState({
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  });

  useEffect(() => {
    const stored = loadConfig();
    if (stored) setConfig(stored);
  }, []);

  const handleChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveConfig(config);
    if (onConfigSubmit) onConfigSubmit(config);
    alert('✅ Firebase config saved successfully!');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-black text-white p-6">

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl shadow-lg w-full max-w-xl animate-fade-in"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          🔥 Database Configuration
        </h2>
        {Object.keys(config).map((key) => (
          <div key={key} className="mb-4">
            <label className="block mb-1 font-medium capitalize">{key}</label>
            <div className="flex items-center bg-zinc-800 border border-zinc-700 rounded-md px-3">
              <span className="text-emerald-400 mr-2">{iconMap[key]}</span>
              <input
                type="text"
                name={key}
                value={config[key]}
                onChange={handleChange}
                placeholder={`Enter your ${key}`}
                className="w-full py-2 bg-transparent focus:outline-none text-white placeholder-gray-400"
              />
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded transition"
        >
          Save & Connect
        </button>
      </form>
    </div>
  );
  
};

export default FirebaseConfigForm;
