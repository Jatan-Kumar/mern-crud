const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModal = require("./models/Users");
const cors = require("cors")


app.use(express.json());
app.use(cors())


mongoose.connect("mongodb+srv://<USERNAME>:<PASSWORD>@cluster-ADDRESS.mongodb.net/MERNAPP");


app.get('/getUsers', (request, response) => {
    UserModal.find()
    .then(result =>  response.json(result.reverse()))
    .catch(error => response.json(error));
});

app.post("/createUser", async (req,res) => {
    const user = req.body;
    const newUser = new UserModal(user);
    await newUser.save()

    res.json(user)
});

app.listen(3001, () => {
    console.log("SERVER IS LIVE AND HAPPY!");
    
});