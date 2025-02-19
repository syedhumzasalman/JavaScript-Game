document.cookie = "session=abc123; Secure; HttpOnly; SameSite=None";
document.title = "Game Start";

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

window.onload = function () {
  Swal.fire({
    title: "LET THE BATTLE BEGIN!.",
    text: "The stage of battle is set!",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
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
    document.body.style.width = "auto";

    player1.innerHTML = `<img src="${player1Character}" alt="Player 1">`;
    player2.innerHTML = `<img src="${player2Character}" alt="Player 2">`;
  }, 2000);
};

let playerPosition = 100;

window.addEventListener("keydown", function (event) {
  // console.log("test" , event.keyCode);

  let player1Img = player1.querySelector("img");

  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters/alex-shirtrip.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters/alex-ts-stance.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/characters/alex-ts-stance.gif";
    if (event.keyCode === 84) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters/alex-jump-forward.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters/alex-ts-stance.gif";
      }, 1000);
    }
    if (event.keyCode === 81) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters/alex-air5.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters/alex-ts-stance.gif";
      }, 1000);
    }
    if (event.keyCode === 87) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters/alex-rollin.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters/alex-ts-stance.gif";
      }, 1000);
    }
    if (event.keyCode === 69) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters/alex-dashelbow.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters/alex-ts-stance.gif";
      }, 1000);
    }
  }

  // **************************************************************

  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters/dio-walkf3.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters/dio-walkf.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/characters/dio-walkf.gif";
    if (event.keyCode === 84) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters/dio-spinkick.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters/dio-walkf.gif";
      }, 1000);
    }
    if (event.keyCode === 81) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters/dio-rolling.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters/dio-walkf.gif";
      }, 1000);
    }
    if (event.keyCode === 87) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters/dio-air.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters/dio-walkf.gif";
      }, 1000);
    }
    if (event.keyCode === 69) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters/dio-c2.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters/dio-walkf.gif";
      }, 1000);
    }
  }

  // **************************************************************

  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters2/k-firefix1.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters2/k-stance1.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/characters2/k-stance1.gif";
    if (event.keyCode === 84) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/k-jumps.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters2/k-stance1.gif";
      }, 1000);
    }
    if (event.keyCode === 81) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/k-upper.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters2/k-stance1.gif";
      }, 1000);
    }
    if (event.keyCode === 87) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/k-spinhookkick.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters2/k-stance1.gif";
      }, 1000);
    }
    if (event.keyCode === 69) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/k-crouchpunch.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters2/k-stance1.gif";
      }, 1000);
    }
  }

  // **************************************************************

  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-win.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-taunt.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-taunt.gif";
    if (event.keyCode === 84) {
      player1Img.src =
        "https://www.fightersgeneration.com/nz7/char/breakers/condor/New%20folder/condor-breakers-special-grab.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-taunt.gif";
      }, 1000);
    }
    if (event.keyCode === 81) {
      player1Img.src =
        "https://www.fightersgeneration.com/nz7/char/breakers/condor/New%20folder/condor-breakers-upper.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-taunt.gif";
      }, 1000);
    }
    if (event.keyCode === 87) {
      player1Img.src =
        "https://www.fightersgeneration.com/nz7/char/breakers/condor/New%20folder/condor-breakers-special-grab2.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-taunt.gif";
      }, 1000);
    }
    if (event.keyCode === 69) {
      player1Img.src =
        "https://www.fightersgeneration.com/nz7/char/breakers/condor/New%20folder/condor-breakers-sliding-dropkick.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-taunt.gif";
      }, 1000);
    }
  }

  // **************************************************************

  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/np7/char/gifs/gai/gai-intro.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters/gai-kofxistance.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/characters/gai-kofxistance.gif";
    if (event.keyCode === 84) {
      player1Img.src =
        "https://www.fightersgeneration.com/np7/char/gifs/gai/attacks/gai-c3.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters/gai-kofxistance.gif";
      }, 1000);
    }
    if (event.keyCode === 81) {
      player1Img.src =
        "https://www.fightersgeneration.com/np7/char/gifs/gai/attacks/gai-rollslam.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters/gai-kofxistance.gif";
      }, 1000);
    }
    if (event.keyCode === 87) {
      player1Img.src =
        "https://www.fightersgeneration.com/np7/char/gifs/gai/attacks/gai-grab.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters/gai-kofxistance.gif";
      }, 1000);
    }
    if (event.keyCode === 69) {
      player1Img.src =
        "https://www.fightersgeneration.com/np7/char/gifs/gai/attacks/gai-initiatesuper.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters/gai-kofxistance.gif";
      }, 1000);
    }
  }

  // **************************************************************

  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters3/spidey-whateva.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters3/spidey-walk1.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/characters3/spidey-walk1.gif";
    if (event.keyCode === 84) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters3/spider-sting.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters3/spidey-walk1.gif";
      }, 2000);
    }
    if (event.keyCode === 81) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters3/m-spidey.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters3/spidey-walk1.gif";
      }, 4000);
    }
    if (event.keyCode === 87) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters3/spidey-block.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters3/spidey-walk1.gif";
      }, 1000);
    }
    if (event.keyCode === 69) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters3/spidey-dizzied.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters3/spidey-walk1.gif";
      }, 1000);
    }
  }

  // **************************************************************

  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters4/yashiro-heavykick.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters4/yashiro-2k3stance.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/characters4/yashiro-2k3stance.gif";
    if (event.keyCode === 84) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/yash-jkick.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters4/yashiro-2k3stance.gif";
      }, 1000);
    }
    if (event.keyCode === 81) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/yashiro-pushups.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters4/yashiro-2k3stance.gif";
      }, 1000);
    }
    if (event.keyCode === 87) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/yash-crouchattacks.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters4/yashiro-2k3stance.gif";
      }, 1000);
    }
    if (event.keyCode === 69) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/yash-roll.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters4/yashiro-2k3stance.gif";
      }, 1000);
    }
  }

  // **************************************************************

  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters/venom-wav.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters/venomwalk.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/characters/venomwalk.gif";
    if (event.keyCode === 84) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters/venom-block.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters/venomwalk.gif";
      }, 1000);
    }
    if (event.keyCode === 81) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters/venom-mp.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters/venomwalk.gif";
      }, 1000);
    }
    if (event.keyCode === 87) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters/venom-win1.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters/venomwalk.gif";
      }, 1000);
    }
    if (event.keyCode === 69) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters/venomhit.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters/venomwalk.gif";
      }, 1000);
    }
  }

  // **************************************************************

  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters4/tamtam-headhit.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters4/snk-tamtam.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/characters4/snk-tamtam.gif";
    if (event.keyCode === 84) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/tamtam-bk.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters4/snk-tamtam.gif";
      }, 1000);
    }
    if (event.keyCode === 81) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/tamtam-swingspear.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters4/snk-tamtam.gif";
      }, 1000);
    }
    if (event.keyCode === 87) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/tamtam-fireball.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters4/snk-tamtam.gif";
      }, 1000);
    }
    if (event.keyCode === 69) {
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/tamtam-crazymove.gif";
      setTimeout(function () {
        player1Img.src =
          "https://www.fightersgeneration.com/characters4/snk-tamtam.gif";
      }, 1000);
    }
  }

  // **************************************************************

  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters2/jill-hp.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters2/jill-mvc2-stance.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/characters2/jill-mvc2-stance.gif";

    if (event.keyCode === 84) {
      // "T" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/jill-uppercut.gif";
    } else if (event.keyCode === 81) {
      // "Q" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/jill-grenade.gif";
    } else if (event.keyCode === 87) {
      // "W" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/jill-lmk.gif";
    } else if (event.keyCode === 69) {
      // "E" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/jill-knife.gif";
    }

    setTimeout(function () {
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/jill-mvc2-stance.gif";
    }, 1000);
  }

  // **************************************************************

  if (event.keyCode === 68 && playerPosition <= 700) {
    playerPosition += 20;
    player1.style.transform = `translateX(${playerPosition}px)`;
  }
  // console.log("left", playerPosition);

  if (event.keyCode === 65 && playerPosition > 0) {
    playerPosition -= 20;
    player1.style.transform = `translateX(${playerPosition}px)`;
  }
});

function showControls() {
  Swal.fire({
    title: "Game Controls",
    text: "Here are your character controls:",
    icon: "info",
    confirmButtonText: "Got it!",
    html: `<div style="display: flex; justify-content: center; gap:20px">
                <div style="font-size: 18px; font-weight: bold;">
                    <h3>Player 01</h3>
                    <p><strong>A</strong>: Move Left</p>
                    <p><strong>D</strong>: Move Right</p>
                    <p><strong>Q</strong>: Power 1</p>
                    <p><strong>W</strong>: Power 2</p>
                    <p><strong>E</strong>: Power 3</p>
                    <p><strong>T</strong>: Power 4</p>
                </div>,

                <div style="font-size: 18px; font-weight: bold;">
                    <h3>Player 02</h3>
                    <p><strong>➡️</strong>: Move Left</p>
                    <p><strong>⬅️</strong>: Move Right</p>
                    <p><strong>p</strong>: Power 1</p>
                    <p><strong>o</strong>: Power 2</p>
                    <p><strong>i</strong>: Power 3</p>
                    <p><strong>l</strong>: Power 4</p>
                </div>
                </div>`,
    showCancelButton: false,
    showConfirmButton: true,
    background: "#f7f7f7",
    color: "#333",
    padding: "20px",
  });
}

let playerPosition2 = 100;

window.addEventListener("keydown", function (event) {
//   console.log("test", event.keyCode);

  let player1Img = player2.querySelector("img");

  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/np7/char/gifs/alex/alex-cfe-block.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/np7/char/gifs/alex/alex-cfe-dizzy.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/np7/char/gifs/alex/alex-cfe-dizzy.gif";

    if (event.keyCode === 80) {
      // "p" key
      player1Img.src =
        "https://www.fightersgeneration.com/np7/char/gifs/alex/alex-cfe-special.gif";
    } else if (event.keyCode === 79) {
      // "o" key
      player1Img.src =
        "https://www.fightersgeneration.com/np7/char/gifs/alex/alex-cfe-cblock.gif";
    } else if (event.keyCode === 73) {
      // "i" key
      player1Img.src =
        "https://www.fightersgeneration.com/np7/char/gifs/alex/alex-cfe-rolling.gif";
    } else if (event.keyCode === 76) {
      // "l" key
      player1Img.src =
        "https://www.fightersgeneration.com/np7/char/gifs/alex/alex-cfe-intocrouch.gif";
    }

    setTimeout(function () {
      player1Img.src =
        "https://www.fightersgeneration.com/np7/char/gifs/alex/alex-cfe-dizzy.gif";
    }, 2000);
  }

  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters/dio-walkb3.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters/dio-theworld.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/characters/dio-theworld.gif";
    player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";

    if (event.keyCode === 80) {
      // "p" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters/dio-dashn.gif";
      player1Img.style.width = "auto";
      player1Img.style.transform = "rotate(0deg)";
      player1Img.style.position = "absolute";
      player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 79) {
      // "o" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters/dio-air.gif";
      player1Img.style.width = "auto";
      player1Img.style.transform = "rotate(0deg)";
      player1Img.style.position = "absolute";
      player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 73) {
      // "i" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters/dio-air2.gif";
      player1Img.style.width = "auto";
      player1Img.style.transform = "rotate(0deg)";
      player1Img.style.position = "absolute";
      player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 76) {
      // "l" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters/dio-spinkick.gif";
      player1Img.style.width = "auto";
      player1Img.style.transform = "rotate(0deg)";
      player1Img.style.position = "absolute";
      player1Img.style.transform = "scaleX(-1)";
    }

    setTimeout(function () {
      player1Img.src =
        "https://www.fightersgeneration.com/characters/dio-theworld.gif";
      player1Img.style.width = "auto";
      player1Img.style.transform = "rotate(0deg)";
      player1Img.style.position = "absolute";
      player1Img.style.transform = "scaleX(-1)";
    }, 2000);
  }

  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters2/snk-k.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters2/k-nwalkback.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/characters2/k-nwalkback.gif";

    if (event.keyCode === 80) {
      // "p" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/k-fire.gif";
    } else if (event.keyCode === 79) {
      // "o" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/k-power.gif";
    } else if (event.keyCode === 73) {
      // "i" key
      player1Img.src =
        "https://www.fightersgeneration.com/np5/kof13/kdash-kof13-stance.gif";
    } else if (event.keyCode === 76) {
      // "l" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/snk-k.gif";
    }

    setTimeout(function () {
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/k-nwalkback.gif";
    }, 2000);
  }



  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/nz7/char/breakers/condor/New%20folder/condor-breakers-special-grab.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-stance.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-stance.gif";
      player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";

    if (event.keyCode === 80) {
      // "p" key
      player1Img.src =
        "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-win2.gif";
        player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 79) {
      // "o" key
      player1Img.src =
        "https://www.fightersgeneration.com/nz7/char/breakers/condor/New%20folder/condor-breakers-upper.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 73) {
      // "i" key
      player1Img.src =
        "https://www.fightersgeneration.com/nz7/char/breakers/condor/New%20folder/condor-breakers-special-punch.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 76) {
      // "l" key
      player1Img.src =
        "https://www.fightersgeneration.com/nz7/char/breakers/condor/New%20folder/condor-breakers-sliding-dropkick.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    }

    setTimeout(function () {
      player1Img.src =
        "https://www.fightersgeneration.com/nz7/char/breakers/condor/condor-breakers-stance.gif";
        player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";
    }, 2000);
  }



  
  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/np7/char/gifs/gai/gai-block.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/np7/char/gifs/gai/gai-walk.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/np7/char/gifs/gai/gai-walk.gif";
      player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";

    if (event.keyCode === 80) {
      // "p" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters/gaiwinpose2.gif";
        player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 79) {
      // "o" key
      player1Img.src =
        "https://www.fightersgeneration.com/np7/char/gifs/gai/attacks/gai-combo2.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 73) {
      // "i" key
      player1Img.src =
        "https://www.fightersgeneration.com/np7/char/gifs/gai/attacks/gai-dodge1.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 76) {
      // "l" key
      player1Img.src =
        "https://www.fightersgeneration.com/np7/char/gifs/gai/attacks/gai-initiatesuper.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    }

    setTimeout(function () {
      player1Img.src =
        "https://www.fightersgeneration.com/np7/char/gifs/gai/gai-walk.gif";
        player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";
    }, 2000);
  }


   
  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters3/spidey-niceshot.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters3/spidey-walk1.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/characters3/spidey-walk1.gif";
      player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";

    if (event.keyCode === 80) {
      // "p" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters3/spidey-flipkick-fk.gif";
        player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 79) {
      // "o" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters3/spi-mp.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 73) {
      // "i" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters3/spider-sting.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 76) {
      // "l" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters3/spidey-usegem.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    }

    setTimeout(function () {
      player1Img.src =
        "https://www.fightersgeneration.com/characters3/spidey-walk1.gif";
        player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";
    }, 3000);
  }



  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters4/yashiro-stance-alt.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters4/yashiro-stance.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/characters4/yashiro-stance.gif";
      player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";

    if (event.keyCode === 80) {
      // "p" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/yashiro-orochipunch.gif";
        player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 79) {
      // "o" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/yashiro-pushups.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 73) {
      // "i" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/yashiro-heavykick.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 76) {
      // "l" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/yashiro-heey.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    }

    setTimeout(function () {
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/yashiro-stance-alt.gif";
        player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";
    }, 2000);
  }




  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters/venom-v.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters/m-venom.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/characters/m-venom.gif";
      player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";

    if (event.keyCode === 80) {
      // "p" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters/venom-k.gif";
        player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 79) {
      // "o" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters/venom-sp.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 73) {
      // "i" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters/venom-throw1.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 76) {
      // "l" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters/venom-webthrowup.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    }

    setTimeout(function () {
      player1Img.src =
        "https://www.fightersgeneration.com/characters/m-venom.gif";
        player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";
    }, 2000);
  }



  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters4/tamtam-lowkicks.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters4/tamtam-walk.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/characters4/tamtam-walk.gif";
      player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";

    if (event.keyCode === 80) {
      // "p" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/tamtam-woww.gif";
        player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 79) {
      // "o" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/tamtam-fullwin.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 73) {
      // "i" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/tamtam-skullthrow.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 76) {
      // "l" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/tamtam-headhit.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    }

    setTimeout(function () {
      player1Img.src =
        "https://www.fightersgeneration.com/characters4/tamtam-walk.gif";
        player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";
    }, 2000);
  }



  if (
    player1Img.src.includes(
      "https://www.fightersgeneration.com/nf8/char3/jill-valentine-mvc2-win.gif"
    ) ||
    player1Img.src.includes(
      "https://www.fightersgeneration.com/characters2/jill-mvc2-stance.gif"
    )
  ) {
    player1Img.src =
      "https://www.fightersgeneration.com/characters2/jill-mvc2-stance.gif";
      player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";

    if (event.keyCode === 80) {
      // "p" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/jill-uppercut.gif";
        player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 79) {
      // "o" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/jill-spinkick.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 73) {
      // "i" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/jill-slide.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    } else if (event.keyCode === 76) {
      // "l" key
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/jill-knife.gif";
        player1Img.style.width = "auto";
        player1Img.style.transform = "rotate(0deg)";
        player1Img.style.position = "absolute";
        player1Img.style.transform = "scaleX(-1)";
    }

    setTimeout(function () {
      player1Img.src =
        "https://www.fightersgeneration.com/characters2/jill-mvc2-stance.gif";
        player1Img.style.width = "auto";
    player1Img.style.transform = "rotate(0deg)";
    player1Img.style.position = "absolute";
    player1Img.style.transform = "scaleX(-1)";
    }, 2000);
  }




  
  if (event.keyCode === 37 && playerPosition2 < 900) {
    playerPosition2 += 20;
    player2.style.right = `${playerPosition2}px`;
    // console.log("Moving Right", playerPosition2);
  }

  if (event.keyCode === 39 && playerPosition2 > 200) {
    playerPosition2 -= 20;
    player2.style.right = `${playerPosition2}px`;
    // console.log("Moving Left", playerPosition2);
  }
});
