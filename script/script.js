var height = document.getElementById("height");
var weight = document.getElementById("weight");
var result = document.getElementById("result")


function calc(){
    let x = height.value/100;
    let y = weight.value;
    let bmi = y/(x*x);
    let value = bmi.toFixed(2);
    if (value < 18.5) {
        result.innerText =`Your BMI Value is ${value}, 
                            you are Under Weight.` ;
    }else if (value>18.5 && value<24.9){
        result.innerText = `Your BMI Value is ${value},
                             you are Normal weight.`;   
    }else if(value>25 && value<29.9){
        result.innerText = `Your BMI Value is ${value},
                             you are Pre-obesity(Over weight).`;
    }else if (value>30 && value<34.9){
        result.innerText = `Your BMI Value is ${value},
                             you are Obesity class-1.`;
    }else if(value>35 && value<39.9){
        result.innerText = `Your BMI Value is ${value},
                             you are Obesity class-2.`;
    }else if(value>40){
        result.innerText = `Your BMI Value is ${value},
                             you are Obesity class-3.`;
    }
}