import gql from 'graphql-tag';

export const getBs = gql`
    {
        getAllSubTypes {
            id
            
            ... on SubTypeB {
                field
            }
        }
    }
`;
