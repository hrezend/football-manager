import request from 'supertest';
import { getConnection } from 'typeorm';
import { app } from '../app';
import createConnection from '../database';

describe('Manager', () => {

    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    });
    
    it('Should be able to create a new manager.', async () => {
        const response = await request(app).post('/manager/create').set('Authorization', 'a1b2c3-d4e5f6-g7h8i9').send({
            email: 'fulano@email.com.br',
            login: 'fulano',
            password: '123456',
            name: 'Fulano de Tal',
            type: 1
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('Should not be able to create a user with exists email', async () => {
        const response = await request(app).post('/manager/create').set('Authorization', 'a1b2c3-d4e5f6-g7h8i9').send({
            email: 'fulano@email.com.br',
            login: 'fulano',
            password: '123456',
            name: 'Fulano de Tal',
            type: 1
        });

        expect(response.status).toBe(400);
    });

});