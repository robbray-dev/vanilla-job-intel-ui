// fetch returns a promise that is responsible for getting the resource in the assets folder via http

/*
fetch("./asset/data/jobs.json")
    .then((response) => response.json())
    .then((data) => { console.log(data) })
    .catch((error) => console.error(error));

    Promise.allSettled([a, b]).then((values) => {

    console.log("start of settled call");
    console.log(values);
    console.log("end");
})
*/
let a = fetch("");

let b = a.then((response) => response.json(), console.log("failure"));
console.log("promise b ", b);

// let c = b.then((data) => { console.log(data) });

// let d = c.catch((error) => console.error(error));

