// function jsme () {
//     let a = document.getElementById("a").value;
//     let b = document.getElementById("b").value;
//     let c = document.getElementById("c").value;
    
//     let d = b * b - 4 * a * c;
    
//     let x1, x2, x;
//     if (d > 0) {
//         x1 = ( -b + Math.sqrt(d) ) / (2 * a);
//         x2 = ( -b - Math.sqrt(d) ) / (2 * a);
        
//         document.getElementById("result1").innerHTML = ("<div class='alert alert-primary mt-3'> Natija: <b>" + x1 + "</b> <button type='button' class='close' data-dismiss='alert'> &times; </button> </div>");
        
//         document.getElementById("result2").innerHTML = ("<div class='alert alert-primary mt-3'> Natija: <b>" + x2 + "</b> <button type='button' class='close' data-dismiss='alert'> &times; </button> </div>");
        
//     } else if ( d === 0){
//         x = -b / (2 * a);
//         document.getElementById("result2").innerHTML =  ("<div class='alert alert-primary mt-3'> Natija: <b>" + x + "</b> <button type='button' class='close' data-dismiss='alert'> &times; </button> </div>");
//     }else if () {
        
//     }
//      else {
//         document.getElementById("result2").innerHTML = "<div class='alert alert-danger mt-3'>Xatolik..!</div>";
//     }
// };

let input = document.getElementById("screen");

let sellectedAmal = "";
let numberOne = 0;
let sellectedAmalOrginali = "";

function addNumber(number) {
    
    if (input.value.indexOf('.') !== -1 && number === '.') {
        
    }else{
         if (input.value === "0" &&  number !== "." || sellectedAmal.length > 0) {
        input.value = number;
        sellectedAmal = "";
    }else{
         input.value += number;
    }
    }
    
}

function action(amal) {
    sellectedAmal = amal;
    sellectedAmalOrginali = amal;
    numberOne = input.value;
}


function equal() {
    let numberTwo = input.value;
    let result = 0;
    
    if (sellectedAmalOrginali === "add") {
        result = +numberOne + +numberTwo;
    }else if (sellectedAmalOrginali === "minus") {
        result = numberOne - numberTwo;
    } else if (sellectedAmalOrginali === "multiplay") {
        result = numberOne * numberTwo;
    } else if (sellectedAmalOrginali === "teng") {
        result = numberOne / numberTwo;
    }
    input.value = result;
    
}


function clearScreen() {
    input.value = 0;
    sellectedAmal = "";
    numberOne = 0;
    sellectedAmalOrginali = "";
}

document.addEventListener("keydown", function (event){
    if (event.keyCode === 101){
        addNumber(5);
    } else if (event.keyCode === 96){
        addNumber(0)
    }else if (event.keyCode === 97){
        addNumber(1)
    }else if (event.keyCode === 98){
        addNumber(2)
    }else if (event.keyCode === 99){
        addNumber(3)
    }else if (event.keyCode === 100){
        addNumber(4)
    }else if (event.keyCode === 102){
        addNumber(6)
    }else if (event.keyCode === 103){
        addNumber(7)
    }else if (event.keyCode === 104){
        addNumber(8)
    }else if (event.keyCode === 105){
        addNumber(9)
    }else if (event.keyCode === 110){
        addNumber('.')
    }else if (event.keyCode === 107){
        action('add');
    }else if (event.keyCode === 109){
        action('minus');
    }else if (event.keyCode === 106){
        action('multiply');
    }else if (event.keyCode === 111){
        action('divide');
    }else if (event.keyCode === 13){
        equal();
    }else if (event.keyCode === 27){
        clearScreen();
    }
})