const request = require('supertest');

//

const db = require('../database/dbConfig.js');
const server = require('../api/server');
const Users = require('./users-model');

// env set to testing

describe('users model', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });

  it('db environment set to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
});

// testing testing register

describe('add()', () => {
    it('should insert user into db', async () => {
        await Users.add({ username: 'testUsername', password: 'password' });
        const users = await db('users')

        expect(users).toHaveLength(1) 
    });

    it('should provide username of chris', async () => {
        const users = await Users.add({ username: 'testUsername', password: 'password' });

        expect(users.username).toBe('testUsername');
    })
});

// testing login

describe('add()', () => {
    it('should insert user into db', async () => {
      await Users.add({ username: 'testUsername', password: 'password' });
      await request(server)
        .post('/api/login')
        .send({ username: 'testUsername', password: 'password' })
        .expect(401)
       })
    })
});

// testing get jokes

describe('get jokes', () => {
    it('should return 404 for unauthorized request', () => {
        return request(server)
        .post('/jokes')
        .set('Authorization', 'incorrectToken')
        .then(res => {
            expect(res.status).toBe(404);
        })
    })
});