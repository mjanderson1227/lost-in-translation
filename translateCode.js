// Define a list of sentences and their corresponding languages
const sentences = [
    { sentence: "Hello, how are you?", language: "English" },
    { sentence: "Bonjour, comment ça va?", language: "French" },
    { sentence: "Hola, cómo estás?", language: "Spanish" },
    { sentence: "你好，你好吗？", language: "Chinese" },
    { sentence: "こんにちは、お元気ですか？", language: "Japanese" },
];
function randomSentence(sentences)
{
    // Select a random sentence from the list
    
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const randomSentence = sentences[randomIndex].sentence;
    const correctLanguage = sentences[randomIndex].language;

    let corrSentence
    corrSentence.lang = correctLanguage
    corrSentence.sentence= randomSentence
    return corrSentence
}
function sentencePrompt(randomSentence){
    // Prompt the user to input the corresponding language
    const userLanguage = prompt(`What language is this sentence written in? \n\n"${randomSentence}"`);
    return userLanguage;

}
function winCheck()
{
    let correctSentence = randomSentence(sentences);
    let userLanguage = sentencePrompt(correctSentence.sentence)
    // Check if the user's answer is correct and provide feedback
    if (userLanguage.toLowerCase() === correctSentence.lang.toLowerCase()) {
        alert("Correct!");
    
    } else {
        alert(`Sorry, the correct answer was ${correctSentence.lang}.`);
    }

}




correctSentence = randomSentence(sentences)
sentencePrompt(sentences[0].sentence)

//winCheck();




/*var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('chrome') > -1) {
        alert("1") // Chrome
    }
    else {
        alert("2") // Safari
    }
}*/



