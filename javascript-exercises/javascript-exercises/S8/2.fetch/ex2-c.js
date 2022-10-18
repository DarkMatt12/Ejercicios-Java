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
        for(let i = 0; i < myJson.country.length; i++){
            const p = document.createElement("p");
            p.textContent = "El nombre " + input.value + " " + (myJson.country[i].probability * 100) + " " + "porciento de ser de " + myJson.country[i].country_id + "."
            document.body.appendChild(p);
        }
    });  
}

boton.addEventListener("click", xd);