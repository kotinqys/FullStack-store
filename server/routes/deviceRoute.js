const Router = require('express')
const deviceController = require('../controllers/deviceController')

const router = new Router()

router.post('/device',deviceController.create)
router.get('/device',deviceController.getAll)
router.get('/device/:id',deviceController.getOne)
router.delete('/device/:id',deviceController.delete)

module.exports = router