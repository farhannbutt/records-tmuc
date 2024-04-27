const request = require('supertest');
const app = require('../server');
const Floor = require('../models/floor-m');

test('It should create a new floor', async () => {
    const departmentData = {
      Department_id: 123,
      Name: "Test Department",
      ContactNumber: 1234567890,
      Program: "Test Program"
    };
  
    const departmentResponse = await request(app)
      .post('/api/department')
      .send(departmentData);
  
    expect(departmentResponse.statusCode).toBe(201);
    expect(departmentResponse.body).toHaveProperty('_id');
  
    const floorData = {
      Floor_id: 456,
      Department_id: 123,
      Floor_number: 1
    };
  
    const response = await request(app)
      .post('/api/floor')
      .send(floorData);
  
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('_id');
  });
  
  test('It should get a floor by ID', async () => {
    const floorId = 456; // Assuming this is an existing floor ID in the database
    const response = await request(app).get(`/api/floor/${floorId}`);
  
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('Floor_id', floorId);
  });
  
  
  test('It should delete a floor by ID', async () => {
    const floorId = 456;
  
    const response = await request(app)
      .delete(`/api/floor/${floorId}`);
  
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('Floor_id', floorId);
  });
  
  test('It should get all floors', async () => {
    const response = await request(app).get('/api/floor');
    
    expect(response.statusCode).toBe(200);
  });
  