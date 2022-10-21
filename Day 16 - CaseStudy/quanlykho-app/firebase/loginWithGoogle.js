import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebase-config";
import 'bootstrap-icons/font/bootstrap-icons.css';


const LoginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    
    const router = useRouter();
    
    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.

                // The signed-in user info.
                const user = result.user;

                // you would insert this detail to your database and proceed from there.
                console.log(user);

                router.push("/home");

                // ...
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                onClick={handleLogin}
            ><i class="bi bi-google"></i>&nbsp;
                Login with Google
            </button>
        </>
    );
};

export default LoginWithGoogle;