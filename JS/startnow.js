    document.title = "Start Now";

    let audio = document.getElementById("backgroundAudio");
    let buttoggleButtonton = document.getElementById("toggleButton");

    window.onload = function() {

        let pleasePlay = audio.play();
            if (pleasePlay !== undefined) {
                pleasePlay.then(() => {
                    audio.muted = false;
                    toggleButton.innerText = "🔇 Mute";
                })
            }

            
            toggleButton.addEventListener("click", function() {
                if (audio.muted) {
                    audio.muted = false;
                    toggleButton.innerText = "🔇 Mute";
                } else {
                    audio.muted = true;
                    toggleButton.innerText = "🔊 Play";
                }
            
            
                if (audio.paused) {
                    audio.play();
                }
            });
    };



    // ************************************************************************** //


    setTimeout(() => {
        let img = document.createElement("img");
        img.src = "images/img2.jpg";
        img.style.position = "fixed";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100vw";
        img.style.height = "100vh";
        img.style.objectFit = "cover";
        img.style.zIndex = "-1";
        img.id = "tempImage";
        

        img.onload = () => {
            document.body.appendChild(img);

            setTimeout(() => {
                img.remove();
            }, 3000);
        };
    }, 0);



    // ***********************************************************************//

    document.body.innerHTML += `
        <video 
            src="Videos/startnow-background.mp4" 
            autoplay 
            loop 
            muted
            style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                object-fit: cover;
                z-index: -1;
                filter: grayscale(100%);
            "
        ></video>
    `;





    // *********************************************************************//

    document.addEventListener("DOMContentLoaded", function () {
        let sec3 = document.getElementById("sec3");
        sec3.style.visibility = "hidden";
        sec3.style.opacity  = "0";
        sec3.style.transition = "opacity 1s ease-in-out";
        
        setTimeout(() => {
            sec3.style.visibility = "visible";
            sec3.style.opacity = "1";
        }, 3000);
        
        });


    // ************************************************************************** //


    setTimeout(() => {
        
    let characters = {
        image1: "https://www.fightersgeneration.com/characters/alex-shirtrip.gif",
        image2: "https://www.fightersgeneration.com/characters/dio-walkf3.gif",
        image3: "https://www.fightersgeneration.com/characters2/k-firefix1.gif",
        image4: "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-win.gif",
        image5: "https://www.fightersgeneration.com/np7/char/gifs/gai/gai-intro.gif",
        image6: "https://www.fightersgeneration.com/characters3/spidey-whateva.gif",
        image7: "https://www.fightersgeneration.com/characters4/yashiro-heavykick.gif",
        image8: "https://www.fightersgeneration.com/characters/venom-wav.gif",
        image9: "https://www.fightersgeneration.com/characters4/tamtam-headhit.gif",
        image10: "https://www.fightersgeneration.com/characters2/jill-hp.gif",
    }



    let container = document.getElementById("boxContainer");
    let bigCharone = document.getElementById("bigCharone");

    // idhar ik loop chal raha he phale wale boxContainer pe


    container.innerHTML = Object.keys(characters).map(key => `
        <div class="box">
            <img src="${characters[key]}" alt="">
        </div>
    `).join("");


    document.querySelectorAll(".box img").forEach(img => {
        img.addEventListener("click", (e) => {

            if (!document.getElementById("bigCharone")) {
                document.body.innerHTML += `<div id="bigCharone" class="bigCharone"></div>`;
            }


            document.getElementById("bigCharone").innerHTML = `<img src="${e.target.src}" alt="">`;
        });
    });

    }, 3000);

    let characters2 = {
        image1: "https://www.fightersgeneration.com/np7/char/gifs/alex/alex-cfe-block.gif",
        image2: "https://www.fightersgeneration.com/characters/dio-walkb3.gif",
        image3: "https://www.fightersgeneration.com/characters2/snk-k.gif",
        image4: "https://www.fightersgeneration.com/nz7/char/breakers/condor/New%20folder/condor-breakers-special-grab.gif",
        image5: "https://www.fightersgeneration.com/np7/char/gifs/gai/gai-block.gif",
        image6: "https://www.fightersgeneration.com/characters3/spidey-niceshot.gif",
        image7: "https://www.fightersgeneration.com/characters4/yashiro-stance-alt.gif",
        image8: "https://www.fightersgeneration.com/characters/venom-v.gif",
        image9: "https://www.fightersgeneration.com/characters4/tamtam-lowkicks.gif",
        image10: "https://www.fightersgeneration.com/nf8/char3/jill-valentine-mvc2-win.gif",
    }

    // idhar ik loop chal raha he second wale boxContainer1 pe

    let mycontainer = document.getElementById("boxContainer1");
    let bigCharsec = document.getElementById("bigCharsec");

    setTimeout(() => {
        
        mycontainer.innerHTML = Object.keys(characters2).map(key => `
            <div class="box">
                <img src="${characters2[key]}" alt="">
            </div>
        `).join("");

        
        document.querySelectorAll(".box img").forEach(img => {
            img.addEventListener("click", (e) => {
                
                if (!document.getElementById("bigCharsec")) {
                    document.body.innerHTML += `<div id="bigCharsec" class="bigCharone1"></div>`;
                }

            
                document.getElementById("bigCharsec").innerHTML = `<img src="${e.target.src}" alt="">`;
            });
        });

    }, 3000);



    let slocation = document.getElementById("slocation");


    function openLocationSelection() {
        document.getElementById("locationModal").style.display = "block";
    }

    function closeLocationSelection() {
        document.getElementById("locationModal").style.display = "none";
    }




    function startGame(selectedLocation) {
        closeLocationSelection(); 

        let bigCharone = document.getElementById("bigCharone");
        let bigCharsec = document.getElementById("bigCharsec");

        let player1Character = bigCharone ? bigCharone.querySelector("img").src : "https://www.fightersgeneration.com/characters/alex-shirtrip.gif";
        let player2Character = bigCharsec ? bigCharsec.querySelector("img").src : "https://www.fightersgeneration.com/characters/venom-webthrow.gif";

        localStorage.setItem("player1Character", player1Character);
        localStorage.setItem("player2Character", player2Character);
        localStorage.setItem("selectedStage", selectedLocation);

        
        window.location.href = "game.html";
    }
