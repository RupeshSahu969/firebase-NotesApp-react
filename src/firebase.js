
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-32x3cRV5MukiNbql3tumKldWtF19DU8",
  authDomain: "recat-firebase-auth-c2dc0.firebaseapp.com",
  projectId: "recat-firebase-auth-c2dc0",
  storageBucket: "recat-firebase-auth-c2dc0.appspot.com",
  messagingSenderId: "563206552068",
  appId: "1:563206552068:web:da5ac30074d21415495351"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;