import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";


// ! NO Subscription needed

const httpLink = createHttpLink({
    uri: "http://localhost:3007/graphql",
    credentials: "include",
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export default client;