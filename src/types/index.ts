import {Pokemon, Abilities} from './types'

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
