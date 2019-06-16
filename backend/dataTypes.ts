var { buildSchema } = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,

  type
} = require('graphql/type');
export {}

const TodoType = new GraphQLObjectType({
  name: "Todo",
  type: "Query",
  fields: {
    id: { type: GraphQLInt },
    description: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    active: { type: GraphQLBoolean },

  }
});


  module.exports = {TodoType}