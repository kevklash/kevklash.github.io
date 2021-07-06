const fishWeather = 'http://api.openweathermap.org/data/2.5/forecast?id=5585000&appid=0bf4a143e3ef3987951505e31155ec40&units=imperial';

function getWeather(urlAPI){

  fetch(urlAPI)
      .then(function (response) {
          return response.json();
      })
      .then(function (jsonObject) {
          // console.table(jsonObject);
          const weatherData = jsonObject['list'];
          let summary_wind = document.querySelector(".wind");
          let summary_temp = document.querySelector(".temp");
          let icons = document.getElementById("icons");
          let tempMax = document.getElementById("temp_max");
          let tempMin = document.getElementById("temp_min");
          let today_temp = document.querySelector(".hd1");
          let condition = document.getElementById("condition");
          let speed = document.getElementById("speed");
          let humidity = document.getElementById("humidity");
          let today_icon = document.querySelector(".sky");

          for (const weatherItem of weatherData) {
            let weatherString = weatherItem.dt_txt;
            if (weatherString.includes("18:00:00")){
              summary_wind.textContent = weatherItem.wind.speed;
              summary_temp.textContent = weatherItem.main.temp;
              today_temp.textContent = `${weatherItem.main.temp }\u00B0F`;
              condition.textContent = weatherItem.weather[0].main;
              speed.textContent = `Wind speed ${weatherItem.wind.speed}mph`;
              humidity.textContent = `Humidity ${weatherItem.main.humidity}%`;
              let picture = document.createElement('img');
              var imagesrc = 'https://openweathermap.org/img/w/' + weatherItem.weather[0].icon + '.png';
              picture.setAttribute('src', imagesrc);
              picture.setAttribute('width', 120);
              picture.setAttribute('alt', weatherItem.weather[0].main);
              today_icon.appendChild(picture);
              break;
            }
          }

          for (const weatherItem of weatherData) {
            let weatherString = weatherItem.dt_txt;
            if (weatherString.includes("18:00:00")){
              let icon = document.createElement('td');
              let picture = document.createElement('img');
              let temp_header = document.createElement('td');
              let temp_header_min = document.createElement('td');

              temp_header.textContent = weatherItem.main.temp;
              temp_header_min.textContent = weatherItem.main.feels_like;
              var imagesrc = 'https://openweathermap.org/img/w/' + weatherItem.weather[0].icon + '.png';
              picture.setAttribute('src', imagesrc);
              picture.setAttribute('alt', weatherItem.weather[0].main);
              icon.appendChild(picture);

              tempMax.appendChild(temp_header);
              tempMin.appendChild(temp_header_min);
              icons.appendChild(icon);
            }


          }
      });
}

getWeather(fishWeather);
