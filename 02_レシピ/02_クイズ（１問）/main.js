const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

const quiz = {
  text: "これは何という山でしょう",
  image: "富士山.jpg",
  chooses: [
    {
      text: "ゴリアテ",
      feedback: "残念！ゴリアテは巨人です",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメはクサガメの幼体だよ",
    },
    {
      text: "ガニメデ",
      feedback: "不正解！ガニメデは木星の第三惑星だよん",
    },
    {
      text: "富士山",
      feedback: "正解！桜が綺麗ですね",
    },
  ],
}

const reloadQuiz = function () {
  quizText.textContent = "Q. " + quiz.text

  quizImage.src = "./images/" + quiz.image

  choice1.textContent = quiz.chooses[0].text
  choice2.textContent = quiz.chooses[1].text
  choice3.textContent = quiz.chooses[2].text
  choice4.textContent = quiz.chooses[3].text
}

const choose = function (choiceNumber) {
  feedback.textContent = quiz.chooses[choiceNumber].feedback
}

choice1.onclick = function () {
  choose(0)
}

choice2.onclick = function () {
  choose(1)
}

choice3.onclick = function () {
  choose(2)
}

choice4.onclick = function () {
  choose(3)
}

reloadQuiz()
