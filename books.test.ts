import supertest from 'supertest'
import app from './app'
import {it} from '@jest/globals'
import TaskService from './services/task-service'
import UserService from './services/user-service'
import CategoryService from './services/category-service'


 let server:any;
 server = supertest(app) 


it('should create a new user', async () => {
    
    server.get('/login')

     const response = await server.post('/user').send({
         username: "Wyllian",
         weight: "67",
         password: "willyan@senha",
         email: "willyantomaz@usacucar.com.br"
     });
     expect(response.status).toBe(200);
});


it('should return an error when creating a new user with invalid data', async () => {
    jest.setTimeout(10000);

    const response = await server.post('/user').send({
        weight: "67", 
        password: "willyan@senha",
        email: "willyantomaz@usacucar.com.br"
    });
    expect(response.status).not.toBe(200);
});

it('should return the correct user when finding by ID', async () => {
    const userId = '662662f7cb0409386e8ac498';

    const response = await server.get(`/user/${userId}`);

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
        _id: "662662f7cb0409386e8ac498",
        username: "Wyllian",
        weight: 67,
        password: "willyan@senha",
        email: "willyantomaz@usacucar.com.br",
        createdAt: "2024-04-22T13:15:35.489Z",
        updatedAt: "2024-04-22T13:15:35.489Z"
    });
});


describe('Teste de rota para /task', () => {
    it('Deve criar uma nova tarefa com dados válidos', async () => {
      const mockTask = {
        title: "Nova Tarefa",
        description: "Descrição da nova tarefa",
        status: "pending",
        category: "",
        responsibleUser: "662662f7cb0409386e8ac498",
        expiration: new Date()
      };
  
      (TaskService.prototype.create as jest.Mock).mockResolvedValue(mockTask);
    (UserService.prototype.findById as jest.Mock).mockResolvedValue(true); 
    (CategoryService.prototype.findById as jest.Mock).mockResolvedValue(true); 
  
      const response = await server.post('/task').send(mockTask);
  
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockTask);
    });
  
    it('Deve retornar um erro ao tentar criar uma tarefa com dados inválidos', async () => {
      const mockTask = {

        description: "Descrição da nova tarefa",
        status: "pending",
        category: "category_id",
        responsibleUser: "user_id",
        expiration: new Date()
      };
  
      const response = await server.post('/task').send(mockTask);
  
      expect(response.status).not.toBe(200);
      expect(response.body.error).toBeDefined(); // Verifica se há uma mensagem de erro retornada
    });
  });