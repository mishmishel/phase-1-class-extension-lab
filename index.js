// Your code here

class Polygon {

    constructor(sides) {
        this.sides = sides;
    }

    get sideCount() { // this calls the countSides function
        return this.countSides(); 
    } // this function returns the length of the sides array - indicating the number of sides in the polygon 

    get perimeter(){
        return this.calculatePerimeter()
    }

    get countSides() {
        return this.sides.length;
    }

    calculatePerimeter() { // calculates the sum of all the sides in the polygon array
        return this.sides.reduce((acc, side) => acc + side, 0);
    }
}

class Triangle extends Polygon { 
// Triangle is a subclass of polygon - it inherits the constructor from polygon using super(sides)

    constructor(sides) {
        super(sides);
    }

    get isValid() { 
        return this.checkValidity();
    }

    checkValidity() {
        if(this.sides.length !== 3) { // checks if triangle has three sides
            return false
        }

        const [a,b,c] = this.sides; // checks if sum of any two sides is greater than third side
        return a + b > c && b + c > a && a + c > b;
    }

}

class Square extends Polygon {

    constructor(sides) {
        super(sides);
    }

    get isValid() {
        return this.checkValidity();
    }

    get area() {
        return this.calculateArea();
    }

    checkValidity() {
        if(this.sides.length !== 4) {
            return false
        }

        const sideLength = this.sides[0];
        return this.sides.every(side => side === sideLength);
    }

    calculateArea() {
        const sideLength = this.sides[0];
        return sideLength * sideLength;
    }
}

