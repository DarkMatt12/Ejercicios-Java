//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let puntos = 0;
for (let i = 0; i < alumns.length; i++){
    const alumn = alumns[i];
    if(alumn.T1 === true){
        puntos+=1;
    }if(alumn.T2 === true){
        puntos+=1;
    }if(alumn.T3 === true){
        puntos+=1;
    }
    if(puntos >= 2){
        alumn.isApproved = true;
    }else{
        alumn.isApproved = false;
    }
}

console.log(alumns);