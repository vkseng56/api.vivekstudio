const express = require('express');
const app = express();
app.use(express.json());
require('./config/mongoose.config');
const cors = require('cors');
app.use(cors());
const categoryRouter = require('./routes/category.routes');
const productRouter = require('./routes/product.routes');
const userRequestRouter = require('./routes/userRequest.routes');
app.use('/api/', categoryRouter);
app.use('/api/', productRouter);
app.use('/api/', userRequestRouter);
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('app is running on port '+ port);
});
