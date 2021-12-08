

let numberOne = 80, numberTwo = 60;


if (numberOne > numberTwo){
    console.log("Kattasi: " + numberOne);
} else if (numberOne < numberTwo){
    console.log("Kattasi: " + numberTwo);
} else {
    console.log("Ikkala son teng.");
}


let weekDay = 2;
//
// if (weekDay === 1){
//     console.log("Dushanba");
// } else if (weekDay === 2){
//     console.log("Seshanba");
// } else if (weekDay === 3){
//     console.log("Chorshanba");
// } else if (weekDay === 4){
//     console.log("Payshanba");
// } else if (weekDay === 5){
//     console.log("Juma");
// } else if (weekDay === 6){
//     console.log("Shanba");
// } else if (weekDay === 7){
//     console.log("Yakshanba");
// } else {
//     console.log("Bunday kun\n mavjud emas!");
// }

switch (weekDay){
    case 1:
        console.log("Dushanba");
        break;
    case 2:
        console.log("Seshanba");
        break;
    case 3:
        console.log("Chorshanba");
        break;
    case 4:
        console.log("Payshanba");
        break;
    case 5:
        console.log("Juma");
        break;
    case 6:
        console.log("Shanba");
        break;
    case 7:
        console.log("Yakshanba");
        break;
    default:
        console.log("Bunday kun mavjud emas!");
        break;
}

let numbers = [34, -56, 12, 93, 46];

console.log(numbers);

console.log(numbers[2]);

numbers[2] = 90;

console.log(numbers);


console.log(numbers.length);
//length - arrayning uzunligini aniqlash

numbers.push(28, 49, 20);
//push - arrayning oxiriga yangi element qo'shish

console.log(numbers);

numbers.pop();
//pop - arrayning oxiridan bitta elementni o'chiradi

console.log(numbers);

numbers.unshift(31, -48);
//unshift - arrayning boshidan yangi element qo'shish uchun

console.log(numbers);

numbers.shift();
//shift - arrayning boshidan 1 ta elementni o'chirish uchun

console.log(numbers);

numbers.splice(3, 1);
//3-indexdan boshlab, 1 ta elementni o'chirish

console.log(numbers);

numbers.splice(5,0, 90);
//5-indexdan boshlab, 0 tasini o'chirib, 90 ni qo'shib qo'yish

console.log(numbers);

numbers.splice(2, 1, 120);
//2-indexdan boshlab, 1 tasini o'chirib, o'rniga 120 ni qo'yish

console.log(numbers);


for (let i = 21; i <= 80; i = i + 3){
    console.log(i);
}

let numbers2 = [23, 90, -12, 89, 77];

for (let i = 0; i < numbers2.length; i = i + 1){
    if (numbers2[i] % 2 === 1){
        console.log(numbers2[i])
    }
}





// 1. Sonlardan iborat arrayning elementlarining juftlarini chiqaring.
//
// 2. Sonlardan iborat arrayning toq elementlarini o'rniga 0 joylashtirib chiqaring.
//
// 3. Sonlardan iborat arrayning eng katta va eng kichik elementini chiqaring.
