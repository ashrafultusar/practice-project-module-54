const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    { id: 1, name:'Sabana' ,email:'sabana@gmail.com'},
    { id: 2, name:'Sabila' ,email:'sabila@gmail.com'},
    { id: 3, name:'Nabila' ,email:'nabila@gmail.com'}
]
   


app.get('/', (req, res) => {
    res.send('user management server is running')
})


app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log(`server is runnign on port: ${port}`)
})