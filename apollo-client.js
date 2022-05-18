import { ApolloClient, InMemoryCache } from "@apollo/client";
import { split, HttpLink } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
    uri: 'https://api.soundtrackyourbrand.com/v2',
    headers: {
        authorization: `Basic ${process.env.NEXT_PUBLIC_SOUNDTRACK_API_TOKEN}`
    }
});

const wsLink = typeof window !== 'undefined' ? new GraphQLWsLink(createClient({
    url: 'wss://api.soundtrackyourbrand.com/v2/graphql-transport-ws',
    shouldRetry: () => true
})) : null;

const splitLink = typeof window !== 'undefined' ? split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
) : httpLink;

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
    name: 'soundtrack_api-example_app'
});

export default client;