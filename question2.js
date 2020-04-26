const api = "https://api.rawg.io/api/games";

async function fetchCreateGames() {
    try {
        const response = await fetch(api);
        const games = await response.json();

        const gamesResults = games.results;
        //console.dir(gamesResults.name);
        
        createGames(gamesResults);
    } catch(error) {
        console.log(error);
    }
}

fetchCreateGames();

function createGames(games) {
    const resultsContainer = document.querySelector("h2");

    let newHtml = "";
    
    for (let i = 0; i < games.length; i ++) {
        //console.log(games[i].name);
       //console.log(games[i].background_image);

        //console.log(newHtml);
        
        newHtml += `<div class="game">
                        <h2>${games[i].name}</h2>
                            <img src="${games[i].background_image} alt="Name of game"/>
                    </div>`;
    }
    resultsContainer.innerHTML = newHtml;
}