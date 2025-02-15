document.title = "Street Warriors: Karachi"


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