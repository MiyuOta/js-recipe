const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")
const addButton1 = document.getElementById("add-button1")

addButton.onclick = function () {
  const card = createCard(inputElement.value)
  container.append(card)

  inputElement.value = ""
}

addButton1.onclick = function () {
  const card = createCard(inputElement.value)
  container.append(card)

  inputElement.value = ""
}

window.document.onkeydown = function (event) {
  if (event.key === "Enter") {
    const card = createCard(inputElement.value)
    container.append(card)

    inputElement.value = ""
  }
}

const createCard = function (text) {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function () {
    card.remove()
  }

  card.append(deleteButton)

  return card
}
