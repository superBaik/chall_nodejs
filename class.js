class Rectangle {
    constructor(originHeight, originWeight) {
      this.height = originHeight;
      this.weight = originWeight;
    }
    
    

    // Getter
    get area() {

        return this.calcArea();
    }
    // Method
    calcArea() {
        console.log(this);
      return this.height * this.weight;
    }    
  }

  const square = new Rectangle(20, 10);
  
  console.log(square.area); // 100
  console.log(square.height)

