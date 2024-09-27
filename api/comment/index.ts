import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { graphql } from "../graphql-codegen/gql";
import { AddCommentInput } from "../graphql-codegen/graphql";

const list = graphql(`
    query list($topic_id: String!) {
        getComment(topic_id: $topic_id) {
            topic_id, content
        }
    }
`)

const addCommentSchema = graphql(`
    mutation addComment($data: addCommentInput) {
        addComment(data: $data) {
            content
        }
    }
`)

export default function setup<T = InMemoryCache>(client: ApolloClient<T>) {
    
    const add = (data: AddCommentInput) => {
        console.log({data})
        return client.mutate({
            mutation: addCommentSchema,
            variables: {data},
            keepRootFields: true
            
        })
    }
    
    return {
        query: {
            list: (topic_id: string = 'course001', parent_id?: string) => client.query({ query: list, variables: { topic_id, parent_id } }) 
        },
        mutate: {
            add
        } 
    }
}