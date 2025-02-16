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

// *********************************************************************//

document.addEventListener("DOMContentLoaded", function () {
    let sec3 = document.getElementById("sec3");
    sec3.style.opacity  = "0";
    sec3.style.transition = "opacity 1s ease-in-out";
    
    setTimeout(() => {
        sec3.style.opacity = "1";
    }, 3000);
    
    });


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
video.style.filter = "grayscale()"

body.appendChild(video);





// *******************************************************************//


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


let characters2 = {
    image1: "https://www.fightersgeneration.com/np7/char/gifs/alex/alex-cfe-block.gif",
    image2: "https://www.fightersgeneration.com/characters/dio-walkb3.gif",
    image3: "https://www.fightersgeneration.com/characters2/snk-k.gif",
    image4: "https://www.fightersgeneration.com/nz7/char/breakers/condor/New%20folder/condor-breakers-special-grab.gif",
    image5: "https://www.fightersgeneration.com/np7/char/gifs/gai/gai-block.gif",
    image6: "https://www.fightersgeneration.com/characters3/spidey-niceshot.gif",
    image7: "https://www.fightersgeneration.com/characters4/yashiro-stance-alt.gif",
    image8: "https://www.fightersgeneration.com/characters/venom-webthrow.gif",
    image9: "https://www.fightersgeneration.com/characters4/tamtam-lowkicks.gif",
    image10: "https://www.fightersgeneration.com/nf8/char3/jill-valentine-mvc2-win.gif",
}

// idhar ik loop chal raha he second wale boxContainer1 pe

let mycontainer = document.getElementById("boxContainer1");

for (let key in characters2) {
    let box = document.createElement("div");
    box.classList.add("box");
    
    let img = document.createElement("img");
    img.src = characters2[key];

    img.addEventListener("click", function(){
        let bigCharsec = document.getElementById("bigCharsec");

        if(!bigCharsec){
            bigCharsec = document.createElement("div");
            bigCharsec.id = "bigCharone";
            bigCharsec.classList.add("bigCharone");
            document.body.appendChild(bigCharsec);
        }

        bigCharsec.innerHTML = `<img src="${characters2[key]}" alt="">`;
    })
    
    box.appendChild(img);
    mycontainer.appendChild(box);
}

}, 3000);
