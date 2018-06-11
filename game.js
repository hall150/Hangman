// Array of words 
var oddWord = ['test']

// Choose words radomly

var underScore = [];
var rightGuess = [];
var wrongGuess = [];
var incCounter = 10;
var winScore = 0;



var randNum = Math.floor(Math.random() * oddWord.length);
var randWord = oddWord[randNum];
    randWord = randWord.toLowerCase();
    
// Dom mani - replace whats in each repsective div

var docUnderScore = document.getElementsByClassName('underscore');
var docrightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');

console.log(randWord);

// Creat underscore based on lenght of word


var blankUnderscore = () => {
    for(var i = 0; i < randWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
console.log(blankUnderscore());

document.addEventListener('keypress', (event) => {
    //convert  and make fillable
      
        var keyWord = String.fromCharCode(event.keyCode);

if(randWord.indexOf(keyWord) > -1) {
    
            rightGuess.push(keyWord);
    
            underScore[randWord.indexOf(keyWord)] = keyWord;
            docUnderScore[0].innerHTML = underScore.join(' ');
            docrightGuess[0].innerHTML = rightGuess;

    
            if(underScore.join('') == randWord) {
                
                winScore ++;
                console.log (winScore);
                $( ".wins" ).text( winScore );
                alert('You Win');
    
            }
    
        } 
    
    // If wrong push to wrong array - log onto doc
        else {wrongGuess.push(keyWord);
            docWrongGuess[0].innerHTML = wrongGuess;
            incCounter += -1;
            $( ".lives" ).text( incCounter );
            if(incCounter === 0) {
                alert("You Lose");






    

// if(randWord.indexOf(keyWord) > -1) {

//     // If right push to right array
    
//             rightGuess.push(keyWord);
    
//     //replace doc with correct letter
    
//             underScore[randWord.indexOf(keyWord)] = keyWord;
//             docUnderScore[0].innerHTML = underScore.join(' ');
//             docrightGuess[0].innerHTML = rightGuess;
    
// // Check if guess is right 
// if(randWord.indexOf(keyWord) === -1) {
//     wrongGuess.push(keyWord);
//     docWrongGuess[0].innerHTML = wrongGuess;
//     docUnderScore[0].innerHTML = underScore.join(' ');
//     incCounter += -1;
// }

// else {
// var index = randWord.indexOf(keyWord);
//     while (index >= 0) {
//       index = randWord.indexOf(keyWord, index + 1);


    //for (var a = 0; a < randWord.length; a++) {
//    if (randWord.indexOf(keyWord, a) >= 0) {
    // Above statement not working because it finds positive code each pass until it it past the letter    // If right push to right array
// change to only pull 1
//int n = randWord.indexOf(keyWord)
}}})
