import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import Joi from 'joi'
import User from "../models/User"
// USER RESOLVER
export default {
    Query: {
        me: (root, args, { req }, info) => {
           
            return User.findById(req.user.id)
            },
        user: (root, args, ctx, info) => {
             return  User.find({})
            }
    },
    Mutation: {
        signUp: async (root, args, ctx, info) => {
            await Joi.validate(args, signup, { abortEarly: false })
             const user = await User.create(args)
             const payload = {
                user: {
                    id: user.id,
                }
             }
            const token = jwt.sign(payload, 'mustbesecret')
             
             return { user, token }
        },
        signIn: async (root, { email, password }, ctx, info) => {
            let user = await  User.findOne({ email });
            if(!user){
                return('Invalid Email')
            }
            const isMatch = bcrypt.compare(password, user.password)
            if(!isMatch){
                return 'Invalid Passsord'
            }
            const payload = {
                user: {
                    id: user.id
                }
            }
           const token= jwt.sign(payload, 'mustbesecret')
           return  { user, token }

        }
    }
}