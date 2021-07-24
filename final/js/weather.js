const smWeather = 'https://api.openweathermap.org/data/2.5/onecall?lat=13.48767&lon=-88.18334&exclude=minutely,hourly,alerts&appid=0bf4a143e3ef3987951505e31155ec40&units=imperial';

function getWeather(urlAPI){

  fetch(urlAPI)
      .then(function (response) {
          return response.json();
      })
      .then(function (jsonObject) {
          // console.table(jsonObject);
          const weatherData = jsonObject['daily'];
          let icons = document.getElementById("icons");
          let tempMax = document.getElementById("temp_max");
          let tempMin = document.getElementById("temp_min");
          let today_temp = document.querySelector(".hd1");
          let condition = document.getElementById("condition");
          let speed = document.getElementById("speed");
          let humidity = document.getElementById("humidity");
          let today_icon = document.querySelector(".sky");

          // Today stats
          today_temp.textContent = `${jsonObject["current"].temp }\u00B0F`;
          condition.textContent = jsonObject["current"].weather[0].description;
          speed.textContent = `Wind speed: ${jsonObject["current"].wind_speed} kph`;
          humidity.textContent = `Humidity: ${jsonObject["current"].humidity}%`;

          // Today Icon
          let picture = document.createElement('img');
          // var imagesrc = 'https://openweathermap.org/img/w/' + weatherItem.weather[0].icon + '.png';
          var imagesrc = 'https://openweathermap.org/img/w/' + jsonObject["current"].weather[0].icon + '.png';
          picture.setAttribute('src', imagesrc);
          picture.setAttribute('width', 120);
          picture.setAttribute('alt', jsonObject["current"].weather[0].description);
          today_icon.appendChild(picture);

          let cont = 0;
          for (const weatherItem of weatherData) {
            if (cont < 5){
              let icon = document.createElement('td');
              let picture = document.createElement('img');
              let temp_header = document.createElement('td');
              let temp_header_min = document.createElement('td');

              temp_header.textContent = weatherItem.temp.day;
              temp_header_min.textContent = weatherItem.temp.min;
              var imagesrc = 'https://openweathermap.org/img/w/' + weatherItem.weather[0].icon + '.png';
              picture.setAttribute('src', imagesrc);
              picture.setAttribute('alt', weatherItem.weather[0].description);
              icon.appendChild(picture);

              tempMax.appendChild(temp_header);
              tempMin.appendChild(temp_header_min);
              icons.appendChild(icon);
            }
            cont += 1;
          }
      });
}

getWeather(smWeather);
