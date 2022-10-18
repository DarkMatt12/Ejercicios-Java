const btn = document.createElement("button");
btn.setAttribute("id", "btnClick");
btn.textContent = "Pulsa xd";
document.body.appendChild(btn);

function click(params){
    console.log("me han clickeado");
}

btn,addEventListener("click", click);