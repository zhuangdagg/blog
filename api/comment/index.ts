import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { graphql } from "../graphql-codegen/gql";

const list = graphql(`
    query list {
        getComment {
            name, content
        }
    }
`)

export default function setup<T = InMemoryCache>(client: ApolloClient<T>) {
    
    
    return {
        query: {
            list: () => client.query({ query: list }) 
        },
        mutate: {} 
    }
}