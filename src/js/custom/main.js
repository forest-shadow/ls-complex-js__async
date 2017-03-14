const   hw1 = require( './hw1.js' ),
        hw2 = require( './hw2.js' ),
        hw3 = require( './hw3.js');
// hw1
hw1.timer(3000).then( (fullfilledTime) => console.log(`I fires after ${fullfilledTime/1000} seconds`) );

// hw2
let citiesList = document.querySelector('.cities-list'),
    loadCityListBtn = document.querySelector('#loadCityList');

if(loadCityListBtn)
    loadCityListBtn.addEventListener('click', () => {
        hw2.getCityList().then( (response) => {
            let citiesObj = JSON.parse(response);
            citiesObj.sort( hw2.sortCitiesObjByName );

            hw2.renderCitiesList(citiesObj, citiesList);
        } );
    });

// hw3
let citiesInput = document.querySelector('#cities');
if(citiesInput)
    citiesInput.addEventListener('input', (e) => {
    //console.log(e.target.value);
    let i =0;
    hw2.getCityList().then( (response) => {
        let citiesObj = JSON.parse(response);
        let filteredCitiesObj = citiesObj.filter((cityObj) => {
            if('name' in cityObj && cityObj.name.toLowerCase().includes(e.target.value)) {
                i++;
                return true;
            } else
                return false;

        });

        filteredCitiesObj.sort( hw2.sortCitiesObjByName );

        filteredCitiesObj.forEach((cityObj) => {
            let re = new RegExp(e.target.value, "gi");
            cityObj.name = cityObj.name.replace(re,'<strong>$&</strong>');
            console.log(cityObj.name);
        });

        citiesList.innerHTML = '';

        hw2.renderCitiesList(filteredCitiesObj, citiesList);
    } );
});