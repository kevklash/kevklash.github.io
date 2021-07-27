const directory = 'directory.json';

function getBusiness(urlAPI){

  fetch(urlAPI)
      .then(function (response) {
          return response.json();
      })
      .then(function (jsonObject) {
          // console.table(jsonObject);
          const businessData = jsonObject['businesses'];
          let container = "";
          if(document.querySelector('.cards_list')) {
            container = document.querySelector('.cards_list');
          }
          else if(document.querySelector('.cards')) {
            container = document.querySelector('.cards');
          }

          for (const businessItem of businessData) {
            let card = document.createElement('section');
            let text = document.createElement('div');
            let picture = document.createElement('img');
            let name = document.createElement('h2');
            let industry = document.createElement('p');
            let services = document.createElement('p');

            name.textContent = businessItem.name;
            industry.textContent = `Industry: ${businessItem.industry}`;
            services.textContent = `Services and products: ${businessItem.services}`;
            var imagesrc = 'img/businesses/' + businessItem.logo;
            text.setAttribute('class', "text");
            picture.setAttribute('src', imagesrc);
            picture.setAttribute('alt', businessItem.name);

            text.appendChild(name);
            text.appendChild(industry);
            text.appendChild(services);
            card.appendChild(text);
            card.appendChild(picture);

            container.appendChild(card);
          }
      });
}

getBusiness(directory);
