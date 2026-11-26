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

//async function makes promise based code easier to write and read
//returns a promise with the value being whatever this function returns

// TODO 11.21 - figure out a debugger and watch async in action
async function fetchData() {

    //try catch to handle errors
    try {

        //await makes the async function to hold on operation until the promise
        // assoicated with await is done, await deconstructs the promises value
        
        const response = await fetch('./asset/data/jobs.json');
       /* 
        const container = document.getElementById('job-entry');
        console.log('printer: ', container);
*/

        // case if the response is not okay or incorrect
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // promise operation to get json
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);

        // return an empty array on an error 
        // instead of throwing error for rejection cause it leads to uncaught errors.
        return [];
        
    } 
   
}
/*
console.log('observing the state of the promise ', fetchData());

const container = document.getElementById('job-entry');
console.log('global container:', container)
*/
// on to data rendering and dom stuff!

// DOES THE DOM LOAD COMPLETE BEFORE RUNNING AN ASYNC FUNCTION?

// TODO: Why is job-entry div not populated in the dom at this point, but in the
// fetchData.then chain it would be!

// TODO: figure out the execution of the js, ie is async running on a seperate thread
// that returns to the program or browser before calling the then chain.

//figure out what occurs for the dom to be populated in .then. maybe thread execution?

// AT THIS POINT THE HTML COLLECTION IS ONLY 7 ITEMS, SO ONLY 7 ITEMS IN THE DOM.
/*
var all = document.getElementsByTagName("*");
console.log(all);
*/



// FIGURED OUT THAT MULITPLE JS SCRIPTS ARE LOADED INTO THE BROWSER AT ONCE

fetchData().then(data => {
    const container = document.getElementById('job-entry');
/*
    var all = document.getElementsByTagName("*");
    console.log(all.length);
    console.log(all);

    for (var i = 0, max = all.length; i < max; i++) {
        console.log(all[i]);
    }
  */
 
    /*
    const jobList = document.createElement('ul');

    const jobs = data["jobs"];
    jobs.forEach(job => {
        const listItem = document.createElement('li');
        listItem.textContent = `${job.title}`;
        jobList.appendChild(listItem);
        // console.log('ele', job);
    });

    */
    const jobs = data["jobs"];
    jobs.forEach(element => {
        const individualJob = document.createElement('div');

        const jobTitle = document.createElement('h4');
        jobTitle.textContent = `${element.title}`;

        const jobCompany = document.createElement('span');
        jobCompany.textContent = `${element.companyName} `;

        const jobLocation = document.createElement('span');
        jobLocation.textContent = `${element.location}`;

        // create a div
        const salaryAndSkill = document.createElement('div');
        // nest the salary and skills in it
        const jobSalary = document.createElement('span');
        jobSalary.textContent = `${element.salaryMin} - ${element.salaryMax}`



        // nest the div inside the individual job div
        salaryAndSkill.append(jobSalary);
        individualJob.append(jobTitle, jobCompany, jobLocation, salaryAndSkill);

        // TODO: Make items flexible and use flex box

        container.appendChild(individualJob);

    });
    
     /*
    console.log('the container: ', container);
    container.appendChild(jobList);
    */
})
