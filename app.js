const express = require('express');
const app = express();
app.use(express.json());
require('./config/mongoose.config');
const categoryRouter = require('./routes/category.routes');
const productRouter = require('./routes/product.routes');
app.use('/api/', categoryRouter);
app.use('/api/', productRouter);
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('app is running on port '+ port);
});
