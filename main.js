var heightInput = document.querySelector(".height");
var weightInput = document.querySelector(".weight");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var val = document.querySelector(".state");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{
    
    height = (heightInput.value);
    weight = (weightInput.value);
    if((height === "" || isNaN(height))&&(weight === "" || isNaN(weight)))
        val.innerHTML="Enter valid Input";
    else if (height === "" || isNaN(height)) 
        val.innerHTML = "Enter a valid Height!";

    else if (weight === "" || isNaN(weight)) 
        val.innerHTML = "Enter a valid Weight!";
    else{
    BMI = weight/(height**2); 
    result.innerText = BMI;
    if(BMI < 18.5){
        val.innerText = "Your BMI falls within the underweight range";    
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        val.innerText = "Your BMI falls within the normal or healthy weight range";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        val.innerText = "Your BMI falls within the overweight range";
    }else{
        val.innerText = "Your BMI falls within the obese range";
    }
}
});
