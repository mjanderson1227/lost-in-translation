// Define a list of sentences and their corresponding languages
const sentences = [
    { sentence: "Hello, how are you?", language: "English" },
    { sentence: "Bonjour, comment ça va?", language: "French" },
    { sentence: "Hola, cómo estás?", language: "Spanish" },
    { sentence: "你好，你好吗？", language: "Chinese" },
    { sentence: "こんにちは、お元気ですか？", language: "Japanese" },
];

// Select a random sentence from the list
const randomIndex = Math.floor(Math.random() * sentences.length);
const randomSentence = sentences[randomIndex].sentence;
const correctLanguage = sentences[randomIndex].language;

// Prompt the user to input the corresponding language
const userLanguage = prompt(`What language is this sentence written in? \n\n"${randomSentence}"`);

// Check if the user's answer is correct and provide feedback
if (userLanguage.toLowerCase() === correctLanguage.toLowerCase()) {
    alert("Correct!");
} else {
    alert(`Sorry, the correct answer was ${correctLanguage}.`);
}