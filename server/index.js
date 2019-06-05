require("dotenv").config();
const express = require("express");
const session = require("express-session");
const authController = require('./authController') 

const app = express();
let { SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
)

// function checkForSession(req, res, next){
//   const { session } = req;
//   if(!session.user){
//       session.user = {username: req.body.username, cart: [], total: 0, isAdmin: false }
//       next()
//   }}

//How could I implement the above middleware function on all my endpoints without writing the function inline on all of them?

app.post('/auth/chocolate/register', authController.register)
app.post('/auth/chocolate/login', authController.login)
app.get('/auth/chocolate/user', authController.getUser)
app.post('/auth/chocolate/user', authController.logout)


app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`);
  });