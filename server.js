
const express=require("express")
const mongoose=require("mongoose")
const app=express()
const server_config=require("./config/server.config")
const db_config=require("./config/db.config")
const user_model=require("./model/user.model")
const bcryptjs=require("bcryptjs")

app.use(express.json())

mongoose.connect(db_config.DB_URL)
const db=mongoose.connection
db.on("error",()=>
{console.log("Error while connecting the database")
})
db.once("open", ()=>{
  console.log("connected to database")
  init()
})

async function init(){

  try{
    let user=await user_model.findOne({userId:"admin"})
    if(user){
      console.log("Admin already present")
      return
    }

  }catch(err){console.log("erroe while reading the data")}




  try{
    user=await user_model.create({
      name:"Pritismita Nayak",
      userId:"admin",
      email:"nayakapritismita2019@gmail.com",
      userType:"ADMIN",
      password:bcryptjs.hashSync("welcomepriti", 8)
    })
    console.log("Admin is created", user)
  }
  catch(err){
    console.log("Error while creating admin", err)
  }
}

require("./route/auth.route")(app)

app.listen(server_config.PORT, ()=>{
  console.log("Server is connected at port number: ", server_config.PORT)
})


