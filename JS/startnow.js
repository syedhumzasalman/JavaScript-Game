document.title = "Start Now";

window.onload = function() {
    let audio = document.getElementById("backgroundAudio");
    let button = document.getElementById("toggleButton");

    let pleasePlay = audio.play();
        if (pleasePlay !== undefined) {
            pleasePlay.then(() => {
                audio.muted = false;
                button.innerText = "🔇 Mute";
            })
        }

    button.addEventListener("click", function() {
        if (audio.muted) {
            audio.muted = false;
            button.innerText = "🔇 Mute";
        } else {
            audio.muted = true;
            button.innerText = "🔊 Play";
        }

 
        if (audio.paused) {
            audio.play();
            body.appendChild(video);
        }
    });
};


// ************************************************************************** //



let body = document.body;
let image = document.createElement("img");

setTimeout(function() {
    image.src = "images/img2.jpg";
    image.style.position = "fixed";
    image.style.top = "0";
    image.style.left = "0";
    image.style.width = "100vw";
    image.style.height = "100vh";
    image.style.objectFit = "cover";
    image.style.zIndex = "-1";

    body.appendChild(image);
},);

body.appendChild(image);

setTimeout(function() {
    body.removeChild(image);
}, 4000);





// *******************************************************************//



let characters = {
    image1: "https://www.fightersgeneration.com/nz9/char/cfe/alex-capcom-fighting-allstars-face.png",
    image2: "https://www.fightersgeneration.com/characters/raidengif.gif",
    image3: "https://www.fightersgeneration.com/characters5/blake-belladonna-artwork_small.png",
    image4: "https://www.fightersgeneration.com/nz7/char/breakers/condor-breakers-revenge-art3.png",
    image5: "https://www.fightersgeneration.com/characters/raidengif.gif",
    image6: "https://www.fightersgeneration.com/characters/raidengif.gif",
    image7: "https://www.fightersgeneration.com/characters/raidengif.gif",
    image8: "https://www.fightersgeneration.com/characters/raidengif.gif",
    image9: "https://www.fightersgeneration.com/characters/raidengif.gif",
    image9: "https://www.fightersgeneration.com/characters/raidengif.gif",
    image9: "https://www.fightersgeneration.com/characters/raidengif.gif",
    image10: "https://www.fightersgeneration.com/characters/raidengif.gif",
}



let container = document.getElementById("boxContainer");

for (let key in characters) {
    let box = document.createElement("div");
    box.classList.add("box");

    let img = document.createElement("img");
    img.src = characters[key];

    box.appendChild(img);
    container.appendChild(box);
}


let mycontainer = document.getElementById("boxContainer1");

for (let key in characters) {
    let box = document.createElement("div");
    box.classList.add("box");

    let img = document.createElement("img");
    img.src = characters[key];

    box.appendChild(img);
    mycontainer.appendChild(box);
}