// fetch returns a promise that is responsible for getting the resource in the assets folder via http

/*
fetch("./asset/data/jobs.json")
    .then((response) => response.json())
    .then((data) => { console.log(data) })
    .catch((error) => console.error(error));
*/
let a = fetch("./asset/data/jobs.json");
console.log("promise a ", a); // how do i see what a promise returns
let b = a.then((response) => response.json());

Promise.allSettled([a, b]).then((values) => {

    console.log("start of settled call");
    console.log(values);
    console.log("end");
})

let c = b.then((data) => { console.log(data) });

let d = c.catch((error) => console.error(error));

