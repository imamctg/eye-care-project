
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();
const provider = new GoogleAuthProvider();

const useFirebase = () => {




    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
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

    const handleNameChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
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
                setUserName()
                setError('Registration Successfull ! Please Click Login Button');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });

    };

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const handleUserLogin = () => {


        setIsLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
                return true;
            })
            .catch(error => {
                console.log(error.message)
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
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        isLoading,
        name


    };

};

export default useFirebase;