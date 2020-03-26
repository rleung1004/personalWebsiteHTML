let arrayButtons = [];
let maxWidth = window.innerWidth;
let maxHeight = window.innerHeight;
const buttonWidth = 120;
const buttonHeight = 60;
const buttonMinTop = 120;
const maxButtons = 10;
const minButtons = 2
let counter = 1;


function Button(color, width, height, top, left, order) {
    this.order = order;
    this.btn = document.createElement("button");
    this.btn.style.backgroundColor = color;
    this.btn.style.width = width;
    this.btn.style.height = height;
    this.btn.style.position = "absolute";
    this.btn.className = "clicked";
    this.btn.innerHTML = order;
    document.body.appendChild(this.btn);
    // A method to set location
    this.setLocation = function(top, left) {
        this.btn.style.top = top + "px";
        this.btn.style.left = left + "px";
    };

    this.setLocation(top, left);

    this.hideText = function() {
        this.btn.className = "unclicked";
    }

    this.showText = function() {
        this.btn.className = "clicked";
    }
}


function generateRandom(a, b) {
    if (b > a) {
        return (Math.random() * (b - a)) + a;
    } else {
        return (Math.random() * (a - b)) + b;
    }
}


function createForm() {

    let prompt = document.createElement("p");
    prompt.innerHTML = "How many buttons to create? <br>";
    prompt.id = "message";
    document.body.appendChild(prompt);

    let inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "userInput";
    inputField.placeholder = "Number of buttons between 2 and 10";
    inputField.style.width = "250px";
    document.body.appendChild(inputField);

    let goButton = document.createElement("button");
    goButton.type = "button";
    goButton.id = "go";
    goButton.innerHTML = "Go!";
    document.body.appendChild(goButton);
}


function generateColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = "rgb(" + r + ", " + g + ", " + b + ")";
    console.log("random color = " + color);
    return color;
}


function scatterButtons() {
    let message = document.getElementById("message");
    message.innerHTML = "";

    for (let i = 0; i < arrayButtons.length; i++) {
        arrayButtons[i].hideText();

        let top = generateRandom(0, (maxHeight - buttonHeight));
        let left = generateRandom(0, (maxWidth - buttonWidth));
        arrayButtons[i].setLocation(top, left);

        arrayButtons[i].btn.onclick = function() {
            if (arrayButtons[i].order == counter) {
                this.className = "clicked";
                counter++;
            } else {
                message.innerHTML = "You have clicked a button in the wrong order!";
            }

            if (counter == arrayButtons.length + 1) {
                message.innerHTML = "Excellent memory!";
            }
        }
    }

    let hintButton = new Button("yellow", buttonWidth + "px", buttonHeight + "px", (maxHeight - buttonHeight), 0, "hint");
    hintButton.btn.style.border = "2px solid black";
    hintButton.btn.innerHTML = "Click here for hint!"

    hintButton.btn.onclick = function () {
        for (let i = 0; i < arrayButtons.length; i++) {
            arrayButtons[i].showText();
        }
    }
}

function main() {
    createForm();

    document.getElementById("go").onclick = function createButtons() {
        let buttons = parseInt(document.getElementById("userInput").value);

        if (isNaN(buttons)) {
            let error = document.createElement("p");
            error.innerHTML = "You did not enter a number.";
            document.body.appendChild(error);
        }

        if (minButtons <= buttons && buttons <= maxButtons) {
            let left = 10; 
            let top = buttonMinTop;
            for (let i = 0; i < buttons; i++) {
                let color = generateColor();
                let button = new Button(color, buttonWidth + "px", buttonHeight + "px", 0, 0, i + 1);
                button.setLocation(top, left);
                arrayButtons.push(button);
                left += 130;
            }

        } else {
            let error = document.createElement("p");
            error.innerHTML = "You did not enter a number between 2 and 10.";
            document.body.appendChild(error);
        }

        document.getElementById("userInput").remove();
        document.getElementById("go").remove();

        document.getElementById("message").innerHTML = "You have 10 seconds to remember the order. Ready?";

        setTimeout(scatterButtons, 10000);
    };
}


main();