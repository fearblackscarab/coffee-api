const express=require('express');
const router=express.Router();
const fetch=(...args)=>import('node-fetch').then(({default: fetch})=>fetch(...args));

router.get('/coffee',(req,res)=>{
    const url='https://api.sampleapis.com/coffee/hot';
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/coffee',{
            title:'Hot Coffee',
            name:'Hot Coffee(not like that)',
            data
        })
    })
});

module.exports=router;