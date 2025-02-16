document.title = "Street Warriors: Karachi";


    let audio = document.getElementById("backgroundAudio");
    let button = document.getElementById("toggleButton");


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
        }
    });



// ************************************************************************** //


let body = document.body;

let video = document.createElement("video");

video.src = "Videos/hero.mp4";
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

