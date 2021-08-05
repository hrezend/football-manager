import request from 'supertest';
import { getConnection } from 'typeorm';
import { app } from '../app';
import createConnection from '../database';

describe('Team', () => {

    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    });
    
    it('Should be able to create a new team.', async () => {
        const response = await request(app).post('/team/create').set('Authorization', 'a1b2c3-d4e5f6-g7h8i9').send({
            name: 'Borussia FC',
            founded_at: '11/10/2000',
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

});