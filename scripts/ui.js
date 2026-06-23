import { questions } from "../data/questions.js";

const homePage = document.querySelector(".page_accueil");
const quizPage = document.querySelector(".page_quiz");
const resultPage = document.querySelector(".page_resultat");
const startBtn = document.querySelector("#demarrer");

// Fonction hideScreen
function hideScreen(page) {
  page.style.display = "none";
}

// Fonction showScreen
function showScren(page) {
  page.style.display = "block";
}

// Game starter
startBtn.addEventListener("click", () => {
  hideScreen(homePage);
  hideScreen(resultPage);
  showScren(quizPage);
});

const questionTest = document.querySelector(".question p");
const response = document.querySelectorAll(".response");

function validatorResponse(questionIndex) {
  questionTest.textContent = questions[questionIndex].question;

  response.forEach((element, i) => {
    element.textContent = questions[questionIndex].choix[i];
    element.addEventListener("click", () => {
      if (i === questions[questionIndex].reponse) {
        element.style.background = "#4CAF50";
        element.style.color = "white";
      } else {
        element.style.background = "#F44336";
        element.style.color = "white";
      }
    });
  });
}

// display question
const intervalle = setInterval(() => {
  let index = Math.floor(Math.random() * questions.length);
  //window.alert(index);
  validatorResponse(index);
}, 30000);
