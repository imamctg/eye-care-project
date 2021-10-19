
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
    // const [isLogin, setIsLogin] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    // const [name, setName] = useState('');


    const handleGoogleLogin = () => {
        setIsLoading(true)

        return signInWithPopup(auth, provider)
            .finally(() => setIsLoading(false));

    };
    // const handleNameChange = e => {
    //     setName(e.target.value);
    // }
    const handleEmailChange = (e) => {
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
        e.preventDefault();
        setIsLoading()
        if (password.length < 6) {
            setError('Password must be Six character length')
            return;
        }
        // isLogin && handleUserLogin(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                const user = result.user;
                setUser(user)
                setError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });

    };

    const handleUserLogin = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

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
    }, []);

    return {
        user,
        error,
        handleGoogleLogin,
        handleLogout,
        handleUserRegister,
        handleUserLogin,
        // handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        isLoading

    };

};

export default useFirebase;