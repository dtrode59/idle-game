var score = 0;

postToPage(score); // Print to the page

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