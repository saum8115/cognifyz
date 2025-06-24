const button = document.getElementById('colorButton');
const colors = ['#f8b400', '#1abc9c', '#e74c3c', '#9b59b6', '#34495e'];
let index = 0;

button.addEventListener('click', () => {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
});