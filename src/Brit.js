function Brit() {};

Brit.prototype.randomPhrases = [
  "Have you checked your truck's gas level since the odometer broke?"
]

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
  ['instant replay', 'action replay'],
  ['airfoil', 'aerofoil'],
  ['airplane', 'aeroplane'],
  ['aluminum', 'aluminium'],
  ['anise', 'aniseed'],
  ['counterclockwise', 'anticlockwise'],
  ['gas', 'petrol'],
  // ['tractor-trailer', 'articulated lorry'],
  
  ['eggplant', 'aubergine'],
  ['beet(s)', 'beetroot'],
  ['check', 'bill'],
  ['cracker', 'biscuit'],

  // ['(window) shade', 'blind'],
  
  // ['coveralls', 'boiler suit'],
  ['hood', 'bonnet (of a car)'],
  ['tube top', 'boob tube'],
  ['trunk', 'boot (of a car)'],
  ['hope chest', 'bottom drawer'],
  ['lawn bowling', 'bowls'],
  ['suspenders', 'braces'],
  ['headcheese', 'brawn (the food)'],
  ['tow truck', 'breakdown van'],
  ['cinder block', 'breeze block'],
  ['bridge loan', 'bridging loan'],
  ['fanny pack', 'bumbag'],
  ['cotton candy', 'candyfloss'],
  ['parking lot', 'car park'],
  ['emergency room', 'casualty'],
  ['slingshot', 'catapult'],
  ['median strip', 'central reservation'],
  ['drugstore', 'chemist'],
  ['French fries', 'chips'],
  ['movie theater; the movies', 'cinema'],
  ['plastic wrap', 'cling film'],
  ['harbor seal', 'common seal'],
  ['durable goods', 'consumer durables'],
  ['cornstarch', 'cornflour'],
  ['Romaine', 'cos (lettuce)'],
  ['crib', 'cot'],
  ['crib death', 'cot death'],
  ['cotton swab', 'cotton bud'],
  ['absorbent cotton', 'cotton wool'],
  ['(housing) project', 'council estate'],
  ['zucchini', 'courgette'],
  ['face card', 'court card'],
  ['guardrail', 'crash barrier'],
  ['chips; potato chips', 'crisps'],
  ['alligator clip', 'crocodile clip'],
  ['bias-ply', 'cross-ply'],
  ['quarter note', 'crotchet (music)'],
  ['checking account', 'current account'],
  ['hazard pay', 'danger money'],
  ['defroster', 'demister (in a car)'],
  ['dial tone', 'dialling tone'],
  ['rhinestone', 'diamante'],
  ['heavy cream', 'double cream'],
  ['checkers', 'draughts (game)'],
  ['thumbtack', 'drawing pin'],
  ['robe; bathrobe', 'dressing gown'],
  ['drunk driving', 'drink-driving'],
  ['liquor cabinet', 'drinks cupboard'],
  ['cocktail party', 'drinks party'],
  ['driver’s license', 'driving licence'],
  ['divided highway', 'dual carriageway'],
  ['pacifier', 'dummy (for a baby)'],
  ['drop cloth', 'dust sheet'],
  ['garbage can', 'dustbin'],
  ['ground', 'earth (electrical)'],
  ['busy', 'engaged (of a phone)'],
  ['real estate agent, realtor (trademark)', 'estate agent'],
  ['station wagon', 'estate car'],
  ['unlisted', 'ex-directory'],
  ['parochial school', 'faith school'],
  ['fiscal year', 'financial year'],
  ['fire company/department', 'fire brigade/service'],
  ['second floor', 'first floor'],
  ['fish stick', 'fish finger'],
  ['wall-to-wall carpeting', 'fitted carpet'],
  ['washcloth', 'flannel'],
  ['apartment', 'flat'],
  ['flextime', 'flexitime'],
  ['switchblade', 'flick knife'],
  ['overpass', 'flyover'],
  ['soccer', 'football'],
  ['sidewalk', 'footway'],
  ['bangs', 'fringe (hair)'],
  ['American plan', 'full board (in hotels)'],
  ['period', 'full stop (punctuation)'],
  ['yard', 'garden'],
  ['lawn', 'garden'],
  // ['leverage', 'gearing (finance)'],
  ['gearshift', 'gear lever'],
  ['freight train', 'goods train'],
  ['wax paper/waxed paper', 'greaseproof paper'],
  ['green thumb', 'green fingers'],
  ['broiler', 'grill (noun)'],
  ['broil', 'grill (verb)'],
  ['first floor', 'ground floor'],
  ['groundskeeper', 'groundsman'],
  ['barrette', 'hairslide'],
  ['hatrack', 'hatstand'],
  ['bachelorette party', 'hen night'],
  ['installment plan', 'hire purchase'],
  ['billboard', 'hoarding'],
  ['stovetop', 'hob'],
  ['carryall', 'holdall'],
  ['vacation', 'holiday'],
  ['vacationer', 'holidaymaker'],
  ['homey', 'homely'],
  ['(garden) hose', 'hosepipe'],
  ['in the hospital', 'in hospital'],
  ['hot flash', 'hot flush'],
  ['housing development', 'housing estate'],
  ['sprinkles (for ice cream)', 'hundreds and thousands'],
  ['Popsicle (trademark)', 'ice lolly'],
  ['confectioners’ sugar', 'icing sugar'],
  ['turn signal', 'indicator (on a car)'],
  ['inseam', 'inside leg'],
  ['jelly beans', 'jelly babies'],
  ['Joe Blow', 'Joe Bloggs'],
  ['John Q. Public', 'Joe Public'],
  ['rummage sale', 'jumble sale'],
  ['jumper cable', 'jump lead'],
  ['sweater', 'jumper'],
  ['elementary school', 'junior school'],
  ['doghouse', 'kennel'],
  ['ladybug', 'ladybird'],
  ['a head of lettuce', 'a lettuce'],
  ['grade crossing', 'level crossing'],
  ['elevator', 'lift'],
  ['Popsicle (trademark)', 'lolly'],
  ['crossing guard', 'lollipop lady (or man)'],
  ['john', 'loo (toilet)'],
  ['slipcover', 'loose cover'],
  ['truck', 'lorry'],
  ['bullhorn', 'loudhailer'],
  ['flatbed truck', 'low loader'],
  ['grab bag', 'lucky dip'],
  ['baggage car', 'luggage van'],
  ['corn', 'maize'],
  ['snow pea', 'mangetout'],
  ['truck farm', 'market garden'],
  ['railroad yard', 'marshalling yard'],
  ['math', 'maths'],
  ['paved road', 'metalled road'],
  ['odometer', 'milometer'],
  ['half note', 'minim(music)'],
  ['cell phone', 'mobile phone'],
  ['monkeyshines', 'monkey tricks'],
  ['expressway; highway', 'motorway'],
  ['mom/mommy', 'mum/mummy'],
  ['diaper', 'nappy'],
  ['pinwale', 'needlecord'],
  ['newscaster', 'newsreader'],
  ['tic-tac-toe', 'noughts and crosses'],
  ['license plate', 'number plate'],
  ['liquor store; package store', 'off-licence'],
  ['open-pit mining', 'opencast mining'],
  ['common stock', 'ordinary share'],
  ['oven mitt', 'oven glove'],
  ['wading pool', 'paddling pool'],
  ['acetaminophen', 'paracetamol'],
  ['part', 'parting (in hair)'],
  ['solitaire', 'patience'],
  ['sidewalk', 'pavement'],
  ['pay envelope', 'pay packet'],
  ['crosswalk', 'pedestrian crossing'],
  ['clothespin', 'peg'],
  ['valance', 'pelmet'],
  ['gas; gasoline', 'petrol'],
  ['physical therapy', 'physiotherapy'],
  ['jumper', 'pinafore dress'],
  ['dark chocolate', 'plain chocolate'],
  ['all-purpose flour', 'plain flour'],
  ['turtleneck', 'polo neck'],
  ['reverse discrimination', 'positive discrimination'],
  ['absentee ballot', 'postal vote'],
  ['mailbox', 'postbox'],
  ['zip code', 'postcode'],
  ['potato chip', 'potato crisp'],
  ['electrical outlet', 'power point'],
  ['baby carriage; stroller', 'pram'],
  ['snap', 'press stud'],
  ['pushup', 'press-up'],
  ['GI', 'private soldier'],
  ['private school', 'public school'],
  ['public transportation', 'public transport'],
  ['punching bag', 'punchbag'],
  ['stroller', 'pushchair'],
  ['utility pole', 'pylon'],
  ['estimator', 'quantity surveyor'],
  ['eighth note', 'quaver (music)'],
  ['line', 'queue'],
  ['race car', 'racing car'],
  ['railroad', 'railway'],
  ['court tennis', 'real tennis'],
  ['certified mail', 'recorded delivery'],
  ['license plate', 'registration plate'],
  ['retread', 'remould (tyre)'],
  ['call collect', 'reverse the charges'],
  ['back-up lights', 'reversing lights'],
  ['right triangle', 'right-angled triangle'],
  ['beltway', 'ring road'],
  ['European plan', 'room only'],
  ['carousel', 'roundabout (at a fair)'],
  ['traffic circle', 'roundabout (in road)'],
  ['rowboat', 'rowing boat'],
  ['sailboat', 'sailing boat'],
  ['sedan', 'saloon'],
  ['sandbox', 'sandpit'],
  ['layer cake', 'sandwich cake'],
  ['sanitary napkin', 'sanitary towel'],
  ['self-rising flour', 'self-raising flour'],
  ['whole note', 'semibreve (music)'],
  ['half step', 'semitone (music)'],
  ['stock option', 'share option'],
  ['shopping cart', 'shopping trolley'],
  ['model home', 'show house/home'],
  ['muffler', 'silencer (on a car)'],
  ['rump roast', 'silverside'],
  ['skeleton in the closet', 'skeleton in the cupboard'],
  ['skim milk', 'skimmed milk'],
  ['jump rope', 'skipping rope'],
  ['baseboard', 'skirting board'],
  ['sled', 'sledge'],
  ['railroad tie', 'sleeper'],
  ['silent partner', 'sleeping partner'],
  ['slowpoke', 'slowcoach'],
  ['chutes and ladders', 'snakes and ladders'],
  ['lawyer', 'solicitor'],
  ['soy/soybean', 'soya/soya bean'],
  ['backsplash', 'splashback'],
  ['green onion', 'spring onion'],
  ['bachelor party', 'stag night'],
  ['utility knife', 'Stanley knife'],
  ['appetizer', 'starter'],
  ['public school', 'state school'],
  ['tempest in a teapot', 'storm in a teacup'],
  ['supertitle', 'surtitle'],
  ['rutabaga', 'swede'],
  ['candy', 'sweet(s)'],
  ['takeout; to go', 'takeaway (food)'],
  ['taxi stand', 'taxi rank'],
  ['dish towel', 'tea towel'],
  ['row house', 'terrace house'],
  ['check mark', 'tick'],
  ['scalper', 'ticket tout'],
  ['pantyhose', 'tights'],
  ['lumber', 'timber'],
  ['tidbit', 'titbit'],
  ['candy apple', 'toffee apple'],
  ['knock on wood', 'touch wood'],
  ['labor union', 'trade union'],
  ['industrial park', 'trading estate'],
  ['sneakers', 'trainers'],
  ['streetcar; cable car', 'tram'],
  ['truck stop', 'transport cafe'],
  ['shopping cart', 'trolley'],
  ['twelve-gauge', 'twelve-bore'],
  ['unlike', 'unalike'],
  ['subway', 'underground'],
  ['thermos bottle', 'vacuum flask'],
  ['shoulder', 'verge (of a road)'],
  ['undershirt', 'vest'],
  ['veterinarian', 'veterinary surgeon'],
  ['car', 'wagon (on a train)'],
  ['vest', 'waistcoat'],
  ['walker', 'walking frame'],
  ['closet', 'wardrobe'],
  ['Italian ice', 'water ice'],
  ['clapboard', 'weatherboard'],
  ['coffee with cream', 'white coffee'],
  ['mineral spirits', 'white spirit'],
  ['wholewheat bread', 'wholemeal bread'],
  ['windbreaker', 'windcheater'],
  ['windshield', 'windscreen'],
  ['fender', 'wing (of a car)'],
  ['countertop', 'worktop'],
  ['cylinder lock', 'Yale lock'],
  ['crosswalk', 'zebra crossing'],
  ['zee', 'zed (letter Z)'],
  ['zipper', 'zip']];

var phraseList = [
  ['legal holiday', 'bank holiday'],
  ['cookie sheet', 'baking tray'],
  ['advice columnist', 'agony aunt'],
  ['Allen wrench', 'Allen key'],
  ['uneven bars', 'asymmetric bars'],
  ['underground economy', 'black economy'],
  ['sponge bath', 'blanket bath'],
  ['apartment building', 'block of flats']];

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

Brit.prototype.checkAgainstPhrases = function(input, phraseList) {
  for (var i = 0; i < phraseList.length; i++) {
    var pattern = new RegExp(phraseList[i][0],'g');
    input = input.replace(pattern, phraseList[i][1]);
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

  if (this.isWord(input)) {
    return this.checkAgainstWords(input);
  } else {



    var phrase = [];
    var rawPhrase = input.split(' ');
    for (var i = 0; i < rawPhrase.length; i++) {
      phrase.push(this.checkAgainstWords(rawPhrase[i]));
    }
  }

  phrase = phrase.join(' ');
  return phrase;
}
