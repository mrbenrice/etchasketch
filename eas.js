let DEFAULTCOLOR = 'black';
let DEFAULTSIZE = 16;

window.onload = () => {
    setGridSize(DEFAULTSIZE);
    color = DEFAULTCOLOR;
}

let color = 'black';
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const griddrag = document.querySelector('.grid')
griddrag.ondragstart = () => {
    return false;
};

function setGridSize (cellSize) {
    let grid = document.querySelector('.grid')
    let cells = grid.querySelectorAll('div')
    cells.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${cellSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${cellSize}, 1fr)`;
    let gridlines = document.getElementById('gridlinescheckbox').checked;

    if (gridlines == true) {
        for (let i = 0; i < (cellSize * cellSize); i++) {
            let cell = document.createElement('div');
            cell.addEventListener('mousedown', colorCell)
            cell.addEventListener('mouseover', colorCell)
            cell.style.backgroundColor = 'white';
            cell.style.border = '1px solid grey';
            grid.insertAdjacentElement("beforeend", cell);
         }
    } else if (gridlines == false) {
        for (let i = 0; i < (cellSize * cellSize); i++) {
            let cell = document.createElement('div');
            cell.addEventListener('mousedown', colorCell)
            cell.addEventListener('mouseover', colorCell)
            cell.style.backgroundColor = 'white';
            grid.insertAdjacentElement("beforeend", cell);
         }
    }

 addGridLines();
}

function changeGridSize (input) {
    if (input >= 2 && input <= 65)
    {
        setGridSize(input);
        console.log('Correct')
    } else {
        console.log('Error');
    }

}

function colorCell() {
    if (mouseDown) {
    if (color == 'random') {
        this.style.transition = '0.2s';
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else if (color == 'picker') {
        let colorPicker = document.querySelector('#colorPicker').value
        this.style.transition = '0.2s';
        this.style.backgroundColor = colorPicker;
    } else {
        this.style.transition = '0.2s';
        this.style.backgroundColor = color;
    }
}
}

function changeColor(choice) {
    color = choice;
}

function resetGrid() {
    let grid = document.querySelector('.grid')
    let cells = grid.querySelectorAll('div')
    cells.forEach((div) => div.style.backgroundColor = 'white');
}
