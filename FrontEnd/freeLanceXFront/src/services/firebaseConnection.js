import { initializeServerApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBa6XRh9ulL-W8IAA2PAt_e4rujTYoEU0c",
    authDomain: "freelancex-9f2bd.firebaseapp.com",
    projectId: "freelancex-9f2bd",
    storageBucket: "freelancex-9f2bd.firebasestorage.app",
    messagingSenderId: "847812553105",
    appId: "1:847812553105:web:0e95b8eebe6598fae59230",
    measurementId: "G-E349BLYLRV"
};

const firebaseApp = initializeServerApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db}