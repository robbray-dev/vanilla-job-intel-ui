// fetch returns a promise that is responsible for getting the resource in the assets folder via http
fetch("./asset/data/jobs.json")
    
    //
    .then((response) => response.json())
    .then((data) => { console.log(data) })
    .catch((error) => console.error(error));
