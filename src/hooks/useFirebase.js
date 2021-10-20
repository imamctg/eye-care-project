
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();
const provider = new GoogleAuthProvider();

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const handleGoogleLogin = () => {
        setIsLoading(true)

        return signInWithPopup(auth, provider)
            .finally(() => setIsLoading(false));

    };

    const handleEmailChange = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    };

    const handlePasswordChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }


    const handleLogout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))

    };

    const handleUserRegister = (e) => {
        console.log(email, password)
        e.preventDefault();
        setIsLoading()
        if (password.length < 6) {
            setError('Password must be Six character length')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                const user = result.user;
                setUser(user)
                setUser({})
                setError('Registration Successfull ! Please Click Login Button');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });

    };

    const handleUserLogin = (e) => {

        e.preventDefault();
        setIsLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            })

            .finally(() => setIsLoading(false));
    };

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, [auth]);

    return {
        user,
        error,
        handleGoogleLogin,
        handleLogout,
        handleUserRegister,
        handleUserLogin,
        handleEmailChange,
        handlePasswordChange,
        isLoading,



    };

};

export default useFirebase;