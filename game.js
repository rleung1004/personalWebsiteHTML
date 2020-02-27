const gameContainer = document.getElementById("gameContainer");
const menu = document.getElementById("menu");
const zombies = document.querySelectorAll(".zombie");

function spawnZombie() {
    let zombie = document.createElement("img");
    zombie.className = "zombie";
    zombie.src = "images/zombie-cet.png";
    zombie.style = "width: 100px; height: 100px";
    zombie.style.left = 0;
    zombie.style.top = parseInt(Math.random() * 80) + "%";
    gameContainer.appendChild(zombie);
    moveZombie(zombie);
}

function moveZombie(zombie) {
    let moving = true;
    let pos = 0;
    let id = setInterval(frame, 5);
    function frame() {
        if (pos.toFixed() === "93") {
            clearInterval(id);
        } else {
            pos += 0.1;
            zombie.style.left = pos + "%";
        }
    }
}

gameContainer.onclick = spawnZombie;
