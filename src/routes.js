// IMPORT ROUTER.
const router = require('express').Router()
const Solution = require('./solution')

router.route('/transfer/users').get(Solution.tranferUsers)

module.exports = router
