import { questions } from "../data/questions.js";

const questionTest = document.querySelector(".question p");
const rep1 = document.getElementById("btn1");
const rep2 = document.querySelector("#btn2");
const rep3 = document.querySelector("#btn3");
const rep4 = document.querySelector("#btn4");

questionTest.textContent = questions[0].question;
rep1.textContent = questions[0].choix[0];
rep2.textContent = questions[0].choix[1];
rep3.textContent = questions[0].choix[2];
rep4.textContent = questions[0].choix[3];
