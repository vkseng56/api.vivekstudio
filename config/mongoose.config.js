const mongoose = require('mongoose');
var password = encodeURIComponent('VIsi_0891');
//mongodb+srv://admin:<password>@vivekstudiodb.o1skhir.mongodb.net/?retryWrites=true&w=majority
// mongoose.connect('mongodb://127.0.0.1:27017/testdb');
mongoose.connect(`mongodb+srv://admin:${password}@vivekstudiodb.o1skhir.mongodb.net/?retryWrites=true&w=majority`,{
    ssl: true
});

