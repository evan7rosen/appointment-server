exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Jeanette Hoffman",
          company: "BOLAX",
          email: "jeanette hoffman@bolax.biz",
          phone: "+1 (829) 521-3920",
          address: "999 Cypress Avenue, Grayhawk, Wisconsin, 6371",
          password: "Bakersville36"
        },
        {
          name: "Sheryl Nguyen",
          company: "SATIANCE",
          email: "sheryl nguyen@satiance.biz",
          phone: "+1 (845) 528-3966",
          address: "541 Overbaugh Place, Maybell, Texas, 639",
          password: "Century80"
        },
        {
          name: "Wiggins Hatfield",
          company: "KRAG",
          email: "wiggins hatfield@krag.org",
          phone: "+1 (856) 424-3023",
          address: "882 Linden Street, Romeville, Arkansas, 3554",
          password: "Wyoming16"
        },
        {
          name: "Gertrude David",
          company: "OMNIGOG",
          email: "gertrude david@omnigog.name",
          phone: "+1 (991) 419-3718",
          address: "430 Raleigh Place, Gardners, Alabama, 8386",
          password: "Coyote57"
        },
        {
          name: "Marsha Mcmillan",
          company: "AUTOMON",
          email: "marsha mcmillan@automon.ca",
          phone: "+1 (945) 407-3096",
          address: "109 Irvington Place, Frizzleburg, Maine, 6635",
          password: "Como96"
        },
        {
          name: "Pope Lowery",
          company: "CUIZINE",
          email: "pope lowery@cuizine.com",
          phone: "+1 (934) 584-2435",
          address: "498 Columbia Place, Breinigsville, Kentucky, 6694",
          password: "Boykin48"
        },
        {
          name: "Mcintyre Aguilar",
          company: "EYERIS",
          email: "mcintyre aguilar@eyeris.net",
          phone: "+1 (953) 559-3794",
          address: "800 Kingsland Avenue, Sehili, New Hampshire, 635",
          password: "Delco98"
        },
        {
          name: "Candy Ferguson",
          company: "DOGSPA",
          email: "candy ferguson@dogspa.co.uk",
          phone: "+1 (831) 555-3704",
          address: "246 Kent Avenue, Sunbury, Alaska, 9584",
          password: "Chesapeake93"
        },
        {
          name: "Colette Finch",
          company: "QUORDATE",
          email: "colette finch@quordate.info",
          phone: "+1 (874) 570-2444",
          address: "338 Howard Alley, Sheatown, Ohio, 1576",
          password: "Munjor73"
        },
        {
          name: "Walsh Lynn",
          company: "QUARX",
          email: "walsh lynn@quarx.us",
          phone: "+1 (851) 578-2689",
          address: "882 Ryder Avenue, Lloyd, Iowa, 6048",
          password: "Belvoir39"
        },
        {
          name: "Eileen Serrano",
          company: "KYAGORO",
          email: "eileen serrano@kyagoro.tv",
          phone: "+1 (878) 432-2247",
          address: "667 Coles Street, Alden, Louisiana, 8937",
          password: "Toftrees56"
        },
        {
          name: "Viola Cunningham",
          company: "XYQAG",
          email: "viola cunningham@xyqag.io",
          phone: "+1 (985) 486-3557",
          address: "228 Jay Street, Sunwest, Rhode Island, 9155",
          password: "Dixie54"
        },
        {
          name: "Beatriz Kent",
          company: "QNEKT",
          email: "beatriz kent@qnekt.biz",
          phone: "+1 (810) 448-3471",
          address: "263 Bevy Court, Bentley, Hawaii, 2733",
          password: "Rehrersburg67"
        },
        {
          name: "Kinney Shepard",
          company: "RODEOMAD",
          email: "kinney shepard@rodeomad.biz",
          phone: "+1 (826) 514-2061",
          address: "171 Vernon Avenue, Eggertsville, Maryland, 3018",
          password: "Riverton44"
        },
        {
          name: "Stefanie Dale",
          company: "EXTREMO",
          email: "stefanie dale@extremo.org",
          phone: "+1 (843) 446-2560",
          address: "385 Croton Loop, Stevens, Wyoming, 2950",
          password: "Loveland98"
        },
        {
          name: "Mason Ochoa",
          company: "EXOSPEED",
          email: "mason ochoa@exospeed.name",
          phone: "+1 (934) 472-3808",
          address: "298 Hunts Lane, Winesburg, South Dakota, 1917",
          password: "Caln75"
        },
        {
          name: "Boone Cummings",
          company: "SULFAX",
          email: "boone cummings@sulfax.ca",
          phone: "+1 (961) 472-2872",
          address: "152 Boulevard Court, Chapin, Delaware, 2046",
          password: "Kipp69"
        },
        {
          name: "Gayle Powell",
          company: "REMOLD",
          email: "gayle powell@remold.com",
          phone: "+1 (806) 459-3692",
          address: "741 Gerry Street, Bloomington, Arizona, 8080",
          password: "Lowgap34"
        },
        {
          name: "Neal Fletcher",
          company: "ZIDANT",
          email: "neal fletcher@zidant.net",
          phone: "+1 (801) 559-2980",
          address: "626 Prospect Street, Tuskahoma, Virgin Islands, 4290",
          password: "Berwind79"
        },
        {
          name: "Elisa Good",
          company: "DANCERITY",
          email: "elisa good@dancerity.co.uk",
          phone: "+1 (924) 558-3721",
          address: "873 Seabring Street, Chautauqua, North Dakota, 9645",
          password: "Imperial79"
        },
        {
          name: "Beryl Shields",
          company: "TURNABOUT",
          email: "beryl shields@turnabout.info",
          phone: "+1 (989) 403-2108",
          address: "830 Hampton Place, Brecon, District Of Columbia, 8849",
          password: "Darbydale93"
        },
        {
          name: "Trujillo Kirk",
          company: "FRANSCENE",
          email: "trujillo kirk@franscene.us",
          phone: "+1 (914) 419-3958",
          address: "699 Ashland Place, Dixonville, Connecticut, 3322",
          password: "Glidden92"
        },
        {
          name: "Joseph Francis",
          company: "TALAE",
          email: "joseph francis@talae.tv",
          phone: "+1 (879) 485-2651",
          address: "555 Arkansas Drive, Fairacres, Nevada, 6255",
          password: "Cobbtown51"
        },
        {
          name: "Juana Watts",
          company: "GLOBOIL",
          email: "juana watts@globoil.io",
          phone: "+1 (947) 557-3911",
          address: "848 Duffield Street, Chilton, North Carolina, 6291",
          password: "Gibbsville28"
        },
        {
          name: "Lloyd Brewer",
          company: "JIMBIES",
          email: "lloyd brewer@jimbies.biz",
          phone: "+1 (922) 541-3397",
          address: "329 Colonial Court, Muse, Massachusetts, 5242",
          password: "Riceville63"
        },
        {
          name: "Booker Mcgowan",
          company: "KIDGREASE",
          email: "booker mcgowan@kidgrease.biz",
          phone: "+1 (949) 452-3802",
          address: "374 McKibben Street, Topanga, Oregon, 8769",
          password: "Southmont29"
        },
        {
          name: "Briana Merrill",
          company: "TINGLES",
          email: "briana merrill@tingles.org",
          phone: "+1 (887) 559-3218",
          address: "495 Brighton Court, Oasis, Florida, 3276",
          password: "Cornucopia22"
        },
        {
          name: "Woodard Harris",
          company: "SECURIA",
          email: "woodard harris@securia.name",
          phone: "+1 (922) 545-2417",
          address: "426 Carroll Street, Ezel, South Carolina, 9403",
          password: "Eagletown16"
        },
        {
          name: "Bray Grimes",
          company: "ZIGGLES",
          email: "bray grimes@ziggles.ca",
          phone: "+1 (888) 537-2968",
          address: "865 Louisa Street, Hailesboro, Mississippi, 1890",
          password: "Gratton15"
        },
        {
          name: "Angela Daniels",
          company: "MIXERS",
          email: "angela daniels@mixers.com",
          phone: "+1 (968) 470-2973",
          address: "297 Tompkins Place, Tuttle, Utah, 3778",
          password: "Harleigh96"
        },
        {
          name: "Tonia Daugherty",
          company: "LUMBREX",
          email: "tonia daugherty@lumbrex.net",
          phone: "+1 (967) 600-2421",
          address: "892 Hart Place, Grandview, Colorado, 7226",
          password: "Hinsdale70"
        },
        {
          name: "Orr Chen",
          company: "KENGEN",
          email: "orr chen@kengen.co.uk",
          phone: "+1 (892) 561-3674",
          address:
            "743 Wolcott Street, Libertytown, Federated States Of Micronesia, 3232",
          password: "Alleghenyville87"
        },
        {
          name: "Gwen Douglas",
          company: "PRINTSPAN",
          email: "gwen douglas@printspan.info",
          phone: "+1 (831) 452-2706",
          address: "739 Ryerson Street, Hickory, Missouri, 395",
          password: "Boomer58"
        },
        {
          name: "Alyce Walters",
          company: "TERAPRENE",
          email: "alyce walters@teraprene.us",
          phone: "+1 (926) 484-3510",
          address: "323 Henry Street, Biddle, Washington, 3166",
          password: "Eagleville26"
        },
        {
          name: "Elsie Raymond",
          company: "SOFTMICRO",
          email: "elsie raymond@softmicro.tv",
          phone: "+1 (846) 484-2759",
          address: "210 Bennet Court, Chestnut, Virginia, 4735",
          password: "Herlong22"
        },
        {
          name: "Eleanor Carlson",
          company: "BIOSPAN",
          email: "eleanor carlson@biospan.io",
          phone: "+1 (908) 413-3502",
          address: "739 Karweg Place, Ivanhoe, Vermont, 8336",
          password: "Edmund45"
        },
        {
          name: "Ernestine Mccray",
          company: "OATFARM",
          email: "ernestine mccray@oatfarm.biz",
          phone: "+1 (930) 584-3841",
          address: "921 Meeker Avenue, Outlook, California, 3422",
          password: "Thermal66"
        },
        {
          name: "Greene Gregory",
          company: "NETPLAX",
          email: "greene gregory@netplax.biz",
          phone: "+1 (804) 474-2981",
          address: "148 Wogan Terrace, Fidelis, New York, 5889",
          password: "Brady56"
        },
        {
          name: "Bernadette Jarvis",
          company: "MUSANPOLY",
          email: "bernadette jarvis@musanpoly.org",
          phone: "+1 (864) 492-2591",
          address: "622 Seaview Avenue, Avalon, American Samoa, 6682",
          password: "Hasty26"
        },
        {
          name: "Vance Colon",
          company: "EXTRO",
          email: "vance colon@extro.name",
          phone: "+1 (944) 534-3603",
          address: "783 Ruby Street, Harrodsburg, New Jersey, 8722",
          password: "Allendale30"
        },
        {
          name: "Gay Waters",
          company: "HAIRPORT",
          email: "gay waters@hairport.ca",
          phone: "+1 (969) 561-2341",
          address: "725 Fleet Walk, Faxon, Georgia, 6090",
          password: "Canoochee64"
        },
        {
          name: "Kathleen Downs",
          company: "UXMOX",
          email: "kathleen downs@uxmox.com",
          phone: "+1 (974) 496-2806",
          address: "405 Dunne Place, Yukon, Illinois, 8546",
          password: "Devon99"
        },
        {
          name: "Travis Vaughan",
          company: "SKYBOLD",
          email: "travis vaughan@skybold.net",
          phone: "+1 (830) 457-2011",
          address: "270 Pilling Street, Derwood, Michigan, 2036",
          password: "Camas28"
        },
        {
          name: "Harper Franco",
          company: "COMTRAK",
          email: "harper franco@comtrak.co.uk",
          phone: "+1 (894) 472-3549",
          address: "234 Gatling Place, Joes, Idaho, 2621",
          password: "Cawood79"
        },
        {
          name: "Cain Pollard",
          company: "ZILLACON",
          email: "cain pollard@zillacon.info",
          phone: "+1 (822) 588-2519",
          address: "316 Tampa Court, Catherine, Pennsylvania, 5503",
          password: "Hillsboro72"
        },
        {
          name: "Clay Chang",
          company: "EXTRAGEN",
          email: "clay chang@extragen.us",
          phone: "+1 (819) 473-3594",
          address: "762 Manor Court, Staples, Kansas, 8172",
          password: "Summerset94"
        },
        {
          name: "Wright Lawrence",
          company: "SENMEI",
          email: "wright lawrence@senmei.tv",
          phone: "+1 (817) 556-2017",
          address: "821 Division Place, Swartzville, Puerto Rico, 3443",
          password: "Gilgo59"
        },
        {
          name: "Krystal Faulkner",
          company: "SPRINGBEE",
          email: "krystal faulkner@springbee.io",
          phone: "+1 (945) 568-3752",
          address: "107 Clara Street, Blende, Guam, 7103",
          password: "Rosedale30"
        },
        {
          name: "Bartlett Blanchard",
          company: "REALYSIS",
          email: "bartlett blanchard@realysis.biz",
          phone: "+1 (877) 575-3966",
          address: "728 Noble Street, Eureka, Tennessee, 5399",
          password: "Montura66"
        },
        {
          name: "Collier Mayo",
          company: "GEOFORMA",
          email: "collier mayo@geoforma.biz",
          phone: "+1 (908) 475-3488",
          address: "180 Morgan Avenue, Elrama, Marshall Islands, 9339",
          password: "Cherokee68"
        }
      ]);
    });
};
