const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Comments Page')
})

module.exports = router