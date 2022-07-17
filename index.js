const oneMeterToFeet = 3.2808
const oneLiterToGallon = 0.264
const oneKilogramToPound = 2.204

/*
1 meter = 3.2808 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const number = document.getElementById("number")

const convert = document.getElementById("convert")

const meterA = document.getElementById("meter-a")
const meterB = document.getElementById("meter-b")

const feetA = document.getElementById("feet-a")
const feetB = document.getElementById("feet-b")

const literA = document.getElementById("liter-a")
const literB = document.getElementById("liter-b")

const gallonA = document.getElementById("gallon-a")
const gallonB = document.getElementById("gallon-b")

const kiloA = document.getElementById("kilo-a")
const kiloB = document.getElementById("kilo-b")

const poundA = document.getElementById("pound-a")
const poundB = document.getElementById("pound-b")

// Length (Meter/Feet)
function meterConversion() {
    numberValue = number.value
    let converted = (numberValue * oneMeterToFeet).toFixed(3)
    meterA.innerHTML = numberValue
    feetA.innerHTML = converted
}

// Length (Feet/Meter)
function feetConversion() {
    let numberValue = number.value
    let converted = (numberValue / oneMeterToFeet).toFixed(3)
    feetB.innerHTML = numberValue
    meterB.innerHTML = converted
}

// Volume (Liters/Gallons)
function literConversion() {
    numberValue = number.value
    let converted = (numberValue * oneLiterToGallon).toFixed(3)
    literA.innerHTML = numberValue
    gallonA.innerHTML = converted 
}

// Volume (Gallons/Liters)
function gallonConversion() {
    numberValue = number.value
    let converted = (numberValue / oneLiterToGallon).toFixed(3)
    gallonB.innerHTML = numberValue
    literB.innerHTML = converted 
}

// Mass (Kilograms/Pounds)
function kilogramsConversion() {
    numberValue = number.value
    let converted = (numberValue * oneKilogramToPound).toFixed(3)
    kiloA.innerHTML = numberValue
    poundA.innerHTML = converted
}

// Mass (Pounds/Kilograms)
function poundsConversion() {
    numberValue = number.value
    let converted = (numberValue / oneKilogramToPound).toFixed(3)
    poundB.innerHTML = numberValue
    kiloB.innerHTML = converted
}

convert.addEventListener("click", function() {
    meterConversion()
    feetConversion()
    literConversion()
    gallonConversion()
    kilogramsConversion()
    poundsConversion()
})