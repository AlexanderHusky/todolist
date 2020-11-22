let express = require('express');

let router = require('./src/controller/controller')
let app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(router);




app.listen(3000, () => {
    console.log('App is running...')
})