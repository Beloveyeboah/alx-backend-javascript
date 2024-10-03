/* eslint-disable */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const cloned = Object.create(
      Object.getPrototypeOf(this), 
      Object.getOwnPropertyDescriptors(this)
    );
    return cloned;
  }

}
