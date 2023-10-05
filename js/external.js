console.log("Hello from external JavaScript");



alert('Welcome to my Website!');


let color = prompt('What is your favorite color?')
alert(`Great, ${color} is my favorite color too!`);


const mermaidDays = parseInt(prompt("How many days have you rented Little Mermaid for?"));
const brotherBeardDays = parseInt(prompt("How many days have you rented Brother Bear for?"));
const herculesDays = parseInt(prompt("How many days have you rented Brother Bear for?"));
const pricePerDay = parseInt(prompt("How much is the movie per day?"))

let totalCost = (mermaidDays + brotherBeardDays + herculesDays) * pricePerDay;
alert(`The total cost for the movies is $${totalCost}`);

const googlePay = parseInt(prompt("How much does Google pay per hour?"));
let googleHour = parseInt(prompt("How many hours did you work for Google?"));
const amazonPay = parseInt(prompt("How much does Amazon pay per hour?"));
let amazonHour = parseInt(prompt("How many hours did you work for Amazon?"));
const facebookPay = parseInt(prompt("How much does Facebook pay per hour?"));
let facebookHour = parseInt(prompt("How many hours did you work for Facebook?"));

let totalPay = googlePay * googleHour + amazonPay * amazonHour + facebookPay * facebookHour;
alert(`The total salary is $${totalPay}`);