const request = require('supertest');
const app = require('./api');

describe('API Unit Tests', () => {
  it('GET /health returns status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  it('GET /version returns version 1.0.0', async () => {
    const res = await request(app).get('/version');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ version: '1.0.0' });
  });

  it('GET /users returns empty users array', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ users: [] });
  });
});
