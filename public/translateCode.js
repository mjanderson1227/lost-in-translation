// Define a list of sentences and their corresponding languages
let sentences = []


async function getData()
{
    const res = await fetch("https://api.jsonbin.io/v3/b/64200172ebd26539d09c6c7a")
    let data = await res.json()
    sentences= data.record;
}

let count;

function winCheck(userLanguage, sen)
{

    //console.log("wincheck")
    // Check if the user's answer is correct and provide feedback
    if (userLanguage.toLowerCase() === sen.language.toLowerCase()) {
        //alert("Correct!");
        document.getElementById("win").innerHTML="Correct"
        count++
        location.reload();




    } else {
        //alert(`Sorry, the correct answer was ${correctLanguage}.`);
        document.getElementById("win").innerHTML=`Sorry, the correct answer was incorrect.`
        //SAVE COUNT TO DATABASE
        count = 0;
        let randomHint = Math.floor(Math.random()*3)
        document.getElementById("hintID").innerHTML = 'Hint: ' +sen.hint[randomHint];

    }
    localStorage.setItem("currentCount", count)

    //console.log(count)

}


function sentenceSelect() {
    // Select a random sentence from the list
    let randomIndex = Math.floor(Math.random() * sentences.length);

    let randomSentence = sentences[randomIndex].sentence;
    let correctLanguage = sentences[randomIndex].language;
    //const wrongHint = sentences[randomIndex].hint[randomHint];

    let corrSentence= {sentence: '',language: '',hint: ''};
    corrSentence.sentence = randomSentence;
    corrSentence.language = correctLanguage;
    corrSentence.hint = sentences[randomIndex].hint;

    return corrSentence;
}

function sentencePrompt(){
    // Prompt the user to input the corresponding language

    let sen = sentenceSelect()
    document.getElementById("sentenceID").innerHTML = sen.sentence;
   //const userLanguage = prompt(`What language is this sentence written in? \n\n"${sen.sentence}"`);
    count = localStorage.getItem("currentCount")
    document.getElementById("countID").innerHTML = `Streak: ${Number(count)}`;



    //winCheck(userLanguage, sen.language);
    let button = document.getElementById("submit")
    button.addEventListener('click', function() {
        let userLanguage = document.getElementById("text-input").value;
        //console.log(userLanguage)
        winCheck(userLanguage,sen);
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


