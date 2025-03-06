export const rankingData = {
    // Character power tiers from strongest to weakest
    tiers: [
      {
        name: "God Tier",
        description: "Transcendent power levels",
        color: "#FF0000", // Red
        characters: ["naruto-uzumaki", "sasuke-uchiha"],
      },
      {
        name: "Legendary Tier",
        description: "Extraordinary power and skill",
        color: "#FF8000", // Orange
        characters: ["itachi-uchiha", "kakashi-hatake"],
      },
      {
        name: "Elite Jonin Tier",
        description: "Exceptional combat abilities",
        color: "#FFBF00", // Amber
        characters: ["sakura-haruno"],
      },
      {
        name: "Skilled Tier",
        description: "Above average abilities",
        color: "#00BFFF", // Deep Sky Blue
        characters: ["hinata-hyuga"],
      },
    ],
  
    // Battle matchups with winners and reasoning
    matchups: [
      {
        fighter1: "Naruto Uzumaki",
        fighter2: "Sasuke Uchiha",
        winner: "Draw",
        difficulty: "Extreme",
        reasoning:
          "Their final battle ended in a draw, with both exhausting their chakra completely. Their powers perfectly counter each other.",
      },
      {
        fighter1: "Itachi Uchiha",
        fighter2: "Kakashi Hatake",
        winner: "Itachi Uchiha",
        difficulty: "Hard",
        reasoning:
          "Itachi's Mangekyo Sharingan abilities, particularly Tsukuyomi and Amaterasu, give him the edge over Kakashi despite Kakashi's tactical brilliance.",
      },
      {
        fighter1: "Sakura Haruno",
        fighter2: "Hinata Hyuga",
        winner: "Sakura Haruno",
        difficulty: "Medium",
        reasoning:
          "Sakura's immense strength and medical ninjutsu training under Tsunade gives her superior combat capabilities, though Hinata's Gentle Fist could pose a threat.",
      },
      {
        fighter1: "Naruto Uzumaki",
        fighter2: "Itachi Uchiha",
        winner: "Naruto Uzumaki",
        difficulty: "Hard",
        reasoning:
          "While Itachi is incredibly powerful, Naruto's Six Paths Sage Mode and vast chakra reserves would eventually overcome Itachi's limited stamina and eye techniques.",
      },
      {
        fighter1: "Sasuke Uchiha",
        fighter2: "Kakashi Hatake",
        winner: "Sasuke Uchiha",
        difficulty: "Medium",
        reasoning:
          "Sasuke's Rinnegan abilities and perfect Susanoo far outclass Kakashi's capabilities, even with Kakashi's strategic mind.",
      },
    ],
  
    // Most powerful abilities in the series
    abilities: [
      {
        name: "Six Paths Sage Mode",
        user: "Naruto Uzumaki",
        description:
          "The pinnacle of Naruto's power, combining Sage Mode with the chakra of all nine tailed beasts and Six Paths chakra from Hagoromo. Grants truth-seeking orbs, flight, enhanced sensory abilities, and immense power.",
        type: "Transformation / Sage Jutsu",
        weaknesses: "Requires significant chakra control and can be time-limited in extreme battles",
        powerRating: 5,
      },
      {
        name: "Rinnegan",
        user: "Sasuke Uchiha",
        description:
          "Sasuke's left eye evolved into a Rinnegan with six tomoe, granting him access to all Six Paths techniques plus his unique ability to instantly swap places with any object or person within his visual range.",
        type: "Dōjutsu / Kekkei Genkai",
        weaknesses: "Consumes significant chakra, especially for space-time techniques",
        powerRating: 5,
      },
      {
        name: "Tsukuyomi",
        user: "Itachi Uchiha",
        description:
          "The ultimate genjutsu that traps the victim in an illusory world where Itachi controls space and time. What seems like days of torture actually occurs in mere seconds in the real world.",
        type: "Genjutsu / Mangekyo Sharingan",
        weaknesses: "Requires eye contact, can be resisted by other Uchiha or perfect jinchūriki",
        powerRating: 4.5,
      },
      {
        name: "Kamui",
        user: "Kakashi Hatake (formerly)",
        description:
          "Allows the user to transfer targets to and from another dimension. Kakashi's version could target from a distance, while Obito's could make himself intangible.",
        type: "Space-Time Ninjutsu / Mangekyo Sharingan",
        weaknesses: "High chakra consumption, requires precise aim",
        powerRating: 4,
      },
      {
        name: "Strength of a Hundred Seal",
        user: "Sakura Haruno",
        description:
          "Stores vast amounts of chakra in a seal on the forehead, which when released grants the user tremendously enhanced strength and regenerative abilities, allowing them to heal from most injuries instantly.",
        type: "Medical Ninjutsu / Fuinjutsu",
        weaknesses: "Requires years of chakra storage to prepare",
        powerRating: 3.5,
      },
      {
        name: "Twin Lion Fists",
        user: "Hinata Hyuga",
        description:
          "A high-level Gentle Fist technique that shapes chakra around the user's hands into lion-shaped shrouds, enhancing the strength of their strikes and allowing them to absorb the opponent's chakra on contact.",
        type: "Taijutsu / Gentle Fist",
        weaknesses: "Limited range, requires close combat",
        powerRating: 3,
      },
    ],
  
    // Character stats across different categories
    stats: [
      {
        characterId: "naruto-uzumaki",
        ninjutsu: 9,
        taijutsu: 8,
        genjutsu: 3,
        intelligence: 7,
        strength: 8,
        speed: 9,
        specialAbilities: ["Sage Mode", "Tailed Beast Mode", "Rasengan Variants", "Shadow Clones", "Six Paths Power"],
      },
      {
        characterId: "sasuke-uchiha",
        ninjutsu: 9,
        taijutsu: 8,
        genjutsu: 8,
        intelligence: 9,
        strength: 7,
        speed: 9,
        specialAbilities: ["Sharingan", "Rinnegan", "Amaterasu", "Susanoo", "Chidori Variants"],
      },
      {
        characterId: "itachi-uchiha",
        ninjutsu: 8,
        taijutsu: 7.5,
        genjutsu: 10,
        intelligence: 10,
        strength: 5.5,
        speed: 8,
        specialAbilities: ["Mangekyo Sharingan", "Tsukuyomi", "Amaterasu", "Susanoo", "Izanami"],
      },
      {
        characterId: "kakashi-hatake",
        ninjutsu: 9,
        taijutsu: 8,
        genjutsu: 7,
        intelligence: 10,
        strength: 7,
        speed: 8,
        specialAbilities: ["Copy Ninja", "Chidori", "Tactical Genius", "Lightning Blade", "Former Sharingan"],
      },
      {
        characterId: "sakura-haruno",
        ninjutsu: 7,
        taijutsu: 8,
        genjutsu: 6,
        intelligence: 9,
        strength: 10,
        speed: 6,
        specialAbilities: ["Medical Ninjutsu", "Strength of a Hundred Seal", "Enhanced Strength", "Healing"],
      },
      {
        characterId: "hinata-hyuga",
        ninjutsu: 6,
        taijutsu: 8,
        genjutsu: 3,
        intelligence: 7,
        strength: 5,
        speed: 7,
        specialAbilities: ["Byakugan", "Gentle Fist", "Twin Lion Fists", "Protective Eight Trigrams"],
      },
    ],
  }
  
  