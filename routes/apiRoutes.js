const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
const productRoutes = require('./productRoutes')
const categoryRoutes = require('./categoryRoutes')
const userRoutes = require('./userRoutes')
const orderRoutes = require('./orderRoutes')

app.get("/get-token", (req, res) => {
    try {
        const accessToken = req.cookies["access_token"];
        const decoded = jwt.verify(accessToken, process.env.SECRET_KEY);
        return res.json({ token: decoded.name, isAdmin: decoded.isAdmin });
    } catch (err) {
        return res.status(401).send("Unauthorized. Invalid Token");
    }
})

app.get("/logout", (req,res) => {
    return res.clearCookie("access_token").send("acces token cleared")
})

app.use("/products", productRoutes);
app.use("/categories",categoryRoutes);
app.use('/users', userRoutes);
app.use("/orders", orderRoutes);

module.exports = app;