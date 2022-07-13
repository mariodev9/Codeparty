// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "@firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  setDoc,
  Timestamp,
  addDoc,
  doc,
  orderBy,
} from "firebase/firestore";

// Config Firebase App
const firebaseConfig = {
  apiKey: "AIzaSyBcdQyjrnf7GaX0bcaZ5ZY26rzalMGWnAQ",
  authDomain: "codeparty9.firebaseapp.com",
  projectId: "codeparty9",
  storageBucket: "codeparty9.appspot.com",
  messagingSenderId: "472370053593",
  appId: "1:472370053593:web:ac726c1336174972f519c8",
  measurementId: "G-DPKRTSTQ2F",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Connect DataBase service
const firestore = getFirestore(app);

// const analytics = getAnalytics(app);

export const sessionChange = (onChange) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const normalizedUser = mapUserFromFirebaseAuthToUser(user);
      onChange(normalizedUser);
    } else {
      onChange(null);
    }
  });
};

export const loginWithGitHub = async () => {
  const githubProvider = new GithubAuthProvider();
  githubProvider.setCustomParameters(firebaseConfig);
  return signInWithPopup(auth, githubProvider);
};

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, photoURL, uid } = user;
  return {
    name: displayName,
    avatar: photoURL,
    userId: uid,
  };
};

export const logOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

export const addCode = ({ avatar, content, userId, userName }) => {
  const docRef = addDoc(collection(firestore, "codes"), {
    avatar,
    content,
    userId,
    userName,
    createdAt: Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  });
};

export const fetchLatestCodes = async () => {
  const q = query(collection(firestore, "codes"), orderBy("createdAt", "desc"));
  const querySnap = await getDocs(q);
  const { docs } = querySnap;
  return docs.map((doc) => {
    const data = doc.data();
    const id = doc.id;
    const { createdAt } = data;

    return {
      ...data,
      id,
      createdAt: +createdAt.toDate(),
    };
  });
};
