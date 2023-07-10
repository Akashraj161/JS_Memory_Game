const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
const resultDisplay = document.getElementById("result");
const gridDisplay = document.querySelector(".grid");
let cardChosen = [];
let cardChosenId = [];
let cardCollected = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipcard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkForMatch() {
  const cards = document.querySelectorAll("img");
  let firstImgId;
  let secondImgId;
  if (cardChosen.length === 2) {
    firstImgId = cardChosenId[0];
    secondImgId = cardChosenId[1];
  }

  if (firstImgId == secondImgId && firstImgId != undefined) {
    cards[firstImgId].setAttribute("src", "images/blank.png");
    cards[secondImgId].setAttribute("src", "images/blank.png");
    alert("You have clicked the same image!");
  } else if (cardChosen[0] === cardChosen[1] && cardChosen[0] != undefined) {
    alert("You Have Found a Match!! YEY!!");
    cards[firstImgId].setAttribute("src", "images/white.png");
    cards[secondImgId].setAttribute("src", "images/white.png");
    cards[firstImgId].removeEventListener("click", flipcard);
    cards[secondImgId].removeEventListener("click", flipcard);
    cardCollected.push(cardChosen);
  } else if (cardChosen[0] !== cardChosen[1]) {
    cards[firstImgId].setAttribute("src", "images/blank.png");
    cards[secondImgId].setAttribute("src", "images/blank.png");
    alert("Try Again ");
  }

  cardChosen = [];
  cardChosenId = [];
  resultDisplay.textContent = cardCollected.length;
  if (cardCollected.length == cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations! You found All of them";
  }
}

function flipcard() {
  // console.log(cardArray);
  const cardId = this.getAttribute("data-id");
  // console.log(cardArray[cardId].name);
  if (cardChosen.length < 2) {
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
  }

  if (cardChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}
