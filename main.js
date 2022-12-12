var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");

checkButton.addEventListener("click", function getValue(){
    sumOfDate();
    checkLuckyOrNot();
})

function sumOfDate() {
    var dob = dateOfBirth.value;
    var dob = dob.replaceAll("-", "");
    sum = 0;
    for (let i=0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function checkLuckyOrNot() {
    var givenluckyNumber = luckyNumber.value;
    if (sum %  givenluckyNumber === 0) {
        console.log("Hehe! Your birthday is lucky");
    }
    else {
        console.log("Your birthday is not that lucky");
    }
}