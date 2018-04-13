const glob = require('glob')
const fs = require('fs')
const path = require('path')

const customTypes = require('./customTypes')


// Base schema to be extended
const baseSchema = `
type Query {
  hello: String
}

type Mutation {
  hello: String
}

schema {
  query: Query
  mutation: Mutation
}
`

const scalarSchema = Object.keys(customTypes)
  .map(key => `scalar ${key}`)
  .join('\n')

const files = glob.sync('**/schema.graphql', { cwd: __dirname })

module.exports = () => [baseSchema, scalarSchema].concat(files.map(file => fs.readFileSync(path.join(__dirname, file), 'utf8')))
