function xd (event){
    console.log("name", event.target.value);
}


const input = document.querySelector("input");

input.addEventListener("input", xd);