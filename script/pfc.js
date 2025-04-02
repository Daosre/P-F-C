let scorePlayer = 0;
let scoreIA = 0;
let choicePlayer;
let choiceIA;
const choice = {
  rock: "Rock",
  paper: "Paper",
  cissor: "Cissor",
  well: "WELL",
};
function rockPaperCissor(randomNbr) {
  if (randomNbr === 0) {
    return choice.rock;
  } else if (randomNbr === 1) {
    return choice.paper;
  } else if (randomNbr === 2) {
    return choice.cissor;
  } else {
    return choice.well;
  }
}
function getRandomInt() {
  let randomNumber = Math.floor(Math.random() * (3 - 0) + 0);
  return rockPaperCissor(randomNumber);
}

function featureWell() {
  let randomNumber = Math.floor(Math.random() * (4 - 0) + 0);
  return rockPaperCissor(randomNumber);
}
choicePlayer = choice.paper;

function result() {
  if (scoreIA + scorePlayer <= 4) {
    choiceIA = getRandomInt();
  } else {
    choiceIA = featureWell();
  }
  switch (true) {
    case choiceIA === choicePlayer:
      return "Equality";
    case (choiceIA === choice.rock && choicePlayer === choice.paper) ||
      (choiceIA === choice.paper && choicePlayer === choice.cissor) ||
      (choiceIA === choice.cissor && choicePlayer === choice.rock):
      if (scorePlayer >= 998) {
        // changer par le dom
        scorePlayer = 0;
      } else {
        scorePlayer++;
      }
      return "Player win !";
    case (choiceIA === choice.paper && choicePlayer === choice.rock) ||
      (choiceIA === choice.cissor && choicePlayer === choice.paper) ||
      (choiceIA === choice.rock && choicePlayer === choice.cissor):
      scoreIA++;
      return "IA win !";
    case choiceIA === choice.well:
      scoreIA = 999;
      return "IA DESTROY HUMANITY";
    default:
      return "Error";
  }
}

for (let i = 0; i < 10; i++) {
  console.log(result());
}
