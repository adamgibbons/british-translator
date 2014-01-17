function Brit() {};

Brit.prototype.wordList = [['truck', 'lorry'], ['bathroom', 'watercloset'], ['buddy', 'chap']];

Brit.prototype.replaceWord = function(word) {
  for (var i = 0; i < this.wordList.length; i++) {
    if (this.wordList[i][0] == word) {
      return this.wordList[i][1];
    }
  }

  return word;
}

Brit.prototype.isWord = function(input) {
  if (input.indexOf(' ') === -1) {
    return true;
  }

  return false;
}

Brit.prototype.translate = function(input) {
  var phrase = [];
  if (this.isWord(input)) {
    return this.replaceWord(input);
  } else {
    var rawPhrase = input.split(' ');
    for (var i = 0; i < rawPhrase.length; i++) {
      phrase.push(this.replaceWord(rawPhrase[i]));
    }
  }

  phrase = phrase.join(' ');
  return phrase;
}

// Brit.prototype.translate = function(input) {
//   if (this.isWord(input)) {
//     this.replaceWord(input);
//   }
// };








// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };

// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }

//   this.isPlaying = true;
// };

// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };