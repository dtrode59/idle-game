var score = 1; // Create a variable to store the score in

var title = new Title('Welcome to my Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var hidden = new Button('');
hidden.hide();
var scr = new Text(score); // Create a text element
setInterval(btnPress, 1000);

function btnPress() {
  score++;
  scr.edit(score);
}
function btnPress() {
  score++;
  //postToPage(score);
  scr.edit(score);
}