require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');

const usersRoutes = require('./routes/users');

const middlewareLogRequest = require('./middleware/logs')

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users', usersRoutes);

app.post("/", (req, res) => {
    res.send("hello post method");
})

app.listen(PORT, () => {
    console.log(`Sever berhasil di running di port ${PORT}`);
});