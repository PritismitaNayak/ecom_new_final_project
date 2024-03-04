const user_model=require("../model/user.model")

/**
 * create a mw will check if the request body is proper and correct
 */
const veifySignUpBody =async (req, res, next)=>{
  try{
    // check for  the name  
    if (!req.body.name){
      return res.status(400).send({
        message : "failed ! name was not provided in request body"
      })
    }

    //check for the email
    if (!req.body.email){
      return res.status(400).send({
        message : "failed ! Emailid was not provided in request body"
      })
    }
    //check for the userId
    if (!req.body.userId){
      return res.status(400).send({
        message : "failed ! UserId was not provided in request body"
      })
    }
    //check if the user with same userid id is already present
    const user =await user_model.findOne({userId : req.body.userId})
    if(user){
      return res.status(400).send({
        message : "Failed 1 user with same userId is already present"
      })
    }
    next()
  
  }catch(err){
    console.log("Error while validating the request object",err)
    res.status(500).send({
      message: "Error while validating the request body"

    })
  }
}

const veifySignInBody =async (req, res, next)=>{
if(!req.body.userId){
  return res.status(400).send({
    message : "userId is not provided"
  })
}
  if(!req.body.password){
    return res.status(400).send({
      message : "password is not provided"
    })
  }
  next()
}
module.exports ={
  veifySignUpBody : veifySignUpBody,
  veifySignInBody : veifySignInBody,
}