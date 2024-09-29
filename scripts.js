let grid_size = 16;

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

function rowPropagate () {
    for (let i = 1; i <= grid_size; i++) {
        createGridRow();
    }
}

// Runtime Code
rowPropagate();

const squares = document.querySelectorAll('.grid-square');
console.log(squares);

for (let i = 0; i <= squares.length; i++) {
    squares[i].addEventListener('mouseover', (event) => {
        squares[i].style.backgroundColor = 'red';
    });
    squares[i].addEventListener('mouseout', (event) => {
        squares[i].style.backgroundColor = '#BBBBBB';
    })
}

