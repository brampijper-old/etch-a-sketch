const container = document.querySelector('#container');
const amountOfDiv = 256;

for(let i = 0; i < amountOfDiv; i++) {
    let squareDiv  = document.createElement('div');
    squareDiv.classList.add('grid-item')
    container.appendChild(squareDiv)
}
