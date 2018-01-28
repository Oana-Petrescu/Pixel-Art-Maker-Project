// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var inputRow, inputCol;

// function to create grid by inserting the <table> tag elements
function makeGrid(row,col) {
 var grid = document.createElement('table');
 grid.className = 'grid';
 for (var i = 0; i < row; i++) {
   var tablerow = grid.appendChild(document.createElement('tr'));
  for (var j = 0; j < col; j++) {
    var cell = tablerow.appendChild(document.createElement('td'));
  }
 }
return grid;
}

// Create grid and display it on the Page when Create button is pressed

function display(e) {
  e.preventDefault();
  $('.grid').remove();
  inputRow = $('#rows').val();
  inputCol = $('#columns').val();
  var canvas = makeGrid(inputRow, inputCol);
  $('#pixelCanvas').append(canvas);
}

$('#createBtn').click(function (e) {
    display(e);
  });

// Reinitialize grid when the Reset button is clicked
$('#resetBtn').click(function (e) {
  $('#rows').attr(value,"10");
  $('#columns').attr(value,"10");
  display(e);
});

//apply color on cell
const table = $('#pixelCanvas');

table.on('click','td',function() {
  var color = $('#colorPicker').val();
  $(this).css('background', color)
});


//remove color from cell
table.on('dblclick','td', function () {
    $(this).css('background', 'white');
});

// Your code goes here!
