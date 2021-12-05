import {Pokemon, Abilities, Items} from './types'

export interface iNavigation {
  name: string
  data: any
}

export interface iScreen {
  componentId: string
}

export interface iPokemon extends Pokemon {
  id?: number
}

export interface iAbilities extends Abilities {
  id?: number
}

export interface iItems extends Items {
  id?: number
}
