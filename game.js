const gameContainer = document.getElementById("gameContainer");
const menu = document.getElementById("menu");
const scoreBoard = document.getElementById("score");
const timeCount = document.getElementById("time");
const endButton = document.getElementById("end");

function spawnZombie() {
    let zombie = document.createElement("img");
    zombie.className = "zombie alive";
    zombie.src = "images/zombie-cet.png";
    zombie.style.left = 0;
    zombie.style.top = parseInt(Math.random() * 80) + "%";
    gameContainer.appendChild(zombie);

    let pos = 0;
    let id = setInterval(frame, 5);
    function frame() {
        if (pos.toFixed() === "93") {
            clearInterval(id);
            endGame();
        } else {
            pos += 0.1;
            zombie.style.left = pos + "%";
        }
    }

    zombie.onclick = function e() {
        clearInterval(id);
        killZombie(zombie);
        this.onclick = null;
    }
}

function killZombie(zombie) {
    zombie.src = "images/ded-cet.png";
    zombie.className = "zombie dead";
    updateScore();
}

function updateTime() {
    window.timer--;
    timeCount.innerHTML = "Time: " + timer;
    if (time === 0) {
        endGame();
    }
}

function updateScore() {
    window.score++;
    scoreBoard.innerHTML = "Score: " + window.score;
}

function clearDeadZombies() {
    let deadZombies = document.querySelectorAll(".dead");
    deadZombies.forEach(function removeNode(node){
        node.remove();
    });
}

function updateSpawnRate() {
    spawnRate -= 600;
    clearInterval(window.runGame);
    window.runGame = setInterval(spawnZombie, spawnRate);
}

function startGame() {
    window.timer = 100;
    window.score = 0;
    window.spawnRate = 3000;
    window.runGame = setInterval(spawnZombie, spawnRate);
    window.time = setInterval(updateTime, 1500);
    window.cleanUp = setInterval(clearDeadZombies, 10000);
    window.updateSpawn = setInterval(updateSpawnRate, 30000);
    gameContainer.style.background = "images/spookyBackground.png";
}

function endGame() {
    clearInterval(runGame);
    clearInterval(time);
    clearInterval(updateSpawn);
    clearInterval(cleanUp);
}