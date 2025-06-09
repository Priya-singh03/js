#Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## Project 1

```javascript
const colorDivs = document.querySelectorAll("#myid3 div");

colorDivs.forEach(div => {
  div.addEventListener('click', () => {
    const bgColor = window.getComputedStyle(div).backgroundColor;
    document.body.style.backgroundColor = bgColor;
  });
});


```
## Project 2

```javascript
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


```
## Project 3
```javascript
const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock');

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);


```