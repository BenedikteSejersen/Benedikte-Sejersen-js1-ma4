const urlGamesDetails ="https://api.rawg.io/api/games/4200";

async function fetchUrlGamesDetails() {

    try {
        const response = await fetch(urlGamesDetails);
        const details = await response.json();
        //console.dir(details);

        createGameDetails(details);
    } catch (error){
        console.log(error);
    }
}
fetchUrlGamesDetails();

function createGameDetails(details) {

    const h1 = document.querySelector("h1");
    h1.innerHTML = details.name;

    const backgroundImage = document.querySelector(".image");
    backgroundImage.style.backgroundImage = "url('https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg')";

    const description = document.querySelector(".description");
    description.innerHTML = details.description;
}