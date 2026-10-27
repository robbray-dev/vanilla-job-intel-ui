// fetch returns a promise that is responsible for getting the resource in the assets folder via http

/*
const multiply = function (a, b) { return a * b }
let b = a.then((response) => response.json());
console.log("promise b ", b);

let catchWorkEx = b.catch(() => console.log("catch that works example"));
console.log("promise catchWorkEx ", catchWorkEx);

let c = b.then(() => { return 12 }, () => {console.log("banks house")});
console.log("promise c ", c);

let d = c.catch(() => console.log("h"));
console.log("promise d ", d);

*/


// why is .then setup to return a new promise?

// .then returns a promise because
/*
1. the .then performs some asynchronous operation
2. the execution of the .then is depedent on the result of the previous promise
3. design choice to not cap the users at a limit of operations to perform
*/

/*
fetch("./asset/data/jobs.json")
    .then((response) => response.json())
    .then((data) => { console.log(data) })
    .catch((error) => console.error("Error loading JSON file", error));

*/

// on to data rendering!!

//looking into async and await in js

async function fetchData() {
        const response =  fetch('./asset/data/jobs.json');

       // want to figure out why this does print the resposne data
    // but the other await and console log doesnt.
    try {
    console.log('response', response);
    } catch (error) {
         console.error('Error fetching data in init fetch:', error);
    }
    /*
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    */

    // want to figure out why this doesnt print the observing data.
    try {
        
    const data = response.json();
    console.log('observing data ', data);
        return data;
    } catch (error) {
                 console.error('Error fetching data in fetch json:', error);

        }

   
}

console.log('observing the state of the promise ', fetchData());
