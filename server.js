const express = require("express")
const app = express()
const Cors = require("cors")
const mongoose = require("mongoose")

const loginSignup = require("./routes/login-signup")
const employee = require("./routes/employee")

const PORT = process.env.PORT || 1312
const connection_url = 'mongodb+srv://kanha:OBHNBeAPQpvj1eg9@cluster0.d3mjt.mongodb.net/employeeManager?retryWrites=true&w=majority'

//db config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}, () => { console.log("Connected to DB...") })

//middlewares
app.use(express.json());
app.use(Cors());

//api endpoints
app.use(loginSignup)
app.use(employee)

//listner
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})