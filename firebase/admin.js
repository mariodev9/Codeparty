const firebaseAdmin = require("firebase-admin");

const serviceAccount = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY);

!firebaseAdmin.apps.length
  ? firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(serviceAccount),
    })
  : firebaseAdmin.app();

export const firestore = firebaseAdmin.firestore();
