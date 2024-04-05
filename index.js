let computerGuess;
let userGuess=[];
let userGuessUpdate=document.getElementById("text output");
let userNumberUpdate=document.getElementById("inputBox");
// math.floor =far not getting a decimal number
const init=() =>{
    computerGuess=Math.floor(Math.random()*100);
   // console.log(computerGuess);
   document.getElementById("newGameButton").style.display="none";
   document.getElementById("gamearea").style.display="none";
};
const startGame=() =>{
    document.getElementById("welcomeScreen").style.display="none";
    document.getElementById("gamearea").style.display="block";
};
//reload page
const newGameBegin=()=>{
    window.location.reload();
};
// start new game
const startNewGame=()=>{
    document.getElementById("newGameButton").style.display="inline"; 
    userNumberUpdate.setAttribute("disabled",true);
};
// logic of game
const compareGuess=()=>{
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess=[...userGuess,userNumber];//spread counter
    document.getElementById("guesses").innerHTML=userGuess;
    // check value is low or high
    if(userGuess.length<maxGuess){
    if(userNumber>computerGuess){
userGuessUpdate.innerHTML="Your guess is High 😃";
userNumberUpdate.value="";
}
    else if (userNumber<computerGuess){
    userGuessUpdate.innerHTML="Your guess is Low 😉";
    userNumberUpdate.value="";} 
        else {
        userGuessUpdate.innerHTML="It's Correct 😊";
        userNumberUpdate.value="";;
        }}
        else{
            if(userNumber>computerGuess){
                userGuessUpdate.innerHTML="You  Loose!!";
                userNumberUpdate.value="";
                startNewGame();
                }
                    else if (userNumber<computerGuess){
                    userGuessUpdate.innerHTML="You Loose!!" ;
                    userNumberUpdate.value="";
                    startNewGame();
                } 
                        else {
                        userGuessUpdate.innerHTML="It's Correct 😊";
                        userNumberUpdate.value="";
                        startNewGame();
                        }
        }
        document.getElementById("attempts").innerHTML=userGuess.length;
    
};
const easyMode = () =>{
    maxGuess=10;
    startGame();
};
const HardMode = () =>{
    maxGuess=5;
    startGame();
};