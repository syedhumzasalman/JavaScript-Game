document.title = "Street Warriors: Karachi";


document.body.innerHTML += `
    <video 
        src="Videos/hero.mp4" 
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
        "
    ></video>
`;

// ************************************************************************** //

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


