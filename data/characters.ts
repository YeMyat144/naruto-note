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
  },
  {
    id: "obito-uchiha",
    name: "Obito Uchiha",
    image: "https://cdn-images.dzcdn.net/images/cover/b0d66624e4344ffcb5f7465f9ffd3293/0x1900-000000-80-0-0.jpg",
    description:
      "Obito Uchiha was a former member of Team Minato and a key figure in the Fourth Great Ninja War. He initially sought to create a world without pain but later redeemed himself.",
    village: "Konohagakure (Former)",
    rank: "Rogue Ninja",
    status: "Deceased",
    tags: ["Uchiha Clan", "Rinnegan", "Kamui"],
    abilities: [
      {
        name: "Kamui",
        description:
          "A Mangekyō Sharingan ability that allows Obito to transport himself and others to another dimension.",
      },
      {
        name: "Wood Release",
        description:
          "A unique kekkei genkai that allows Obito to manipulate wood and plant life.",
      },
    ],
  },
  {
    id: "kurenai-yuhi",
    name: "Kurenai Yuhi",
    image: "https://www.giantbomb.com/a/uploads/scale_medium/0/5756/322063-kurenai_yuhi.jpg",
    description:
      "Kurenai Yuhi is a kunoichi of Konohagakure and a member of Team 8. She specializes in genjutsu and is known for her calm demeanor.",
    village: "Konohagakure",
    rank: "Jōnin",
    status: "Alive",
    tags: ["Genjutsu", "Team 8"],
    abilities: [
      {
        name: "Genjutsu",
        description:
          "Kurenai is highly skilled in genjutsu, capable of trapping opponents in illusions.",
      },
      {
        name: "Fire Release Techniques",
        description:
          "She can use fire-based jutsu, including the Fire Style: Phoenix Fire Jutsu.",
      },
    ],
  },
  {
    id: "ino-yamanaka",
    name: "Ino Yamanaka",
    image: "https://narutoversity.wordpress.com/wp-content/uploads/2018/03/yamanaka-ino.jpg",
    description:
      "Ino Yamanaka is a kunoichi of Konohagakure and a member of Team 10. She specializes in mind transfer techniques and is known for her strong-willed personality.",
    village: "Konohagakure",
    rank: "Jōnin",
    status: "Alive",
    tags: ["Mind Transfer", "Team 10"],
    abilities: [
      {
        name: "Mind Body Switch Technique",
        description:
          "Allows Ino to take control of an opponent's body by transferring her consciousness into theirs.",
      },
      {
        name: "Mind Reading Technique",
        description:
          "Enables Ino to read the thoughts of others, allowing her to gather information.",
      },
    ],
  },
  {
    id: "shino-aburame",
    name: "Shino Aburame",
    image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/06/Shino-Aburame.jpg",
    description:
      "Shino Aburame is a kunoichi of Konohagakure and a member of Team 8. He is known for his mastery of insects and his calm, analytical demeanor.",
    village: "Konohagakure",
    rank: "Jōnin",
    status: "Alive",
    tags: ["Insect Jutsu", "Team 8"],
    abilities: [
      {
        name: "Insect Jutsu",
        description:
          "Shino can control and communicate with insects, using them for various purposes in battle.",
      },
      {
        name: "Parasitic Insects",
        description:
          "He can use insects to drain chakra from opponents or to gather information.",
      },
    ],
  },
  {
    id: "ten-ten",
    name: "Tenten",
    image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/tenten.jpg",
    description:
      "Tenten is a kunoichi of Konohagakure and a member of Team Guy. She specializes in weaponry and is known for her vast arsenal of ninja tools.",
    village: "Konohagakure",
    rank: "Jōnin",
    status: "Alive",
    tags: ["Weapon Specialist", "Team Guy"],
    abilities: [
      {
        name: "Weapon Summoning",
        description:
          "Tenten can summon various weapons from scrolls, allowing her to adapt to different combat situations.",
      },
      {
        name: "Twin Rising Dragons",
        description:
          "A powerful technique that allows Tenten to create a barrage of weapons to overwhelm opponents.",
      },
    ],
  },
  {
    id: "kiba-inuzuka",
    name: "Kiba Inuzuka",
    image: "https://www.superherotoystore.com/cdn/shop/articles/Untitled_design_2_1600x.jpg?v=1716645329",
    description:
      "Kiba Inuzuka is a kunoichi of Konohagakure and a member of Team 8. He is known for his close bond with his dog, Akamaru, and his feral fighting style.",
    village: "Konohagakure",
    rank: "Jōnin",
    status: "Alive",
    tags: ["Inuzuka Clan", "Team 8"],
    abilities: [
      {
        name: "Beast Mimicry",
        description:
          "Kiba can enhance his physical abilities by mimicking the traits of animals, such as increased speed and strength.",
      },
      {
        name: "Fang Over Fang",
        description:
          "A powerful spinning attack where Kiba and Akamaru charge at their opponent in a whirlwind of claws and teeth.",
      },
    ],
  },
  {
    id: "asuma-sarutobi",
    name: "Asuma Sarutobi",
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/12/Asuma-Sarutobi-In-His-Last-Naruto-Shippuden-Battle.jpg",
    description:
      "Asuma Sarutobi was a jōnin of Konohagakure and the leader of Team 10. He was known for his mastery of wind-based techniques and his laid-back personality.",
    village: "Konohagakure",
    rank: "Jōnin",
    status: "Deceased",
    tags: ["Sarutobi Clan", "Team 10"],
    abilities: [
      {
        name: "Wind Release Techniques",
        description:
          "Asuma could use wind-based jutsu, including the Wind Blade technique.",
      },
      {
        name: "Trench Knives",
        description:
          "He wielded trench knives infused with chakra, allowing him to cut through opponents with ease.",
      },
    ],
  },
  {
    id: "nagato",
    name: "Nagato",
    image: "https://wallpapers.com/images/featured/nagato-xyof9cdxfuqsk918.jpgg",
    description:
      "Nagato, also known as Pain, was the leader of Akatsuki and the wielder of the Rinnegan. He sought to bring peace to the world through pain and destruction.",
    village: "Amegakure",
    rank: "Leader of Akatsuki",
    status: "Deceased",
    tags: ["Akatsuki", "Rinnegan", "Six Paths"],
    abilities: [
      {
        name: "Rinnegan",
        description:
          "A legendary dōjutsu that grants the user mastery over all forms of ninjutsu and the Six Paths Techniques.",
      },
      {
        name: "Six Paths of Pain",
        description:
          "Nagato controls six corpses remotely, each with unique abilities, acting as his proxies in battle.",
      },
      {
        name: "Chibaku Tensei",
        description:
          "Creates a massive gravitational core that attracts and traps everything around it, forming a satellite.",
      },
      {
        name: "Shinra Tensei",
        description:
          "A technique that repels everything in the vicinity with a powerful force.",
      },
    ],
  },
  {
    id: "pain",
    name: "Pain",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*omXNDFPKOGqy1Qaj.png",
    description:
      "Pain is the collective name for the Six Paths of Pain, six bodies controlled by Nagato to serve as the public leader of Akatsuki.",
    village: "Amegakure",
    rank: "Akatsuki Leader (Public)",
    status: "Deceased",
    tags: ["Akatsuki", "Six Paths", "Rinnegan"],
    abilities: [
      {
        name: "Deva Path",
        description:
          "Controls attractive and repulsive forces, allowing for techniques like Shinra Tensei and Chibaku Tensei.",
      },
      {
        name: "Asura Path",
        description:
          "Grants mechanized limbs, weaponry, and armor.",
      },
      {
        name: "Human Path",
        description:
          "Can read minds and extract souls.",
      },
      {
        name: "Animal Path",
        description:
          "Summons various powerful creatures.",
      },
      {
        name: "Preta Path",
        description:
          "Absorbs chakra-based attacks.",
      },
      {
        name: "Naraka Path",
        description:
          "Summons the King of Hell for interrogation and restoration.",
      },
    ],
  },
  {
    id: "konan",
    name: "Konan",
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/09/konan.jpg",
    description:
      "Konan was a founding member of Akatsuki and Nagato's loyal partner. She was known for her paper-based ninjutsu and calm, analytical mind.",
    village: "Amegakure",
    rank: "Akatsuki",
    status: "Deceased",
    tags: ["Akatsuki", "Paper Jutsu"],
    abilities: [
      {
        name: "Paper Jutsu",
        description:
          "Konan can transform her body into countless sheets of paper, which she manipulates for offense and defense.",
      },
      {
        name: "Paper Clone",
        description:
          "Creates clones made entirely of paper to deceive and attack enemies.",
      },
      {
        name: "Paper Ocean",
        description:
          "A massive technique where Konan creates a sea of explosive paper tags to overwhelm her opponent.",
      },
    ],
  },
  {
    id: "kisame-hoshigaki",
    name: "Kisame Hoshigaki",
    image: "https://preview.redd.it/0tlmhcrcdyx61.jpg?auto=webp&s=80599cc5cb4a7c8bf3dbcc444fd0a274ed9cf3d5",
    description:
      "Kisame Hoshigaki was a member of the Seven Ninja Swordsmen of the Mist and later joined Akatsuki. He was known as the 'Monster of the Hidden Mist' and wielded the sentient sword Samehada.",
    village: "Kirigakure",
    rank: "Missing-nin",
    status: "Deceased",
    tags: ["Akatsuki", "Seven Swordsmen", "Samehada"],
    abilities: [
      {
        name: "Samehada",
        description:
          "A sentient sword that can absorb chakra from opponents and merge with Kisame, increasing his power.",
      },
      {
        name: "Water Style: Great Shark Bullet",
        description:
          "Creates a massive shark made of water that absorbs chakra from its target.",
      },
      {
        name: "Water Prison Shark Dance Technique",
        description:
          "Transforms the battlefield into a giant dome of water, giving Kisame the advantage in aquatic combat.",
      },
    ],
  },
  {
    id: "danzo-shimura",
    name: "Danzo Shimura",
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/08/Danzo-Naruto-(1).jpg",
    description:
      "Danzo Shimura was a high-ranking Konoha elder and the leader of Root, a secretive branch of the Anbu. He sought to protect the village through any means necessary, often using ruthless tactics.",
    village: "Konohagakure",
    rank: "Elder",
    status: "Deceased",
    tags: ["Root", "Sharingan", "Wind Release"],
    abilities: [
      {
        name: "Izanagi",
        description:
          "A forbidden Uchiha technique that allows the user to alter reality for a brief period, negating fatal injuries.",
      },
      {
        name: "Wind Release: Vacuum Bullets",
        description:
          "Fires a barrage of wind bullets from the mouth, capable of piercing targets.",
      },
      {
        name: "Multiple Sharingan",
        description:
          "Danzo implanted several Sharingan into his right arm, granting him access to powerful Uchiha abilities.",
      },
    ],
  },
  {
    id: "zetsu",
    name: "Zetsu",
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/09/White-and-Black-Zetsu.jpg",
    description:
      "Zetsu is a member of Akatsuki, known for his unique plant-based abilities and dual personality. He serves as a spy and information gatherer for the organization.",
    village: "Amegakure",
    rank: "Akatsuki",
    status: "Deceased",
    tags: ["Akatsuki", "Plant Manipulation"],
    abilities: [
      {
        name: "Plant Manipulation",
        description:
          "Zetsu can manipulate plants to ensnare and attack opponents.",
      },
      {
        name: "Black Zetsu",
        description:
          "A manifestation of Kaguya Otsutsuki's will, capable of manipulating chakra and possessing knowledge of the Otsutsuki clan.",
      },
      {
        name: "White Zetsu",
        description:
          "Can create clones and gather information through plant roots.",
      },
    ],
  },
  {
    id: "hashirama-senju",
    name: "Hashirama Senju",
    image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/03/hokage_hashirama.jpg",
    description:
      "Hashirama Senju was the First Hokage of Konohagakure and co-founder of the village alongside Madara Uchiha. Renowned as the 'God of Shinobi', he possessed unparalleled Wood Release abilities and a strong sense of peace.",
    village: "Konohagakure",
    rank: "First Hokage",
    status: "Deceased",
    tags: ["Senju Clan", "Hokage", "Wood Release"],
    abilities: [
      {
      name: "Wood Release",
      description:
        "A unique kekkei genkai that allows Hashirama to create and manipulate wood for offense, defense, and healing.",
      },
      {
      name: "Sage Mode",
      description:
        "Enhances his physical and sensory abilities by drawing in natural energy.",
      },
      {
      name: "Regeneration",
      description:
        "Can heal wounds rapidly without weaving hand signs.",
      },
    ],
    },
    {
    id: "konohamaru-sarutobi",
    name: "Konohamaru Sarutobi",
    image: "https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=/naruto/import/images/boruto/248%EF%BD%9E267/257/2.jpg",
    description:
      "Konohamaru Sarutobi is a shinobi of Konohagakure's Sarutobi clan and the grandson of the Third Hokage. He idolizes Naruto and aspires to become Hokage himself.",
    village: "Konohagakure",
    rank: "Jōnin",
    status: "Alive",
    tags: ["Sarutobi Clan", "Team 7 (Leader)", "Rasengan"],
    abilities: [
      {
      name: "Rasengan",
      description:
        "A spinning sphere of chakra learned from Naruto, used for powerful close-range attacks.",
      },
      {
      name: "Shadow Clone Jutsu",
      description:
        "Creates copies of himself to aid in combat and strategy.",
      },
      {
      name: "Fire Release Techniques",
      description:
        "Can use fire-based jutsu, such as Fire Style: Ash Pile Burning.",
      },
    ],
    },
    {
    id: "minato-namikaze",
    name: "Minato Namikaze",
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/the-fourth-hokage-minato-namikaze-naruto.jpg?q=70&fit=contain&w=1200&h=628&dpr=1",
    description:
      "Minato Namikaze, known as the 'Yellow Flash', was the Fourth Hokage of Konohagakure and Naruto's father. He was famed for his speed and mastery of space-time ninjutsu.",
    village: "Konohagakure",
    rank: "Fourth Hokage",
    status: "Deceased",
    tags: ["Hokage", "Flying Thunder God", "Rasengan"],
    abilities: [
      {
      name: "Flying Thunder God Technique",
      description:
        "A space-time ninjutsu that allows Minato to instantly teleport to marked locations.",
      },
      {
      name: "Rasengan",
      description:
        "A powerful spinning sphere of chakra invented by Minato.",
      },
      {
      name: "Sealing Jutsu",
      description:
        "Expert in various sealing techniques, including the Reaper Death Seal.",
      },
    ],
  },
  {
    id: "kaguya-otsutsuki",
    name: "Kaguya Otsutsuki",
    image: "https://m.media-amazon.com/images/M/MV5BOWUwOGUxN2YtMDBiMS00Yjc2LWIxMTktZDY4OGUxOWQ5ZjBlXkEyXkFqcGc@._V1_.jpg",
    description:
      "Kaguya Otsutsuki is the progenitor of chakra on Earth and the first wielder of the Rinne Sharingan. She sought to consume all chakra and was the main antagonist of the Fourth Great Ninja War.",
    village: "Unknown",
    rank: "Goddess",
    status: "Deceased",
    tags: ["Otsutsuki Clan", "Rinne Sharingan"],
    abilities: [
      {
        name: "Rinne Sharingan",
        description:
          "A powerful dōjutsu that grants Kaguya control over space-time and the ability to cast Infinite Tsukuyomi.",
      },
      {
        name: "Dimensional Travel",
        description:
          "Can create and travel between dimensions, manipulating reality itself.",
      },
      {
        name: "Chakra Absorption",
        description:
          "Can absorb chakra from others, rendering them powerless.",
      },
    ],
  },
  {
    id: "kankuro",
    name: "Kankuro",
    image: "https://image.idntimes.com/post/20200531/kankuro-shippuden-0058cba5f7118f692aa0b25bfdc174c5.jpg",
    description:
      "Kankuro is a shinobi of Sunagakure and the brother of Gaara and Temari. He is known for his mastery of puppet-based ninjutsu and serves as a trusted advisor and commander in his village.",
    village: "Sunagakure",
    rank: "Jōnin",
    status: "Alive",
    tags: ["Puppet Master", "Sand Siblings"],
    abilities: [
      {
        name: "Puppet Master Jutsu",
        description:
          "Controls puppets in battle using chakra threads, allowing for versatile offense and defense.",
      },
      {
        name: "Black Ant",
        description:
          "A puppet used to trap and immobilize opponents, often in combination with other puppets.",
      },
      {
        name: "Salamander",
        description:
          "A defensive puppet capable of shielding Kankuro and his allies from attacks.",
      },
    ],
  },
  {
    id: "yamato",
    name: "Yamato",
    image: "https://imgix.ranker.com/user_node_img/50120/1002391690/original/1002391690-photo-u1",
    description:
      "Yamato is a member of Konohagakure's ANBU and was temporarily the leader of Team 7. He possesses the rare Wood Release kekkei genkai, inherited from experiments with Hashirama's cells.",
    village: "Konohagakure",
    rank: "ANBU",
    status: "Alive",
    tags: ["Wood Release", "ANBU", "Team 7 (Leader)"],
    abilities: [
      {
        name: "Wood Release",
        description:
          "Combines earth and water chakra to create and manipulate wood for offense, defense, and restraining tailed beasts.",
      },
      {
        name: "Mokuton: Wood Clone",
        description:
          "Creates clones made of wood that can be used for deception and support.",
      },
      {
        name: "Suppress Tailed Beast Chakra",
        description:
          "Can suppress and control the chakra of tailed beasts using Wood Release.",
      },
    ],
  },
  {
    id: "temari",
    name: "Temari",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxKQyJMmYOK6AWiUI7TZfcroJ7Smfi7gehOg&s",
    description:
      "Temari is a skilled kunoichi of Sunagakure and the elder sister of Gaara and Kankuro. She is known for her mastery of wind-based jutsu and her strategic mind.",
    village: "Sunagakure",
    rank: "Jōnin",
    status: "Alive",
    tags: ["Wind Release", "Sand Siblings"],
    abilities: [
      {
        name: "Wind Release: Great Sickle Weasel Technique",
        description:
          "Creates powerful gusts of wind with her giant fan, capable of slicing through obstacles and enemies.",
      },
      {
        name: "Summoning: Kamatari",
        description:
          "Summons a weasel wielding a scythe to aid in battle, enhancing her wind techniques.",
      },
      {
        name: "Wind Scythe Jutsu",
        description:
          "Generates sharp, cutting winds to attack multiple targets at once.",
      },
    ],
  },
  {
    id: "mei-terumi",
    name: "Mei Terumi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRKq0UwOTy1X-X114ahPG5vrzwFs-AeRJWSXchkOHXTe_MKuae06_vN3LRfMfb9vWwv0&usqp=CAU",
    description:
      "Mei Terumi is the Fifth Mizukage of Kirigakure, known for her mastery of Lava and Boil Release. She is a strong and charismatic leader who ended the Bloody Mist era.",
    village: "Kirigakure",
    rank: "Fifth Mizukage",
    status: "Alive",
    tags: ["Mizukage", "Lava Release", "Boil Release"],
    abilities: [
      {
        name: "Lava Release: Melting Apparition Technique",
        description:
          "Combines earth and fire chakra to create corrosive lava that can melt through almost anything.",
      },
      {
        name: "Boil Release: Skilled Mist Technique",
        description:
          "Emits a corrosive mist that can melt targets, with Mei able to control its pH.",
      },
    ],
  },
  {
    id: "a-fourth-raikage",
    name: "A",
    image: "https://dailyanimeart.files.wordpress.com/2012/11/the-raikage.jpg",
    description:
      "A is the Fourth Raikage of Kumogakure, renowned for his immense speed and strength. He is the older brother of Killer Bee and a decisive, powerful leader.",
    village: "Kumogakure",
    rank: "Fourth Raikage",
    status: "Alive",
    tags: ["Raikage", "Lightning Release", "Super Strength"],
    abilities: [
      {
        name: "Lightning Release Chakra Mode",
        description:
          "Cloaks his body in lightning chakra, greatly increasing his speed, reflexes, and durability.",
      },
      {
        name: "Lariat",
        description:
          "A devastating close-range clothesline attack, often used in combination with Killer Bee.",
      },
    ],
  },
  {
    id: "onoki",
    name: "Ōnoki",
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/Onoki-Getting-Ready-To-Use-Particle-Style-Agaisnt-Lord-Mu-e1614704575890.jpg",
    description:
      "Ōnoki was the Third Tsuchikage of Iwagakure, famed for his mastery of Particle Style and his stubborn, pragmatic leadership.",
    village: "Iwagakure",
    rank: "Third Tsuchikage",
    status: "Deceased",
    tags: ["Tsuchikage", "Particle Style", "Earth Release"],
    abilities: [
      {
        name: "Particle Style: Atomic Dismantling Jutsu",
        description:
          "A kekkei tōta technique that disintegrates targets at a molecular level.",
      },
      {
        name: "Lightweight Boulder Jutsu",
        description:
          "Manipulates the weight of objects or people, allowing flight or increased mobility.",
      },
    ],
  },
  {
    id: "tobirama-senju",
    name: "Tobirama Senju",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzwtZ8DEEEesXZCgH-K0WRCD8Hh9jBg9jvhQ&s",
    description:
      "Tobirama Senju was the Second Hokage of Konohagakure and the younger brother of Hashirama Senju. He was a master of Water Release techniques and the creator of many powerful jutsu, including the Shadow Clone Jutsu and Edo Tensei.",
    village: "Konohagakure",
    rank: "Second Hokage",
    status: "Deceased",
    tags: ["Senju Clan", "Hokage", "Water Release"],
    abilities: [
      {
        name: "Water Release: Water Dragon Bullet Technique",
        description:
          "Creates a massive dragon-shaped projectile made of water to attack opponents.",
      },
      {
        name: "Flying Thunder God Technique",
        description:
          "A space-time ninjutsu that allows instant teleportation to marked locations.",
      },
      {
        name: "Edo Tensei",
        description:
          "A forbidden technique that resurrects the dead to serve the user.",
      },
      {
        name: "Shadow Clone Jutsu",
        description:
          "Creates physical copies of the user that can act independently.",
      },
    ],
  },
  {
    id: "sasori",
    name: "Sasori",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XA-C721ITzPsm9cQeBxyjM_R3brnOG7afA&s",
    description:
      "Sasori, also known as Sasori of the Red Sand, was a prodigy of Sunagakure and a member of Akatsuki. He was a master puppeteer who turned his own body into a puppet, granting him near-immortality and deadly versatility in battle.",
    village: "Sunagakure (Former)",
    rank: "Missing-nin",
    status: "Deceased",
    tags: ["Akatsuki", "Puppet Master", "Red Sand"],
    abilities: [
      {
        name: "Puppet Master Jutsu",
        description:
          "Controls multiple puppets simultaneously using chakra threads, allowing for complex and deadly attacks."
      },
      {
        name: "Human Puppets",
        description:
          "Transforms humans into puppets, preserving their abilities and chakra for his own use."
      },
      {
        name: "Hiruko",
        description:
          "A puppet armor Sasori uses for defense and surprise attacks, concealing his true form."
      },
      {
        name: "Third Kazekage Puppet",
        description:
          "A puppet made from the body of the Third Kazekage, capable of using Iron Sand techniques."
      }
    ]
  },
  {
    id: "hidan",
    name: "Hidan",
    image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/Raf0fb01ced66d371af7d06a231f1c50b.jpg",
    description:
      "Hidan is a member of Akatsuki known for his immortality and religious fanaticism. He performs gruesome rituals for his cult, Jashin, and is infamous for his inability to die.",
    village: "Yugakure (Former)",
    rank: "Missing-nin",
    status: "Immortal",
    tags: ["Akatsuki", "Immortality", "Jashinist"],
    abilities: [
      {
        name: "Immortality",
        description: "Cannot die from physical injuries, allowing him to survive fatal wounds."
      },
      {
        name: "Curse Ritual",
        description: "Performs a ritual that links his body to his victim, causing any damage he inflicts on himself to also affect the target."
      },
      {
        name: "Scythe Mastery",
        description: "Wields a large triple-bladed scythe with deadly skill."
      }
    ]
  },
  {
    id: "kakuzu",
    name: "Kakuzu",
    image: "https://preview.redd.it/2am3phu1dkx61.jpg?auto=webp&s=cef8de8bea8fe3925c849a5406bbb0ef4073ac15",
    description:
      "Kakuzu is a member of Akatsuki known for his greed and ability to manipulate threads within his body. He can use multiple elemental jutsu and has several hearts, making him extremely difficult to kill.",
    village: "Takigakure (Former)",
    rank: "Missing-nin",
    status: "Deceased",
    tags: ["Akatsuki", "Earth Grudge Fear", "Multiple Hearts"],
    abilities: [
      {
        name: "Earth Grudge Fear",
        description: "Uses black threads to sew his body and steal hearts from others, granting him multiple lives."
      },
      {
        name: "Elemental Jutsu",
        description: "Can use Fire, Wind, Lightning, Earth, and Water Release techniques by utilizing the hearts he has stolen."
      },
      {
        name: "Body Reconstruction",
        description: "Can reattach severed limbs and heal injuries using his threads."
      }
    ]
  },
  {
    id: "hagoromo-otsutsuki",
    name: "Hagoromo Otsutsuki",
    image: "https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=/naruto/jp/news/2024/02/15/vb2Hz8P9gFmQi5zG/2_%E3%83%8F%E3%82%B4%E3%83%AD%E3%83%A2_%E3%82%A2%E3%83%8B%E3%83%A1%E5%A0%B4%E9%9D%A2%E5%86%99%E7%9C%9F.jpg",
    description:
      "Hagoromo Otsutsuki, known as the Sage of Six Paths, is the legendary founder of ninjutsu and the ancestor of shinobi. He is the son of Kaguya Otsutsuki and the first wielder of chakra, revered as a god-like figure in the ninja world.",
    village: "None",
    rank: "Sage of Six Paths",
    status: "Deceased",
    tags: ["Otsutsuki Clan", "Six Paths", "Rinnegan"],
    abilities: [
      {
        name: "Rinnegan",
        description:
          "The most powerful dōjutsu, granting mastery over all chakra natures and the Six Paths Techniques."
      },
      {
        name: "Creation of All Things",
        description:
          "A technique that allows Hagoromo to create matter and life from nothing using Yin–Yang Release."
      },
      {
        name: "Truth-Seeking Balls",
        description:
          "Orbs of chakra that nullify ninjutsu and can be shaped into various forms for offense and defense."
      }
    ]
  },
  {
    id: "yagura-karatachi",
    name: "Yagura Karatachi",
    image: "https://dailyanimeart.com/wp-content/uploads/2015/09/yagura.jpg",
    description:
      "Yagura Karatachi was the Fourth Mizukage of Kirigakure and the jinchūriki of the Three-Tails, Isobu. He was manipulated by Obito Uchiha and ruled during the Bloody Mist era.",
    village: "Kirigakure",
    rank: "Fourth Mizukage",
    status: "Deceased",
    tags: ["Mizukage", "Jinchūriki", "Three-Tails"],
    abilities: [
      {
        name: "Three-Tails Transformation",
        description:
          "Can transform into Isobu, gaining immense strength, durability, and access to Tailed Beast techniques."
      },
      {
        name: "Water Release Techniques",
        description:
          "Expert in water-based jutsu, including Water Mirror Technique and Water Release: Coral Palm."
      }
    ]
  },
  {
    id: "utakata",
    name: "Utakata",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhl91-WBVsMejraNNU_0lyBAUsPJKwLBCpp7iy0kDNXd4ouq6A7p2QF7g0yczscgZfcAg&usqp=CAU",
    description:
      "Utakata was a missing-nin from Kirigakure and the jinchūriki of the Six-Tails, Saiken. He was known for his calm demeanor and his use of bubble-based ninjutsu.",
    village: "Kirigakure",
    rank: "Missing-nin",
    status: "Deceased",
    tags: ["Jinchūriki", "Six-Tails", "Bubble Ninjutsu"],
    abilities: [
      {
        name: "Bubble Ninjutsu",
        description:
          "Creates bubbles for offense, defense, and trapping enemies, often infused with corrosive substances."
      },
      {
        name: "Six-Tails Transformation",
        description:
          "Can transform into Saiken, gaining access to corrosive and acidic attacks."
      }
    ]
  },
  {
    id: "rin-nohara",
    name: "Rin Nohara",
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/03/2-Rin-Nohara-smiling.jpg",
    description:
      "Rin Nohara was a medical-nin of Konohagakure and a member of Team Minato. She was kind-hearted and deeply cared for her teammates, especially Kakashi and Obito.",
    village: "Konohagakure",
    rank: "Chūnin",
    status: "Deceased",
    tags: ["Team Minato", "Medical-nin"],
    abilities: [
      {
        name: "Medical Ninjutsu",
        description:
          "Skilled in healing techniques, able to treat wounds and injuries on the battlefield."
      },
      {
        name: "Three-Tails Jinchūriki (Temporary)",
        description:
          "Was forcibly made the jinchūriki of the Three-Tails, Isobu, as part of a plot by Kirigakure."
      }
    ]
  },
  {
    id: "teuchi-ichiraku",
    name: "Teuchi",
    image: "https://i.namu.wiki/i/XK8I8N4ErrOFoPr_yrb-OGJDwvO2fn_DXWZtCwwbIpWtZrYV7ukcsAAH4Rndp2lydhpMcwZwRL_ad0wnvzS1OA.webp",
    description:
      "Teuchi is the owner and chef of Ichiraku Ramen in Konohagakure. Known for his warm personality and delicious ramen, he is a beloved figure among villagers, especially Naruto Uzumaki.",
    village: "Konohagakure",
    rank: "Civilian",
    status: "Alive",
    tags: ["Ichiraku Ramen", "Chef"],
    abilities: [
      {
        name: "Ramen Mastery",
        description: "Creates delicious ramen dishes that can lift anyone's spirits."
      },
      {
        name: "Unwavering Support",
        description: "Always provides encouragement and a warm meal to those in need."
      }
    ]
  },
  {
    id: "ayame",
    name: "Ayame",
    image: "https://i.namu.wiki/i/mqZM5XsvdZGEPRo7RE1KBJmXPjiOG9Smy-pi14l_NhkKEdH4oT0ffbukqbPZdIoMgBX152Z_vlE9xa_GpTIpiQ.webp",
    description:
      "Ayame is Teuchi's daughter and a waitress at Ichiraku Ramen in Konohagakure. She is cheerful, hardworking, and supports her father's business, often serving ramen to Naruto and his friends.",
    village: "Konohagakure",
    rank: "Civilian",
    status: "Alive",
    tags: ["Ichiraku Ramen", "Waitress"],
    abilities: [
      {
        name: "Ramen Service",
        description: "Efficiently serves ramen to customers with a friendly attitude."
      },
      {
        name: "Customer Care",
        description: "Ensures every customer feels welcome and satisfied at Ichiraku Ramen."
      }
    ]
  },
  {
    id: "kushina-uzumaki",
    name: "Kushina Uzumaki",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIXeN0QIl2Frqo3d9XBNEQSwcVMyeiF6HDg&s",
    description:
      "Kushina Uzumaki was a kunoichi of Uzushiogakure and later Konohagakure. She was the second jinchūriki of the Nine-Tails and the mother of Naruto Uzumaki. Known for her strong will, fiery personality, and unique chakra, Kushina played a key role in protecting the village.",
    village: "Konohagakure",
    rank: "Chūnin",
    status: "Deceased",
    tags: ["Uzumaki Clan", "Jinchūriki", "Nine-Tails", "Mother"],
    abilities: [
      {
        name: "Adamantine Sealing Chains",
        description:
          "Creates powerful chakra chains capable of restraining tailed beasts and enemies."
      },
      {
        name: "Chakra Transfer",
        description:
          "Can transfer her chakra to others for protection or support."
      },
      {
        name: "Sealing Jutsu",
        description:
          "Expert in various sealing techniques, including those used to contain the Nine-Tails."
      }
    ]
  },
  {
    id: "kabuto-yakushi",
    name: "Kabuto Yakushi",
    image: "data:image/jpeg;base64,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",
    description:
      "Kabuto Yakushi is a former medical-nin of Konohagakure who became a key antagonist after aligning with Orochimaru. He is a master of medical ninjutsu, espionage, and later gains Sage Mode.",
    village: "Konohagakure (Former)",
    rank: "Rogue Ninja",
    status: "Alive",
    tags: ["Medical-nin", "Orochimaru", "Sage Mode"],
    abilities: [
      {
        name: "Medical Ninjutsu",
        description: "Expert in healing techniques and surgical procedures."
      },
      {
        name: "Edo Tensei",
        description: "Improved the forbidden technique to summon and control the dead."
      },
      {
        name: "Sage Mode",
        description: "Gains enhanced abilities by drawing in natural energy."
      }
    ]
  },
  {
    id: "iruka-umino",
    name: "Iruka Umino",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrEGmmUMssfvn6hLF0LSutDk-9K-XPMSs3fw&s",
    description:
      "Iruka Umino is a chunin of Konohagakure and an instructor at the Ninja Academy. He is known for his kindness and for being a mentor to Naruto Uzumaki.",
    village: "Konohagakure",
    rank: "Chūnin",
    status: "Alive",
    tags: ["Academy Instructor", "Mentor"],
    abilities: [
      {
        name: "Barrier Ninjutsu",
        description: "Can create barriers for protection and containment."
      },
      {
        name: "Teaching",
        description: "Skilled at nurturing and instructing young ninja."
      }
    ]
  },
  {
    id: "shizune",
    name: "Shizune",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGOKPCZLh--AjGy_24qq7b14Bz3Ro1V86BQ&s",
    description:
      "Shizune is a talented medical-nin and the loyal assistant to Tsunade. She is known for her organizational skills and expertise in poison techniques.",
    village: "Konohagakure",
    rank: "Jōnin",
    status: "Alive",
    tags: ["Medical-nin", "Tsunade", "Poison"],
    abilities: [
      {
        name: "Medical Ninjutsu",
        description: "Heals injuries and treats poisons with advanced techniques."
      },
      {
        name: "Poison Mist",
        description: "Releases a poisonous mist to incapacitate enemies."
      }
    ]
  },
  {
    id: "karin",
    name: "Karin",
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/11/Naruto-Karin-Focusing.jpg",
    description:
      "Karin is a kunoichi from the Uzumaki Clan and a former subordinate of Orochimaru. She is a sensory-type ninja with powerful healing abilities.",
    village: "Kusagakure (Former)",
    rank: "Chūnin",
    status: "Alive",
    tags: ["Uzumaki Clan", "Sensory", "Healing"],
    abilities: [
      {
        name: "Chakra Sensing",
        description: "Can detect and track chakra signatures over long distances."
      },
      {
        name: "Healing Bite",
        description: "Heals others by allowing them to bite her and consume her chakra."
      }
    ]
  },
  {
    id: "sai",
    name: "Sai",
    image: "https://preview.redd.it/whats-your-favorite-sai-moment-v0-7oegu79dl33e1.jpeg?auto=webp&s=2b1f712bf03e5abea01d81f8dfde9b379dbe496b",
    description:
      "Sai is a member of Team 7 and a former Root ANBU. He specializes in ink-based techniques and is skilled in espionage and assassination.",
    village: "Konohagakure",
    rank: "Jōnin",
    status: "Alive",
    tags: ["Root", "Ink Jutsu", "Team 7"],
    abilities: [
      {
        name: "Super Beast Imitating Drawing",
        description: "Animates ink drawings to create creatures for offense and reconnaissance."
      },
      {
        name: "ANBU Training",
        description: "Expert in stealth, infiltration, and assassination."
      }
    ]
  },
  {
    id: "anko-mitarashi",
    name: "Anko Mitarashi",
    image: "https://staticg.sportskeeda.com/editor/2024/08/b658a-17227715643547-1920.jpg",
    description:
      "Anko Mitarashi is a tokubetsu jōnin of Konohagakure and a former student of Orochimaru. She is known for her energetic personality and expertise in snake-related jutsu.",
    village: "Konohagakure",
    rank: "Tokubetsu Jōnin",
    status: "Alive",
    tags: ["Snake Jutsu", "Orochimaru", "Exam Proctor"],
    abilities: [
      {
        name: "Twin Snakes Mutual Death",
        description: "A forbidden technique that binds both the user and the target, resulting in mutual destruction."
      },
      {
        name: "Hidden Shadow Snake Hands",
        description: "Summons snakes from her sleeves to attack or restrain opponents."
      }
    ]
  },
  {
    id: "jugo",
    name: "Jūgo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQvSwrylp5S4DED7rIRS2-JwQYAwp3ZEo4Q&s",
    description:
      "Jūgo is a shinobi with a unique kekkei genkai that allows him to absorb natural energy and transform his body. He is a member of Taka and is known for his unpredictable rage and gentle nature.",
    village: "Unknown",
    rank: "Missing-nin",
    status: "Alive",
    tags: ["Taka", "Curse Mark", "Transformation"],
    abilities: [
      {
        name: "Sage Transformation",
        description: "Can absorb natural energy to transform his body, gaining immense strength and regenerative abilities."
      },
      {
        name: "Animal Communication",
        description: "Can communicate with and understand animals, especially birds."
      }
    ]
  },
  {
    id: "suigetsu-hozuki",
    name: "Suigetsu Hozuki",
    image: "https://images4.fanpop.com/image/photos/17700000/Suigetsu-Hozuki-suigetsu-hozuki-17728000-1280-720.jpg",
    description:
      "Suigetsu Hozuki is a shinobi from Kirigakure and a member of Taka. He possesses the Hydrification Technique, allowing him to turn his body into liquid, and aspires to collect all the swords of the Seven Ninja Swordsmen.",
    village: "Kirigakure",
    rank: "Missing-nin",
    status: "Alive",
    tags: ["Taka", "Hydrification", "Swordsman"],
    abilities: [
      {
        name: "Hydrification Technique",
        description: "Can liquefy his body to avoid attacks, escape restraints, or squeeze through tight spaces."
      },
      {
        name: "Superhuman Strength",
        description: "Displays great physical strength, especially when wielding large swords."
      }
    ]
  },
];


