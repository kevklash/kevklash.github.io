const prophetsApi = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(prophetsApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);
        const prophets = jsonObject['prophets'];

        for (const prophet of prophets) {
            let prophet_card = document.createElement('section');
            let h2 = document.createElement('h2');
            let dateOfBirth = document.createElement('p');
            let placeOfBirth = document.createElement('p');
            let dateOfDeath = document.createElement('p');
            let picture = document.createElement('img');


            h2.textContent = `${prophet.name} ${prophet.lastname}`;
            dateOfBirth.textContent = `Birth: ${prophet.dateOfBirth}`;
            placeOfBirth.textContent = `Place of Birth: ${prophet.placeOfBirth}`;


            prophet_card.appendChild(h2);
            prophet_card.appendChild(dateOfBirth);
            prophet_card.appendChild(placeOfBirth);

            if (prophet.death != null) {
                dateOfDeath.textContent = `Death: ${prophet.death}`;
                prophet_card.appendChild(dateOfDeath);
            }else {
                dateOfDeath.textContent = `Living Prophet`;
                prophet_card.appendChild(dateOfDeath);
            };

            prophet_card.appendChild(picture);

            picture.setAttribute('src', prophet.imageurl);
            picture.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);

            document.querySelector('.cards').appendChild(prophet_card);
        }
    });
