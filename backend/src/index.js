const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //Avisar à aplicação que as requisições serão feitas em json
app.use(routes);
app.listen(3333);