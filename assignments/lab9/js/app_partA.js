let arrayButtons = [];
let maxWidth = window.innerWidth;
let maxHeight = window.innerHeight;
let buttonWidth = 120;
let buttonHeight = 60;
let maxButtons = 100;
let minButtons = 5;


function Button(color, width, height, top, left, order) {
    this.order = order;
    this.btn = document.createElement("button");
    this.btn.style.backgroundColor = color;
    this.btn.style.width = width;
    this.btn.style.height = height;
    this.btn.style.position = "absolute";
    document.body.appendChild(this.btn);
    // A method to set location
    this.setLocation = function(top, left) {
        this.btn.style.top = top + "px";
        this.btn.style.left = left + "px";
    };

    this.getWidth = function() {
        return this.btn.clientWidth;
    }

    this.getHeight = function() {
        return this.btn.clientHeight;
    }

    this.setLocation(top, left);
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
    document.body.appendChild(prompt);

    let inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "userInput";
    inputField.placeholder = "Number of buttons between 5 and 100";
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


function main() {
    createForm();

    document.getElementById("go").onclick = function createButtons() {
        let buttons = parseInt(document.getElementById("userInput").value);
        
        if (isNaN(buttons)) {
            let error = document.createElement("p");
            error.innerHTML = "You did not enter a number.";
            document.body.appendChild(error);
        }
        
        if (buttons >= minButtons && buttons <= maxButtons) {
            for (let i = 0; i < buttons; i++) {
                let color = generateColor();
                let btn = new Button(color, "120px", "60px", 0, 0, i);
                let left = Math.floor(generateRandom(0, (maxWidth - buttonWidth)));
                let top = Math.floor(generateRandom(0, (maxHeight - buttonHeight)));
                btn.setLocation(top, left);
                arrayButtons.push(btn);

                setInterval(function() {
                    btn.setLocation(
                        Math.floor(generateRandom(0, (maxHeight - buttonHeight))),
                        Math.floor(generateRandom(0, (maxWidth - buttonWidth)))
                        );
                    }, 2000);
            }
        } else {
            let error = document.createElement("p");
            error.innerHTML = "You did not enter a number between 5 and 100.";
            document.body.appendChild(error);
        }

        this.onclick = null;
    }
}


main();