const bcrypt = require(`bcryptjs`)

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          const matches = bcrypt
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        const salt = bcrypt.genSaltSync(5)
        const passHash = bcrypt.hashSync(req.body.password, salt)
        const newUser = {...req.body, password: passHash}
        console.log('Registering User')
        console.log(newUser)
        users.push(newUser)
        res.status(200).send(newUser)
    }
}