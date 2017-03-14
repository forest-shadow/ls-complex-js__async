function getCityList() {
    return new Promise( (resolve, reject) => {
        let xhr = new XMLHttpRequest(),
            url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

        xhr.open('GET', url);

        xhr.addEventListener( 'load', () => {
            resolve(xhr.response);
        });
        xhr.addEventListener( 'error', () => {
            reject();
        });
        xhr.send();
    } );
}

function sortCitiesObjByName(a,b) {
    let nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();

    if (nameA < nameB) //sort string ascending
        return -1;
    if (nameA > nameB)
        return 1;
    return 0; //default return value (no sorting)
}

function renderCitiesList(citiesObj, citiesContainer) {
    citiesObj.forEach( (cityObj, i) => {
        let div = document.createElement('div');
        div.id = 'city' + i;
        div.classList.add('city__item');
        citiesContainer.appendChild(div);
        div.innerHTML = ++i + '. ' + cityObj.name;
    } );
}

module.exports = { getCityList, sortCitiesObjByName, renderCitiesList };