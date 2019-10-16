exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          name: "Andrea Hansen",
          company: "HANDSHAKE",
          email: "andrea hansen@handshake.com",
          phone: "+1 (996) 586-3786",
          address: "823 Dinsmore Place, Steinhatchee, Puerto Rico, 887",
          password: "Sutton57"
        },
        {
          name: "Teri Matthews",
          company: "PHARMACON",
          email: "teri matthews@pharmacon.io",
          phone: "+1 (974) 529-2240",
          address: "633 Johnson Street, Bend, North Carolina, 2367",
          password: "Veyo51"
        },
        {
          name: "Reyes Medina",
          company: "CYCLONICA",
          email: "reyes medina@cyclonica.ca",
          phone: "+1 (927) 439-2174",
          address: "678 Ridge Court, Courtland, Texas, 5808",
          password: "Bangor21"
        },
        {
          name: "Lina Gregory",
          company: "VOLAX",
          email: "lina gregory@volax.net",
          phone: "+1 (805) 565-3931",
          address: "902 Wortman Avenue, Layhill, New York, 9036",
          password: "Ryderwood87"
        },
        {
          name: "Gillespie Kent",
          company: "PETICULAR",
          email: "gillespie kent@peticular.co.uk",
          phone: "+1 (881) 408-2360",
          address: "240 Kimball Street, Brownlee, Massachusetts, 2285",
          password: "Chase92"
        },
        {
          name: "Jessie Hoover",
          company: "LIQUICOM",
          email: "jessie hoover@liquicom.org",
          phone: "+1 (838) 470-3662",
          address: "519 Langham Street, Lafferty, Wyoming, 4581",
          password: "Brewster60"
        },
        {
          name: "Lucile Roth",
          company: "WATERBABY",
          email: "lucile roth@waterbaby.us",
          phone: "+1 (805) 580-3840",
          address: "411 Campus Place, Gwynn, Nebraska, 5637",
          password: "Fedora80"
        },
        {
          name: "Clarissa Dawson",
          company: "EXERTA",
          email: "clarissa dawson@exerta.biz",
          phone: "+1 (960) 430-2436",
          address: "152 Cooke Court, Ola, Palau, 2664",
          password: "Chamberino50"
        },
        {
          name: "Lula Farmer",
          company: "LOVEPAD",
          email: "lula farmer@lovepad.tv",
          phone: "+1 (941) 573-2169",
          address: "235 Monroe Street, Olney, South Carolina, 2966",
          password: "Crisman82"
        },
        {
          name: "Heather Montgomery",
          company: "MENBRAIN",
          email: "heather montgomery@menbrain.me",
          phone: "+1 (848) 416-3088",
          address: "101 Sackett Street, Hannasville, Minnesota, 1163",
          password: "Gilmore76"
        },
        {
          name: "Knight Duffy",
          company: "TERRAGO",
          email: "knight duffy@terrago.name",
          phone: "+1 (803) 559-2795",
          address: "823 Rockwell Place, Welch, Indiana, 2001",
          password: "Williston49"
        },
        {
          name: "Marcia Cole",
          company: "NEOCENT",
          email: "marcia cole@neocent.biz",
          phone: "+1 (947) 564-3884",
          address: "199 Kenmore Terrace, Stonybrook, Florida, 5788",
          password: "Bedias92"
        },
        {
          name: "Jami Schneider",
          company: "ELITA",
          email: "jami schneider@elita.com",
          phone: "+1 (956) 451-2933",
          address: "401 Stoddard Place, Clayville, Arkansas, 1264",
          password: "Caroline76"
        },
        {
          name: "Krystal Vincent",
          company: "EZENTIA",
          email: "krystal vincent@ezentia.io",
          phone: "+1 (842) 539-2038",
          address: "530 Lexington Avenue, Roderfield, Michigan, 6223",
          password: "Galesville83"
        },
        {
          name: "Blackburn Kim",
          company: "ECLIPTO",
          email: "blackburn kim@eclipto.ca",
          phone: "+1 (859) 568-3871",
          address: "556 Lawrence Street, Goodville, Mississippi, 2558",
          password: "Sperryville34"
        },
        {
          name: "Allyson Mclean",
          company: "STEELFAB",
          email: "allyson mclean@steelfab.net",
          phone: "+1 (847) 495-3500",
          address: "427 Woodside Avenue, Logan, Montana, 8758",
          password: "Muir51"
        },
        {
          name: "Etta Phelps",
          company: "ISOLOGIA",
          email: "etta phelps@isologia.co.uk",
          phone: "+1 (946) 557-3222",
          address: "737 Brightwater Court, Nanafalia, Virginia, 6224",
          password: "Fairforest93"
        },
        {
          name: "Bridges Flowers",
          company: "COMDOM",
          email: "bridges flowers@comdom.org",
          phone: "+1 (967) 436-2985",
          address: "991 Georgia Avenue, Sims, Marshall Islands, 9585",
          password: "Wadsworth40"
        },
        {
          name: "Case Delacruz",
          company: "HYPLEX",
          email: "case delacruz@hyplex.us",
          phone: "+1 (814) 475-3044",
          address: "356 Clarkson Avenue, Zortman, Wisconsin, 8173",
          password: "Baker67"
        },
        {
          name: "Contreras Walters",
          company: "MIXERS",
          email: "contreras walters@mixers.biz",
          phone: "+1 (834) 554-3962",
          address: "796 Hendrickson Street, Garnet, Connecticut, 1799",
          password: "Maury55"
        },
        {
          name: "Callie Albert",
          company: "HONOTRON",
          email: "callie albert@honotron.tv",
          phone: "+1 (829) 483-2563",
          address: "384 Preston Court, Keller, North Dakota, 9887",
          password: "Hinsdale26"
        },
        {
          name: "Robbins Soto",
          company: "ANIMALIA",
          email: "robbins soto@animalia.me",
          phone: "+1 (800) 442-3193",
          address: "934 Hampton Place, Stockwell, Colorado, 7925",
          password: "Wanship51"
        }
      ]);
    });
};
