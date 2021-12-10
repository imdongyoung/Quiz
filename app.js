import { question1 } from "./questionJson.js";
import { question2 } from "./questionJson.js";
let question;

const choseQuiz = prompt(
  "문제 선택 \n1.애플리케이션 배포 \n2.응용SW기초기술 활용 \n3.애플리케이션 테스트 수행 \n4.UI테스트 "
);

if (choseQuiz == null) location.reload();
else if (choseQuiz == 1) question = question1;
else if (choseQuiz == 2) question = question2;
else if (choseQuiz == 3) question = question1;
else if (choseQuiz == 4) question = question1;
else location.reload();

let getQuestion = [];
let missQuestion = [];
let spliceQuestion;
let QuestionCount = 1;
let getQuestionCount = 0;
let MissQuestionCount = 0;
let remaining = question.length;

const $questionForm = document.querySelector(".question");
const $input = document.querySelector(".input");
const $next = document.querySelector(".next");
const $getQuestionCount = document.querySelector(".getQuestionCount");
const $MissQuestionCount = document.querySelector(".MissQuestionCount");
const $remaining = document.querySelector(".remaining");
const $clear = document.querySelector(".clear");
const $clearScore1 = document.querySelector(".clearScore1>p");
const $clearScore2 = document.querySelector(".clearScore2>p");
const $clearScore1Ul = document.querySelector(".clearScore1>ul");
const $clearScore2Ul = document.querySelector(".clearScore2>ul");

let randomQuestion = Math.floor(Math.random() * question.length);

const changeQuestion = () => {
  if (question.length <= 0) {
    $clear.style.display = "flex";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    $clearScore1.innerText = `맞힌 문제 : ${getQuestion.length}개`;
    $clearScore2.innerText = `틀린 문제 : ${missQuestion.length}개`;
    missQuestion.map((i) => {
      const li = document.createElement("li");
      $clearScore2Ul.appendChild(
        li
      ).innerText = `${i[0].question} \n 정답 : ${i[0].answer}`;
    });
    document.body.addEventListener("click", () => {
      location.reload();
    });
    return;
  }
  randomQuestion = Math.floor(Math.random() * question.length);
  $questionForm.innerText = `${QuestionCount}번문제) ${question[randomQuestion].question}`;
  remaining = question.length;
  $remaining.innerText = `남은 문제 : ${remaining}`;
};

const printQuestion = (result) => {
  if (result == 1) {
    spliceQuestion = question.splice(randomQuestion, 1);
    getQuestion.push(spliceQuestion);
  } else {
    spliceQuestion = question.splice(randomQuestion, 1);
    missQuestion.push(spliceQuestion);
  }
  changeQuestion();
};

const getQuestionEffect = () => {
  $input.style.border = "none";
  $questionForm.style.color = "#000";
  QuestionCount++;
  printQuestion(1);
};

const missQuestionEffect = () => {
  $input.style.border = "none";
  $questionForm.style.color = "#000";
  QuestionCount++;
  printQuestion(0);
};

const checkQuestion = () => {
  if ($input.value === question[randomQuestion].answer) {
    $input.style.border = "3px solid #33e99d";
    getQuestionCount++;
    $getQuestionCount.innerText = `맞힌 문제 : ${getQuestionCount}`;
    $input.value = "";
    $questionForm.innerText = "맞았습니다!";
    $questionForm.style.color = "#33e99d";
    setTimeout(getQuestionEffect, 1000);
  } else {
    $input.style.border = "3px solid #ff775f";
    $input.value = "";
    MissQuestionCount++;
    $MissQuestionCount.innerText = `틀린 문제 : ${MissQuestionCount}`;
    $questionForm.innerHTML = `틀렸습니다  <span style="color: #000;">정답 : ${question[randomQuestion].answer}</span>`;
    $questionForm.style.color = "#ff775f";
    setTimeout(missQuestionEffect, 2000);
  }
};

$questionForm.innerText = `${QuestionCount}번문제) ${question[randomQuestion].question}`;
$getQuestionCount.innerText = `맞힌 문제 : ${getQuestionCount}`;
$MissQuestionCount.innerText = `틀린 문제 : ${MissQuestionCount}`;
$remaining.innerText = `남은 문제 : ${remaining}`;
$next.addEventListener("click", () => {
  if ($input.value == "") {
    alert("답을 입력해주세요");
  }
  checkQuestion();
});
$input.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    if ($input.value == "") {
      alert("답을 입력해주세요");
      return;
    }
    checkQuestion();
  }
});
