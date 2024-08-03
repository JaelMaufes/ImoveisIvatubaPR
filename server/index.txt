const { MongoClient } = require('mongodb');

async function connectToMongoDB() {
    const uri = 'mongodb://localhost:27017/';

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        const db = client.db('IvatubaImoveis');
        const collection = db.collection('CadastroImoveis');

        // Consulta para listar os imóveis
        const CadastroImoveis = await collection.find({}).toArray();
        console.log('Lista de imóveis:', CadastroImoveis);

        // Encerra a conexão
        await client.close();
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
}

connectToMongoDB();
