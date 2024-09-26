
import { ApolloClient, gql, InMemoryCache } from '@apollo/client/core'

export default function useFetchUtils() {

    const host = 'http://localhost:8000'

    const api = {
        test: '/api/test/123',
        trcp: '/trpc/'
    }

    for(let k of Object.keys(api)) api[k] = host + api[k];

    const test = () => {
        fetch(api.trcp, {
            method: 'GET',
            headers: new Headers({
                'Origin': '*'
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
            .catch(console.error)
    }

    return {
        test
    }
}

const apolloClient = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache(),
    headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpodWFuZyIsInB3ZCI6IjY2NiIsImlhdCI6MTcyNzM1OTIzMn0.Ql8adWrp6anRm7mvaEaqR-n_O9Z0PrTlPZiQ9li5LAk`
    }
})

export const useQuery = async () => {
    return apolloClient.query({
        query: gql`
            query UserInfo {
                userInfo {
                    name, email
                }
            }
        `
    })
}