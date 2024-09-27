import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { graphql } from './graphql-codegen/gql'

import commentSetup from './comment'


const apolloClient = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache(),
    headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpodWFuZyIsInB3ZCI6IjY2NiIsImlhdCI6MTcyNzM1OTIzMn0.Ql8adWrp6anRm7mvaEaqR-n_O9Z0PrTlPZiQ9li5LAk`
    }
})

export const useGraphQL = () => {
    
    const getTest = () => {
        return apolloClient.query({
            query: graphql(/* GraphQL */`
                query Text {
                    getText {
                        name, content
                    }
                }
            `)
        })
    }

    return {
        getTest,
        comment: commentSetup(apolloClient)
    }
}