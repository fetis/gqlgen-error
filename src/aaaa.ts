import gql from 'graphql-tag';

export const getAs = gql`
    {
        getAllSubTypes {
            id
            
            ... on SubTypeA {
                field
            }
        }
    }
`;
