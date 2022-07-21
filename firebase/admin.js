const firebaseAdmin = require("firebase-admin");

const serviceAccount = require("./firebase-keys.json");

!firebaseAdmin.apps.length
  ? firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(serviceAccount),
    })
  : firebaseAdmin.app();

export const firestore = firebaseAdmin.firestore();

// const admin = require("firebase-admin")

// const serviceAccount = require("./firebase-keys.json")

// try {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),

//     databaseURL: "https://devter-6661a.firebaseio.com",

//   })
// } catch (e) {}

// export const firestore = admin.firestore()
