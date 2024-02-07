const bclicked = document.getElementById("btn");
const bmi = document.getElementById("bmi-result");
const weightCondition = document.getElementById("weight-condition");

bclicked.addEventListener("click", calculateBMI);

const heightValue = document.getElementById("height").value / 100;  //height in meter
const weightValue = document.getElementById("weight").value;
const bmiValue = weightValue / (heightValue * heightValue);         //bmivalue

function calculateBMI() {                                           //After butoon clicked
  bmi.value = bmiValue;                                             //Bmi value

  if (bmiValue < 18.5) {                                            //weight condition
    weightCondition.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightCondition.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightCondition.innerText = "Overweight";
  } else if (bmiValue >= 30) {
    weightCondition.innerText = "Obesity";
  }
}


