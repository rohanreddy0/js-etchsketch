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
        let square_side = ((0.8*window.innerHeight) / (grid_size))-1.6;
        console.log(square_side);
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.width = square_side+'px';
        gridSquare.style.height = square_side+'px';
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
