(Brit = function(){

  Brit.prototype.randomPhrases = [
    "Have you checked your truck's gas level since the odometer broke?",
    "After you change the baby's diaper, put him in his stroller and give him the pacifier.",
    "The guy getting off the airplane is a great buddy of mine.",
    "The labor union picketed in front of the taxi stand at the industrial park."
    ]

  Brit.prototype.phraseList = [
    ['legal holiday', 'bank holiday'],
    ['cookie sheet', 'baking tray'],
    ['advice columnist', 'agony aunt'],
    ['Allen wrench', 'Allen key'],
    ['uneven bars', 'asymmetric bars'],
    ['underground economy', 'black economy'],
    ['sponge bath', 'blanket bath'],
    ['apartment building', 'block of flats'],
    ['tow truck', 'breakdown van'],
    ['cinder block', 'breeze block'],
    ['bridge loan', 'bridging loan'],
    ['fanny pack', 'bumbag'],
    ['cotton candy', 'candyfloss'],
    ['parking lot', 'car park'],
    ['emergency room', 'casualty'],
    ['median strip', 'central reservation'],
    ['cylinder lock', 'Yale lock'],
    ['wholewheat bread', 'wholemeal bread'],
    ['coffee with cream', 'white coffee'],
    ['mineral spirits', 'white spirit'],
    ['Italian ice', 'water ice'],
    ['thermos bottle', 'vacuum flask'],
    ['truck stop', 'transport cafe'],
    ['shopping cart', 'trolley'],
    ['cable car', 'tram'],
    ['candy apple', 'toffee apple'],
    ['knock on wood', 'touch wood'],
    ['labor union', 'trade union'],
    ['industrial park', 'trading estate'],
    ['taxi stand', 'taxi rank'],
    ['dish towel', 'tea towel'],
    ['row house', 'terrace house'],
    ['to go', 'takeaway'],
    ['public school', 'state school'],
    ['green onion', 'spring onion'],
    ['bachelor party', 'stag night'],
    ['utility knife', 'Stanley knife'],
    ['chutes and ladders', 'snakes and ladders'],
    ['railroad tie', 'sleeper'],
    ['silent partner', 'sleeping partner'],
    ['rump roast', 'silverside'],
    ['skeleton in the closet', 'skeleton in the cupboard'],
    ['skim milk', 'skimmed milk'],
    ['jump rope', 'skipping rope'],
    ['whole note', 'semibreve (music)'],
    ['half step', 'semitone (music)'],
    ['stock option', 'share option'],
    ['shopping cart', 'shopping trolley'],
    ['model home', 'show house/home'],
    ['layer cake', 'sandwich cake'],
    ['sanitary napkin', 'sanitary towel'],
    ['traffic circle', 'roundabout'],
    ['right triangle', 'right-angled triangle'],
    ['beltway', 'ring road'],
    ['call collect', 'reverse the charges'],
    ['back-up lights', 'reversing lights'],
    ['court tennis', 'real tennis'],
    ['certified mail', 'recorded delivery'],
    ['license plate', 'registration plate'],
    ['race car', 'racing car'],
    ['eighth note', 'quaver (music)'],
    ['private school', 'public school'],
    ['public transportation', 'public transport'],
    ['punching bag', 'punchbag'],
    ['utility pole', 'pylon'],
    ['zip code', 'postcode'],
    ['potato chip', 'potato crisp'],
    ['electrical outlet', 'power point'],
    ['baby carriage', 'pram'],
    ['reverse discrimination', 'positive discrimination'],
    ['absentee ballot', 'postal vote'],
    ['dark chocolate', 'plain chocolate'],
    ['pay envelope', 'pay packet'],
    ['oven mitt', 'oven glove'],
    ['common stock', 'ordinary share'],
    ['license plate', 'number plate'],
    ['half note', 'minim(music)'],
    ['cell phone', 'mobile phone'],
    ['paved road', 'metalled road'],
    ['a head of lettuce', 'a lettuce'],
    ['grade crossing', 'level crossing'],
    ['jelly beans', 'jelly babies'],
    ['Joe Blow', 'Joe Bloggs'],
    ['rummage sale', 'jumble sale'],
    ['jumper cable', 'jump lead'],
    ['elementary school', 'junior school'],
    ['turn signal', 'indicator (on a car)'],
    ['confectioners’ sugar', 'icing sugar'],
    ['in the hospital', 'in hospital'],
    ['hot flash', 'hot flush'],
    ['garden hose', 'hosepipe'],
    ['green thumb', 'green fingers'],
    ['freight train', 'goods train'],
    ['wading pool', 'paddling pool'],
    ['liquor store', 'off-licence'],
    ['package store', 'off-licence'],
    ['snow pea', 'mangetout'],
    ['truck farm', 'market garden'],
    ['railroad yard', 'marshalling yard'],
    ['flatbed truck', 'low loader'],
    ['grab bag', 'lucky dip'],
    ['baggage car', 'luggage van'],
    ['crossing guard', 'lollipop lady (or man)'],
    ['housing development', 'housing estate'],
    ['bachelorette party', 'hen night'],
    ['installment plan', 'hire purchase'],
    ['first floor', 'ground floor'],
    ['wax paper', 'greaseproof paper'],
    ['waxed paper', 'greaseproof paper'],
    ['fire company', 'fire brigade'],
    ['fire department', 'fire service'],
    ['parochial school', 'faith school'],
    ['fiscal year', 'financial year'],
    ['second floor', 'first floor'],
    ['fish stick', 'fish finger'],
    ['drop cloth', 'dust sheet'],
    ['garbage can', 'dustbin'],
    ['driver’s license', 'driving licence'],
    ['divided highway', 'dual carriageway'],
    ['drunk driving', 'drink-driving'],
    ['liquor cabinet', 'drinks cupboard'],
    ['cocktail party', 'drinks party'],
    ['heavy cream', 'double cream'],
    ['dial tone', 'dialling tone'],
    ['quarter note', 'crotchet (music)'],
    ['checking account', 'current account'],
    ['hazard pay', 'danger money'],
    ['potato chips', 'crisps'],
    ['alligator clip', 'crocodile clip'],
    ['face card', 'court card'],
    ['housing project', 'council estate'],
    ['crib death', 'cot death'],
    ['cotton swab', 'cotton bud'],
    ['absorbent cotton', 'cotton wool'],
    ['French fries', 'chips'],
    ['movie theater', 'cinema'],
    ['the movies', 'cinema'],
    ['plastic wrap', 'cling film'],
    ['harbor seal', 'common seal'],
    ['durable goods', 'consumer durables'],
    ['hope chest', 'bottom drawer'],
    ['lawn bowling', 'bowls'],
    ['tube top', 'boob tube'],
    ['window shade', 'blind'],
    ['instant replay', 'action replay']];

  // Wordlist structure: [American word, British word]
  Brit.prototype.wordList = 
    [['truck','lorry'],
    ['bathroom','watercloset'],
    ['buddy','chap'],
    ['hurry', 'chivvy'],
    ['guy', 'bloke'],
    ['american', 'yank'],
    ['fucked', 'knobbed'],
    ['drunk', 'plastered'],
    ['idiot', 'smeghead'],
    ['bar', 'boozer'],
    ['accommodations', 'accommodation'],
    ['airfoil', 'aerofoil'],
    ['airplane', 'aeroplane'],
    ['aluminum', 'aluminium'],
    ['anise', 'aniseed'],
    ['counterclockwise', 'anticlockwise'],
    // ['tractor-trailer', 'articulated lorry'],
    ['eggplant', 'aubergine'],
    ['beet', 'beetroot'],
    ['beets', 'beetroot'],
    ['check', 'bill'],
    ['cracker', 'biscuit'],
    // ['coveralls', 'boiler suit'],
    ['hood', 'bonnet (of a car)'],
    ['trunk', 'boot (of a car)'],
    ['suspenders', 'braces'],
    ['headcheese', 'brawn'],
    ['slingshot', 'catapult'],
    ['drugstore', 'chemist'],
    ['cornstarch', 'cornflour'],
    ['Romaine', 'cos'],
    ['crib', 'cot'],
    ['zucchini', 'courgette'],
    ['guardrail', 'crash barrier'],
    ['chips', 'crisps'],
    ['bias-ply', 'cross-ply'],
    ['defroster', 'demister (in a car)'],
    ['rhinestone', 'diamante'],
    ['checkers', 'draughts (game)'],
    ['thumbtack', 'drawing pin'],
    ['bathrobe', 'dressing gown'],
    ['robe', 'dressing gown'],
    ['pacifier', 'dummy'],
    ['ground', 'earth (electrical)'],
    ['busy', 'engaged (of a phone)'],
    // ['real estate agent, realtor (trademark)', 'estate agent'],
    ['station wagon', 'estate car'],
    ['unlisted', 'ex-directory'],
    // ['wall-to-wall carpeting', 'fitted carpet'],
    ['washcloth', 'flannel'],
    ['apartment', 'flat'],
    ['flextime', 'flexitime'],
    ['switchblade', 'flick knife'],
    ['overpass', 'flyover'],
    ['soccer', 'football'],
    ['sidewalk', 'footway'],
    ['bangs', 'fringe (hair)'],
    ['period', 'full stop (punctuation)'],
    ['yard', 'garden'],
    ['lawn', 'garden'],
    // ['leverage', 'gearing (finance)'],
    ['gearshift', 'gear lever'],    
    ['broiler', 'grill (noun)'],
    ['broil', 'grill (verb)'],
    ['groundskeeper', 'groundsman'],
    ['barrette', 'hairslide'],
    ['hatrack', 'hatstand'],
    ['billboard', 'hoarding'],
    ['stovetop', 'hob'],
    ['carryall', 'holdall'],
    ['vacation', 'holiday'],
    ['vacationer', 'holidaymaker'],
    ['homey', 'homely'],
    // ['sprinkles (for ice cream)', 'hundreds and thousands'],
    ['inseam', 'inside leg'],
    ['sweater', 'jumper'],
    ['doghouse', 'kennel'],
    ['ladybug', 'ladybird'],
    ['elevator', 'lift'],
    ['popsicle', 'lolly'],
    ['john', 'loo (toilet)'],
    ['slipcover', 'loose cover'],
    ['truck', 'lorry'],
    ['bullhorn', 'loudhailer'],
    ['corn', 'maize'],
    ['math', 'maths'],
    ['odometer', 'milometer'],
    ['monkeyshines', 'monkey tricks'],
    ['highway', 'motorway'],
    ['expressway', 'motorway'],
    ['mommy', 'mummy'],
    ['mom', 'mum'],
    ['diaper', 'nappy'],
    ['pinwale', 'needlecord'],
    ['newscaster', 'newsreader'],
    ['tic-tac-toe', 'noughts and crosses'],
    // ['open-pit mining', 'opencast mining'],
    ['acetaminophen', 'paracetamol'],
    ['part', 'parting (in hair)'],
    ['solitaire', 'patience'],
    ['sidewalk', 'pavement'],
    ['crosswalk', 'pedestrian crossing'],
    ['clothespin', 'peg'],
    ['valance', 'pelmet'],
    ['gas', 'petrol'],
    ['gasoline', 'petrol'],
    ['physical therapy', 'physiotherapy'],
    ['jumper', 'pinafore dress'],
    // ['all-purpose flour', 'plain flour'],
    ['turtleneck', 'polo neck'],
    ['mailbox', 'postbox'],
    ['stroller', 'pram'],
    ['snap', 'press stud'],
    ['pushup', 'press-up'],
    ['GI', 'private soldier'],
    ['estimator', 'quantity surveyor'],
    ['line', 'queue'],
    ['railroad', 'railway'],
    ['retread', 'remould'],
    ['carousel', 'roundabout'],
    ['rowboat', 'rowing boat'],
    ['sailboat', 'sailing boat'],
    ['sedan', 'saloon'],
    ['sandbox', 'sandpit'],
    // ['self-rising flour', 'self-raising flour'],
    ['muffler', 'silencer (on a car)'],
    ['baseboard', 'skirting board'],
    ['sled', 'sledge'],
    ['slowpoke', 'slowcoach'],
    ['lawyer', 'solicitor'],
    ['soy', 'soya'],
    ['soybean', 'soya bean'],
    ['backsplash', 'splashback'],
    ['appetizer', 'starter'],
    ['supertitle', 'surtitle'],
    ['rutabaga', 'swede'],
    ['candy', 'sweet(s)'],
    ['takeout', 'takeaway'],
    ['check mark', 'tick'],
    ['scalper', 'ticket tout'],
    ['pantyhose', 'tights'],
    ['lumber', 'timber'],
    ['tidbit', 'titbit'],
    ['sneakers', 'trainers'],
    ['streetcar', 'tram'],
    ['twelve-gauge', 'twelve-bore'],
    ['unlike', 'unalike'],
    ['subway', 'underground'],
    ['shoulder', 'verge (of a road)'],
    ['undershirt', 'vest'],
    ['veterinarian', 'veterinary surgeon'],
    ['car', 'wagon (on a train)'],
    ['vest', 'waistcoat'],
    ['walker', 'walking frame'],
    ['closet', 'wardrobe'],
    ['clapboard', 'weatherboard'],
    ['windbreaker', 'windcheater'],
    ['windshield', 'windscreen'],
    ['fender', 'wing (of a car)'],
    ['countertop', 'worktop'],
    ['crosswalk', 'zebra crossing'],
    ['zee', 'zed (letter Z)'],
    ['zipper', 'zip']];

  Brit.prototype.checkAgainstWords = function(word) {
    for (var i = 0; i < this.wordList.length; i++) {

      if (this.isPossessiveNoun(word)) {
        return this.replacePossessiveNoun(word);
      }

      if (this.wordList[i][0] == word) {
        return this.wordList[i][1];
      }

      if (this.hasPunctuation(word)) {
        if ((this.wordList[i][0]) == word.slice(0, -1)) {
          return this.wordList[i][1] + word.slice(-1);
        }      
      }

    }

    return word;
  }

  Brit.prototype.replacePossessiveNoun = function(noun) {
    return this.checkAgainstWords(noun.slice(0, -2)) + "'s";
  }

  Brit.prototype.isPossessiveNoun = function(noun) {
    if (noun.slice(-2) === "'s") {
      return true;
    }
    return false;
  }

  Brit.prototype.checkAgainstPhrases = function(input) {
    for (var i = 0; i < this.phraseList.length; i++) {
      var pattern = new RegExp(this.phraseList[i][0],'g');
      input = input.replace(pattern, this.phraseList[i][1]);
    }
    return input;
  }

  Brit.prototype.hasPunctuation = function(word) {
    if (word.search(/\.|\!|,|\?|;/) > 0) {
      return true;
    }
    return false;
  }

  Brit.prototype.isWord = function(input) {
    // Detects simple words flanked by whitespace
    if (input.indexOf(' ') === -1) {
      return true;
    }
    return false;
  }

  Brit.prototype.isPhrase = function(input) {
    if (input.indexOf(' ') > 0) {
      return true;
    }
    return false;
  }

  Brit.prototype.translate = function(input) {

    // Control inputs, throw errors
    if (typeof input !== 'string') {
      try {
        throw new TypeError("I an't a bloody calculator. Gimme a string, meghead!");
      } catch (e) {
        return e;
      }
    }

    if (input.length < 1) {
      try {
        throw new Error("Well gimme something to work with, at least!");
      } catch (e) {
        return e;
      }
    }

    if (input.length > 200) {
      try {
        throw new Error("You an't Dickens, mate. Shorten them prose!");
      } catch (e) {
        return e;
      }
    }

    // Begin translating

    // If it's only one word, compare it to word list
    if (this.isWord(input)) {
      return this.checkAgainstWords(input);
    } else {
      // If it's longer than a word, replace phrases first
      input = this.checkAgainstPhrases(input);

      // Then, go back and replace any words
      var phrase = [];
      var rawPhrase = input.split(' ');
      for (var i = 0; i < rawPhrase.length; i++) {
        phrase.push(this.checkAgainstWords(rawPhrase[i]));
      }
    }

    phrase = phrase.join(' ');
    return phrase;
  }

})();

