import {gql} from '@apollo/client'
export default gql`
  query allAbilities {
    allAbilities {
      id
      name
      pokemon {
        id
        name
        base_happiness
        base_experience
        capture_rate
        gender_rate
      }
    }
  }
`
