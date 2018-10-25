const MAX = 600;
let canvas = document.getElementById('canvas');
let sidepanel = document.getElementById('sidepanel');

class Shape {
    constructor(x, y) {
        this.div = document.createElement('div');
        this.div.classList.add('shape');
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        canvas.appendChild(this.div);
        this.div.addEventListener('click', () => this.describe());
        this.div.addEventListener('dblclick', () => this.div.remove());
    }

    describe() {
        // this.iName();
        // this.iWidth();
        // this.iHeigth();
        // this.iRadius();
        // this.iArea();
        // this.iPerimeter();
    }

    iName() {
        let shpName = document.getElementById('shpName');
        shpName.removeChild(shpName.childNodes[0]);
        let span = document.createElement('span');
        shpName.appendChild(span);
        let name = document.createTextNode('Shape Name: Rectangle');
        span.appendChild(name);
       
    }

    iWidth() {
        let shpWidth = document.getElementById('shpWidth');
        shpWidth.removeChild(shpWidth.childNodes[0]);
        let span = document.createElement('span');
        shpWidth.appendChild(span);
        let shapeWth = `Width: ${this.div.style.width}`;
        span.innerHTML += shapeWth;
        shpWidth.appendChild(span);
    }

    iHeigth() {
        let shpHeigth = document.getElementById('shpHeight');
        shpHeigth.removeChild(shpHeigth.childNodes[0]);
        let shapeHth = `Heigth: ${this.div.style.height}`;
        let span = document.createElement('span');
        span.innerHTML += shapeHth;
        shpHeigth.appendChild(span);
    }

    iRadius() {
        let shpRadius = document.getElementById('shpRadius');
        shpRadius.removeChild(shpRadius.childNodes[0]);
        let shpRad = cirRadius.value;
        let shapeRad = 'Radius: ' + shpRad + 'px';
        let span = document.createElement('span');
        span.innerHTML += shapeRad;
        shpRadius.appendChild(span);
    }

    iArea() {
        let shpArea = document.getElementById('shpArea');
        shpArea.removeChild(shpArea.childNodes[0]);
        let x = recWidth.value;
        let y = recHeight.value;
        let area = 'Area: ' + x * y + 'px';
        let span = document.createElement('span');
        span.innerHTML += area;
        shpArea.appendChild(span);
    }

    iPerimeter() {
        let shpPerimeter = document.getElementById('shpPerimeter');
        shpPerimeter.removeChild(shpPerimeter.childNodes[0]);
        let x = recWidth.value;
        let y = recHeight.value;
        let newArea = 2 * x + 2 * y;
        let perimeter = 'Perimeter: ' + newArea + '';
        let span = document.createElement('span');
        span.innerHTML += perimeter;
        shpPerimeter.appendChild(span);
    }
}

let recButton = document.getElementById('recButton');
recButton.addEventListener('click', insertRectangle);

let squareBtn = document.getElementById('squareBtn');
squareBtn.addEventListener('click', insertShape);

let circleBtn = document.getElementById('circleBtn');
circleBtn.addEventListener('click', insertCircle);

let triangleBtn = document.getElementById('triangleBtn');
triangleBtn.addEventListener('click', insertShape);

class Rectangle extends Shape {
    constructor(x, y, wth, hth) {
        super(x, y);
        this.div.style.width = `${wth}px`;
        this.div.style.height = `${hth}px`;
        this.div.id = 'rectangle';
    }

    describe() {
        this.iName();
        this.iWidth();
        this.iHeigth();
        this.iRadius();
        this.iArea();
        this.iPerimeter();
    }
    iRadius() {
        let shpRadius = document.getElementById('shpRadius');
        shpRadius.removeChild(shpRadius.childNodes[0]);
        // let shpRad = cirRadius.value;
        let shapeRad = 'Radius: ' ;
        let span = document.createElement('span');
        span.innerHTML += shapeRad;
        shpRadius.appendChild(span);
    }
}

class Circle extends Shape {
    constructor(x, y, rad) {
        super(x, y);
        this.div.style.width = `${rad}px`;
        this.div.style.height = `${rad}px`;
        this.div.id = 'circle';
    }

    describe() {
        this.iName();
        this.iRadius();
        this.iArea();
        this.iPerimeter();
    }
    iArea() {
        let shpArea = document.getElementById('shpArea');
        shpArea.removeChild(shpArea.childNodes[0]);
        let x = cirRadius.value;
        let y = 3.14159 * x * x;
        let area = 'Area: ' + y + '';
        let span = document.createElement('span');
        span.innerHTML += area;
        shpArea.appendChild(span);
    }
    iPerimeter() {
        let shpPerimeter = document.getElementById('shpPerimeter');
        shpPerimeter.removeChild(shpPerimeter.childNodes[0]);
        let x = cirRadius.value;
        let newArea = 2 * x * 3.14159;
        let perimeter = 'Perimeter: ' + newArea + '';
        let span = document.createElement('span');

        span.innerHTML += perimeter;
        shpPerimeter.appendChild(span);
    }
    iName() {
        let shpName = document.getElementById('shpName');
        shpName.removeChild(shpName.childNodes[0]);
        let span = document.createElement('span');
        shpName.appendChild(span);
        let name = document.createTextNode('Shape Name: Circle');
        span.appendChild(name);
        
    }
    
}

function insertRectangle() {
    let height = recHeight.value;
    let width = recWidth.value;
    let xAdjMAX = MAX - width;
    let yAdjMAX = MAX - height;
    let xVal = randomVal(0, xAdjMAX);
    let yVal = randomVal(0, yAdjMAX);
    let sq = new Rectangle(xVal, yVal, width, height);
}

function insertCircle() {
    let rad = cirRadius.value;
    let xAdjMAX = MAX - rad;
    let yAdjMAX = MAX - rad;
    let xVal = randomVal(0, xAdjMAX);
    let yVal = randomVal(0, yAdjMAX);
    let sq = new Circle(xVal, yVal, rad);
}

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function insertShape() {
    let height = recHeight.value;
    let width = recWidth.value;
    let xAdjMAX = MAX - width;
    let yAdjMAX = MAX - height;
    let xVal = randomVal(0, xAdjMAX);
    let yVal = randomVal(0, yAdjMAX);
    let sq = new Shape(xVal, yVal, width, height);
}
