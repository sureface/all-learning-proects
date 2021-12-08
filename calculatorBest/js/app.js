
let input = document.getElementById("screen");
let selectedAmal = "";
let numberOne = 0;
let selectedAmalOriginal = "";

function addNumber(number){

    console.log(number);

    if (input.value.indexOf('.') !== -1 && number === '.'){

    } else {
        if (input.value === "0" && number !== '.' || selectedAmal.length > 0 ){
            input.value = number;
            selectedAmal = "";

        } else {
            input.value += number;
        }
    }
}
//helloo$$

function action(amal){
    selectedAmal = amal;
    selectedAmalOriginal = amal;
    numberOne = input.value;
}

function equal(){

    let numberTwo = input.value;

    let result = 0;

    if (selectedAmalOriginal === "add"){
        result = parseFloat(numberOne) + parseFloat(numberTwo);
    } else if (selectedAmalOriginal === "minus"){
        result = numberOne - numberTwo;
    } else if (selectedAmalOriginal === "multiply"){
        result = numberOne * numberTwo;
    } else if (selectedAmalOriginal === "divide"){
        result = numberOne / numberTwo;
    }

    input.value = result;
}




function foiz() {
    input.value = eval(input.value)/100;
}

function f(name) {
    if (name == 'sin') {
        input.value = parseFloat(Math.sin(eval(input.value) /180*Math.PI).toFixed(8).toString);
    }
}

//##############################33

function back() {
    if (input.value.length == "1") {
        input.value = 0;
    } else{
        input.value = input.value.slice(0 , -1);
    }
}

function scuare() {
    input.value *= input.value;
}

function scrt() {
    if (input.value < 0) {
        input.value = "ohh, sorry i cant do this..!"
    } else{
        input.value = Math.sqrt(input.value)  ;
    }
}
function minus() {
    input.value *= -1;
}

//##############################3



function clearScreen(){
    input.value = 0;
    numberOne = 0;
    selectedAmal = "";
    selectedAmalOriginal = "";
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