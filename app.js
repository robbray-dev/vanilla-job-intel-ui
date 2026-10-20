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
console.log("promise a ", a);

// why is .then setup to return a new promise?

// .then returns a promise because
/*
1. the .then performs some asynchronous operation
2. the execution of the .then is depedent on the result of the previous promise
3. design choice to not cap the users at a limit of operations to perform
*/
let b = a.then((response) => response.json());
console.log("promise b ", b);

let catchWorkEx = b.catch(() => console.log("catch that works example"));
console.log("promise catchWorkEx ", catchWorkEx);

let c = b.then((data) => { console.log(data) }, () => {console.log("banks house")});
console.log("promise c ", c);

let d = c.catch(() => console.log("h"));
console.log("promise d ", d);
