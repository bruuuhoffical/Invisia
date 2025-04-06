import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Config from './pages/Config';
import Devices from './pages/Devices';
import Commands from './pages/Commands';
import Logs from './pages/Logs';
import { initFirebase } from './firebase/init';

const App = () => {
  useEffect(() => {
    initFirebase();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1 pt-16">
          <Sidebar />
          <div className="flex-1 px-4">
            <Routes>
              <Route path="/" element={<Config />} />
              <Route path="/devices" element={<Devices />} />
              <Route path="/commands" element={<Commands />} />
              <Route path="/logs" element={<Logs />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
