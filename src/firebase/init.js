// firebase/init.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { loadConfig } from "./configLoader";

let app = null;
let db = null;

export const initFirebase = () => {
  const config = loadConfig();
  if (!config || !config.apiKey) {
    console.warn("🚨 Firebase config missing");
    return;
  }

  app = initializeApp(config);
  db = getDatabase(app);
  console.log("🔥 Firebase Initialized");
};

export const getDB = () => db;
