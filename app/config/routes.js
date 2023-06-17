const express = require('express');
const router = express.Router();
const homeCltr = require('../controllers/homeCltr');
const loginCltr = require('../controllers/loginCltr');
const accountCltr = require('../controllers/accountCltr')
const { verifyToken } = require('../middlewares/auth');



// const usersCltr = require('../controllers/usersCltr');
// const personCltr = require('../controllers/personCltr');


router.get('/', homeCltr.welcome)
router.post('/login', loginCltr.login)
router.post('/dashboard', verifyToken, accountCltr.dashboard)

// router.post('/users/register', usersCltr.register);
// router.post('/users/login', usersCltr.login);
// router.post('/persons/create', personCltr.create);
// router.post('/persons/delete', personCltr.delete);
// router.get('/persons/show', personCltr.show);

module.exports = router;






