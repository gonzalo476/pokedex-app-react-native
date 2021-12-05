import {gql} from '@apollo/client'
export default gql`
  query allItems {
    allItems {
      id
      name
      sprite
      cost
      effect
    }
  }
`
