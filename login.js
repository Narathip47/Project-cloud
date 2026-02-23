const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('.'))

app.post('/checkLoginAdminData', (req, res) => {
    const { adminEmail, adminPassword } = req.body

    if(adminEmail === "admin@gmail.com" && adminPassword === "1234"){
        res.json({
            checkAdmin: true,
            page: "/AdminSystem.html"
        })
    }else{
        res.json({
            checkAdmin: false,
            title: "Login failed",
            text: "Email or password incorrect",
            icon: "error"
        })
    }
})

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
})