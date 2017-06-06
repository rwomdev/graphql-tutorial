import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
type Channel {
  id: ID!                # "!" denotes a required field
  name: String
}
# This type specifies the entry points into our API
type Query {
  channels: [Channel]    # "[]" means this is a list of channels
}

# The mutation root type, used to define all mutations
type Mutation {
  addChannel(name: String!): Channel
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
