const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]

const videojuegosRpg = videogames.filter(function(videojuegos){
    return videojuegos.genders.find(function(gender){
        return gender === "RPG";
    });
}
)

const totalJuegosRpg = videojuegosRpg.reduce(function(suma, videojuego){
    return suma + videojuego.score}, 0);

const media = totalJuegosRpg / videojuegosRpg.length ;