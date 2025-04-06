export const saveConfig = (config) => {
    localStorage.setItem('firebaseConfig', JSON.stringify(config));
  };
  
  export const loadConfig = () => {
    const stored = localStorage.getItem('firebaseConfig');
    return stored ? JSON.parse(stored) : null;
  };
  