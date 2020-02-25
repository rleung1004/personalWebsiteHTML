let container = document.getElementById("container");

function spawnZombie() {
    let zombie = document.createElement("img");
    zombie.className = "zombie";
    zombie.src = "images/zombie-cet.png"
    zombie.style = "width: 100px; height: 100px";
    zombie.style.left = 0;
    zombie.style.top = parseInt(Math.random() * 80) + "%";
    container.appendChild(zombie);
}

container.onclick = spawnZombie;