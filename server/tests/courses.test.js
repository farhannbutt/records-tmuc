const request = require('supertest');
const app = require('../server');
const Course = require('../models/courses-m');

describe('Course Model and Routes', () => {
    
  test('It should create a new course', async () => {
    const courseData = {
      Course_id: 136263343,
      Name: "Test Course",
      Credits: 3,
      Program: "Test Program",
      Room_id: "Room123",
      Start_time: 9,
      End_time: 10,
      Day: "Monday"
    };

    const response = await request(app)
      .post('/api/course')
      .send(courseData);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('_id');
  });

  test('It should get a course by ID', async () => {
    const courseId = 136263343; // Assuming this is an existing course ID in the database
    const response = await request(app).get(`/api/course/${courseId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('Course_id', courseId);
  });

  test('It should delete a course by ID', async () => {
    // Assuming courseId is a valid ID of an existing course in the database
    const courseId = 136263343;

    // Make a DELETE request to delete the course
    const response = await request(app)
      .delete(`/api/course/${courseId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('Course_id', courseId);
  });

  test('It should get all courses', async () => {
    // Make a GET request to fetch all courses
    const response = await request(app).get('/api/course');
    
    expect(response.statusCode).toBe(200);
  });

});
