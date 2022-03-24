const express=require('express');
const router=express.Router();
const port=process.env.PORT || 3000;
router.get(express.static('public'));

const coffee=require('./api/coffeeRoutes');
const singleCoffee=require('./api/singleRoutes')

router.get('/coffee',coffee);
router.get('/coffee/:id',singleCoffee);

router.get('/',(req,res)=>{
    res.render('pages/home',{
        title:'Home',
        name:'Hot Coffee Home Page'
    })
});

module.exports=router;