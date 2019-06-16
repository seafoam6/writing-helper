import db from './pgAdapter'
const { GraphQLObjectType, GraphQLID } = require("graphql");
const { TodoType, ProjectType } = require("./dataTypes");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: {
    todo: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM users WHERE id=$1`;
        const values = [args.id];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.query = RootQuery;