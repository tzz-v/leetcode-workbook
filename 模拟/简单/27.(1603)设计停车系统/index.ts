class ParkingSystem {
  public big: number;
  public medium: number;
  public small: number;
  constructor(big: number, medium: number, small: number) {
    this.big = big;
    this.medium = medium;
    this.small = small;
  }

  addCar(carType: number): boolean {
    switch (carType) {
      case 1:
        if (!this.big) return false;
        this.big--;
        return true;
      case 2:
        if (!this.medium) return false;
        this.medium--;
        return true;
      case 3:
        if (!this.small) return false;
        this.small--;
        return true;
    }
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
