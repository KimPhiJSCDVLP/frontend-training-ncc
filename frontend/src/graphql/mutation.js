import { gql } from '@apollo/client';
const DELETE_CATE = gql`
    mutation DeleteCate($id: ID!){
        DeleteCate(id: $id){
            name
        }
    }
`
const ADD_CATE = gql`
    mutation CreateCate($name: String, $image: String, $des: String){
        CreateCate(input: {
            name: $name,
            image: $image,
            des: $des,
        }){
            id
            name
        }
    }`
const UPDATE_CATE = gql`
    mutation UpdateCate($id: ID!, $name: String, $image: String, $des: String){
        UpdateCate(id: $id, input: {
            name: $name,
            image: $image,
            des: $des,
        }){
            id
            name
            image
            des
        }
    }
`
//PRODUCTS
const ADD_PRODUCT = gql`
    mutation createCategory(
        $name: String,
        $des: String,
        $image: String, 
        $price: Int, 
        $quantity: Int, 
        $catId: String
    ){
        createProduct(input: {name: $name, des: $des, image: $image, quantity: $quantity, price: $price, catId: $catId}){
            id
            name
            category {
            name
            }
        }
    }
`
const DELETE_PRODUCT = gql`
    mutation deleteProduct($id: ID!){
        deleteProduct(id: $id){
            name
        }
    }
`
const UPDATE_PRODUCT = gql`
    mutation updateProduct(
        $id: ID!, 
        $name: String,
        $des: String,
        $image: String, 
        $price: Int, 
        $quantity: Int, 
        $catId: String){
            updateProduct(id: $id, input: {
                name: $name, 
                des: $des, 
                image: $image, 
                quantity: $quantity, 
                price: $price, 
                catId: $catId
            }){
                id
                name
                image
                des
            }
    }
`
export {
     DELETE_CATE ,
     ADD_CATE ,
     UPDATE_CATE,
     ADD_PRODUCT ,
     DELETE_PRODUCT,
     UPDATE_PRODUCT
}