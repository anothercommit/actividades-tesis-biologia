let checkbox;

function setup() {
    createCanvas(800, 600);
    checkbox = createCheckbox('Metilar', false);
    checkbox.changed(checkboxes);
}

function draw() {
    background(220)
}
   
function checkboxes() {
    if (checkbox.checked()) {
    console.log('Checking!');
  } else {
    console.log('Unchecking!');
  }
}