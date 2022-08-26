const button = document.querySelector('#changeColor')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const selectcolor1 = document.querySelector('#div1')
const selectcolor2 = document.querySelector('#div2')
const selectcolor3 = document.querySelector('#div3')

const randomColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

const border = document.querySelector('.border')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')

button.addEventListener('click', function(e) {
    e.preventDefault();
    one.style.backgroundColor = randomColor();
    two.style.backgroundColor = randomColor();
    three.style.backgroundColor = randomColor();
})
btn1.addEventListener('click', function() {
    one.style.backgroundColor = selectcolor1.value
})
btn2.addEventListener('click', function() {
    two.style.backgroundColor = selectcolor2.value
})
btn3.addEventListener('click', function() {
    three.style.backgroundColor = selectcolor3.value
})


let gridNum = 16;
const slider = document.querySelector(".myRange");
const gridNumberOutput = document.querySelector(".gridNumberOutput");
const pickerContainer = document.querySelector(".pickerContainer");
const colorPicker = document.querySelector(".colorPicker");
const sketchContainer = document.querySelector(".sketchContainer");
const gridDiv = document.createElement("div");
const eraser = document.querySelector(".eraser");
const rainbow = document.querySelector(".rainbow");
let colorPick = colorPicker.value;
const clear = document.querySelector(".clear");
gridNumberOutput.textContent = `${slider.value} X ${slider.value}`;
let grids;
const chooseColor = document.querySelector(".chooseColor");

function changeToRandomBGColor(e) {
    e.target.style.background = randomColor();
}

function defaultColor(e) {
    e.target.style.background = "#f0f8ff";
}

function pickedColor(e) {
    e.target.style.background = colorPick;
}

function makeGrid() {
    sketchContainer.setAttribute(
        "style",
        `grid-template-columns: repeat(${gridNum}, 1fr);
        grid-template-rows: repeat(${gridNum}, 1fr);`
    );

    for (let i = 0; i < gridNum ** 2; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv");
        gridDiv.addEventListener("mouseover", changeToRandomBGColor);
        sketchContainer.appendChild(gridDiv);
    }
}

rainbow.addEventListener("click", () =>
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", changeToRandomBGColor);
    })
);

eraser.addEventListener("click", () => {
    grids = document.querySelectorAll(".gridDiv");
    grids.forEach((grid) => {
        grid.removeEventListener("mouseover", pickedColor);
        grid.removeEventListener("mouseover", changeToRandomBGColor);
        grid.addEventListener("mouseover", defaultColor);
    });
});

chooseColor.addEventListener("click", () => {
    grids = document.querySelectorAll(".gridDiv");
    grids.forEach((grid) => {
        grid.removeEventListener("mouseover", changeToRandomBGColor);
        grid.addEventListener("mouseover", pickedColor);
    });
});

clear.addEventListener("click", () => {
    grids = document.querySelectorAll(".gridDiv");
    grids.forEach((grid) => {
        grid.style.background = "#f0f8ff";
    });
});

colorPicker.addEventListener("input", () => {
    pickerContainer.style.background = colorPicker.value;
    // colorPick = colorPicker.value;
});

slider.addEventListener("input", () => {
    gridNumberOutput.textContent = `${slider.value} X ${slider.value}`;
    gridNum = slider.value;
    makeGrid();
});
pickerContainer.style.background = colorPicker.value;

makeGrid((gridNum = 16));