const container = document.querySelector('#container');
const gridContainer = document.querySelector('.grid-container');

const containerWidth = gridContainer.offsetWidth - 20; 

const clearGridBtn = document.querySelector('#clearGridBtn');
let squaresPerSide = 20;

//Build up grid first time page is loaded
buildGrid(squaresPerSide)

clearGridBtn.addEventListener('click', () => {
    clearGrid();
    showPrompt()
})

function showPrompt() {
    let customSquares = Number(window.prompt("How many squares per side to make the new grid? \n *max 60 squares", "10"));

    if(customSquares > 60 || customSquares <= 0) { squaresPerSide = 60}

    buildGrid(squaresPerSide)
}

function buildGrid(squaresPerSide) {

    
    let totalSquares = squaresPerSide * squaresPerSide;
    let squareSize = containerWidth / squaresPerSide;

    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, auto [col-start])`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, auto [row-start])`;

    for(let i = 0; i < totalSquares; i++) {
        let squareDiv  = document.createElement('div');
        squareDiv.classList.add('grid-item')
        squareDiv.style.width = squareSize;
        squareDiv.style.height = squareSize;        
    
        addMouseEvents(squareDiv)
    
        container.appendChild(squareDiv)
    }
}

function addMouseEvents(element, opacity) {
    element.addEventListener("mouseover", (e) => {
        element.style.background = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        element.style.transition = "0s";
    })
    element.addEventListener("mouseout", (e) => {
       element.style.background = "black";
       element.style.transition = "1s";
       let opacity = element.style.opacity;
       element.style.opacity = opacity ?  (parseFloat(opacity) + 0.1) : 0.2;
    })
}

function clearGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }
}

function random(max) {
    return Math.floor(Math.random() * Math.floor(max))
}




