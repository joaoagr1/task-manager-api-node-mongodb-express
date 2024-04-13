
const request = require('supertest');
const app = require('./app');  // Importar o app corretamente

let server;
beforeAll(() => {
    try {
        server = app.listen(3000);  // Inicie o servidor na porta desejada.
    } catch (error) {
        console.error('Error starting server:', error);
    }
});

afterAll(() => {
    if (server) {
        try {
            server.close();  // Feche o servidor após todos os testes.
        } catch (error) {
            console.error('Error closing server:', error);
        }
    }
});


test('should create a new user', async () => {
    const response = await request(server).post('/user').send({
        username: "Wyllian",
        weight: "67",
        password: "willyan@senha",
        email: "willyantomaz@usacucar.com.br"
    });
    expect(response.status).toBe(200);
});
