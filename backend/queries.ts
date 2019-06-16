const { db } = require("./pgAdaptor");
const { GraphQLObjectType, GraphQLID, GraphQLList } = require("graphql");
const { UserType, TodoType } = require("./dataTypes");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: () => ({
    todo: {
      type:  new GraphQLList(TodoType),

      resolve(parentValue, args) {
        const query = "SELECT * FROM todos ORDER BY id ASC";

        return db
          .many(query)
          .then(data => data)
          .catch(err => err);
      }
    },

  })
});

exports.query = RootQuery;