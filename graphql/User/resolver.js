const usersJSON = [
  {
    id: 1,
    name: 'Number 1'
  },
  {
    id: 2,
    name: 'Number 2'
  },
  {
    id: 3,
    name: 'Number 3'
  }
]

module.exports = {
  Query: {
    users() {
      return usersJSON
    }
  }
}
