/*// Import the functions needed from SDKs
import { initializeApp } from "firebase/app";

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
const db = getFirestore(app);*/

//////////////////////////////

// Define a list of sentences and their corresponding languages
let sentences = []
async function getData()
{
    const res = await fetch("https://api.jsonbin.io/v3/b/64200172ebd26539d09c6c7a")
    let data = await res.json()
    sentences= data.record;
}

let count=0;

function winCheck(userLanguage, correctLanguage)
{

    console.log("wincheck")
    // Check if the user's answer is correct and provide feedback
    if (userLanguage.toLowerCase() === correctLanguage.toLowerCase()) {
        //alert("Correct!");
        document.getElementById("win").innerHTML="Correct"
        count++




    } else {
        //alert(`Sorry, the correct answer was ${correctLanguage}.`);
        document.getElementById("win").innerHTML=`Sorry, the correct answer was ${correctLanguage}.`
        //SAVE COUNT TO DATABASE
        count = 0;
        document.getElementById("hintID").innerHTML = sentences.hint2;
    }

    console.log(count)

}


function sentenceSelect() {
    // Select a random sentence from the list
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const randomSentence = sentences[randomIndex].sentence;
    const correctLanguage = sentences[randomIndex].language;
    const wrongHint = sentences[randomIndex].hint2;

    let corrSentence= {sentence: '',language: '',hint: ''};
    corrSentence.sentence = randomSentence;
    corrSentence.language = correctLanguage;
    corrSentence.hint2 = wrongHint;
    //console.log(sentences.hint)
    return corrSentence;
}

function sentencePrompt(){
    // Prompt the user to input the corresponding language

    const sen = sentenceSelect()
    document.getElementById("sentenceID").innerHTML = sen.sentence;
   //const userLanguage = prompt(`What language is this sentence written in? \n\n"${sen.sentence}"`);



    //winCheck(userLanguage, sen.language);
    let button = document.getElementById("submit")
    button.addEventListener('click', function() {
        const userLanguage = document.getElementById("text-input").value;
        console.log(userLanguage)
        winCheck(userLanguage,sen.language);
        document.getElementById("text-input").value = ""
        document.getElementById("countID").innerHTML = `Streak: ${Number(count)}`;
    })


}
async function main()
{

    await getData();
    sentencePrompt()



}


main();


/*var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('chrome') > -1) {
        alert("1") // Chrome
    }
    else {
        alert("2") // Safari
    }
}*/


