const express = require('express')
const path = require("path")
const { router } = require("./routers")
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session')
var db = require('./userdb/db')
const { logging } = require('./middleware/logging-middleware')

const app = express()
const port = 3000

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "static"))) 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(logging)

app.use(session({
  secret: "this-is-secret-key",
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(function verify(username, password, cb) {
  console.log("Start Verify")

  let foundUser = db.users.find((element) => element.username === username)

  if (foundUser === undefined){
    cb(null, false)
  }
  else {
    if (foundUser.password === password){
      cb(null, {"username": foundUser.username})
    } else {
      cb(null, false)
    }
  }
}));

passport.serializeUser((user, done)=>{
  done(null, user)
})

passport.deserializeUser((user, done)=>{
  done(null, user)
})

app.use("/", router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})