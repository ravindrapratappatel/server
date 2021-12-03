const mongoose =require('mongoose');
const validator =require('validator');

const userSchema= new mongoose.Schema({
  name:{
      required: true,
      type: String,
      minlength: 5
  },
  email: {
      type: String,
      required: true,
      unique: true,
      validator(value){
          if(validator.isEmail(value)){
              throw new Error("Invalid email")
          }
      }
  },
  password: {
      type: String,
      minlength: 6,
      required: true
  },
  username: {
    type: String,
    minlength: 4,
    required: true
},
age: {
    type: String,
},
preparingfor: {
    type: String,
}
})

const User= new mongoose.model('User', userSchema);

module.exports=User;
