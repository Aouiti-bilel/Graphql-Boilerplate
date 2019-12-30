
// USER RESOLVER
export default {
    Query: {
        me: (root, args, ctx, info) => {
            return 'this must be an object contain the user'
        }
    },
    Mutation: {
        user: (root, args, ctx, info) => {
            return args
        }
    }
}