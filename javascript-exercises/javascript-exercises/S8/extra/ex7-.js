fetch("https://ghibliapi.herokuapp.com/films")
  .then((res) => res.json())
  .then(dibujosanimes);
  
 function dibujosanimes(animes){
  console.log(animes);
  for(const anime of animes){

    console.log(anime.title);
    const h2M12 = document.createElement("h2");
    h2M12.textContent = anime.title;
    document.body.appendChild(h2M12);
    
    const imgM12 = document.createElement("img");
    imgM12.setAttribute("src", anime.image );
    document.body.appendChild(imgM12);
  }

  
 }