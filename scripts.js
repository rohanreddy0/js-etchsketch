let grid_size = 10;

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

const square = document.querySelector('.grid-square');

square.addEventListener('mouseover', (event) => {
    square.style.backgroundColor = 'red';
});

square.addEventListener('mouseout', (event) => {
    square.style.backgroundColor = '#BBBBBB';
})

