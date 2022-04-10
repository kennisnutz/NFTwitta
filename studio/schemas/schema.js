
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import { userSchama } from './userSchema'
import { tweetSchema } from './tweetSchema'

export default createSchema({  
  name: 'default', 
  types: schemaTypes.concat([
    userSchama, tweetSchema
  ]),
})
