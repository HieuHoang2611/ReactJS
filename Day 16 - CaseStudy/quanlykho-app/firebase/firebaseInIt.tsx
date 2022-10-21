import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

const firebaseConfig = {
   apiKey: "AIzaSyBdYkZBg3vHePR0MMAIuShgHzzgTbjFaQs",
  authDomain: "auth-warehouse-app.firebaseapp.com",
  projectId: "auth-warehouse-app",
  storageBucket: "auth-warehouse-app.appspot.com",
  messagingSenderId: "636664305945",
  appId: "1:636664305945:web:1b663c0e4076d0f7ca0d88",
  measurementId: "G-PC5GYJ5GPL"
};

const initMyFirebase = () => {
    if (!getApps().length) {
        // initialize firebase app with our configs.
        const app = initializeApp(firebaseConfig);

        // creating auth for authentication
        const auth = getAuth(app);

        if (typeof window !== "undefined") {
            if ("measurementId" in firebaseConfig) {
                const analytics = getAnalytics(app);
                const preformance = getPerformance(app);
            }
        }

        console.log("Initialized firebase");
    } else {
        console.log("Already Initialized firebase");
    }
};

export default initMyFirebase;