describe("Brit", function() {
  var brit, phraseList;

  beforeEach(function() {
    brit = new Brit();

    phraseList = [
      ['legal holiday', 'bank holiday'],
      ['cookie sheet', 'baking tray']];
    
  });

  it("recognizes a word", function() {
    expect(brit.isWord("word")).toBe(true);
    expect(brit.isWord("two words")).toBe(false);
  });

  it("replaces a word", function() {
    expect(brit.checkAgainstWords("truck")).toBe("lorry");
  });

  it("replaces a word in a phrase", function() {
    expect(brit.translate("the bathroom")).toBe("the watercloset");
  });

  it("replaces multiple words in a phrase", function() {
    expect(brit.translate("the truck is a bathroom")).toBe("the lorry is a watercloset");
  });

  it("detects a word followed by punctuation", function() {
    expect(brit.hasPunctuation("bathroom,")).toBe(true);
  });

  it("detects a possessive noun", function() {
    expect(brit.isPossessiveNoun("truck's")).toBe(true);
  });

  it("replaces a word followed by punctuation", function() {
    expect(brit.translate("bathroom!")).toBe("watercloset!");
  });

  it("replaces a possessive noun", function() {
    expect(brit.replacePossessiveNoun("truck's")).toBe("lorry's");
  });

  it("recognizes a phrase", function() {
    expect(brit.isPhrase("word")).toBe(false);
    expect(brit.isPhrase("two words")).toBe(true);
  });

  it("replaces a phrase with a phrase", function() {
    expect(brit.checkAgainstPhrases("legal holiday", phraseList)).toBe("bank holiday");
    // expect(brit.checkAgainstPhrases("apartment building", phraseList)).toBe("block of flats");
  });

  it("replaces a phrase within a larger string", function() {
    expect(brit.checkAgainstPhrases("this legal holiday or cookie sheet", phraseList)).toBe("this bank holiday or baking tray");
  });





  

  it("throws an error when passed a non-string", function() {
    var responseError = new TypeError("I an't a bloody calculator. Gimme a string, meghead!");
    expect(brit.translate(1)).toEqual(responseError);
  });

  it ("throws an error when passed an empty string", function() {
    var responseError = new Error("Well gimme something to work with, at least!");
    expect(brit.translate('')).toEqual(responseError);
  });

  it ("throws an error when passed a lengthy string", function() {
    var responseError = new Error("You an't Dickens, mate. Shorten them prose!");
    var prose = new Array(50).join("ag me fecit ")
    expect(brit.translate(prose)).toEqual(responseError);
  });





  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });

  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();

  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });

  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });

  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');

  //   player.play(song);
  //   player.makeFavorite();

  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });

  //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);

  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });


});
