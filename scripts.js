let grid_size = 16;

let page_container = document.querySelector('#page-container');

function createGridRow() {
    const gridRowContainer = document.createElement('div');
    gridRowContainer.classList.add('grid-row-container');
    for (let i = 1; i <= grid_size; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridRowContainer.appendChild(gridRow);
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

