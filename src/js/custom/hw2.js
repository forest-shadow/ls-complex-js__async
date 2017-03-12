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

module.exports = { getCityList };