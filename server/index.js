const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'mysecreykey'

// connect to express

const app = express()
const PORT = process.env.PORT || 3000

// connect to mongodb

const connectDB = require('./db/db.js')
connectDB()

// middlewares

app.use(bodyparser.json())
app.use(cors())

// schema

const User = require('./db/userSchema.js')

// routes

app.post('/register', async (req,res) => {
    try {
        const {email,username,password} = req.body
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new User({email,username,password:hashedPassword})
        await newUser.save()
        res.status(201).json({message:"User Registered Successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"User Registeration Failed"})
    }
})

app.post('/login', async (req,res) => {
    try {
        const {username,password} = req.body
        const user = await User.findOne({username})
        if(!user){
            res.status(401).json({message:"Invalid Credentials"})
        }
        const isPassValid = await bcrypt.compare(password,user.password)
        if(!isPassValid){
            res.status(401).json({message:"Invalid Password"})
        }
        const token = jwt.sign({userId:user._id},SECRET_KEY,{expiresIn:'1hr'})
        res.status(201).json({message:"User Logged in Successfully",token})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"User Login Failed"})
    }
})

app.post('/delete', async (req,res) => {
    try {
        const {username} = req.body
        const user = await User.deleteOne({username})
        res.status(201).json({message:"Deleted"})
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
})