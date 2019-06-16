const graphql = require("graphql");
const db = require("./pgAdaptor").db;
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } = graphql;
const { TodoType } = require("./dataTypes");


const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  type: "Mutation",
  fields:{
    addTodo: {
      type: TodoType,
      args: {
        description: { type: GraphQLString },
      },
      resolve(parentValue, args) {
     //   const query = `INSERT INTO todos(creator_id, created, title, description) VALUES ($1, $2, $3, $4) RETURNING title`;
        const query = `INSERT INTO todos (description, created_on) VALUES ($1, $2) RETURNING description, created_on, id, active`
        const values = [
          args.description,
          new Date(),
        ];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.mutation = RootMutation;