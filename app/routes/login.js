const router = require('express').Router();
const loginController = require('../controllers/loginController');

// here we call the static method login from the loginController
router.get('/', loginController.login); 


module.exports = router;