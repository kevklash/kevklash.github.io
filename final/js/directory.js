const directory = 'directory.json';

function getBusiness(urlAPI){

  fetch(urlAPI)
      .then(function (response) {
          return response.json();
      })
      .then(function (jsonObject) {
          // console.table(jsonObject);
          const businessData = jsonObject['businesses'];
          let container = document.querySelector('.cards');

          for (const businessItem of businessData) {
            let card = document.createElement('section');
            let picture = document.createElement('img');
            let name = document.createElement('h2');
            let industry = document.createElement('p');
            let services = document.createElement('p');

            name.textContent = businessItem.name;
            industry.textContent = `Industry: ${businessItem.industry}`;
            services.textContent = `Services and products: ${businessItem.services}`;
            var imagesrc = 'img/businesses/' + businessItem.logo;
            picture.setAttribute('src', imagesrc);
            picture.setAttribute('alt', businessItem.name);

            card.appendChild(name);
            card.appendChild(industry);
            card.appendChild(services);
            card.appendChild(picture);

            container.appendChild(card);
          }
      });
}

getBusiness(directory);
