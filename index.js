const express = require('express')
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors());



app.get('/', (req,res)=>{
    res.send('Home Page')
})

const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')
const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')
const commentRoutes = require('./routes/comment')
const todoRoutes = require('./routes/todo')
const photoRoutes = require('./routes/photo')

app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/todos', todoRoutes);
app.use('/photos', photoRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Serving on port ${PORT}`)
})