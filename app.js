const express = require("express");
const bodyParser = require("body-parser");
require("./db/connection");

const User = require("./models/user");
const app = express();
app.use(express.json);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
 res.send("hello");
})
app.post("/newuser", (req, res) => {
  const {name, email, password, username, age, preparingfor}= req.body;
  const newUser = new User({
    name: name,
    email: email,
    password: password,
    username: username,
    age: age,
    preparingfor: preparingfor
  });
  newUser
    .save()
    .then(() => {
      res.send("saved")
      console.log("saved");
    })
    .catch((e) => {
      res.send(e);
      console.log(e);
    });
});

app.get('/user', (req, res)=>{
    
    User.find().then((result)=>{
        res.send(result);
    }).catch(()=>{
        console.log("error");
    })
})

app.listen( process.env.PORT || 3000, () => {
  console.log("Server Started");
});
