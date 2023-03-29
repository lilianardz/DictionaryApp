/*
const getWord = async () => {
    var response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/cat');
    var res = await response.json();
    var word = res[0].word;
    var phon = res[0].phonetic;
    var audio = res[0].phonetics[0].audio;
    var pspeech = res[0].meanings[0].partOfSpeech;
    var def = res[0].meanings[0].definitions[0].definition;
    var def2 = res[0]?.meanings[0]?.definitions[1]?.definition;
    var def3 = res[0]?.meanings[0]?.definitions[2]?.definition;
    var def4 = res[0]?.meanings[1]?.definitions[0]?.definition;
    var syn = res[0]?.meanings[0]?.definitions[0]?.synonyms;
    var pspeech2 = res[0]?.meanings[1]?.partOfSpeech;
    var meaning = res[0]['meanings'][1]['definitions'][0];
    var origin = res[0]['origin'];
    console.log(word);
    console.log(meaning);
    console.log(origin);
    console.log(def);
    console.log(phon);
    console.log(pspeech);
    //console.log(audio);
    var pWord = document.getElementById('word');
    pWord.innerHTML = word;
    var parPhon = document.getElementById('phonema');
    parPhon.innerHTML = phon;
    const parPSpeech = document.getElementById('partOfSpeech');
    parPSpeech.innerHTML = pspeech;
    var parDef = document.getElementById('def');
    parDef.innerHTML = '  ' + def + '<br><br>';
    var parDef2 = document.getElementById('def2');
    parDef2.innerHTML = '  ' + def2 + '<br><br>';
    var parDef3 = document.getElementById('def3');
    parDef3.innerHTML = '  ' + def3 + '<br><br>';
console.log(word);
    console.log(meaning);
    console.log(origin);
    console.log(def);
    console.log(phon);
    console.log(pspeech);
    //console.log(audio);

}
getWord();
*/


//codigo botoon

function showCont(){
    const cont = document.getElementById('container');
    cont.style.display = "block";
}




const getTxt = async () => {
    showCont();
    try {
        var txt = document.getElementById('txt').value;
        var url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
        var urlAPI = `${url}${txt}`;
        var response = await fetch(urlAPI);
        var res = await response.json();
        var word = res[0].word;
        var phon = res[0].phonetic || '';
        var audio = res[0].phonetics[0].audio || '';
        var pspeech = res[0].meanings[0].partOfSpeech || '';
        var def = res[0].meanings[0].definitions[0].definition || '';
        var def2 = res[0]?.meanings[0]?.definitions[1]?.definition || '';
        var def3 = res[0]?.meanings[0]?.definitions[2]?.definition || '';
        var def4 = res[0]?.meanings[1]?.definitions[0]?.definition || '';
        var syn = res[0]?.meanings[0]?.definitions[0]?.synonyms || '';
        var pspeech2 = res[0]?.meanings[1]?.partOfSpeech || '';
        var meaning = res[0]['meanings'][1]['definitions'][0] || '';
        var origin = res[0]['origin']|| '';
        var pWord = document.getElementById('word');
        pWord.innerHTML = word;
        var parPhon = document.getElementById('phonema');
        parPhon.innerHTML = phon;
        const parPSpeech = document.getElementById('partOfSpeech');
        parPSpeech.innerHTML = pspeech;
        var parDef = document.getElementById('def');
        parDef.innerHTML = '  ' + def + '<br><br>';
        var parDef2 = document.getElementById('def2');
        parDef2.innerHTML = '  ' + def2 + '<br><br>';
        var parDef3 = document.getElementById('def3');
        parDef3.innerHTML = '  ' + def3 + '<br><br>';

        let errorContainer = document.getElementById('error');
        errorContainer.style.display="none";


    }catch (error){
        let txt = document.getElementById('txt');
        let button = document.getElementById('btnSearch');
        let errorContainer = document.getElementById('error');
        let container = document.getElementById('container');
        container.style.display = "none";
        errorContainer.style.display="block";
        errorContainer.innerHTML = '<h2>' + "Sorry, couldn't find word  :(" + '</h2>';
        errorContainer.classList.add('h2');

        if(txt.value === ''){
            errorContainer.innerHTML = '<h2>' + "Write a word" + '</h2>';
        }

    }

}

function serifFont(){
    const option = document.getElementById('serif');
    const option2 = document.getElementById('sans');
    const option3 = document.getElementById('mono');
    const container = document.getElementById('container');
    const body = document.body;
    container.classList.add('fontSerif');
    container.classList.remove('fontSans');
    container.classList.remove('fontMono');
}

function sansFont(){
    const option = document.getElementById('sans');
    const option2 = document.getElementById('serif');
    const option3 = document.getElementById('mono');
    const container = document.getElementById('container');

    const body = document.body;
    container.classList.add('fontSans');
    container.classList.remove('fontSerif');
    container.classList.remove('fontMono');
}

function monoFont(){

    const option = document.getElementById('mono');
    const option2 = document.getElementById('serif');
    const option3 = document.getElementById('sans');
    const container = document.getElementById('container');
    const body = document.body;
    container.classList.add('fontMono');
    container.classList.remove('fontSerif');
    container.classList.remove('fontSans');
}


const playAudio = async () => {
    var txt = document.getElementById('txt').value;
    //console.log(txt);
    var url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
    var urlAPI = `${url}${txt}`;
    let response = await fetch(urlAPI);
    let res = await response.json();
    let audio = res[0].phonetics[0].audio
    console.log(audio);

    let audioP = document.getElementById('audio');
    audioP.setAttribute("src", audio);
    console.log(audioP);
    audioP.play();


}

document.addEventListener('DOMContentLoaded', function (){
const checkbox = document.getElementById('checkbox');
const body = document.body;
function darkMode(event){
        console.log(event.target.checked);
    if(event.target.checked) {
        body.classList.remove('light');
        body.classList.add('dark');
    }else{
        body.classList.remove('dark');
        body.classList.add('light');
    }
}
checkbox.addEventListener("change", darkMode);

});//DOM CONTENT LOADED
