const express = require('express');
const app = express();
const port = process.env.port || 8080;
const employeeRouter = require('./routes/routes.js');

app.use(express.json());
app.use('/api/v1/employee', employeeRouter);

app.get('/', (req, res) => {
    res.json({message: 'Hello World'});
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
  