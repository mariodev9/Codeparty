import { initializeApp } from "@firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

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
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

initializeApp(firebaseConfig);
const auth = getAuth();

export const sessionChange = (onChange) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //   const uid = user.uid;
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
  return signInWithPopup(auth, githubProvider).then((data) => {
    const { user } = data;
    const { displayName, photoURL } = user;
    return {
      name: displayName,
      avatar: photoURL,
    };
  });
};

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, photoURL } = user;

  return {
    name: displayName,
    avatar: photoURL,
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
