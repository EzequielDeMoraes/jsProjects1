const formEL = document.getElementById("form");
const inputFormButtom = document.getElementById("buttom");
const inputFormText = document.getElementById("input");
const scoreEl = document.getElementById("score");

const randomNumber1 = Math.ceil(Math.random() * 10);
const randomNumber2 = Math.ceil(Math.random() * 10);
console.log(randomNumber1, randomNumber2);

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;
const questuion1 = document.getElementById("question");

questuion1.innerText = `Qual o resultado de ${randomNumber1} multiplicado por ${randomNumber2} ?`;

const funcaoDeMultiplicacao = randomNumber1 * randomNumber2;
console.log(`esta e a resposta ${funcaoDeMultiplicacao}`);

formEL.addEventListener("submit", () => {
  const userAns = +inputFormText.value;
  if (userAns === funcaoDeMultiplicacao) {
    score++;
    updateLocalStorange();
  } else {
    score--;
    updateLocalStorange();
  }
});

function updateLocalStorange() {
  localStorage.setItem("score", JSON.stringify(score));
}

// inputFormButtom.addEventListener("click", funcaoDeMultiplicacao);
