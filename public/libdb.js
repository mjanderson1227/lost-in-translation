// Import the functions needed from SDKs
import { initializeApp } from "firebase/app";
import { collection, addDoc, getDocs} from "firebase/firestore"; 

// Export the files to be used in ./translateCode.js
export { writeDB, readDB }

// Our web server's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBpH9oyqzBc_ybC6Nl3nDZLnfVX_K73mdo",
    authDomain: "hack-street-boys.firebaseapp.com",
    projectId: "hack-street-boys",
    storageBucket: "hack-street-boys.appspot.com",
    messagingSenderId: "557447864702",
    appId: "1:557447864702:web:be42c654de7811ce87d32f",
    measurementId: "G-C77PK82KZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getFirestore(app);


// Add to database
async function writeDB(userName, userScore) {
    try {
        const docRef = await addDoc(collection(db, "leaderboard"), {
            name: userName,
            score: userScore
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// Read From Database
async function readDB() {
    const querySnapshot = await getDocs(collection(db, "leaderboard"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}
