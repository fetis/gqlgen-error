import gql from 'graphql-tag';

export const simple = gql`
    {
        getAllSubTypes {
            id
        }
    }
`;
