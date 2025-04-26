const request = require('supertest');
const { app } = require('../mockedAPI/index');
const BASE_URL = 'http://localhost:9999';

// Helper functions for common API actions
async function createUser(user) {
  return request(BASE_URL).post('/user').send(user);
}

async function deleteUser(username) {
  return request(BASE_URL).delete('/user').query({ username });
}

describe('Unit Testing of the BackEnd APIs', () => {
  const testUser = {
    username: 'marufrahman',
    name: 'Md. Maruf Rahman',
    password: 'password123',
    favouriteFruit: 'Mange',
    favouriteMovie: 'James Bond',
    favouriteNumber: 95,
  };

  beforeAll(async () => {
     await deleteUser(testUser.username);

  });

  afterAll(async () => {
    await deleteUser(testUser.username);

  });

  describe('Root', () => {
    it('returns a welcome message', async () => {
      const res = await request(BASE_URL).get('/');
      expect(res.status).toBe(200);
      expect(res.text).toMatch(/Backend API/);
    });
  });

  describe('Create User & Duplicate', () => {
    it('creates a new user', async () => {
      const res = await createUser(testUser);
      expect(res.status).toBe(200);
      expect(res.text).toBe('Account Created');
    });

    it('Duplicate user not allowed', async () => {
      const res = await createUser(testUser);
      expect(res.status).toBe(200);
      expect(res.text).toMatch(/Already Exists/);
    });
  });

  describe('Delete User', () => {
    it('deletes an existing user', async () => {
      // Create user first (if not exists)
      await createUser(testUser);

      const res = await deleteUser(testUser.username);
      expect(res.status).toBe(200);
      expect(res.text).toBe('Account Deleted');
    });

    it('Non-existent user', async () => {
      const res = await deleteUser('notexistentuser');
      expect(res.status).toBe(200);
      expect(res.text).toMatch(/Does Not Exist/);
    });
  });

  describe('User updates', () => {
    const previousExistingUser = {
      username: 'maruf1',
      name: 'Md. Maruf Rahman 1',
      password: '12345',
      favouriteFruit: 'Mango',
      favouriteMovie: 'Avengers Infinity War',
      favouriteNumber: 7,
    };

    beforeEach(async () => {
      await deleteUser(previousExistingUser.username);
      await createUser(previousExistingUser);
    });

    it('Updating exisiting users info', async () => {
      const filedsToBeUpdated = {
        name: 'Maruf 2',
        password: '1234567890',
        favouriteFruit: 'Mango 2',
        favouriteMovie: 'Agengers Endgame',
        favouriteNumber: 99,
      };

      const res = await request(BASE_URL)
        .put('/user')
        .query({ username: previousExistingUser.username })
        .send(filedsToBeUpdated);

      expect(res.status).toBe(200);
      expect(res.text).toBe('Account Updated');
    });

    it('Non-existent user update operation', async () => {
      // Delete first to ensure user does not exist
      await deleteUser('UserNotFound');

      const res = await request(BASE_URL)
        .put('/user')
        .query({ username: 'UserNotFound' })
        .send({
          name: 'Maruf 3',
          password: '123123123',
          favouriteFruit: 'Mango 3',
          favouriteMovie: 'Avengers Doomsday',
          favouriteNumber: 0,
        });

      expect(res.status).toBe(200);
      expect(res.text).toMatch(/Does NOT Exist/);
    });
  });

  it('should not create a user with missing required fields', async () => {
    const res = await createUser({ username: 'Maruf 4' });  
    expect([400]).toContain(res.status); 
  });
});
