async function Pikachu(){


    try{
        const PokenmonName = document.getElementById("PokeMon").value.toLowerCase();
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ PokenmonName}`);

if (!response.ok){
  throw new Error("Could Not Fetch New Resource")
}
const data = await response.json();
const PokenmonSprite = data.sprites.front_default;
const imgElement = document.getElementById("PokenmonSprite");


imgElement.src = PokenmonSprite;
imgElement.style.display="block";
    }




    catch{
        console.log(error);
        
    }
}

Pikachu();