const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser");
const apiRoutes = require('./routes/apiRoutes')
const connectDB = require('./config/db')
const fileUplaod = require("express-fileupload")
const cookieParser = require("cookie-parser")
const PORT = 5000;

connectDB()

app.use(express.json())
app.use(fileUplaod())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  }))
app.use(cookieParser())
app.use('/api', apiRoutes)
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", (req, res) => {
    console.log("synchronous code")
    throw new Error("some error accured")
    res.json({message: "api running"})
})

app.get('/a', (req,res,next) => {
    setTimeout(() => {
        try {
            aconsole.log("asynchronouse code");
        } catch (er) {
            next(er);
        }
    },1000)
    // next(new Error("some error occured"));
})

app.use((error, req, res, next) => {
    if(process.env.NODE_ENV === "development"){
        console.error(error)
    }
    next(error)
})
app.use((error, req, res, next) => {
   if(process.env.NODE_ENV === "developement") {
    res.status(500).json({
        message: error.message,
        stack: error.stack
    })
   } else {
    res.status(500).json({
        message: error.message,
        
    })
   }
})

app.listen(PORT, () => {
    console.log(`server sur http://localhost:${PORT}`)})