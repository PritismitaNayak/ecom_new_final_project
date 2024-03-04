const authController=require("../controller/auth.controller")
const authMW = require("../middlewares/auth.mid")

module.exports = (app)=>{
  app.post("/ecomm/api/v1/auth/signup",[authMW.veifySignUpBody] ,authController.signup)


  /**
 * route for
 * POST 0.0.0.0:8080/ecomm/api/v1/auth/signin
 */
app.post("/ecomm/api/v1/auth/signin",[authMW.veifySignInBody],authController.signin)

}

