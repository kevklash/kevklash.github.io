const townsApi = 'https://byui-cit230.github.io/weather/data/towndata.json';

// Pictures
const pictureSources = ["images/preston.jpg", "images/fishHaven.jpg", "images/sodaSprings.jpg"];
const pictureAlts = ["Preston", "Fish Haven", "Soda Springs"];
// End pictures

fetch(townsApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);
        const towns = jsonObject['towns'];
        let i = 0;
        for (const town of towns) {
          if (town.name == "Soda Springs" || town.name == "Fish Haven" || town.name == "Preston"){
            let text = document.createElement('div');
            text.setAttribute("id", "card_text");
            let town_card = document.createElement('section');
            let name = document.createElement('h2');
            let motto = document.createElement('h3');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');
            let picture = document.createElement('img');


            name.textContent = town.name;
            motto.textContent = town.motto;
            yearFounded.textContent = `Year Founded: ${town.yearFounded}`;
            currentPopulation.textContent = `Population: ${town.currentPopulation}`;
            averageRainfall.textContent = `Annual Rain Fall: ${town.averageRainfall}`;

            text.appendChild(name);
            text.appendChild(motto);
            text.appendChild(yearFounded);
            text.appendChild(currentPopulation);
            text.appendChild(averageRainfall);
            town_card.appendChild(text);
            town_card.appendChild(picture);
            picture.setAttribute('src', pictureSources[i]);
            picture.setAttribute('alt', pictureAlts[i]);

            document.querySelector('.cards').appendChild(town_card);
            i++;
          }
        }
    });
