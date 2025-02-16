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
}, 3000);

// ***********************************************************************//

body = document.body;

let video = document.createElement("video");

video.src = "Videos/startnow-background.mp4";
video.autoplay = true;
video.loop = true;
video.muted = true;
video.style.position = "fixed";
video.style.top = "0";
video.style.left = "0";
video.style.width = "100vw";
video.style.height = "100vh";
video.style.objectFit = "cover";
video.style.zIndex = "-1";

body.appendChild(video);





// *******************************************************************//

setTimeout(() => {
    
let characters = {
    image1: "https://www.fightersgeneration.com/characters/alex-shirtrip.gif",
    image2: "https://www.fightersgeneration.com/news2023/char3/bob-wilson-realbout2-taunt.gif",
    image3: "https://www.fightersgeneration.com/characters5/blake-belladonna-artwork_small.png",
    image4: "https://www.fightersgeneration.com/nz7/char/breakers/condor-breakers-revenge-art3.png",
    image5: "https://www.fightersgeneration.com/characters4/chung-kiz_small.jpg",
    image6: "https://www.fightersgeneration.com/characters3/spidey-whateva.gif",
    image7: "https://www.fightersgeneration.com/characters4/the-flash-puzzle-and-dragons-artwork_small.jpg",
    image8: "https://www.fightersgeneration.com/characters/venom-mc.gif",
    image9: "https://www.fightersgeneration.com/characters4/white-realbout-dominantedmind-pissed_small.png",
    image10: "https://www.fightersgeneration.com/characters2/jill-bigshinkiro_small.jpg",
}



let container = document.getElementById("boxContainer");

// idhar ik loop chal raha he phale wale boxContainer pe

for (let key in characters) {
    let box = document.createElement("div");
    box.classList.add("box");
    
    let img = document.createElement("img");
    img.src = characters[key];
    
    img.addEventListener("click", function(){
        let bigCharone = document.getElementById("bigCharone");

        if(!bigCharone){
            bigCharone = document.createElement("div");
            bigCharone.id = "bigCharone";
            bigCharone.classList.add("bigCharone");
            document.body.appendChild(bigCharone);
        }

        bigCharone.innerHTML = `<img src="${characters[key]}" alt="">`;
    })
    
    box.appendChild(img);
    container.appendChild(box);
}

// idhar ik loop chal raha he second wale boxContainer1 pe

let mycontainer = document.getElementById("boxContainer1");

for (let key in characters) {
    let box = document.createElement("div");
    box.classList.add("box");
    
    let img = document.createElement("img");
    img.src = characters[key];

    img.addEventListener("click", function(){
        let bigCharsec = document.getElementById("bigCharsec");

        if(!bigCharsec){
            bigCharsec = document.createElement("div");
            bigCharsec.id = "bigCharone";
            bigCharsec.classList.add("bigCharone");
            document.body.appendChild(bigCharsec);
        }

        bigCharsec.innerHTML = `<img src="${characters[key]}" alt="">`;
    })
    
    box.appendChild(img);
    mycontainer.appendChild(box);
}

}, 3000);


