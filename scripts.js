// Grid Size
let grid_size_picker = document.querySelector('#grid-size');
let grid_size = parseInt(grid_size_picker.value);
grid_size_picker.addEventListener('change', () => {
    console.log(grid_size_picker.value);
    grid_size = parseInt(grid_size_picker.value);
    page_container.innerHTML = '';
    rowPropagate();
    addHoverListeners();
});

// Create grids
let page_container = document.querySelector('#page-container');

function createGridRow() {
    const gridRowContainer = document.createElement('div');
    gridRowContainer.classList.add('grid-row-container');
    for (let i = 1; i <= grid_size; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridRowContainer.appendChild(gridSquare);
    }
    page_container.appendChild(gridRowContainer);
}

function rowPropagate() {
    for (let i = 1; i <= grid_size; i++) {
        createGridRow();
    }
}

// Runtime Code
rowPropagate();
addHoverListeners()

// Add hover listeners too all squares
function addHoverListeners() {
    const squares = document.querySelectorAll('.grid-square');
    for (let i = 0; i <= squares.length; i++) {
        squares[i].addEventListener('mouseover', () => {
            squares[i].style.backgroundColor = 'red';
        });
        squares[i].addEventListener('mouseout', () => {
            squares[i].style.backgroundColor = '#BBBBBB';
        })
    }
}

// TODO: Resize grids to fit
