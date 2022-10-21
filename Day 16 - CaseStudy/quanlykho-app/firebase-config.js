import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdYkZBg3vHePR0MMAIuShgHzzgTbjFaQs",
  authDomain: "auth-warehouse-app.firebaseapp.com",
  projectId: "auth-warehouse-app",
  storageBucket: "auth-warehouse-app.appspot.com",
  messagingSenderId: "636664305945",
  appId: "1:636664305945:web:1b663c0e4076d0f7ca0d88",
  measurementId: "G-PC5GYJ5GPL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;