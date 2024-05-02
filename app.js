let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-game");
let winAnnc = document.querySelector(".win-annc");
let win = document.querySelector(".win");
let container = document.querySelector(".container");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],

];
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(turnO) {
            btn.innerText = "O";
            turnO = false;
        } else {
            btn.innerText = "X";
            turnO = true;
        };
        btn.disabled = true;

        checkWinner();
    });
}
);

const disableBoxes = () => {
    for(let btn of btns) {
        btn.disabled = true;
        win.classList.remove("hide")
    }
};
const enableBoxes = () => {
    for(let btn of btns) {
        btn.disabled = false;
        btn.innerText = "";
        win.classList.add("hide")
    }
};

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1value = btns[pattern[0]].innerText;
        let pos2value = btns[pattern[1]].innerText;
        let pos3value = btns[pattern[2]].innerText;

        if(pos1value != "" && pos2value != "" && pos3value != "") {
            if(pos1value === pos2value && pos2value === pos3value) {
                console.log("Winner");
                disableBoxes();
                resetBtn.classList.add("hide")
               container.classList.add("hide");
            }
        }
    }
};

const reset = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    resetBtn.classList.remove("hide")
    container.classList.remove("hide")
};


resetBtn.addEventListener("click", reset);
newGame.addEventListener("click", reset);

