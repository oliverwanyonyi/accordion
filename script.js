"use-strict";

const accordion = document.querySelector(".accordion");
const questions = accordion.querySelectorAll(".question");
const items = accordion.querySelectorAll("li");

function toggleAnswer() {
  const thisItem = this.parentNode;
  console.log(thisItem);
  items.forEach((item) => {
    if (thisItem === item) {
      console.log(thisItem === item);
      item.classList.toggle("open");
      return;
    }
    item.classList.remove("open");
  });
}
questions.forEach((quiz) => {
  quiz.addEventListener("click", toggleAnswer);
});
