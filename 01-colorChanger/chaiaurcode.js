const colorDivs = document.querySelectorAll("#myid3 div");

colorDivs.forEach(div => {
  div.addEventListener('click', () => {
    const bgColor = window.getComputedStyle(div).backgroundColor;
    document.body.style.backgroundColor = bgColor;
  });
});
