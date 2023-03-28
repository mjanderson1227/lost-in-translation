let count;

async function getData()
{
    const res = await fetch("https://api.jsonbin.io/v3/b/64200172ebd26539d09c6c7a")
    let data = await res.json()
    sentences= data.record;
}
function playAudio()
{
    let audio = new Audio('./Bugatti_5sec.mp3');
    audio.play();
}



function winCheck(userLanguage, sen)
{

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
    sessionStorage.setItem("currentCount", count)
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
    count = sessionStorage.getItem("currentCount")
    document.getElementById("countID").innerHTML = `Streak: ${Number(count)}`;

    let button = document.getElementById("submit")
    button.addEventListener('click', function() {
        let userLanguage = document.getElementById("text-input").value;
        winCheck(userLanguage,sen);
        document.getElementById("text-input").value = ""
        document.getElementById("countID").innerHTML = `Streak: ${Number(count)}`;
        //playAudio();
    })
}
async function main()
{
    await getData();
    sentencePrompt()
}


main();
