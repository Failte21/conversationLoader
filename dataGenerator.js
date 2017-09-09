const config = require('./config')
const request = require('request')
const fs = require("fs")
let id = 0

const createConveration = (a, b) => {
    return [a, b]
}

const logins = ["Louis", "Jean", "Pierre", "Henry", "Laure", "Jeanne", "Mary", "Léa"]

console.log(logins.reduce((a, b) => createConveration(a, b)))

// fs.writeFile("conversations.json", "hello")


