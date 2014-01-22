describe("Brit", function() {
  var brit;

  beforeEach(function() {
    brit = new Brit();
    
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

  it("replaces a word", function() {
    expect(brit.replaceWord("truck")).toBe("lorry");
  });

  it("recognizes a word", function() {
    expect(brit.isWord("word")).toBe(true);
    expect(brit.isWord("two words")).toBe(false);
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

  it("replaces a word followed by punctuation", function() {
    expect(brit.translate("bathroom!")).toBe("watercloset!");
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
