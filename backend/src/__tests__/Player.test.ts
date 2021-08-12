import request from 'supertest';
import { getConnection } from 'typeorm';
import { app } from '../app';
import createConnection from '../database';

describe('Player', () => {

    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    });
    
    it('Should be able to create a new player.', async () => {
        const response = await request(app).post('/player/create').set('Authorization', 'a1b2c3-d4e5f6-g7h8i9').send({
            name: 'Ciclano de Fulano de Tal da Silva',
            cpf: '001.002.003-04',
            birth_date: '01/01/1500',
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message');
    });

    it('Should not be able to create a player with exists cpf', async () => {
        const response = await request(app).post('/player/create').set('Authorization', 'a1b2c3-d4e5f6-g7h8i9').send({
            name: 'Ciclano de Fulano de Tal da Silva',
            cpf: '001.002.003-04',
            birth_date: '01/01/1500',
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
    });

    it('Should not be able to create a player without cpf', async () => {
        const response = await request(app).post('/player/create').set('Authorization', 'a1b2c3-d4e5f6-g7h8i9').send({
            name: 'Ciclano de Fulano de Tal da Silva',
            birth_date: '01/01/1500',
        });

        expect(response.status).toBe(400);
    });

});