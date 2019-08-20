console.log("-----------------------CLASS CONVERSION------------------------------")
// 1. Copy and paste your prototype in here and refactor into class syntax.

class ConvertCuboidMaker{
  constructor(cuboid) {
  this.length = cuboid.length;
  this.width =  cuboid.width;
  this.height = cuboid.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}  

// CuboidMaker.prototype.volume = function() {
//   return this.length * this.width * this.height;
// };

// CuboidMaker.prototype.surfaceArea = function() {
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// };

const convertCuboid = new CuboidMaker({
  length: 4,
  width:  5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
console.log("--------------------------STRECH-------------------------------------")

class CubeMaker extends CuboidMaker{
  constructor(cube){
    super(cube);
  }
  cubeVolume() {
    return (Math.pow(this.length, 3));
  }
  cubeSurfaceArea() {
    return 6 * (Math.pow(this.length, 2));
  }
}

const cube = new CubeMaker({
  length: 12,
  width:  12,
  height: 12
});

console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());