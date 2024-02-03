
const button = document.getElementById('colorChangeBtn');

button.addEventListener('click', function() {
  const randomColor = getRandomColor();
  button.style.backgroundColor = randomColor;
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const currentTime = new Date().getHours();
let greeting;

if (currentTime < 12) {
  greeting = 'Good morning!';
} else if (currentTime < 18) {
  greeting = 'Good afternoon!';
} else {
  greeting = 'Good evening!';
}

alert(greeting);


function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  if (!isNaN(num1) && !isNaN(num2)) {
    const result = num1 + num2;
    document.getElementById('result').innerText = `Result: ${result}`;
  } else {
    document.getElementById('result').innerText = 'Please enter valid numbers';
  }
}
