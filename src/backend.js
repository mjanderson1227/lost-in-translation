import { initializeApp } from 'firebase/app';
import { 
    getFirestore, collection, getDocs
} from 'firebase/firestore';

// Our web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6VteKfa822wvV7bMquvpKruCoIf2m9F0",
    authDomain: "lost-in-translation-338b5.firebaseapp.com",
    projectId: "lost-in-translation-338b5",
    storageBucket: "lost-in-translation-338b5.appspot.com",
    messagingSenderId: "166555498885",
    appId: "1:166555498885:web:13bb9d6eb320c552f42cec"
};

// Initialize Backend
const app = initializeApp(firebaseConfig);

// Retrieve reference to database
const db = getFirestore(app);

// Collection
const colRef = collection(db, 'leaderboard');

// Get data inside the collection
getDocs(colRef)
    .then((snapshot) => {
        console.log(snapshot.docs);
    });
