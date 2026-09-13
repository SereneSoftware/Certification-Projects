let fortune1 = "You will meet someone new today!";
let fortune2 = "Your phone will be dry today.";
let fortune3 = "The winds will be in your favour today."
let fortune4 = "Someone unexpected will reach out.";
let fortune5 = "You will find a new hobby soon.";
let min = 1;
let max = 5;
let randomNumber = Math.round(Math.random() * (max - min) + min);
let selectedFortune;

if (randomNumber == 1) {
  selectedFortune = fortune1;
} 

if (randomNumber == 2) {
  selectedFortune = fortune2;
}

if (randomNumber == 3) {
  selectedFortune = fortune3;
} 

if (randomNumber == 4) {
  selectedFortune = fortune4;
} 

if (randomNumber == 5) {
  selectedFortune = fortune5;
} 

console.log("******** HELLO FORTUNE CARRIER *********")
console.log("-------------------------------------------")
console.log("Your today's fortune might not be what u expected. Keep your eyes open and ears wide.");
console.log(`Your fortune for today : ${selectedFortune}`)