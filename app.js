// fetch returns a promise that is responsible for getting the resource in the assets folder via http

let a = fetch("./asset/data/jobs.json");

let b = a.then((response) => response.json());

Promise.all([a, b]).then((values) => {

    console.log("start");
    console.log(values);
    console.log("end");
})

let c = b.then((data) => { console.log(data) });

let d = c.catch((error) => console.error(error));

