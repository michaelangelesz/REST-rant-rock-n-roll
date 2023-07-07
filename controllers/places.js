const router = require('express').Router()

// add routes here
router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router
