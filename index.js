import express from 'express'

const app= express();
const port= 3000 ;

app.scget('/donabdi', (req,res)=>{
    res.send('Get off the page, you are about to be hit with the biggest virus')
})



app.listen(port, ()=> `Example app listening on port ${port}` )




