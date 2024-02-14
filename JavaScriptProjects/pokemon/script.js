// fetch('')

fetchData();

async function fetchData(){
    try{
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        
        if(!response.ok){
            throw new Error('Error: Could not fetch resource')
        }

        const data = await response.json();
        const pokemonSpriteSrc = data.sprites.front_default;
        const imgId = document.getElementById('pokemonSprite');

        imgId.src = pokemonSpriteSrc;
        imgId.style.display = 'block';
    }
    catch(err){
        console.log(err)
    }
}
