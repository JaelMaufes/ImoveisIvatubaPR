const mongoose = require('mongoose');

// URL de conexão com o MongoDB (substitua pela sua URL)
const dbUrl = 'mongodb://localhost:27017/IvatubaImoveis';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => {
    console.log('Conexão com o MongoDB estabelecida com sucesso!');
});
