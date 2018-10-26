const MAX = 600;
let canvas = document.getElementById('canvas');
let sidepanel = document.getElementById('sidepanel');
let recButton = document.getElementById('recButton');
let recWidth = document.getElementById('recWidth');
let recHeight = document.getElementById('recHeight');
let circleBtn = document.getElementById('circleBtn');
let cirRadius = document.getElementById('cirRadius');
let squareBtn = document.getElementById('squareBtn');
let sqWidth = document.getElementById('sqWidth');
let triangleBtn = document.getElementById('triangleBtn');
let triWidth = document.getElementById('triWidth');

class Shape {
    constructor(width, height) {
        this.div = document.createElement('div');
        this.div.classList.add('shape');
        let xVal = randomVal(0, this.adjustLoc(width));
        let yVal = randomVal(0, this.adjustLoc(height));
        this.div.style.width = `${width}px`;
        this.div.style.height = `${height}px`;
        this.div.style.left = `${xVal}px`;
        this.div.style.top = `${yVal}px`;
        this.div.id = 'rectangle';
        this.width = this.div.style.width;
        this.height = this.div.style.height;
        this.name = 'Shape';
        this.radius = 0;
        this.area = height * width;
        this.perimeter = height * 2 + width * 2;
        this.div.addEventListener('click', () => this.describe());
        this.div.addEventListener('dblclick', () => this.remove());
        canvas.appendChild(this.div);
    }

    adjustLoc(val) {
        let max = 600 - val;
        return max;
    }

    describe() {
        shpName.textContent = this.name;
        shpWidth.textContent = this.width;
        shpHeight.textContent = this.height;
        shpRadius.textContent = this.radius;
        shpArea.textContent = this.area;
        shpPerimeter.textContent = this.perimeter;
    }

    remove() {
        this.div.remove();
        this.clearDescribe();
    }

    clearDescribe() {
        shpName.textContent = '';
        shpWidth.textContent = '';
        shpHeight.textContent = '';
        shpRadius.textContent = '';
        shpArea.textContent = '';
        shpPerimeter.textContent = '';
    }
}

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.radius = 'N/A'
        this.div.id = 'rectangle';
        this.name = 'Rectangle';
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2);
        this.div.id = 'circle';
        this.name = 'Circle';
        this.width = 'N/A';
        this. height = 'N/A'
        this.radius = cirRadius.value;
        this.area = parseInt(radius * radius * 3.14159);
        this.perimeter = parseInt(2 * radius * 3.14159);
    }
}

class Square extends Shape {
    constructor(side) {
        super(side, side);
        this.div.id = 'square';
        this.name = 'Square';
        this.radius = 'N/A'
        this.area = side * side;
        this.perimeter = side * 4;
    }
}

class Triangle extends Shape {
    constructor(side) {
        super(side, side);
        this.div.id = 'triangle';
        this.name = 'Triangle';
        this.radius = 'N/A'
        this.div.style.borderBottomWidth = `${side}px`;
        this.div.style.borderBottomStyle = 'solid';
        this.div.style.borderBottomColor = '#FDD835';
        this.div.style.borderRightWidth = `${side}px`;
        this.div.style.borderRightStyle = 'solid';
        this.div.style.borderRightColor = 'transparent';
        this.area = 0.5 * (side * side);
        this.perimeter = parseInt(2 * side + Math.sqrt(2) * side);
    }
}

// function insertRectangle() {
//     let rec = new Rectangle(recWidth.value, recHeight.value);
// }

// function insertCircle() {
//     let cir = new Circle(cirRadius.value);
// }

// function insertSquare() {
//     let sq = new Square(sqWidth.value);
// }

// function insertTriangle() {
//     let tri = new Triangle(triWidth.value);
// }

recButton.addEventListener('click', () => {let rec = new Rectangle(recWidth.value, recHeight.value)});

squareBtn.addEventListener('click', () => {let sq = new Square(sqWidth.value)});

circleBtn.addEventListener('click', () => {let cir = new Circle(cirRadius.value)});

triangleBtn.addEventListener('click', () => {let tri = new Triangle(triWidth.value)});
