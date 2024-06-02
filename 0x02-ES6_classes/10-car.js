/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clone = new this.constructor();
    Object.getOwnPropertySymbols(this).forEach((prop) => {
      clone[prop] = this[prop];
    });
    return clone;
  }
}
