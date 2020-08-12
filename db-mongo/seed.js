/* eslint-disable no-nested-ternary */
const fetch = require('node-fetch');
const db = require('./index.js');
const Reviews = require('./Review.js');

const names = 'ediblesurf\nscarypepperoni\ncorkbaggage\nauctioneerhatching\nsnoutfea\nimmersionmanrope\nmuralmilly\nseventhneodymium\nchunksalt\nreformatmagpie\nlabradortwister\nregimepeese\nstaratlas\nflashsixth\ncancerkite\nraymondcurtains\ncreamlikecherub\nparalysesprogress\nabaftproposal\narticulateamos\nsaskatoonfrench\nimpressdarkened\nglottlethrower\ndindowssoulful\nbottomherald\nbrunnichandes\nmeddarsleather\nneodymiumspirit\nnuptsesnazzy\nafraidunbridle\nmoonlighttoilet\ncomplexorfling\nhuskinesscash\nevokeelbrus\nfadedadvance\ndullaffix\nverbclattering\njellydeplete\ncriteriacatnap\nhominybust\ninfiniteorrin\nnetworkparking\njungeecynon\ndeclarestorm\npneumoniaski\narmoryaccentor\naudacityjoints\njoggercycle\nnicotineswunchy\nmanagerpops\njoyfulneptunium\nwoundswilderness\nmyviewpopulation\npetchtasha\nstrodeils\nconfusionendpoint\nbunkbedfog\npetrifiedoklahoma\naideamidships\nbroadsnugly\nobjectfunction\nsiestaequate\nquizzicalclydach\ncathousepup\nrumblelizard\nphonydivide\nricesymphony\ndreefhootenany\ndailypowdered\nkivadryer\nsandyconcede\ntaodailgermanium\nfrompoking\nsummergrape\ncharlesculprit\nlateplutting\njetfoudry\ngenespittal\nglassesballs\ndemplewheatear\nairsnatch\nsingerharm\noilymones\nbooesreborn\nrewordfunnels\nleanregistered\nfiddleextreme\nimitategravity\nrubyaffidavit\nfuneralyudding\ngrainmodeling\nkindergartenleaves\ndampedaudition\nadaptivesixfold\nbiopsygore\nfilesdosty\ncarefreelikeable\ndareslaxative\nhearingpacify\njudysleuth\nscrambleralph\nwimpfrisbee\nmadlyalexandria\nhearingcornball\nbrakesmall\nbreedercitrusy\nlogsprint\ngoldmedalraise\nhelpfulyikes\nramblingangie\nshakablehamburger\nticketsfist\ntowerwegs\nexactingharmony\npostsuncouth\nbootlesssimon\nviewingcamera\nwirelessbased\nfoecadair\narmaghfarmer\ndramatictrifocals\ntyingmid\ncrippsvimeo\ncrumblyscotland\nvaselinelila\nnuggedlegwarmer\nalkalineduress\ndicedoil\nbarblingradon\nbilliesblank\nflapjackwarbler\ngrowldirective\ndepletewise\ntatchjawed\ntartloxahatchee\nrailwaysadly\ntelephonestumptown\npagingnatural\nassiniboinepoppy\nrackunsuitable\nbitfeverish\nsmallweedalso\nmournernest\nheritagefollowed\ncoatgift\ncompetitoralibi\nmogglingquantity\nvermontswaddling\nectodermmalestate\nshooterforever\nshackalgae\nperseusjoin\nfruitwalker\nconsisttelrad\npoetsnorkel\nmonthlyopulent\npowerhart\nmowingjellies\nsoakanchor\nintelunderstanding\npickclassroom\npicayunenutcase\nunsuretriathlon\nfoggystickers\nflotillanicoise\ngreaterstaking\nfaildial\ntoolhush\ndexterousdecay\ncunseymumbling\nfionaquaint\nkelvinchomp\nmightyunison\nchoardvest\ntackingskylight\ndevelopqueer\npolythenekansas\ntannedcountry\nclawedfreely\nfledfix\ncabotatrophy\namigoexcluded\nvestashamed\nconfesssnictor\nbugtorque\napigiftshop\ncreepyuninsured\nvallislate\nbathroomdiving\nplinkoval\nhusclejukebox\nnagdeadbeat\nsplendidspiffy\nbipplingavenge\nfrizzylouie\ntwigpumpkin\nobedientmontana\nkittbaloo\npariscenters\nparcelpotter'.split('\n');

let count = 0;
const insertSampleData = (type = 'hipster-centric', paras = 5) => {
  const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const sampleReviews = [];

  const url = `https://hipsum.co/api/?type=${type}&paras=${paras}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((x) => {
        const productId = count < 10 ? `P00${count}` : count > 9 && count < 100 ? `P0${count}` : `P${count}`;
        const productReview = {
          product_id: productId,
          reviews: [],
        };

        for (let i = 0; i < randomNum(100, 500); i += 1) {
          const review = {
            title: x.split(',')[0],
            author: names[randomNum(1, 200)],
            create_date: Date.now(),
            body: x,
            likes: randomNum(1, 50),
            stars: randomNum(1, 6),
            recommended: randomNum(1, 11) % 2 !== 0,
          };
          productReview.reviews.push(review);
        }

        count += 1;
        sampleReviews.push(productReview);
      });
      return sampleReviews;
    })
    .then((data) => {
      Reviews.create(data)
        .then(() => db.close());
    });
};

const loopSampleData = (num, type, paras) => {
  for (let i = 0; i < num; i += 1) {
    insertSampleData(type, paras);
  }
};

loopSampleData(10, 'hipster-centric', 50);
