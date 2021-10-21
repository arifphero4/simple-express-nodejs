const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


const port = 5000;

app.get('/', (req, res) =>{
    res.send('wow, hi from my first node and express');
});

const users =[
    {id:0, name: 'babul ali', email: 'babul@gmail.com', phone: '01999999999999'},
    {id:1, name: 'kabul', email: 'kabul@gmail.com', phone: '01999999999999'},
    {id:2, name: 'abul miah', email: 'abul@gmail.com', phone: '01999999999999'},
    {id:3, name: 'babul miah', email: 'babul@gmail.com', phone: '01999999999999'},
    {id:4, name: 'kasim ali', email: 'kasim@gmail.com', phone: '01999999999999'},
    {id:5, name: 'kashem noor', email: 'kashem@gmail.com', phone: '01999999999999'},
    
]

app.get('/users', (req, res) =>{
    const search = req.query.search;
    // use  query parameter
    if (search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);


    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})


//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id] 
    res.send(user);
    
})


app.listen(port, () => {
    console.log('listening to port', port);
})