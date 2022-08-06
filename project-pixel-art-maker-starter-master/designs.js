// Variable to Select the Size of Grid:
const sizePicker = document.getElementById("sizePicker");

// Select size input:
let inputHeight = document.getElementById("inputHeight");
let inputWidth = document.getElementById("inputWidth");

// Select color input:
let color = document.getElementById("colorPicker");

// Variable to design a pixel Canvas:
const pixelCanvas = document.getElementById("pixelCanvas");

function clearGrid() {
  const allRows = document.querySelectorAll("tr");
  allRows.forEach((row) => {
    row.remove();
  });
}

function makeGrid(event) {
  event.preventDefault();

  // Clear the grid everytime
  clearGrid();

  const height = inputHeight.value;
  const width = inputWidth.value;
  // nested loop
  for (let h = 1; h <= height; h++) {
    //row element is created
    const row = document.createElement("tr");
    for (let w = 1; w <= width; w++) {
      // create column element
      const column = document.createElement("td");
      column.id = "column-h-w";
      // append it to row element
      row.appendChild(column);
    }
    // append row element to pixelCanvas
    pixelCanvas.appendChild(row);
  }
}

// When Grid size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", makeGrid);

pixelCanvas.addEventListener("click", function (event) {
  event.target.style.backgroundColor = color.value;
});
