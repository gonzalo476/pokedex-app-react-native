export type Pokemon = {
  name: string
  height: number
  weight: number
  generation: string
  base_experience: number
  gender_rate: number
  capture_rate: number
  base_happiness: number
  base_stats: BaseStats[]
  abilities: Abilities[]
  games: Games[]
}

type BaseStats = {
  hp: number
  attack: number
  defense: number
  special_attack: number
  special_defense: number
  speed: number
}

type Games = {
  id: number
  name: string
  generation: string
}

export type Abilities = {
  name: string
  pokemon: Pokemon[]
}
