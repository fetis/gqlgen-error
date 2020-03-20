import gql from 'graphql-tag';

import { fragmentA, fragmentB } from './fragments';

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


