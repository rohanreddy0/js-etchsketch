let page_container = document.querySelector('#page-container');

function createGridRow() {
    for (let i = 1; i <= 16; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        page_container.appendChild(gridRow);
    }
}

createGridRow();

