require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactusRoutes = require("./Routes/contactusRoutes");
const sellRoutes = require("./Routes/sellRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use(contactusRoutes);
app.use(sellRoutes);


const PORT = 3300;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});