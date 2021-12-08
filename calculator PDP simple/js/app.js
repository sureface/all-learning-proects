d// 1. Sonlardan iborat arrayning elementlarining juftlarini chiqaring.
//
// 2. Sonlardan iborat arrayning toq elementlarini o'rniga 0 joylashtirib chiqaring.
//
// 3. Sonlardan iborat arrayning eng katta va eng kichik elementini chiqaring.





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// 1. sonlardan iborat arrayning ham 3 ga, ham 11 ga,   ham 7 ga bo'linadigan bo'linadigan elementlari yig'indisini

// 2. sonlardan iborat arrayning elementlari o'rta arifmetik qiymatini hisoblang.

// 3. berilgan songacha bo'lgan tub sonlarni consolega chiqaaring.


// let jasur = [10, 12, 16, 33, 76];
// console.log(jasur);

// for (let i = 0; i <= jasur.length; i = i + 2) {
//     console.log(jasur);
    
// }


// let bar = [23, 90, 12, 89, 77, 990, 54, 124, 31, 123, 21, 153, 50, 54, 305, 546, 26, 51, 68, 69, 451, 87, 98, 953, 125, 789];

// for (let i = 0; i < bar.length; i++){
//     if (bar[i] % 11 === 0 && bar[i] % 3 === 0 && bar[i] % 7 === 0){
//         console.log(bar[i]);
//     }
// };

// let numbers1 = [12, 9, 6, 21, 13, 18];

// for (let i = 0; i < numbers1.length; i++){
//     if (numbers1[i] % 2 === 0 && numbers1[i] % 3 === 0){
//         console.log(numbers1[i]);
//     }
// }


function hisoblash () {
    console.log(document.getElementById("numberOne").value);
    console.log(document.getElementById("numberTwo").value);
    console.log(document.getElementById("action").value);
    
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
    let action = document.getElementById("action").value;
    
    let result;
    
    if (numberOne.length > 0 && numberTwo.length > 0 || numberOne.length > 0 && action === "root" ) {
        
    
    if (action === "pluse") {
       result = +numberOne + +numberTwo;
    }else if (action === "subtract") {
        result = numberOne - numberTwo;
    }else if (action === "multiplay") {
        result = numberOne * numberTwo;
    }else if (action === "divide") {
        if (numberTwo != 0) {
             result = numberOne / numberTwo;
        }else{
            document.getElementById('result').innerHTML = "<div class='alert alert-danger mt-3>Xatolik! Bolib bolmaydi </div>'"
            return;
        }
       
    }else if (action === "root") {
        result = Math.sqrt(numberOne);
    }
    
    document.getElementById("result").innerHTML = " <div class='alert text-pprimary mt-3'> natija: <b>" + result + "</b> <button type='button' class='close' data-dismiss='alert' &times;></button></div>";
}else{
    document.getElementById("result").innerHTML = "<div class='alert alert-danger mt-3' Xatolik Ma'lumotni To'ldring!</div>"
}
    
}

function changeSelect() {
    if (doqument.getElementById("action"). value === "root") {
        document.getElementById("numberTwo").style.display= "none";
        
    }else{
        document.getElementById("numberTwo").style.display="block";
    };
}