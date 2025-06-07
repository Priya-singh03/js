#Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript
const colorsDiv= document.querySelectorAll("#myid3 div");
colorsDiv.forEach(div =>{
   div.addEventListener('click', () => {
      document.body.style.backgroundColor = div.style.backgroundColor;
});
});

```