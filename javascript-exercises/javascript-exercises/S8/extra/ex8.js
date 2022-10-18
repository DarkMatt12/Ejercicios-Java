const boton1M12 = document.querySelector ("[data-fn='callACat']");

boton1M12.addEventListener("click", gatoxd);
boton1M12.textContent = "HOLA GATOOO";

function gatoxd() {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((res) => res.json())
        .then(mostrargato);
}

function mostrargato(cat){
    const divM12 = document.createElement("div");
    const boton2M12 = document.createElement("button");
    boton2M12.addEventListener("click", () => {
        byegato(divM12);
      });
    boton2M12.textContent = "BYE GATO ;("
    divM12.innerHTML = `<img width="300" src="${cat[0].url}"/>`;
    divM12.appendChild(boton2M12);
    document.body.appendChild(divM12);
}

function byegato(divM12){
    divM12.remove();
}
