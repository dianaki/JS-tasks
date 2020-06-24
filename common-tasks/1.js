const string = "Привет! Как дела?";

const alphabetVowels = ['а', 'е', 'у', 'ы', 'о', 'я', 'ё', 'и', 'э', 'ю'];

function getVowels(string) {
  var vowels = [];
  for (var i = 0; i < string.length; i++) {
    var letter = string[i]
    if (alphabetVowels.includes(letter)) {
      vowels.push(letter);
    }
  }
  return vowels;
}

console.log(getVowels(string))