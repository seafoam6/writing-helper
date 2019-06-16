const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const TodoType = new GraphQLObjectType({
    name: "Todo",
    type: "Query",
    fields: {
      description: { type: GraphQLString },
      created_on: { type: GraphQLString },
      id: { type: GraphQLString },
      active: { type: GraphQLString },
    }
  });
  
//   const ProjectType = new GraphQLObjectType({
//     name: "Project",
//     type: "Query",
//     fields: {
//       id: { type: GraphQLString },
//       creator_id: { type: GraphQLString },
//       created: { type: GraphQLString },
//       title: { type: GraphQLString },
//       description: { type: GraphQLString }
//     }
//   });
  
  exports.UserType = TodoType;
//   exports.ProjectType = ProjectType;