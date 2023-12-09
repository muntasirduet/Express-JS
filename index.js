const express = require('express')
const app = express()
app.set('view engine','ejs');
const router = express.Router()
router.get('/name/:id',(req,res)=>{
    console.log(req.query);
    res.send('akash biswas')

})

app.use(router)
app.listen(3000,(req,res)=>{
    console.log("Listening prot at 3000");
})