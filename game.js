const menu = document.getElementById("menu");

function spawnZombie() {
    let gameContainer = document.getElementById("gameContainer");
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
    document.getElementById("time").innerHTML = "Time: " + timer;
    if (time === 0) {
        endGame();
    }
}

function updateScore() {
    window.score++;
    document.getElementById("score").innerHTML = "Score: " + window.score;
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

function createScoreBoard() {
    let node = document.createElement("div");
    
    let score = document.createElement("h1");
    score.id = "score";
    score.innerHTML = "Score: " + score;
    
    let time = document.createElement("h1");
    time.id = "time";
    time.innerHTML = "Time: " + timer;

    node.appendChild(score);
    node.appendChild(time);

    menu.appendChild(node);

}

function createGameContainer() {
    let node = document.createElement("div");
    node.id = "gameContainer";

    menu.appendChild(node);
}

function createEndButton() {
    let node = document.createElement("div");
    node.id = "endButton";
    let button = document.createElement("button");
    node.type = "button";
    node.id = "end";
    node.innerHTML = "End Game";

    node.appendChild(button);
    menu.appendChild(node);

    window.endButton = document.getElementById("end");
}

function endGame() {
    // stop all intervals
    clearInterval(runGame);
    clearInterval(time);
    clearInterval(updateSpawn);
    clearInterval(cleanUp);

    // clear screen
    menu.remove();

    let node = document.createElement("div");
    node.className = "gameOverScreen";
    
}

menu.onclick = function startGame() {
    this.onclick = null;
    window.timer = 100;
    window.score = 0;
    window.spawnRate = 3000;
    window.runGame = setInterval(spawnZombie, spawnRate);
    window.time = setInterval(updateTime, 1500);
    window.cleanUp = setInterval(clearDeadZombies, 10000);
    window.updateSpawn = setInterval(updateSpawnRate, 30000);
    document.getElementById("startScreen").remove();
    createScoreBoard();
    createGameContainer();
    createEndButton();
    document.getElementById("score").innerHTML = "Score: " + window.score;
}