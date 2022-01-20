const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

const feedbacks = [
  "残念！ゴリアテは巨人です",
  "残念！ゼニガメはクサガメの幼体だよ",
  "正解！ガニメデは木星の第三惑星だよん",
]

const choose = function (choiceNumber) {
  feedback.textContent = feedbacks[choiceNumber]
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
