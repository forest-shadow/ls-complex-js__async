const   hw1 = require( './hw1.js' ),
        hw2 = require( './hw2.js' );
hw1.timer(3000).then( (fullfilledTime) => console.log(`I fires after ${fullfilledTime/1000} seconds`) );


let citiesList = document.querySelector('.cities-list');

document.querySelector('#loadCityList').addEventListener('click', () => {
    hw2.getCityList().then( (response) => {
        let citiesObj = JSON.parse(response);
        citiesObj.sort( function(a,b) {
           let nameA = a.name.toLowerCase(),
               nameB = b.name.toLowerCase();

           if (nameA < nameB) //sort string ascending
               return -1;
           if (nameA > nameB)
               return 1;
           return 0; //default return value (no sorting)
        } );
        citiesObj.forEach( (cityObj, i) => {
            let div = document.createElement('div');
            div.id = 'city' + i;
            div.classList.add('city__item');
            citiesList.appendChild(div);
            div.innerHTML = ++i + '. ' + cityObj.name;
        } );
    } );
});