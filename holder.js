

const MAX = 600;
let canvas = document.getElementById('canvas');
class Shape {
    constructor(x, y, a, b) {
        this.div = document.createElement('div');
        this.div.classList.add('shape');
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.style.width = `${a}px`;
        this.div.style.height = `${b}px`;
        this.div.style.backgroundColor = 'red';
        canvas.appendChild(this.div);
    }
 

 
}
let recButton = document.getElementById('recButton');
recButton.addEventListener('click', insertShape);


// let recButton = document.getElementById('recButton');
// recButton.addEventListener('click', insertShape);

// class Rectangle extends Shape {
//     constructor() {
//         super();
//     }

// }

function insertShape() {
    let recHeight = document.getElementById('recHeight');
    let recWidth = document.getElementById('recWidth');
    let height = recHeight.value;
    let width = recWidth.value;
    let xAdjMAX = MAX - width;
    let yAdjMAX = MAX - height;
    let xVal = randomVal(0, xAdjMAX);
    let yVal = randomVal(0, yAdjMAX);
    console.log(width, height, 'width & height')
    console.log(xVal, yVal, 'plain')
    console.log(xAdjMAX, yAdjMAX, 'adjusted')
    let sq = new Shape(xVal, yVal, width, height);
}



function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
