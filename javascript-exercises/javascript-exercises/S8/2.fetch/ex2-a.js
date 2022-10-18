const base = 'https://api.nationalize.io?name=';
const input = document.querySelector("input");
const boton = document.querySelector("button");

const xd = () => {
fetch(base + input.value)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);
        return myJson;
    });  
}

boton.addEventListener("click", xd);

