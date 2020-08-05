import gql from 'graphql-tag';


export const LOGIN_USER =gql`
 mustation login($email: String!, $password: String!) {
     login(email: $email, password: $password) {
         token
         user{
             _id
             username
         }
     }
 }

`;
export const ADD_USER = gql`
mustation addUser($username: String!, $email: String!.$password: String!){
 addUser(username: $username, email: $email, password: $password) {
     token
     user {
         _id
         username
     }
   }
}
`;