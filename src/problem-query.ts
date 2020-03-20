import gql from 'graphql-tag';

export const fragmentA = gql`
    fragment fragmentA on SubTypeA {
        field
    }
`;

export const fragmentB = gql`
    fragment fragmentB on SubTypeB {
        field
    }
`;

export const getAll = gql`
    query getAll {
        getAllSubTypes {
            id
            ...fragmentA
            ...fragmentB
        }
    }
    
    ${fragmentA}
    ${fragmentB}
`;


