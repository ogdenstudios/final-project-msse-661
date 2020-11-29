export const schema = gql`
  type Scenario {
    id: Int!
    bettingInformation: String!
    communityCards: String!
    holeCards: String!
    players: Int!
    email: String!
    score: Int!
  }

  type Query {
    scenarios: [Scenario!]!
  }

  input CreateScenarioInput {
    bettingInformation: String!
    communityCards: String!
    holeCards: String!
    players: Int!
    email: String!
    score: Int!
  }

  input UpdateScenarioInput {
    bettingInformation: String
    communityCards: String
    holeCards: String
    players: Int
    email: String!
    score: Int!
  }

  type Mutation {
    createScenario(input: CreateScenarioInput!): Scenario
  }
`
