
let person = {
    name: "Nizom",
    surname: "Muxammatov",
    legs: 2,
    isMarried: false,
    technologies: ["HTMl", "CSS", "Bootstrap", "SASS", "Javascript"]
}

console.log(person);

console.log(person.name);


person.surname = "MUXAMMATOV";

console.log(person);

console.log(person.technologies[4]);

person.technologies.push("React");

console.log(person);

let numbers1 = [12, 9, 6, 21, 13, 18];

for (let i = 0; i < numbers1.length; i++){
    if (numbers1[i] % 2 === 0 && numbers1[i] % 3 === 0){
        console.log(numbers1[i]);
    }
}


// ham 2 ga, ham 3 ga bo'linadigan elementlari yig'indisini chiqaring

let summa = 0;

// 0 - yig'indini kerak bo'lsa
// 1 - ko'paytma kerak bo'lsa

for (let i = 0; i < numbers1.length; i++){
    if (numbers1[i] % 2 === 0 && numbers1[i] % 3 === 0){
        // summa = summa + numbers1[i];
        summa += numbers1[i];
    }
}

console.log(summa);

// ham 2 ga, ham 3 ga bo'linadigan elementlari sonini aniqlang.

let k = 0;
//sanagich (schetchik);

for (let i = 0; i < numbers1.length; i++){
    if (numbers1[i] % 2 === 0 && numbers1[i] % 3 === 0){
       k++;
        //sanagich (schetchik);

        // k = k + 1
    }

}

console.log(k);

//   i = i + 1      =>     i++     --- increment
//   i = i * 12     =>     i *= 12
//   i = i - 1      =>     i--     --- decrement


//task 1. sonlardan iborat arrayning ham 7 ga,
// ham 19 ga bo'linadigan elementlari yig'indisi



//task 2. sonlardan iborat arrayning juft elementlari
// yig'indisidan, toq elementlari yig'indisini ayirish kerak

let number3 = [13, 6, 9, 2, 5];

let juftlari = 0;
let toqlari = 0;

for (let i = 0; i < number3.length; i++){
    if (number3[i] % 2 === 0){
        juftlari += number3[i];
    } else {
        toqlari += number3[i];
    }
}

console.log(juftlari - toqlari);


//task 3. Sonning tub yoki tub emasligini aniqlash



let son =10;
let sana = 0;

for (let i = 1; i <= son; i++){
    if (son % i === 0){
        sana++;
    }
}
console.log(sana);
if (sana === 2){
    console.log("Tub son");
} else {
    console.log("Tub son emas");
}
// console.log(parseInt(son / 3));

// task 1. sonlardan iborat arrayning ham 3 ga, ham 11 ga,
//     ham 7 ga bo'linadigan bo'linadigan elementlari yig'indisini
//
// task 2. sonlardan iborat arrayning elementlari o'rta
// arifmetik qiymatini hisoblang.
//
//     task 3. berilgan songacha bo'lgan tub sonlarni consolega
// chiqaaring.
