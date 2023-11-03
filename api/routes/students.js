const router = require('express').Router()


let users = [{
    id: 1,
    name: 'Mehtab',}, 
    {
    id: 2,
    name: 'Maqi',}, 
    {
    id: 3,
    name: 'Hamza'}, 
    {
    id: 4,
    name: 'Hanan'}]

router.get('/',(req, res) =>{
    res.send('Hello World!')
})


router.get('/users', (req, res) => {
    res.send( users)
})

router.get('/users/:id', (req, res) => {
    const id = req.params.id;
    //console.log({id})
    const user = users.find((user) => user.id==id);
    //console.log(user)
    res.send(user);
})

router.get('/error', (req, res) => {
    //res.send("Error in backend")
    throw new Error('An internal error occured')
})

router.post('/users', (req, res) => {

    const user = req.body
    // console.log(user)
    users.push(user)
    res.send(users)
})


router.delete('/users/:id', (req, res) => {
    const id = req.params.id
    users = users.filter(user => user.id != id)
    res.send(users)
})



module.exports = router;

