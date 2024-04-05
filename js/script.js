function calculateSquareArea (side) {
    console.log(side * side)
}

calculateSquareArea (4);


function calculateTriangleArea (base, height) {
    console.log (base * height/2)
}

calculateTriangleArea (3, 5)

function calculateCircleArea (radius) {
    console.log (3.14 * radius * radius)
}

calculateCircleArea (4)

function celsiusToFahrenheit (C) {
    console.log (C * 1.8 + 32.)

}

celsiusToFahrenheit (23);

function fahrenheitToCelsius (F) {
    console.log ((F - 32) / 1.8)

}

fahrenheitToCelsius (73.4);


function totalPrice(price){

    consoe.log (price + (price * 0.21))
}  

function writeMessage (name, material, size, note) {
    console.log ( name + " ha pedido una caja de " + material + " de tamaño " + size + ". " + note + ".")
}

writeMessage ('Cristina', 'cartón', 'grande', '8.5')

