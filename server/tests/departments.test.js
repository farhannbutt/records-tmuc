const request = require('supertest');
const app = require('../server');
const Department = require('../models/department-m');

test('It should create a new department', async () => {
    const departmentData = {
      Department_id: 123,
      Name: "Test Department",
      ContactNumber: 1234567890,
    };
  
    const response = await request(app)
      .post('/api/department')
      .send(departmentData);
  
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('_id');
  });

  test('It should get a department by ID', async () => {
    const departmentId = 123; // Assuming this is an existing department ID in the database
    const response = await request(app).get(`/api/department/${departmentId}`);
  
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('Department_id', departmentId);
  });

  test('It should delete a department by ID', async () => {
    const departmentId = 123; // Assuming departmentId is a valid ID of an existing department in the database
  
    const response = await request(app)
      .delete(`/api/department/${departmentId}`);
  
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('Department_id', departmentId);
  });

  test('It should get all departments', async () => {
    const response = await request(app).get('/api/department');
    
    expect(response.statusCode).toBe(200);
  });
  