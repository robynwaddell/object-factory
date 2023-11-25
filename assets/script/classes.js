'use strict';
import { fileURLToPath } from 'url';

class Shape {

    _shape;
    _color;

    constructor(name, color) {
        this._color = color;
        this._shape = shape;
    }

    get color() {
        return this._color;
    }

    get shape() {
        return this._shape;
    }

    getInfo() {
        return(`Shape: ${this._shape}, Color: ${this._color}`);
    }
}

export { Shape }