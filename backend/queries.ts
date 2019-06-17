const { db } = require("./pgAdaptor");
const { GraphQLObjectType, GraphQLID, GraphQLList } = require("graphql");
const { UserType, TodoType } = require("./dataTypes");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: () => ({
    allTodos: {
      type:  new GraphQLList(TodoType),

      resolve(parentValue, args) {
        const query = "SELECT * FROM todos ORDER BY id ASC";

        return db
          .many(query)
          .then(data => data)
          .catch(err => err);
      }
    },
    todo: {
        type:  TodoType,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, args) {
            const query = `SELECT * FROM todos WHERE id=$1`;
            const values = [args.id];
    
            return db
              .one(query, values)
              .then(res => res)
              .catch(err => err);
          }
      },

  })
});

exports.query = RootQuery;