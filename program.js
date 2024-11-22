// Create an array of latin aphorisms
const latinAphorisms = [
  "Aquila non capit muscas.",
  "Amor vincit omnia.",
  "Fortes fortuna adiuvat.",
  "Memento mori.",
  "Mens sana in corpore sano.",
  "Non scholae sed vitae discimus.",
  "Vita brevis, ars longa.",
  "Veritas vos liberabit.",
  "Errare humanum est.",
  "Ad astra per aspera.",
];

// Create a function which randomly outputs a natural number up to 9 and match it to the relative array's index
function getLatinAphorism(maxIndex) {
  let randomNumber = Math.floor(Math.random() * maxIndex);
  return latinAphorisms[randomNumber];
}

// Test
console.log(getLatinAphorism(latinAphorisms.length));
