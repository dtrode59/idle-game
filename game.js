var score = 1; // Create a variable to store the score in
var button2;
var title = new Title('Welcome to my Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var scr = new Text(score); // Create a text element

setInterval(btnPress, 1000);
let text   = new Text('You are stranded on a desert island. There are other people on the island who got stranded before you so be careful.');          
// Creates a text element and place it on the screen

function btnPress() {
  score++;
  //postToPage(score);
  scr.edit(score);
}

function screen() {
  button2 = new Button('placeholder');
  text.edit('You find resources and gear but you see people coming your way so you can only grab one or the other. What do you pick up?');
}