import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,

    onAuthStateChanged,
    signOut,
} from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    /* Google Sign in */
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user);
            setError("");
            })
            .catch((error) => setError(error.message));
    };


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
               
            }
        });
    }, []);


    /* Log Out */

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return {
        handleGoogleLogin,
        user,
        handleLogout
    }

};

export default useFirebase;