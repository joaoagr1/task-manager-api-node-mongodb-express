import supertest from 'supertest'
import app from './app'
import {it} from '@jest/globals'


//const server = request(app);
 let server:any;
 server = supertest(app) 

 beforeAll(async() => {
    
    
 });

 afterAll(async() => {
    server.close();
 });


it('should create a new user', async () => {
    console.log("jeangay: "+server)
    
    server.get('/login')

    // const response = await request(server).post('/user').send({
    //     username: "Wyllian",
    //     weight: "67",
    //     password: "willyan@senha",
    //     email: "willyantomaz@usacucar.com.br"
    // });
    // expect(response.status).toBe(200);
});
