let button = document.getElementById("button");
let quote = document.getElementById("quote");
let quotes = ["We cannot solve problems with the kind of thinking we employed when we came up with them. - Albert Einstein",
"Learn as if you will live forever, live like you will die tomorrow. - Mahatma Gandhi", "Success usually comes to those who are too busy looking for it. - Henry David Thoreau",
"I never dreamed about success. I worked for it. - Estee Lauder", "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you. - Steve Jobs",
"To know how much there is to know is the beginning of learning to live. - Dorothy West", "Either you run the day or the day runs you. - Jim Rohn",
"Be a positive energy trampoline - absorb what you need and rebound more back. - Dave Carolan", "Life is like a sewer... what you get out of it depends on what you put into it. - Tom Lehrer",
"Talent wins games, but teamwork and intelligence win championships. - Michael Jordan"]

function quoteSelector(){
    let randomQuote = Math.floor(Math.random() * 10);
    return quotes[randomQuote];
}

function generator(){
    quote.innerHTML = quoteSelector();
}

button.addEventListener('click', generator);