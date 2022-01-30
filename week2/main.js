const AddButton=document.getElementById("add-buttton")
const container=document.getElementById("memo-container")
const Memoinput=document.getElementById("memo-input")


AddButton.onclick=function(){

const card =document.createElement("div")
card.className="card"
card.textContent=Memoinput.value

container.append(card)

const deleteButton=document.createElement("button")
deleteButton.className="delete"
deleteButton.textContent="削除"

deleteButton.onclick=function(){
    card.remove()
}
card.append(deleteButton)

Memoinput.value=""
    
//inputに入力された文字がtext
   /* const text =inputElement.value

    //memo=todoの入る箱を作る
    const memo=document.createElement("div")
    memo.className="memo"

   
    const todo=document.createElement("div")
    todo.className="todo"
    todo.textContent=text

    //memoの中にtodoを入れる
    memo.append(todo)


    const text =createCard(Memoinput.value)
    container.append(card)


    inputElement.value=""
    */
}

