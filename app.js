// fetch returns a promise that is responsible for getting the resource in the assets folder via http
fetch("./asset/data/jobs.json")
    
    //
    .then((response) => response.json())
    .then((data) => { console.log(data) })
    .catch((error) => console.error(error));


let a = fetch("./asset/data/jobs.json");

let b = a.then((response) => response.json());

let c = b.then((data) => { console.log(data) });

let d = c.catch((error) => console.error(error));


Promise.all([a, b, c, d]).then((values) => {

    console.log("start");
    console.log(values);
})