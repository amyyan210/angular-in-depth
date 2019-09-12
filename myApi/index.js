const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => res.send({
    // req contains headers, query params, etc.
    firstName: req.query.firstName,
    lastName: req.query.lastName,
    favColor: req.query.favColor,
    cats: req.query.cats,
    message: `Hello, ${req.query.firstName} ${req.query.lastName}!`
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));