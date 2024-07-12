const images = [
    "sr1.jpg",
    "sr2.jpg",
    "sr3.jpg",
    "sr4.jpg",
    "sr5.jpg"
];
  
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  
  const bgImage = document.createElement("img");
  
  bgImage.src = `img/${chosenImage}`;
  
  document.body.appendChild(bgImage);
