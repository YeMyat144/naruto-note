import type { Character } from "@/types"

export const characters: Character[] = [
  {
    id: "naruto-uzumaki",
    name: "Naruto Uzumaki",
    image: "https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=640",
    description:
      "Naruto Uzumaki is the main protagonist of the Naruto series. He was a genin from Konohagakure and a member of Team 7. He was born as the son of the Fourth Hokage, Minato Namikaze, and Kushina Uzumaki, Naruto became the jinchūriki of the Nine-Tailed Demon Fox on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team 7, Naruto worked hard to gain the village's acknowledgement while chasing his dream to become Hokage.",
    village: "Konohagakure",
    rank: "Hokage",
    status: "Alive",
    tags: ["Jinchūriki", "Team 7", "Hokage", "Sage"],
    abilities: [
      {
        name: "Rasengan",
        description:
          "A powerful A-rank technique created by the Fourth Hokage, which creates a spiraling sphere of chakra in the user's palm.",
      },
      {
        name: "Shadow Clone Jutsu",
        description:
          "Creates copies of the user that can think and act independently, and can transfer their experiences back to the user when dispelled.",
      },
      {
        name: "Sage Mode",
        description:
          "A heightened state that allows the user to tap into the natural energy around them, enhancing their techniques and physical abilities.",
      },
      {
        name: "Nine-Tails Chakra Mode",
        description:
          "Allows Naruto to access the Nine-Tails' chakra, greatly enhancing his abilities and giving him a chakra cloak.",
      },
    ],
  },
  {
    id: "sasuke-uchiha",
    name: "Sasuke Uchiha",
    image: "https://criticalhits.com.br/wp-content/uploads/2020/08/SasukeUchiha.jpg",
    description:
      "Sasuke Uchiha is one of the last surviving members of Konohagakure's Uchiha clan. After his older brother, Itachi, slaughtered their clan, Sasuke made it his mission in life to avenge them by killing Itachi. He was assigned to Team 7 upon becoming a ninja and, through competition with his rival and best friend, Naruto Uzumaki, Sasuke started developing his skills.",
    village: "Konohagakure",
    rank: "Shadow Hokage",
    status: "Alive",
    tags: ["Uchiha Clan", "Team 7", "Rinnegan", "Sharingan"],
    abilities: [
      {
        name: "Chidori",
        description:
          "An A-rank lightning release technique that channels a large amount of lightning chakra to the user's hand.",
      },
      {
        name: "Sharingan",
        description:
          "The dōjutsu kekkei genkai of the Uchiha clan that appears in some of its members. It grants the user various visual abilities.",
      },
      {
        name: "Amaterasu",
        description:
          "A Mangekyō Sharingan ability that creates black flames at the focal point of the user's vision, which cannot be extinguished with water.",
      },
      {
        name: "Susanoo",
        description:
          "A gigantic, humanoid avatar made of the user's chakra which surrounds them and fights on their behalf.",
      },
    ],
  },
  {
    id: "sakura-haruno",
    name: "Sakura Haruno",
    image: "https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=/naruto/import/images/naruto02/401%EF%BD%9E500/491/C083.jpg",
    description:
      "Sakura Haruno is a kunoichi of Konohagakure. She began her career with Team 7, consisting of herself, Naruto Uzumaki, Sasuke Uchiha, and their sensei Kakashi Hatake. Sakura initially had an infatuation for Sasuke, but her feelings developed into a genuine affection as the series progressed. Under the guidance of Tsunade, she became a strong kunoichi and an excellent medical-nin.",
    village: "Konohagakure",
    rank: "Jōnin",
    status: "Alive",
    tags: ["Team 7", "Medical-nin", "Strength of a Hundred Seal"],
    abilities: [
      {
        name: "Chakra Enhanced Strength",
        description:
          "By storing chakra and releasing it with precise timing, Sakura can demolish objects with a single strike.",
      },
      {
        name: "Medical Ninjutsu",
        description:
          "Sakura can heal injuries and perform surgeries with her chakra, and is considered one of the greatest medical-nin in the world.",
      },
      {
        name: "Strength of a Hundred Seal",
        description:
          "A seal that stores vast amounts of chakra on the user's forehead, which can be released to heal wounds or enhance techniques.",
      },
      {
        name: "Summoning Technique: Katsuyu",
        description:
          "Sakura can summon Katsuyu, a giant slug that can divide itself into smaller slugs and heal multiple people simultaneously.",
      },
    ],
  },
  {
    id: "kakashi-hatake",
    name: "Kakashi Hatake",
    image: "https://i.redd.it/44fx3l1u34xa1.jpg",
    description:
      "Kakashi Hatake is a shinobi of Konohagakure's Hatake clan. Famed as Kakashi of the Sharingan, he is one of Konoha's most talented ninja, regularly looked to for advice and leadership despite his personal dislike of responsibility. To his students on Team 7, Kakashi emphasizes the importance of teamwork; he himself received this lesson, along with the Sharingan, from his childhood friend, Obito Uchiha.",
    village: "Konohagakure",
    rank: "Sixth Hokage (Former)",
    status: "Alive",
    tags: ["Team 7", "ANBU", "Hokage", "Copy Ninja"],
    abilities: [
      {
        name: "Chidori",
        description:
          "An A-rank lightning release technique that channels a large amount of lightning chakra to the user's hand.",
      },
      {
        name: "Sharingan (Former)",
        description:
          "Kakashi received a Sharingan from his dying teammate Obito Uchiha, which he used to copy over a thousand jutsu.",
      },
      {
        name: "Raikiri",
        description:
          "An enhanced version of the Chidori with greater piercing power, named after Kakashi's feat of cutting a bolt of lightning with it.",
      },
      {
        name: "Kamui (Former)",
        description: "A Mangekyō Sharingan ability that allowed Kakashi to transfer targets to another dimension.",
      },
    ],
  },
  {
    id: "itachi-uchiha",
    name: "Itachi Uchiha",
    image: "https://albumizr.com/ia/ca19e790d11b362540a6711734a7088d.jpg",
    description:
      "Itachi Uchiha was a prodigy of Konohagakure's Uchiha clan and a member of the village's Anbu. He later became an international criminal after murdering his entire clan, sparing only his younger brother, Sasuke. He afterwards joined the international criminal organization known as Akatsuki, whose activity brought him into frequent conflict with Konoha and its ninja — including Sasuke — who sought to avenge their clan.",
    village: "Konohagakure (Former)",
    rank: "ANBU Captain (Former)",
    status: "Deceased",
    tags: ["Uchiha Clan", "Akatsuki", "ANBU", "Mangekyō Sharingan"],
    abilities: [
      {
        name: "Tsukuyomi",
        description:
          "A powerful genjutsu that traps the target in an illusory world where Itachi can control space and time.",
      },
      {
        name: "Amaterasu",
        description:
          "Creates black flames at the focal point of the user's vision, which cannot be extinguished with water.",
      },
      {
        name: "Susanoo",
        description:
          "A gigantic, humanoid avatar made of the user's chakra which surrounds them and fights on their behalf.",
      },
      {
        name: "Izanami",
        description:
          "A genjutsu that traps the target in a loop of events, which can only be escaped by accepting one's true self.",
      },
    ],
  },
  {
    id: "hinata-hyuga",
    name: "Hinata Hyuga",
    image: "https://deltiasgaming.com/wp-content/uploads/2024/12/1.webp",
    description:
      "Hinata Hyuga is a kunoichi of Konohagakure and the former heiress of the Hyuga clan. Because of her meek disposition, her father doubted that she was suited for the responsibilities of leading the clan, much less life as a ninja, leading him to disinherit her. Nonetheless, Hinata persevered and from observation of Naruto Uzumaki especially, Hinata found an example to follow. Through her membership with Team 8, she sought to become strong enough to change herself, if even a little at a time.",
    village: "Konohagakure",
    rank: "Chūnin",
    status: "Alive",
    tags: ["Hyuga Clan", "Team 8", "Byakugan"],
    abilities: [
      {
        name: "Byakugan",
        description:
          "A dōjutsu kekkei genkai that gives the user a near 360° field of vision and the ability to see chakra pathways.",
      },
      {
        name: "Gentle Fist",
        description:
          "The Hyuga clan's signature fighting style, which uses chakra to target and damage an opponent's chakra pathway system.",
      },
      {
        name: "Twin Lion Fists",
        description:
          "A technique that shapes chakra around the user's hands into the shape of lions, enhancing the strength of their strikes.",
      },
      {
        name: "Protective Eight Trigrams Sixty-Four Palms",
        description:
          "A defensive technique where Hinata emits a constant stream of chakra from her palms, creating sharp blades that can cut through nearly anything that approaches.",
      },
    ],
  },
  {
    id: "shikamaru-nara",
    name: "Shikamaru Nara",
    image: "https://staticg.sportskeeda.com/editor/2024/03/7e948-17101327186362-1920.jpg?w=640",
    description:
      "A tactical genius from the Nara Clan, Shikamaru is known for his high intelligence and mastery of Shadow Jutsu.",
    village: "Konohagakure",
    rank: "Jōnin",
    status: "Alive",
    tags: ["Nara Clan", "Team 10", "Shadow Jutsu"],
    abilities: [
      {
        name: "Shadow Imitation Jutsu",
        description: "Manipulates his shadow to control an opponent's movements.",
      },
      {
        name: "Shadow Strangle Jutsu",
        description: "Extends his shadow to choke and immobilize enemies.",
      },
    ],
  },
  {
    id: "rock-lee",
    name: "Rock Lee",
    image: "https://i.pinimg.com/736x/7b/04/60/7b0460a161042e07598f5dabd8d0638a.jpg",
    description:
      "A taijutsu specialist who trained under Might Guy. Though unable to use ninjutsu, his dedication to training makes him an exceptional fighter.",
    village: "Konohagakure",
    rank: "Jōnin",
    status: "Alive",
    tags: ["Taijutsu", "Eight Gates", "Team Guy"],
    abilities: [
      {
        name: "Drunken Fist",
        description: "A highly unpredictable fighting style Lee uses when intoxicated.",
      },
      {
        name: "Eight Inner Gates",
        description: "Unlocks his body's hidden potential, vastly increasing speed and strength.",
      },
    ],
  },
  {
    id: "neji-hyuga",
    name: "Neji Hyuga",
    image: "https://preview.redd.it/its-time-for-neji-hyuga-how-would-you-rate-his-character-i-v0-hdwbyzx6nvda1.jpg?width=640&crop=smart&auto=webp&s=fbfc31ab711b9b592df511d71094daa20f22f983",
    description:
      "A prodigy of the Hyuga Clan, Neji was a member of Team Guy and excelled in the Gentle Fist technique.",
    village: "Konohagakure",
    rank: "Jōnin",
    status: "Deceased",
    tags: ["Hyuga Clan", "Byakugan", "Team Guy"],
    abilities: [
      {
        name: "Byakugan",
        description: "Gives near 360-degree vision and the ability to see chakra points.",
      },
      {
        name: "Eight Trigrams Sixty-Four Palms",
        description: "A rapid series of strikes that seals an opponent’s chakra points.",
      },
    ],
  },
  {
    id: "gaara",
    name: "Gaara",
    image: "https://criticalhits.com.br/wp-content/uploads/2020/08/naruto-shippuden-gaara-quiz.jpg",
    description:
      "The Fifth Kazekage of Sunagakure, Gaara was once a feared jinchūriki but later became a beloved leader.",
    village: "Sunagakure",
    rank: "Kazekage",
    status: "Alive",
    tags: ["Jinchūriki", "Sand Manipulation", "Kage"],
    abilities: [
      {
        name: "Sand Manipulation",
        description: "Controls sand with chakra to create powerful defenses and attacks.",
      },
      {
        name: "Sand Coffin",
        description: "Encases opponents in sand before crushing them.",
      },
    ],
  },
  {
    id: "orochimaru",
    name: "Orochimaru",
    image: "https://qph.cf2.quoracdn.net/main-qimg-d4c2e9b9b35a62094cc2c0ebb8d33588-lq",
    description:
      "A former member of the Legendary Sannin, Orochimaru is a rogue ninja obsessed with immortality and forbidden jutsu.",
    village: "Konohagakure (Former)",
    rank: "Rogue Ninja",
    status: "Alive",
    tags: ["Sannin", "Snake Jutsu", "Immortality"],
    abilities: [
      {
        name: "Edo Tensei",
        description: "Summons the dead to fight for him using forbidden jutsu.",
      },
      {
        name: "Body Modification",
        description: "Can regenerate, stretch, and reshape his body at will.",
      },
    ],
  },
  {
    id: "jiraiya",
    name: "Jiraiya",
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2018/10/Naruto-Jiraiya.jpg",
    description:
      "One of the Legendary Sannin and Naruto’s mentor, Jiraiya was a master of toad-based jutsu and espionage.",
    village: "Konohagakure",
    rank: "Sannin",
    status: "Deceased",
    tags: ["Sannin", "Toad Sage", "Spy"],
    abilities: [
      {
        name: "Sage Mode",
        description: "Increases physical abilities by harnessing natural energy.",
      },
      {
        name: "Summoning Jutsu: Toads",
        description: "Can summon giant toads to fight alongside him.",
      },
    ],
  },
  {
    id: "tsunade",
    name: "Tsunade",
    image: "https://staticg.sportskeeda.com/editor/2023/02/3186d-16761303006130-1920.jpg",
    description:
      "Tsunade is one of the Legendary Sannin and the Fifth Hokage of Konohagakure. She is renowned for her incredible strength and medical ninjutsu expertise.",
    village: "Konohagakure",
    rank: "Fifth Hokage",
    status: "Alive",
    tags: ["Sannin", "Medical-nin", "Hokage"],
    abilities: [
      {
        name: "Strength of a Hundred Seal",
        description:
          "A seal that stores large amounts of chakra, granting Tsunade immense regenerative abilities.",
      },
      {
        name: "Chakra Enhanced Strength",
        description:
          "Tsunade channels chakra into her strikes, allowing her to shatter objects and enemies with a single blow.",
      },
    ],
  },
  {
    id: "might-guy",
    name: "Might Guy",
    image: "https://criticalhits.com.br/wp-content/uploads/2023/12/might-guy.jpg",
    description:
      "Might Guy is a jonin of Konohagakure and a master of taijutsu. He is the leader of Team Guy and is famous for his usage of the Eight Gates technique.",
    village: "Konohagakure",
    rank: "Jonin",
    status: "Alive",
    tags: ["Taijutsu Master", "Eight Gates"],
    abilities: [
      {
        name: "Eight Gates",
        description:
          "A technique that unlocks the body's inner gates, granting immense power at the cost of extreme physical strain.",
      },
    ],
  },
  {
    id: "killer-bee",
    name: "Killer Bee",
    image: "https://areajugones.sport.es/wp-content/uploads/2021/11/naruto-shippuden.jpg",
    description:
      "Killer Bee is a shinobi from Kumogakure and the jinchūriki of the Eight-Tails. He is known for his rapping and powerful swordsmanship.",
    village: "Kumogakure",
    rank: "Elite Shinobi",
    status: "Alive",
    tags: ["Jinchūriki", "Swordsman", "Rapper"],
    abilities: [
      {
        name: "Lariat",
        description:
          "A powerful close-range attack where Bee charges at his opponent with a strong clothesline strike.",
      },
      {
        name: "Tailed Beast Bomb",
        description:
          "A devastating sphere of chakra fired by jinchūriki in their tailed beast forms.",
      },
    ],
  },
  {
    id: "hiruzen-sarutobi",
    name: "Hiruzen Sarutobi",
    image: "https://preview.redd.it/is-hiruzen-sarutobi-overhated-underhated-or-appropriately-v0-db7tmph9gefd1.jpeg?width=1080&crop=smart&auto=webp&s=baec074f999d4abaa374ef3de88d12875b98c0e6",
    description:
      "Hiruzen Sarutobi was the Third Hokage of Konohagakure, known as the 'Professor' due to his mastery of numerous jutsu.",
    village: "Konohagakure",
    rank: "Third Hokage",
    status: "Deceased",
    tags: ["Hokage", "Professor"],
    abilities: [
      {
        name: "Shuriken Shadow Clone Jutsu",
        description:
          "A technique that creates multiple shadow clones of thrown shuriken.",
      },
    ],
  },
  {
    id: "choji-akimichi",
    name: "Choji Akimichi",
    image: "https://preview.redd.it/who-else-feels-choji-is-underrated-v0-yry7jqi1cwna1.jpg?auto=webp&s=f5361e796bc53d848e6af97427316f5021942630",
    description:
      "Choji Akimichi is a member of Team Asuma and a shinobi of the Akimichi Clan, known for his ability to increase his body size and strength.",
    village: "Konohagakure",
    rank: "Jonin",
    status: "Alive",
    tags: ["Akimichi Clan", "Team 10"],
    abilities: [
      {
        name: "Expansion Jutsu",
        description:
          "Allows Choji to enlarge his body parts or his entire body for increased power.",
      },
    ],
  },
  {
    id: "madara-uchiha",
    name: "Madara Uchiha",
    image: "https://www.fayerwayer.com/resizer/v2/DOEWEMUBTJCR7DLS5FCZEZEDSY.jpg?auth=30d5f966729f9dcfa3adeb0ce045e381063625f8368131257076aedefdcc311d&width=1200&height=675&smart=true",
    description:
      "Madara Uchiha was a legendary leader of the Uchiha Clan, known for his incredible prowess in battle and his role in founding Konohagakure.",
    village: "Konohagakure (Former)",
    rank: "Leader of Uchiha Clan",
    status: "Deceased",
    tags: ["Uchiha Clan", "Mangekyo Sharingan"],
    abilities: [
      {
        name: "Perfect Susanoo",
        description:
          "An enormous chakra construct that grants unparalleled offensive and defensive capabilities.",
      },
    ],
  }
];


