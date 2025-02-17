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


    player1.innerHTML = `<img src="${player1Character}" alt="Player 1">`
    player2.innerHTML = `<img src="${player2Character}" alt="Player 2">`
    
}, 1000); 

};


let playerPosition = 100;

window.addEventListener("keydown", function(event){
    console.log("test" , event.keyCode);
        
        let player1Img = player1.querySelector("img");
    

        if (player1Img.src.includes("https://www.fightersgeneration.com/characters/alex-shirtrip.gif") || player1Img.src.includes("https://www.fightersgeneration.com/characters/alex-ts-stance.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters/alex-ts-stance.gif";
            if(event.keyCode === 32){
                player1Img.src = "https://www.fightersgeneration.com/characters/alex-jump-forward.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters/alex-ts-stance.gif";
                }, 1000);
            }
            if(event.keyCode === 81){
                player1Img.src = "https://www.fightersgeneration.com/characters/alex-air5.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters/alex-ts-stance.gif";
                }, 1000);
            }
            if(event.keyCode === 87){
                player1Img.src = "https://www.fightersgeneration.com/characters/alex-rollin.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters/alex-ts-stance.gif";
                }, 1000);
            }
            if(event.keyCode === 69){
                player1Img.src = "https://www.fightersgeneration.com/characters/alex-dashelbow.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters/alex-ts-stance.gif";
                }, 1000);
            }
            
        }
        if (player1Img.src.includes("https://www.fightersgeneration.com/characters/dio-walkf3.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters/dio-walkf.gif";
        }
        if (player1Img.src.includes("https://www.fightersgeneration.com/characters2/k-firefix1.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters2/k-stance1.gif";
        }
        if (player1Img.src.includes("https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-win.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-taunt.gif";
        }
        if (player1Img.src.includes("https://www.fightersgeneration.com/np7/char/gifs/gai/gai-intro.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters/gai-kofxistance.gif";
        }
        if (player1Img.src.includes("https://www.fightersgeneration.com/characters3/spidey-whateva.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters3/m-spiderman.gif";
        }
        if (player1Img.src.includes("https://www.fightersgeneration.com/characters4/yashiro-heavykick.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters4/yashiro-2k3stance.gif";
        }
        if (player1Img.src.includes("https://www.fightersgeneration.com/characters/venom-wav.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters/venom-smile.gif";
        }
        if (player1Img.src.includes("https://www.fightersgeneration.com/characters4/tamtam-headhit.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters4/snk-tamtam.gif";
        }
        if (player1Img.src.includes("https://www.fightersgeneration.com/characters2/jill-hp.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters2/jill-inkribbon.gif";
        }
    
        if (event.keyCode === 68 && playerPosition <= 700 || event.keyCode === 39 && playerPosition <= 700) {
            playerPosition += 20;
            player1.style.transform = `translateX(${playerPosition}px)`; 
        }
        // console.log("left", playerPosition);
        
        
        if (event.keyCode === 65 && playerPosition > 0 || event.keyCode === 37 && playerPosition > 0 ) {
            playerPosition -= 20; 
            player1.style.transform = `translateX(${playerPosition}px)`; 
        }

    });
    