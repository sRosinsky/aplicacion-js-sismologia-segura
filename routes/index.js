// servidor proxy ligero
const express = require('express')
const router = express.Router()
const needle = require('needle')
const apicache = require('apicache')
const API_URL = process.env.API_URL

let cache = apicache.middleware

router.get('/', cache("3 minutes"), async (req, res) =>{
        try {
                const apiRes = await needle("get", `${API_URL}`)
                const data = apiRes.body
                res.json(data)
        } catch (error) {
                res.json(`Ocurrió un error: ${error}`)
        }
})
module.exports = router