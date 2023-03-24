const container = document.querySelector(".container");
// Initialize the grid
createGrid(container);

// Add event listener - when user clicks on new grid button, they enter a number and we reinitialize the grid with that number
const newGridButton = document.querySelector("button");
newGridButton.addEventListener('click', () => {
    let newNumber = prompt("Please enter new number of boxes");
    container.innerHTML = "";
    createGrid(container, parseInt(newNumber));
})

function createGrid(container, numberOfBoxes = 16) {
    for (i = 0; i < numberOfBoxes; i++) {
        // For each iteration, first add a row to the container
        let row = document.createElement("div");
        row.classList.add('row');
        container.appendChild(row);
        // For each row, iterate 16 times to create 16 boxes inside
        for (j = 0; j < numberOfBoxes; j++) {
            let box = document.createElement("div");
            box.classList.add('box');
            row.appendChild(box);
            // Add event listener to each box - when hovered on change the background with random rgb values
            box.addEventListener('mouseover',() => {
                //Instead of class, we will dynamically calculate the background now
                // box.classList.add('hover');
                let redValue = Math.floor(Math.random() * 256);
                let greenValue = Math.floor(Math.random() * 256);
                let blueValue = Math.floor(Math.random() * 256);
                box.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
            });
        }
    }
}






