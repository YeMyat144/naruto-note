export interface Character {
    id: string
    name: string
    image: string
    description: string
    village: string
    rank: string
    status: string
    tags: string[]
    abilities: {
      name: string
      description: string
    }[]
  }
  
  export interface CharacterNote {
    id: string
    text: string
    createdAt: string
  }
  
  