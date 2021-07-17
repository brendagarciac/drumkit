//Array of all buttons
var buttons = document.querySelectorAll("button");

//Loops through the array of buttons and calls the addEventListener() function
// so that when button is clicked an action takes place
for (var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", handleClick);

}

// Makes sound once button is clicked
function handleClick(){
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keydown", keyPressed);

//Sends the value of the key to the makeSound function
function keyPressed(event){
  makeSound(event.key);
  buttonAnimation(event.key);
}

//Plays sound depending on letter pressed / button clicked
function makeSound(key){
  switch (key){
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    case "l":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
    break;

    default:
      console.log(buttonInnerHTML);
  }
}

// Key or button that was pressed will show an animation
function buttonAnimation(currentKey){

  //this gives us the class of the button that we are going to change
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(removeAnimation, 100);

  // function that removes transparancy and shadow effect from button
  function removeAnimation(){
    activeButton.classList.remove("pressed");
  }
}
