// Generate a random number between 1 and 100
let number = Math.floor(Math.random() * 100) + 1;

function guess() {
    let number2 = parseInt(document.querySelector("#number").value);
    let message = document.querySelector(".para");

    // Check if input is valid
    if (isNaN(number2) || number2 < 1 || number2 > 100) {
        message.innerHTML = "Please enter a number between 1 and 100.";
    } else if (number2 < number) {
        message.innerHTML = "Guess a little bigger number.";
    } else if (number2 > number) {
        message.innerHTML = "Guess a little smaller number.";
    } else {
        message.innerHTML = `Now You Got It Right! The number was ${number}.`;
        document.querySelector(".btn").disabled = true; // Disable button after correct guess
    }

    // Add the animation class
    message.classList.remove("show");
    void message.offsetWidth; 
    message.classList.add("show");
}

// Event listener for Enter key
document.querySelector("#number").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        guess();
    }
});
document.querySelector(".btn").addEventListener("click",guess);

// Event listener for Generate button key
function nGen(){
    document.querySelector(".para").innerHTML="Number Generated Succesfully! Now its your turn to guess it.."
}

document.querySelector(".btn2").addEventListener("click",nGen);
