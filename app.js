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
const multiply = function (a, b) { return a * b }

let a = fetch("");
console.log("promis a ", a);
let b = a.then((response) => response.json());
console.log("promise b ", b);

let c = b.then((data) => { console.log(data) });
console.log("promise c ", c);

let d = c.then(() => multiply(4,3));
console.log("promise d ", d);

let e = d.catch((s) => console.error(s));
console.log("promise e ", e);
