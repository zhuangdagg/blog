/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date description */
  Date: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  _id?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  from_user_id?: Maybe<Scalars['String']['output']>;
  hateCount?: Maybe<Scalars['Int']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  likeCount?: Maybe<Scalars['Int']['output']>;
  parent_id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  remark?: Maybe<Scalars['String']['output']>;
  sub_comment_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  to_comment_id?: Maybe<Scalars['String']['output']>;
  to_user_id?: Maybe<Scalars['String']['output']>;
  topic_id?: Maybe<Scalars['String']['output']>;
  topic_type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment?: Maybe<Comment>;
};


export type MutationAddCommentArgs = {
  data?: InputMaybe<AddCommentInput>;
};

export type Query = {
  __typename?: 'Query';
  getComment?: Maybe<Array<Maybe<Comment>>>;
  getText?: Maybe<TextMsg>;
};


export type QueryGetCommentArgs = {
  parent_id?: InputMaybe<Scalars['String']['input']>;
  topic_id: Scalars['String']['input'];
};


export type QueryGetTextArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type TextMsg = {
  __typename?: 'TextMsg';
  content?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AddCommentInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  from_user_id?: InputMaybe<Scalars['String']['input']>;
  hateCount?: InputMaybe<Scalars['Int']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  parent_id?: InputMaybe<Scalars['String']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  sub_comment_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  to_comment_id?: InputMaybe<Scalars['String']['input']>;
  to_user_id?: InputMaybe<Scalars['String']['input']>;
  topic_id?: InputMaybe<Scalars['String']['input']>;
  topic_type?: InputMaybe<Scalars['String']['input']>;
};

export type ListQueryVariables = Exact<{
  topic_id: Scalars['String']['input'];
}>;


export type ListQuery = { __typename?: 'Query', getComment?: Array<{ __typename?: 'Comment', topic_id?: string | null, content?: string | null, from_user_id?: string | null, createdAt?: string | null } | null> | null };

export type AddCommentMutationVariables = Exact<{
  data?: InputMaybe<AddCommentInput>;
}>;


export type AddCommentMutation = { __typename?: 'Mutation', addComment?: { __typename?: 'Comment', content?: string | null } | null };

export type TextQueryVariables = Exact<{ [key: string]: never; }>;


export type TextQuery = { __typename?: 'Query', getText?: { __typename?: 'TextMsg', name?: string | null, content?: string | null } | null };


export const ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"list"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"topic_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"topic_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topic_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topic_id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"from_user_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<ListQuery, ListQueryVariables>;
export const AddCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"addCommentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<AddCommentMutation, AddCommentMutationVariables>;
export const TextDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<TextQuery, TextQueryVariables>;