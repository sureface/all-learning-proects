

function calc() {
    let kreditSum = document.getElementById("kredit-sum").value;
    let yearPercent = document.getElementById("year-percent").value;
    let year = document.getElementById("year").value;
    let startPercent = document.getElementById("start-percent").value;
    let period = document.getElementById("year-period").value;
    let month = document.getElementById("month").value;

    let startPayment = kreditSum * startPercent / 100;
    document.getElementById("start-payment").innerHTML = startPayment + " so'm";

    let givenSum = kreditSum - startPayment;
    document.getElementById("given-sum").innerHTML = givenSum + " so'm";

    let monthPayment = givenSum / (period * 12);
    document.getElementById("month-payment").innerHTML = monthPayment + " so'm";

    let result = "";
    let percentPayment = givenSum * yearPercent / 1200;
    let oy = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];

    
    for (let i = 0; i < period * 12; i++) {
        result +=
        document.getElementById("result").innerHTML =
            "<tr>" +
            "<td>"+ (i + 1) +"</td>" +
            "<td>"+ year +"</td>" +
            "<td>"+ oy[month] +"</td>" +
            "<td>"+ givenSum +" so'm </td>" +
            "<td>"+ monthPayment +" so'm </td>" +
            "<td>"+ percentPayment +" so'm </td>" +
            "<td>"+(monthPayment+percentPayment)+"</td>" +

            "</tr>"
            
            for (let i = 0; i < givenSum.value; i++) {
              document.getElementById("finalResult").innerHTML = givenSum;
                
            }
            
 
            givenSum -=monthPayment ;
            percentPayment = givenSum * yearPercent / 1200;
            month ++;
            
            if (month % 12 === 0) {
                month = 0;
                year ++;
            }
    }

    document.getElementById("result").innerHTML = result;

}