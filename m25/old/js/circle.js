var can = document.getElementById('canvas1');
var context = can.getContext('2d');

var text = "test"

context.fillStyle = "red";
  context.beginPath();
  var radius = 100; // for example
  context.arc(200, 200, radius, 0, Math.PI * 2);
  context.closePath();
  context.fill();
  context.fillStyle = "black"; // font color to write the text with
  var font = "bold " + radius +"px serif";
  context.font = font;
// Move it down by half the text height and left by half the text width
var width = context.measureText(text).width;
var height = context.measureText("w").width; // this is a GUESS of height
context.fillText(text, 200 - (width/2) ,200 + (height/2));

// To show where the exact center is:
context.fillRect(200,200,5,5)

context.fillStyle = "green";
  context.beginPath();
  var radius = 200; // for example
  context.arc(400, 200, radius, 0, Math.PI * 2);
  context.closePath();
  context.fill();
  context.fillStyle = "black"; // font color to write the text with
  var font = "bold " + radius +"px serif";
  context.font = font;
// Move it down by half the text height and left by half the text width
var width = context.measureText(text).width;
var height = context.measureText("w").width; // this is a GUESS of height
context.fillText(text, 200 - (width/2) ,200 + (height/2));

// To show where the exact center is:
context.fillRect(200,200,5,5)