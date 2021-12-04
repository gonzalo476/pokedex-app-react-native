import {gql} from '@apollo/client'

export default gql`
  query allPokemon {
    allPokemon {
      id
      name
      base_experience
      gender_rate
      capture_rate
      base_happiness
    }
  }
`
