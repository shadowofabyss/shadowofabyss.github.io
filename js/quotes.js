const quotes = [
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote:
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      author: "James Cameron",
    },
    {
      quote:
        "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
      author: "John Lennon",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
