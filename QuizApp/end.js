const username = document.getElementById("username");
const saveScoreBtn=document.getElementById("saveScoreBtn");
const finalscore = document.getElementById("finalscore");
const mostRecentScore = localStorage.getItem("mostRecentScore");


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_High_Scores = 5;

finalscore.innerText = mostRecentScore;

username.addEventListener("keyup", () =>{
    saveScoreBtn.disabled = !username.value;
});



saveHighScore = (e) =>{
    console.log("Clicked the save button");
    e.preventDefault();


const score = {
    // score: Math.floor(Math.random()*100),
    score: mostRecentScore,
    name: username.value
};

highScores.push(score);
highScores.sort((a,b)=> b.score - a.score);
highScores.splice(5);

localStorage.setItem("highScores", JSON.stringify(highScores));
//window.location.assign("/");
alert("Saved Successfully !");

};
