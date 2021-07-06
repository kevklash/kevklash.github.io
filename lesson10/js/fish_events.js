const townsApi = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townsApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);
        const towns = jsonObject['towns'];
        let i = 0;
        let parent = document.querySelector(".events");
        for (const town of towns) {
          if (town.name == "Fish Haven"){
            for (const event of town.events){
              let event_entry = document.createElement('p');
              event_entry.textContent = event;
              parent.appendChild(event_entry);
            }
          }
        }
    });
