const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  highScores.push(score);

  // sorting scores in ascending order 
  highScores.sort((a, b) => b.score - a.score);

  // splicing at 5th index - cutting off highscores after 5
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));

  window.location.href = "/Quiz-App/";
  console.log(highScores);
};
