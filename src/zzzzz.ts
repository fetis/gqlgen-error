import gql from 'graphql-tag';

export const getAs = gql`
    query asf {
        getAllSubTypes {
            id
            
            ... on SubTypeA {
                field
            }
        }
    }
`;

export const getAs1 = gql`
    query aa {
        getAllSubTypes {
            id
            
            ... on SubTypeA {
                field
            }
        }
    }
`;


export const getAs2 = gql`
    query bb {
        getAllSubTypes {
            id
            
            ... on SubTypeA {
                field
            }
        }
    }
`;

export const getAs3 = gql`
    query bbc {
        getAllSubTypes {
            id
            
            ... on SubTypeA {
                field
            }
        }
    }
`;

export const getAs4 = gql`
    query bcs{
        getAllSubTypes {
            id
            
            ... on SubTypeA {
                field
            }
        }
    }
`;

export const getAs5 = gql`
    query ccc {
        getAllSubTypes {
            id
            
            ... on SubTypeA {
                field
            }
        }
    }
`;

