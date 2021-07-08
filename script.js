/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
 const quotes = [
   {

  quote : "I have not failed. I've just found 10,000 ways that won't work.",
  source : "Thomas A. Edison",
  tags : "Inspirational, Science",
  citation : "",
  year : ""

 },
 {

  quote : "There is no greater agony than bearing an untold story inside you.",
  source : "Maya Angelou",
  tags : "Inspirational",
  citation : "I Know Why the Caged Bird Sings",
  year : "1969"
 },
 {

  quote : "Be yourself; everyone else is already taken.",
  source : "Oscar Wilde",
  tags : "Self-Motivation",
  citation : "",
  year : ""

 },
 {

  quote : "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  source : "Mahatma Gandhi",
  tags : "Spiritual, Inspirational",
  citation : "",
  year : ""

 },
 {

  quote : "Without music, life would be a mistake.",
  source : "Friedrich Nietzsche",
  tags: "Music",
  citation : "Twilight of the Idols",
  year : "1888"

 }
];
// All quotes are from https://www.goodreads.com/quotes/tag/inspirational
 


/***
 * `getRandomQuote` function
***/
function getRandomQuote(array){
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
};

//random background color function
function randomBgColor() {
  var redValue = Math.floor(Math.random() * 256);
  var greenValue = Math.floor(Math.random() * 256);
  var blueValue = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
  console.log(bgColor);

  document.body.style.background = bgColor;
}

/***
 * `printQuote` function
***/

function printQuote() {
var quoteObject = getRandomQuote(quotes);
var quoteDisplay = `
  ${quoteObject.quote}
  ${quoteObject.source}
`;
var tag = `${quoteObject.tag}`;
if (quoteObject.citation) {
  quoteDisplay += `${quoteObject.citation}`;
}
if (quoteObject.year) {
  quoteDisplay += `${quoteObject.year}`;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
randomBgColor();
};

printQuote();
