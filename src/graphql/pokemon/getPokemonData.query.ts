import {gql} from '@apollo/client'

export default gql`
  query pokemon($id: string!) {
    pokemon(id: $id) {
      id
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
