import {gql} from '@apollo/client'

const getCategories = gql`
    query Categories {
        categories {
        id
        name
        image
        des
        }
    }
`

const getAllProducts = gql`
    query Products {
        products {
        id
        name
        image
        des
        quantity
        price
        }
    }
`
export { 
    getCategories,
    getAllProducts
}
