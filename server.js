require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const menuRoutes = require('./Routes/menuRoutes')


app.use(router);
app.use(menuRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
