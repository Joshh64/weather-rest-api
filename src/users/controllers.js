const User = require("./model")

async function registerUser(req, res) {
    try {
        await User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.username
        })
        res.status(201).send({
            message: "Account successfully created"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: error.message
        })
    }
}

async function loginUser(req, res) {
    try {
  
      const user = await User.findOne({ 
        username: req.body.username, 
        password: req.body.password
    });
  
      if (!user) {
        return res.status(404).send({ message: "User or password incorrect" });
      }
  
      res.status(200).send({ message: "Login successful" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: error.message });
    }
  }

module.exports = {
    registerUser,
    loginUser
}