const { Router } = require("express")
const userRouter = Router()
const {registerUser, loginUser} = require("./controllers")

userRouter.post("/users/register", registerUser)
userRouter.post("/users/login", loginUser)

module.exports = userRouter