const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const crearul = document.createElement("ul");
for(let i = 0; i < apps.length; i++){
    const crearli = document.createElement("li");
    crearli.textContent = apps[i];
    crearul.appendChild(crearli);
    document.body.appendChild(crearul);

}