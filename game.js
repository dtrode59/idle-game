var score = 1; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var scr = new Text(score);                    // Create a text element

createButton('Button', btnPress); // Make a button
changeTitle('Clicker Game');
createButton('button', btnPress);
function btnpress(){
 score--;
 postToPage(score); 
}
setInterval(btnPress, 1000);

function btnPress() {
  score++;
  postToPage(score);
}
