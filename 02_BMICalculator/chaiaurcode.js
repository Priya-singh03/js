const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const Result = document.querySelector('#Result');

  if (!height || height <= 0 || isNaN(height)) {
    Result.innerHTML = `Please enter valid height: ${height}`;
    return;
  }
  if (!weight || weight <= 0 || isNaN(weight)) {
    Result.innerHTML = `Please enter valid weight: ${weight}`;
    return;
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
  Result.innerHTML = `<span>Your bmi is ${bmi}</span><br>`;
  
   if (bmi < 18.6) {
    Result.innerHTML += `<span>Your weight is Underweight</span>`;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    Result.innerHTML += `<span>Your weight is in Normal Range</span>`;
  } else {
    Result.innerHTML += `<span>Your weight is Overweight</span>`;
  }
});
