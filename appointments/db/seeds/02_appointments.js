exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("appointments")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("appointments").insert([
        {
          title: "occaecat cupidatat laborum",
          body:
            "eu commodo reprehenderit do excepteur tempor reprehenderit proident enim occaecat",
          location: "Hessville, Pennsylvania",
          completed: true,
          user_id: 24,
          guest_id: 5
        },
        {
          title: "qui labore quis",
          body:
            "dolor exercitation voluptate exercitation enim id pariatur minim proident cillum",
          location: "Blandburg, Hawaii",
          completed: true,
          user_id: 41,
          guest_id: 27
        },
        {
          title: "dolore excepteur do",
          body:
            "nulla consequat incididunt proident elit ad fugiat ea occaecat excepteur",
          location: "Waterford, New Mexico",
          completed: false,
          user_id: 22,
          guest_id: 27
        },
        {
          title: "sit mollit sit",
          body:
            "esse consectetur fugiat aliquip incididunt officia id in consequat in",
          location: "Lewis, Delaware",
          completed: false,
          user_id: 34,
          guest_id: 14
        },
        {
          title: "consequat commodo enim",
          body: "sint culpa qui incididunt eiusmod ut elit aute in ea",
          location: "Logan, South Dakota",
          completed: false,
          user_id: 35,
          guest_id: 3
        },
        {
          title: "elit deserunt aliqua",
          body: "aute ex est exercitation aliqua sit elit qui est culpa",
          location: "Darbydale, Maryland",
          completed: true,
          user_id: 20,
          guest_id: 25
        },
        {
          title: "cupidatat excepteur veniam",
          body:
            "in adipisicing excepteur deserunt excepteur ullamco laboris officia incididunt voluptate",
          location: "Bainbridge, Wyoming",
          completed: false,
          user_id: 39,
          guest_id: 50
        },
        {
          title: "sunt occaecat ullamco",
          body: "magna laborum qui elit est ut ipsum aute voluptate excepteur",
          location: "Tyro, South Carolina",
          completed: true,
          user_id: 38,
          guest_id: 4
        },
        {
          title: "aliqua velit est",
          body: "ullamco magna enim consequat ex elit qui elit amet eiusmod",
          location: "Coloma, Utah",
          completed: false,
          user_id: 32,
          guest_id: 40
        },
        {
          title: "proident culpa aliquip",
          body: "enim qui id enim elit id aute laboris in veniam",
          location: "Breinigsville, District Of Columbia",
          completed: false,
          user_id: 42,
          guest_id: 49
        },
        {
          title: "adipisicing magna sunt",
          body: "adipisicing anim non Lorem ad laborum eiusmod in esse ullamco",
          location: "Albrightsville, Missouri",
          completed: true,
          user_id: 33,
          guest_id: 40
        },
        {
          title: "nulla ipsum pariatur",
          body: "cillum irure ex officia ea est quis ullamco laboris irure",
          location: "Snelling, Puerto Rico",
          completed: false,
          user_id: 2,
          guest_id: 7
        },
        {
          title: "eu sit sit",
          body:
            "mollit officia incididunt ad aliquip deserunt enim nostrud amet sint",
          location: "Brule, Tennessee",
          completed: false,
          user_id: 4,
          guest_id: 23
        },
        {
          title: "reprehenderit deserunt qui",
          body:
            "officia dolore laborum velit reprehenderit ut nostrud ea veniam fugiat",
          location: "Hiwasse, Illinois",
          completed: true,
          user_id: 5,
          guest_id: 16
        },
        {
          title: "voluptate duis deserunt",
          body: "Lorem quis veniam qui eu dolore sunt cillum do do",
          location: "Shaft, Kansas",
          completed: true,
          user_id: 3,
          guest_id: 4
        },
        {
          title: "voluptate ad sint",
          body: "ipsum qui non aute pariatur ex laborum anim adipisicing ea",
          location: "Clinton, American Samoa",
          completed: false,
          user_id: 35,
          guest_id: 2
        },
        {
          title: "labore aliquip ex",
          body:
            "elit sint non labore occaecat cupidatat labore qui exercitation do",
          location: "Waverly, Connecticut",
          completed: true,
          user_id: 10,
          guest_id: 43
        },
        {
          title: "esse ut enim",
          body: "officia tempor qui officia ex voluptate eu do proident dolore",
          location: "Watrous, Arizona",
          completed: false,
          user_id: 42,
          guest_id: 22
        },
        {
          title: "eu quis cupidatat",
          body:
            "velit consectetur magna et laboris et sint pariatur aliquip excepteur",
          location: "Curtice, Maine",
          completed: true,
          user_id: 6,
          guest_id: 11
        },
        {
          title: "consectetur magna officia",
          body: "Lorem minim nostrud proident ut esse commodo ex qui culpa",
          location: "Lithium, Arkansas",
          completed: true,
          user_id: 25,
          guest_id: 17
        },
        {
          title: "adipisicing mollit occaecat",
          body:
            "culpa duis et mollit ad Lorem irure incididunt eiusmod occaecat",
          location: "Norris, Vermont",
          completed: true,
          user_id: 29,
          guest_id: 3
        },
        {
          title: "deserunt nulla nostrud",
          body: "enim velit et aliquip labore occaecat enim ad excepteur sit",
          location: "Crayne, Wisconsin",
          completed: false,
          user_id: 19,
          guest_id: 36
        },
        {
          title: "est est eiusmod",
          body:
            "amet aliqua tempor fugiat cupidatat dolore qui dolore nisi sunt",
          location: "Gibsonia, Oregon",
          completed: false,
          user_id: 42,
          guest_id: 49
        },
        {
          title: "proident elit dolor",
          body: "laboris nostrud cillum do id id duis ad velit incididunt",
          location: "Omar, Idaho",
          completed: false,
          user_id: 28,
          guest_id: 31
        },
        {
          title: "non dolore deserunt",
          body:
            "anim incididunt ipsum exercitation commodo sint commodo veniam reprehenderit eu",
          location: "Bennett, Washington",
          completed: false,
          user_id: 46,
          guest_id: 34
        },
        {
          title: "ut voluptate elit",
          body:
            "ut enim laboris pariatur mollit consectetur incididunt consequat excepteur eiusmod",
          location: "Blue, Michigan",
          completed: true,
          user_id: 1,
          guest_id: 37
        },
        {
          title: "duis laborum sunt",
          body:
            "labore Lorem nostrud commodo labore excepteur est sit pariatur cupidatat",
          location: "Cecilia, Florida",
          completed: true,
          user_id: 2,
          guest_id: 12
        },
        {
          title: "ullamco irure magna",
          body:
            "deserunt proident ipsum minim anim id officia occaecat laboris nisi",
          location: "Tampico, Georgia",
          completed: false,
          user_id: 23,
          guest_id: 24
        },
        {
          title: "minim aliqua nisi",
          body:
            "cillum labore consequat enim do nostrud voluptate culpa non ex",
          location: "Lawrence, Guam",
          completed: false,
          user_id: 12,
          guest_id: 37
        },
        {
          title: "aliqua commodo quis",
          body:
            "proident incididunt quis occaecat pariatur exercitation tempor magna aliqua esse",
          location: "Sandston, Virgin Islands",
          completed: true,
          user_id: 14,
          guest_id: 18
        },
        {
          title: "enim enim ut",
          body:
            "amet excepteur nulla deserunt amet duis est ad sit reprehenderit",
          location: "Healy, Ohio",
          completed: false,
          user_id: 11,
          guest_id: 21
        },
        {
          title: "consectetur nulla fugiat",
          body:
            "dolore sit consectetur ullamco magna ipsum officia proident anim dolor",
          location: "Yorklyn, Montana",
          completed: false,
          user_id: 46,
          guest_id: 17
        },
        {
          title: "ut ipsum incididunt",
          body: "laborum ad velit voluptate aliqua amet sunt culpa est ex",
          location: "Vaughn, West Virginia",
          completed: true,
          user_id: 31,
          guest_id: 20
        },
        {
          title: "velit nulla commodo",
          body:
            "aute consectetur dolor incididunt exercitation sit voluptate occaecat consectetur enim",
          location: "Masthope, Federated States Of Micronesia",
          completed: false,
          user_id: 16,
          guest_id: 19
        },
        {
          title: "ea mollit velit",
          body:
            "in non ullamco reprehenderit velit est duis magna reprehenderit anim",
          location: "Eagletown, California",
          completed: true,
          user_id: 30,
          guest_id: 9
        },
        {
          title: "tempor do reprehenderit",
          body:
            "consequat qui laborum ex mollit aute culpa excepteur quis cupidatat",
          location: "Dunlo, New York",
          completed: true,
          user_id: 19,
          guest_id: 21
        },
        {
          title: "sit irure consequat",
          body:
            "quis velit esse occaecat enim occaecat deserunt Lorem minim qui",
          location: "Geyserville, New Jersey",
          completed: false,
          user_id: 25,
          guest_id: 14
        },
        {
          title: "quis amet in",
          body:
            "laboris sit eiusmod laborum proident eiusmod ad fugiat ad consectetur",
          location: "Whitestone, Louisiana",
          completed: false,
          user_id: 3,
          guest_id: 19
        },
        {
          title: "ut cillum do",
          body:
            "veniam cupidatat deserunt irure nostrud culpa incididunt nulla adipisicing Lorem",
          location: "Hannasville, Minnesota",
          completed: true,
          user_id: 17,
          guest_id: 3
        },
        {
          title: "do exercitation quis",
          body:
            "officia elit tempor tempor nulla esse dolor pariatur duis Lorem",
          location: "Summertown, Alaska",
          completed: true,
          user_id: 37,
          guest_id: 3
        },
        {
          title: "consectetur ut aliqua",
          body: "nisi id qui consectetur duis amet eu duis culpa do",
          location: "Morningside, North Carolina",
          completed: true,
          user_id: 50,
          guest_id: 38
        },
        {
          title: "quis aute ex",
          body:
            "duis ut reprehenderit ipsum sint nisi esse excepteur excepteur qui",
          location: "Vale, Indiana",
          completed: true,
          user_id: 40,
          guest_id: 14
        },
        {
          title: "Lorem aute pariatur",
          body: "cillum id enim sunt id non mollit consequat excepteur amet",
          location: "Matheny, Texas",
          completed: false,
          user_id: 2,
          guest_id: 9
        },
        {
          title: "non et elit",
          body:
            "irure eiusmod dolor adipisicing pariatur ullamco exercitation dolore irure deserunt",
          location: "Corriganville, Rhode Island",
          completed: true,
          user_id: 47,
          guest_id: 31
        },
        {
          title: "Lorem proident duis",
          body:
            "commodo ad exercitation in qui ex officia pariatur tempor proident",
          location: "Newry, Iowa",
          completed: false,
          user_id: 41,
          guest_id: 47
        },
        {
          title: "irure pariatur cillum",
          body:
            "cillum ullamco culpa sint cillum amet reprehenderit aliquip ullamco occaecat",
          location: "Osmond, Colorado",
          completed: true,
          user_id: 11,
          guest_id: 10
        },
        {
          title: "cupidatat consequat laborum",
          body:
            "tempor ad ipsum eiusmod in veniam reprehenderit magna ad adipisicing",
          location: "Byrnedale, Oklahoma",
          completed: false,
          user_id: 42,
          guest_id: 44
        },
        {
          title: "adipisicing nisi esse",
          body:
            "consectetur aute veniam enim excepteur eiusmod non anim non adipisicing",
          location: "Loveland, Northern Mariana Islands",
          completed: true,
          user_id: 14,
          guest_id: 17
        },
        {
          title: "ad culpa pariatur",
          body:
            "commodo labore magna irure elit exercitation ex consequat nostrud aliquip",
          location: "Kylertown, Mississippi",
          completed: false,
          user_id: 39,
          guest_id: 29
        },
        {
          title: "tempor officia velit",
          body:
            "proident adipisicing veniam tempor aute consequat est consequat aute enim",
          location: "Tyhee, Marshall Islands",
          completed: true,
          user_id: 14,
          guest_id: 4
        }
      ]);
    });
};
