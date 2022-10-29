
const fb = require("firebase-admin");
// Required for side-effects
require("firebase/firestore");

let serviceAccount = process.env.GOOGLE_CREDENTIALS != null ? JSON.parse(process.env.GOOGLE_CREDENTIALS) : require('./string-haven-69370-firebase-adminsdk-jg9sk-9ecead5f49.json');

// Initialize Cloud Firestore through Firebase
fb.initializeApp({
    apiKey: "AIzaSyDUcpF7Vm90MaJifnWRta-oQHiqrlXO35I",
    authDomain: "string-haven-69370.firebaseapp.com",
    projectId: "string-haven-69370",
    credential: fb.credential.cert(serviceAccount)
  });
  
var db = fb.firestore();

var menu = [
    {
      "id": 1,
      "poster": "Denny Smith",
      "imageUrls": [
        "image1",
        "image2"
      ],
      "datePosted": "1643540971",
      "desc": "transformed in his bed into a horrible vermin. ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 2,
      "poster": "Hal Holloway",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1646299944",
      "desc": "He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 3,
      "poster": "Lenore Mitchell",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1662204699",
      "desc": "arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 4,
      "poster": "Rodolfo Ali",
      "imageUrls": [
        "image1",
        "image2"
      ],
      "datePosted": "1657691296",
      "desc": "thin compared with the size of the rest of him, waved about helplessly as he looked. ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 5,
      "poster": "Clarissa Harper",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1658048817",
      "desc": "\"What's happened to me?\" he thought. It wasn't a dream. ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 6,
      "poster": "Ken Harding",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1663052675",
      "desc": "His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 7,
      "poster": "Steve Jordan",
      "imageUrls": [
        "image1",
        "image2"
      ],
      "datePosted": "1657391862",
      "desc": "spread out on the table - Samsa was a travelling salesman - and above it there hung a ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 8,
      "poster": "Laverne Hawkins",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1646151597",
      "desc": "picture that he had recently cut out of an illustrated magazine ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 9,
      "poster": "Erik Singleton",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1644986095",
      "desc": "and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 10,
      "poster": "Becky Cantrell",
      "imageUrls": [
        "image1",
        "image2"
      ],
      "datePosted": "1659582745",
      "desc": "whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 11,
      "poster": "Megan Herring",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1661678320",
      "desc": "which made him feel quite sad. \"How about if I sleep a little bit longer and forget all ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 12,
      "poster": "Archie Bryan",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1657182671",
      "desc": "this nonsense\", he thought, but that was something he was unable ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 13,
      "poster": "Kerri Mcconnell",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1663054873",
      "desc": "to do because he was used to sleeping on his right, and in his present state couldn't get into that position. However hard he threw himself onto his right,",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 14,
      "poster": "Rufus Strong",
      "imageUrls": [
        "image1",
        "image2"
      ],
      "datePosted": "1654758846",
      "desc": "he always rolled back to where he was. He must have tried it a hundred times, ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 15,
      "poster": "Earlene Gonzalez",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1646086984",
      "desc": "shut his eyes so that he wouldn't have to look at the floundering legs, and",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 16,
      "poster": "Randolph Cameron",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1655807625",
      "desc": "only stopped when he began to feel a mild, dull pain there that he had never felt before. \"Oh, God\", he thought, \"what a strenuous career it is that I've chosen! ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 17,
      "poster": "Reed Dickson",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1657839658",
      "desc": "Travelling day in and day out. Doing business like this takes much more effort than doing your own business at home, and on top of that there's the ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 18,
      "poster": "Grant Mcmahon",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1645861650",
      "desc": "curse of travelling, worries about making train connections, bad and irregular ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 19,
      "poster": "Lucinda Gutierrez",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1659279453",
      "desc": "food, contact with different people all the time so that you can never get ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 20,
      "poster": "Homer Flynn",
      "imageUrls": [
        "image1",
        "image2"
      ],
      "datePosted": "1642000777",
      "desc": "to know anyone or become friendly with them. It can all go to Hell!\" He felt a slight itch up on his belly; pushed himself slowly up on his back ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 21,
      "poster": "Rosanne Davidson",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1649136779",
      "desc": "towards the headboard so that he could lift his head better; found where the itch was, and saw ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 22,
      "poster": "Lea Morales",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1647550538",
      "desc": "that it was covered with lots of little white spots ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 23,
      "poster": "Marcia Joseph",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1664378026",
      "desc": "which he didn't know what to make of; and when he tried to feel the place with one of his legs he drew it quickly back because as soon as he touched",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 24,
      "poster": "Antonia Douglas",
      "imageUrls": [
        "image1",
        "image2"
      ],
      "datePosted": "1641482472",
      "desc": "it he was overcome by a cold shudder. He slid back into his former position. ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 25,
      "poster": "Kristine Beltran",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1652492965",
      "desc": "\"Getting up early all the time\", he thought, \"it makes you stupid. ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 26,
      "poster": "Bridgett Strickland",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1653838062",
      "desc": "You've got to get enough sleep. Other travelling salesmen live a life of luxury. For instance, whenever I go back to the guest house during the morning",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 27,
      "poster": "Billie Austin",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1652077604",
      "desc": "to copy out the contract, these gentlemen are always still sitting ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 28,
      "poster": "Chance Wyatt",
      "imageUrls": [
        "image1",
        "image2"
      ],
      "datePosted": "1657346213",
      "desc": "there eating their breakfasts. I ought to just try that with my boss; I'd get kicked ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 29,
      "poster": "Lucius Coffey",
      "imageUrls": [
        "image1"
      ],
      "datePosted": "1652216921",
      "desc": "out on the spot. But who knows, maybe that would be the best thing for me. If I didn't have my parents to think about I'd have given in my ",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
    {
      "id": 30,
      "poster": "Luisa Browning",
      "imageUrls": [
        "image1",
        "image2"
      ],
      "datePosted": "1653694407",
      "desc": "notice a long time ago, I'd have gone up to the boss and told him just what I",
      "reactions": {
        "like": 0,
        "love": 0,
        "laugh": 0,
        "sad": 0,
        "angry": 0
      }
    },
  ];

menu.forEach(function(obj) {
    db.collection("Posts").add({
        id: obj.id,
        poster: obj.poster,
        imageUrls: obj.imageUrls,
        datePosted: obj.datePosted,
        desc: obj.desc,
        reactions: obj.reactions
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});