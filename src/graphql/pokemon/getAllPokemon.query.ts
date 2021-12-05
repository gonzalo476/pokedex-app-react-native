import {gql} from '@apollo/client'

export default gql`
  query allPokemon($limit: Int!) {
    allPokemon(limit: $limit) {
      id
      name
      base_experience
      gender_rate
      capture_rate
      base_happiness
      sprites {
        front_shiny
      }
    }
  }
`
