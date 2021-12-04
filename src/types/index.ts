import {Pokemon} from './types'

export interface iNavigation {
  name: string
}

export interface iScreen {
  componentId: string
}

export interface iPokemon extends Pokemon {
  id?: string
}
