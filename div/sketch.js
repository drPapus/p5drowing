var myDiv0;
var myDiv1;
var myDiv2;

function setup() {

  myDiv0 = createDiv('this is div 0');
  myDiv1 = createDiv('this is div 1');
  myDiv2 = createDiv('this is div 2');

  // Here we call methods of each element to set the position and class.
  // Let's give the first two canvases class donkey, and the third class yogurt.
  myDiv0.position(50, 50);
  myDiv0.class('donkey');
  myDiv1.position(300, 50);
  myDiv1.class('donkey');
  myDiv2.position(550, 50);
  myDiv2.class('yogurt');
}

// On key press, hide all elements with class donkey.
function keyPressed() {
  // selectAll() returns an array of elements with class donkey. 
  // If none are found, it returns an empty array [].
  var donkeys = selectAll('.donkey');
  // We can then iterate through the array and hide all the elements.
  for (var i = 0; i < donkeys.length; i++) {
    donkeys[i].hide();
  }
}