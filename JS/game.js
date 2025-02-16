document.title = "Game Start"


let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")

window.onload = function() {
// Swal.fire({
//     title: 'LET THE BATTLE BEGIN!.',
//     text: 'The stage of battle is set!',
//     allowOutsideClick: false,
//     didOpen: () => {
//         Swal.showLoading();
//     }
// });

    setTimeout(() => {
        Swal.close();

    // let fightAudio = new Audio("../Videos/fight-sound-effect-230560.mp3");
    // fightAudio.play();


    let player1Character = localStorage.getItem("player1Character");
    let player2Character = localStorage.getItem("player2Character");
    let selectedStage = localStorage.getItem("selectedStage");


    document.body.style.backgroundImage = `url('images/${selectedStage}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height = "100vh";
    document.body.style.width = "100vw";

    // let player1Div = document.createElement("div");
    // player1Div.classList.add("player", "player1");
    // player1Div.innerHTML = `<img src="${player1Character}" alt="Player 1">`;

    // let player2Div = document.createElement("div");
    // player1Div.classList.add("player", "player1");
    // player2Div.innerHTML = `<img src="${player2Character}" alt="Player 2">`;

    // document.body.appendChild(player1Div);
    // document.body.appendChild(player2Div);

    player1.innerHTML = `<img src="${player1Character}" alt="Player 1">`
    player2.innerHTML = `<img src="${player2Character}" alt="Player 2">`
    
}, 1000); 

};