import { getAuth, GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebase-config";
const Home = () => {
  const router = useRouter();
  const handleLogout = () => {
    signOut(auth).then((res) => {
        router.push('/')
    });

  }
  return (
    <div>
      <p>zzz</p>
      <button type="button" onClick={handleLogout}>LogOut</button>
    </div>
  );
};
export default Home;
