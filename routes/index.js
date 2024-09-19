const express = require("express")
const router = express.Router()
const gameRouter=require("./game")

router.use("/game",gameRouter)

module.exports = router