'use strict';

import { Shape } from './classes.js';

const shapeSelect = document.querySelector('#shapeSelect');
const colorSelect = document.querySelector('#colorSelect');
const shapeContainer = document.getElementById('storage');
const button = document.getElementById('create');
const paragraph = document.querySelector('.paragraph')

const arrayOfShapes = [];
const maxShapes = 20;
let shapeCounter = 0;

function createShape() {

    const newShape = new Shape(selectedShape, selectedColor);
    arrayOfShapes.push(newShape);

    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = SelectedColor;

    if (shape === 'square' && arrayOfShapes.length <= maxShapes) {
        newDiv.style.borderRadius = '5px';
    } else if (shape === 'circle') {
        newDiv.style.borderRadius = '50%';
    } else {
        paragraph.innerText = 'Container full, refresh to continue';
    }

    shapeCounter++;

    return newDiv;

}

function buildAndInsert() {

    const selectedShape = shapeSelect.value;
    const selectedColor = colorSelect.value;

    const createdShape = createShape(selectedShape, selectedColor);
    shapeContainer.appendChild(createdShape);

}

document.getElementById('create').addEventListener('click', buildAndInsert);

// click and get information about the div
function getInfo() {
    paragraph.innerText = `Item ${shapeCounter}: ${selectedColor} ${selectedShape}`;
}

document.querySelector(createdShape).addEventListener('click', getInfo);
