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
};

export type Mutation = {
  __typename?: 'Mutation';
  _noop?: Maybe<Scalars['Boolean']['output']>;
};

export type Offering = {
  __typename?: 'Offering';
  id: Scalars['ID']['output'];
  status: OfferingStatus;
  title: Scalars['String']['output'];
};

export type OfferingStatus =
  | 'ACTIVE'
  | 'CLOSED'
  | 'DRAFT';

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String']['output'];
  offerings: Array<Offering>;
};


export type QueryOfferingsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};
