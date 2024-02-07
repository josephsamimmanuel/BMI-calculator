const bclicked = document.getElementById("btn");
const bmi = document.getElementById("bmi-result");
const weightCondition = document.getElementById("weight-condition");



bclicked.addEventListener("click", calculateBMI);


function calculateBMI() {                                         
  const heightValue = document.getElementById("height").value / 100;         //height in meter
  const weightValue = document.getElementById("weight").value;              
  const bmiValue = weightValue / (heightValue * heightValue);                // bmi=weight(kg/(height)2)
bmi.value = bmiValue;                                             

  if (bmiValue < 18.5) {                                            
    weightCondition.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightCondition.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightCondition.innerText = "Overweight";
  } else if (bmiValue >= 30) {
    weightCondition.innerText = "Obesity";
  }
}


