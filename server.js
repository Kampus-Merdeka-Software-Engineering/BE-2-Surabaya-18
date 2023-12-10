require('dotenv').config();
const express = require('express');
const router = express.Router();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

const contactusRoutes = require("./Routes/contactusRoutes");

app.use(router);
app.use(contactusRoutes);

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`);
});
