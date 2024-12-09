const { Router } = require("express")
const {indexController, forecastController, ejsController, weatherDataController, animalController, exponentController} = require("../controllers")
const {getProductsController, createProductController, getProductController, updateProductController, deleteProductController} = require("../controllers/productController")
const {loginController} = require("../controllers/authController.js")
const {checkAuthenticated, checkLoggedIn} = require("../middleware/auth-middleware.js")
var passport = require('passport');
const router = Router()

router.route('/').get(checkAuthenticated, indexController)
router.route('/forecast').get(checkAuthenticated, forecastController)
router.route('/test-ejs').get(ejsController)
router.route('/weather').get(checkAuthenticated, weatherDataController)
router.route('/api/:animal/').get(animalController)
router.route('/api/exponent/:n/:m').get(exponentController)

// Product Routes
router.route('/products').get(getProductsController)
router.route('/products').post(createProductController)
router.route('/product/:id').get(getProductController)
router.route('/product/:id').patch(updateProductController)
router.route('/product/:id').delete(deleteProductController)

// Auth Routes
router.route('/login').get(checkLoggedIn, loginController)
router.route('/login/password').post(passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  }))

module.exports = { router }