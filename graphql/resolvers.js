/* eslint-disable global-require, import/no-dynamic-require */

const _ = require('lodash')
const glob = require('glob')
const path = require('path')

const customTypes = require('./customTypes')

const baseResolver = {
  Query: {
    hello() { return 'hello query' }
  },
  Mutation: {
    hello() { return 'hello mutation' }
  }
}

const files = glob.sync('**/resolver.js', { cwd: __dirname })

const resolvers = files.map(file => require(path.join(__dirname, file)))

module.exports = _.merge({}, baseResolver, customTypes, ...resolvers)
