document.cookie = "username=JohnDoe; Secure; SameSite=None";
document.title = "Game Start"


let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")

window.onload = function() {
Swal.fire({
    title: 'LET THE BATTLE BEGIN!.',
    text: 'The stage of battle is set!',
    allowOutsideClick: false,
    didOpen: () => {
        Swal.showLoading();
    }
});

    setTimeout(() => {
        Swal.close();

    let fightAudio = new Audio("../Videos/fight-sound-effect-230560.mp3");
    fightAudio.play();


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
    
}, 2000); 

};


let playerPosition = 100;

window.addEventListener("keydown", function(event){
    // console.log("test" , event.keyCode);
        
        let player1Img = player1.querySelector("img");
    

        if (player1Img.src.includes("https://www.fightersgeneration.com/characters/alex-shirtrip.gif") || player1Img.src.includes("https://www.fightersgeneration.com/characters/alex-ts-stance.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters/alex-ts-stance.gif";
            if(event.keyCode === 84){
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

     // **************************************************************


        if (player1Img.src.includes("https://www.fightersgeneration.com/characters/dio-walkf3.gif") || player1Img.src.includes("https://www.fightersgeneration.com/characters/dio-walkf.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters/dio-walkf.gif";
            if(event.keyCode === 84){
                player1Img.src = "https://www.fightersgeneration.com/characters/dio-spinkick.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters/dio-walkf.gif";
                }, 1000);
            }
            if(event.keyCode === 81){
                player1Img.src = "https://www.fightersgeneration.com/characters/dio-rolling.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters/dio-walkf.gif";
                }, 1000);
            }
            if(event.keyCode === 87){
                player1Img.src = "https://www.fightersgeneration.com/characters/dio-air.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters/dio-walkf.gif";
                }, 1000);
            }
            if(event.keyCode === 69){
                player1Img.src = "https://www.fightersgeneration.com/characters/dio-c2.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters/dio-walkf.gif";
                }, 1000);
            }
        }

        // **************************************************************

        if (player1Img.src.includes("https://www.fightersgeneration.com/characters2/k-firefix1.gif") || player1Img.src.includes("https://www.fightersgeneration.com/characters2/k-stance1.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters2/k-stance1.gif";
            if(event.keyCode === 84){
                player1Img.src = "https://www.fightersgeneration.com/characters2/k-jumps.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters2/k-stance1.gif";
                }, 1000);
            }
            if(event.keyCode === 81){
                player1Img.src = "https://www.fightersgeneration.com/characters2/k-upper.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters2/k-stance1.gif";
                }, 1000);
            }
            if(event.keyCode === 87){
                player1Img.src = "https://www.fightersgeneration.com/characters2/k-spinhookkick.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters2/k-stance1.gif";
                }, 1000);
            }
            if(event.keyCode === 69){
                player1Img.src = "https://www.fightersgeneration.com/characters2/k-crouchpunch.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters2/k-stance1.gif";
                }, 1000);
            }
        }

        // **************************************************************

        if (player1Img.src.includes("https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-win.gif") || player1Img.src.includes("https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-taunt.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-taunt.gif";
            if(event.keyCode === 84){
                player1Img.src = "https://www.fightersgeneration.com/nz7/char/breakers/condor/New%20folder/condor-breakers-special-grab.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-taunt.gif";
                }, 1000);
            }
            if(event.keyCode === 81){
                player1Img.src = "https://www.fightersgeneration.com/nz7/char/breakers/condor/New%20folder/condor-breakers-upper.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-taunt.gif";
                }, 1000);
            }
            if(event.keyCode === 87){
                player1Img.src = "https://www.fightersgeneration.com/nz7/char/breakers/condor/New%20folder/condor-breakers-special-grab2.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-taunt.gif";
                }, 1000);
            }
            if(event.keyCode === 69){
                player1Img.src = "https://www.fightersgeneration.com/nz7/char/breakers/condor/New%20folder/condor-breakers-sliding-dropkick.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-taunt.gif";
                }, 1000);
            }
        }

        // **************************************************************

        if (player1Img.src.includes("https://www.fightersgeneration.com/np7/char/gifs/gai/gai-intro.gif") ||  player1Img.src.includes("https://www.fightersgeneration.com/characters/gai-kofxistance.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters/gai-kofxistance.gif";
            if(event.keyCode === 84){
                player1Img.src = "https://www.fightersgeneration.com/np7/char/gifs/gai/attacks/gai-c3.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters/gai-kofxistance.gif";
                }, 1000);
            }
            if(event.keyCode === 81){
                player1Img.src = "https://www.fightersgeneration.com/np7/char/gifs/gai/attacks/gai-rollslam.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters/gai-kofxistance.gif";
                }, 1000);
            }
            if(event.keyCode === 87){
                player1Img.src = "https://www.fightersgeneration.com/np7/char/gifs/gai/attacks/gai-grab.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters/gai-kofxistance.gif";
                }, 1000);
            }
            if(event.keyCode === 69){
                player1Img.src = "https://www.fightersgeneration.com/np7/char/gifs/gai/attacks/gai-initiatesuper.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters/gai-kofxistance.gif";
                }, 1000);
            }
        }

        // **************************************************************

        if (player1Img.src.includes("https://www.fightersgeneration.com/characters3/spidey-whateva.gif") ||  player1Img.src.includes("https://www.fightersgeneration.com/characters3/spidey-walk1.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters3/spidey-walk1.gif";
            if(event.keyCode === 84){
                player1Img.src = "https://www.fightersgeneration.com/characters3/spider-sting.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters3/spidey-walk1.gif";
                }, 2000);
            }
            if(event.keyCode === 81){
                player1Img.src = "https://www.fightersgeneration.com/characters3/m-spidey.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters3/spidey-walk1.gif";
                }, 4000);
            }
            if(event.keyCode === 87){
                player1Img.src = "https://www.fightersgeneration.com/characters3/spidey-block.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters3/spidey-walk1.gif";
                }, 1000);
            }
            if(event.keyCode === 69){
                player1Img.src = "https://www.fightersgeneration.com/characters3/spidey-dizzied.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters3/spidey-walk1.gif";
                }, 1000);
            }
        }

        // **************************************************************

        if (player1Img.src.includes("https://www.fightersgeneration.com/characters4/yashiro-heavykick.gif") ||  player1Img.src.includes("https://www.fightersgeneration.com/characters4/yashiro-2k3stance.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters4/yashiro-2k3stance.gif";
            if(event.keyCode === 84){
                player1Img.src = "https://www.fightersgeneration.com/characters4/yash-jkick.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters4/yashiro-2k3stance.gif";
                }, 1000);
            }
            if(event.keyCode === 81){
                player1Img.src = "https://www.fightersgeneration.com/characters4/yashiro-pushups.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters4/yashiro-2k3stance.gif";
                }, 1000);
            }
            if(event.keyCode === 87){
                player1Img.src = "https://www.fightersgeneration.com/characters4/yash-crouchattacks.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters4/yashiro-2k3stance.gif";
                }, 1000);
            }
            if(event.keyCode === 69){
                player1Img.src = "https://www.fightersgeneration.com/characters4/yash-roll.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters4/yashiro-2k3stance.gif";
                }, 1000);
            }
        }

        // **************************************************************

        if (player1Img.src.includes("https://www.fightersgeneration.com/characters/venom-wav.gif") ||  player1Img.src.includes("https://www.fightersgeneration.com/characters/venom-v.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters/venom-v.gif";
            if(event.keyCode === 84){
                player1Img.src = "https://www.fightersgeneration.com/characters/venom-block.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters/venom-v.gif";
                }, 1000);
            }
            if(event.keyCode === 81){
                player1Img.src = "https://www.fightersgeneration.com/characters/venom-mp.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters/venom-v.gif";
                }, 1000);
            }
            if(event.keyCode === 87){
                player1Img.src = "https://www.fightersgeneration.com/characters/venom-win1.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters/venom-v.gif";
                }, 1000);
            }
            if(event.keyCode === 69){
                player1Img.src = "https://www.fightersgeneration.com/characters/venomhit.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters/venom-v.gif";
                }, 1000);
            }
        }

        // **************************************************************

        if (player1Img.src.includes("https://www.fightersgeneration.com/characters4/tamtam-headhit.gif") ||  player1Img.src.includes("https://www.fightersgeneration.com/characters4/snk-tamtam.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters4/snk-tamtam.gif";
            if(event.keyCode === 84){
                player1Img.src = "https://www.fightersgeneration.com/characters4/tamtam-bk.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters4/snk-tamtam.gif";
                }, 1000);
            }
            if(event.keyCode === 81){
                player1Img.src = "https://www.fightersgeneration.com/characters4/tamtam-swingspear.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters4/snk-tamtam.gif";
                }, 1000);
            }
            if(event.keyCode === 87){
                player1Img.src = "https://www.fightersgeneration.com/characters4/tamtam-fireball.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters4/snk-tamtam.gif";
                }, 1000);
            }
            if(event.keyCode === 69){
                player1Img.src = "https://www.fightersgeneration.com/characters4/tamtam-crazymove.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters4/snk-tamtam.gif";
                }, 1000);
            }
        }

        // **************************************************************

        if (player1Img.src.includes("https://www.fightersgeneration.com/characters2/jill-hp.gif") ||  player1Img.src.includes("https://www.fightersgeneration.com/characters2/jill-inkribbon.gif")) {
            player1Img.src = "https://www.fightersgeneration.com/characters2/jill-inkribbon.gif";
            if(event.keyCode === 84){
                player1Img.src = "https://www.fightersgeneration.com/characters2/jill-uppercut.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters2/jill-inkribbon.gif";
                }, 1000);
            }
            if(event.keyCode === 81){
                player1Img.src = "https://www.fightersgeneration.com/characters2/jill-grenade.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters2/jill-inkribbon.gif";
                }, 1000);
            }
            if(event.keyCode === 87){
                player1Img.src = "https://www.fightersgeneration.com/characters2/jill-lmk.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters2/jill-inkribbon.gif";
                }, 1000);
            }
            if(event.keyCode === 69){
                player1Img.src = "https://www.fightersgeneration.com/characters2/jill-knife.gif"
                setTimeout(function () {
                    player1Img.src = "https://www.fightersgeneration.com/characters2/jill-inkribbon.gif";
                }, 1000);
            }
        }

        // **************************************************************

    
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
    
    function showControls() {
        Swal.fire({
            title: 'Game Controls',
            text: 'Here are your character controls:',
            icon: 'info',
            confirmButtonText: 'Got it!',
            html: `
                <div style="font-size: 18px; font-weight: bold;">
                    <p><strong>A</strong>: Move Left</p>
                    <p><strong>D</strong>: Move Right</p>
                    <p><strong>Q</strong>: Power 1</p>
                    <p><strong>W</strong>: Power 2</p>
                    <p><strong>E</strong>: Power 3</p>
                    <p><strong>T</strong>: Power 4</p>
                </div>`,
            showCancelButton: false,
            showConfirmButton: true,
            background: '#f7f7f7',
            color: '#333',
            padding: '20px'
        });
    }


