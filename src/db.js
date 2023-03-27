// Import the functions needed from SDKs
import { initializeApp } from "firebase/app";
import { collection, addDoc, getDocs} from "firebase/firestore"; 

// Export the files to be used in ./translateCode.js
export { updateLeaderboard, getLeaderboard }

// Our web server's Firebase configuration
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

// Data Members of the Database
class User {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    toString() {
        return this.name + ", " + this.score;
    }
}

// Add to database
async function updateLeaderboard(userName, userScore) {
    try {
        // Add a new document in collection "leaderboard"
        const docRef = await addDoc(collection(db, "/leaderboard"), new User(userName, userScore)); 
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// Read From Database
async function getLeaderboard() {
    const collectionRef = collection(db, "leaderboard");
    getDocs(collectionRef).then((snapshot) => {
        console.log(snapshot.docs());
    });
}
