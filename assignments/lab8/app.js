function generateButtons(number) {
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (let i = 0; i < number; i++) {
        let button = document.createElement('button');
        button.type = "button";
        button.className = "letter";
        button.innerHTML = alphabet[i];

        document.getElementById("main").appendChild(button);
        button.onclick = function logClick() {
            console.log("Button", this.innerHTML, "was clicked.");
        }
    }
}
function validateInput(number) {
    if (isNaN(number)) {
        alert("The number you entered was not a number.")
        return false;
    }
    else if (number < 0 || number > 26) {
        alert("The number you entered is out of range.")
        return false;
    } else {
        return true;
    }
}

function Recipe(title, servings, ingredients) {
    this.title = title;
    this.servings = servings;
    this.ingredients = ingredients;

    this.print = function print() {
        document.write("<br>Title: ", this.title + "<br>");
        document.write("Serves: ", this.servings + "<br>");
        document.write("Ingredients:" + "<br>");
        for (let i = 0; i < this.ingredients.length; i++) {
            document.write(this.ingredients[i] + "<br>");
        }
    }
}

function main() {
    let numberOfButtons = parseInt(prompt("Enter a number 1-26: "));
    if (validateInput(numberOfButtons)) {
        generateButtons(numberOfButtons);
    }

    myObj = new Recipe("Chicken Cacciatore", 2, ["cinnamon", "lettuce", "onion"]);

    myObj.print();
}

main();