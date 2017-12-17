

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.calcArea(this.height*this.width);
    console.log(this.a);
  }
  // Getter
  get area() {
    return this.calcArea();
  }

  // Method
  calcArea(a){
    this.a=a;
  }


}
