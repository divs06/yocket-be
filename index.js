const express = require("express");
const cors = require("cors")
const app = express();

app.use(express.json())
app.use(cors())

const PORT = 3000;

const routes = require('./app/routes');
routes(app)

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})