/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  An array of objects that contains different quotes and properties of those quotes
***/

const quotes = [
{
  quote : "I knew that if I failed I wouldn't regret that, but I knew the one thing I might regret is not trying.",
  source : "Jeff Besos",
  category: "Motivational",
  year : 2015
},

{
  quote: "Luck is a dividend of sweat. The more you sweat, the luckier you get.",
  source:"Ray Croc",
  category: "Motivational",
  year:1962
},

{
  quote : "Be yourself; everyone else is already taken.",
  source :"Oscar Wilde",
  citation : "The Wit & Wisdom of Oscar Wilde",
  year : 1947
  
},

{

  quote : "Drunkenness is nothing but voluntary madness",
  source : "Seneca",
  citation : "Letters from a stoic",
  category: "Humor",
  year : "63 AD" 
},

{

  quote : "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  source : "Martin Luther King Jr.",
  citation : " A Testament of Hope: The Essential Writings and Speeches"
  
}
  

]

// Changes Background Color for every click
console.log(quotes)
const changeBgColor = () => {
  let q = Math.floor(Math.random() * 256);
  let w = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let randomBg = 'rgb(' + q + ',' + w + ',' + z + ')';
  

  document.body.style.background = randomBg;
};



//Generates a random number to randomize the index that is being selected
const getRandomQuote = () => {
let randomNumber = Math.floor(Math.random() * 5); 

return quotes[randomNumber];

};






// Prints out random quotes on the page by adding html strings into the 'quote-box div'
const printQuote = () => {
 
  let randomQuote = getRandomQuote();
  let htmlString = "";
  
  htmlString += `<p class="quote">${randomQuote.quote}`;
  htmlString += `<p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    htmlString += `<span class ='citation'>${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    htmlString += `<span class ='year'>${randomQuote.year}</span>`;
  }
  if (randomQuote.category) {
    htmlString += `<span class ='category'> , ${randomQuote.category}</span>`;
  }
  htmlString += '</p>';
  document.getElementById('quote-box').innerHTML = htmlString;
  changeBgColor();
};
  
  






/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


