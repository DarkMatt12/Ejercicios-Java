const div = document.createElement('div');
const p = document.createElement('p');

p.textContent = "Soy dinámico!";

div.appendChild(p);

document.body.appendChild(div);

console.log(div);
