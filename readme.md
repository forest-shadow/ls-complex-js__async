## HW 1:
Create a module that exports a function "timer".

* "timer" function should return a new promise.
* "timer" function takes 1 argument - the number of milliseconds after which the promise needs to be `fulfilled`.

Example usage:
```
timer(3000).then(() => console.log('I fires after 3 seconds'))
```

## HW2:
Download city with the help of AJAX `https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json (the server supports CORS AJAX)`

* Sort the cities alphabetically and display on the page.
* Use of promises is necessary.
* Prohibited the use of any libraries (including jQuery) and frameworks.

## HW3:
Create a page with a text input.

After loading the page, load the list of cities using AJAX.

When you enter text in the text input, below the text input display a list of cities, names of which include the text entered.

Use of promises is necessary.

Prohibited the use of any libraries (including jQuery) and frameworks.

## Install

Go to project's root folder and run

```
bower install
npm install
gulp update:src
gulp
```

**..some meditation time..**

**profit!**