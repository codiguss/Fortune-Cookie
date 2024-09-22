// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnStart = document.querySelector("#btnStart")
const btnAgain = document.querySelector("#btnAgain")
const messageElement = document.querySelector(".message")

// Mensagens e classes
const mensagens = [
  "You will have a amazing day!",
  "A big opportunity is on the way.",
  "You will find what you are looking for.",
  "Fortune favors the bold.",
  "Your efforts will soon be rewarded."
]

// Funções callback
function toggleScreen() {
  
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  
}

// Função para alterar a mensagem aleatoriamente
function changeMessage() {
  const randomIndex = Math.floor(Math.random() * mensagens.length)
  messageElement.textContent = mensagens[randomIndex]
}

//Eventos
btnStart.addEventListener('click', () => {
  toggleScreen()
  changeMessage()
})
btnAgain.addEventListener('click', toggleScreen)