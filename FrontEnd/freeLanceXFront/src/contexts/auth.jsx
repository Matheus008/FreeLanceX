import { useState, createContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { auth, db } from '../services/firebaseConnection';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const AuthContext = createContext({});

function AuthProvider({ chidren }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(null);
    const [loading, setLoading] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadUser() {
            const storageUser = localStorage.getItem('@freelancexWORKER');

            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadUser();
    }, []);

    async function signIn(email, password) {
        setLoadingAuth(true);

        await signInWithEmailAndPassword(auth, email, password)
        .then(async value => {
            uid = value.user.uid;

            const docRef = doc(db, "workers", uid);
            const docSnap = await getDoc(docRef);

            let data = {
                uid,
                nome: docSnap.data().nome,
                email: value.user.email,
            }

            setUser(data);
            storageUser(data);
            setLoading(false);
            toast.success("Seja bem-vindo!!");
            navigate("")
        })
        .catch( error => {
            console.log(error);
            setLoading(false);
            toast.error("Algo deu errado!");
        })
    }

    async function signUp(email, password, name) {
        setLoadingAuth(true);

        await createUserWithEmailAndPassword(auth, email, password)
        .then( async value => {
            let uid = value.user.uid;

            await setDoc(doc(db, "workers", uid), {
                nome: name,
            })
            .then(() => {
                let data = {
                    uid,
                    nome: name,
                    email: value.user.email
                };

                setUser(data);
                setLoadingAuth(false);
                toast.success("Seja bem-vindo ao FreelanceX");
                navigate("");
            })
        })
    }

    function storageUser(data) {
        localStorage.setItem('@freelancexWORKER', JSON.stringify(data));
    }

    async function logout() {
        await signOut(auth);
        localStorage.removeItem('@freelancexWORKER');
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{
            signed: !! user,
            user,
            signIn,
            signUp,
            logout,
            loadingAuth,
            loading,
            storageUser,
            setUser
        }}>
            { chidren }
        </AuthContext.Provider>
    )
}

export default AuthProvider;