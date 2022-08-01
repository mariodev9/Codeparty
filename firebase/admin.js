const firebaseAdmin = require("firebase-admin");

const serviceAccount = require("./firebase-keys.json");

!firebaseAdmin.apps.length
  ? firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(serviceAccount),
    })
  : firebaseAdmin.app();

export const firestore = firebaseAdmin.firestore();
