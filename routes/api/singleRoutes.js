const express=require('express');
const router=express.Router();
const fetch=(...args)=>import('node-fetch').then(({default: fetch})=>fetch(...args));

router.get('/coffee/:id',(req,res)=>{
    const id=req.params.id;
    const url=`https://api.sampleapis.com/coffee/hot/${id}`;
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/singleCoffee',{
            title:`${data.title}`,
            name:`${data.title}`,
            data
        })
    })
});

module.exports=router;