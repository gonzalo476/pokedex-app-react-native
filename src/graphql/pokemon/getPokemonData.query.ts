import {gql} from '@apollo/client'

export default gql`
  query Pokemon($pokemonId: Int!) {
    pokemon(id: $pokemonId) {
      name
      height
      weight
      base_experience
      gender_rate
      capture_rate
      base_happiness
      base_stats {
        hp
        attack
        defense
        special_attack
        special_defense
        speed
      }
      abilities {
        id
        name
        is_hidden
        effect
        description
      }
      games {
        id
        name
        generation
      }
      types {
        id
        name
      }
      generation
      sprites {
        front_shiny
      }
    }
  }
`
