const request = require('supertest');
const app = require('../server');

// Test creating a student
test('It should create a new student', async () => {
  const studentData = {
    Student_id: 123,
    Name: "Test Student",
    Email: "test@example.com",
    contact_number: 1234567890,
    rfid: "RFID123"
  };

  const response = await request(app)
    .post('/api/students')
    .send(studentData);

  expect(response.statusCode).toBe(201);
  expect(response.body).toHaveProperty('Student_id');
});

// Test getting a student by ID
test('It should get a student by ID', async () => {
  const studentId = 123; 
  const response = await request(app).get(`/api/students/${studentId}`);

  expect(response.statusCode).toBe(200);
  expect(response.body).toHaveProperty('Student_id', studentId);
});

// Test updating a student by ID
test('It should update a student by ID', async () => {
  const studentId = 123; 
  const updatedStudentData = {
    Name: "Updated Name",
    Email: "updated@example.com",
    contact_number: 9876543210,
    rfid: "UpdatedRFID"
  };

  const response = await request(app)
    .put(`/api/students/${studentId}`)
    .send(updatedStudentData);

  expect(response.statusCode).toBe(200);
  expect(response.body).toHaveProperty('Name', updatedStudentData.Name);
});

// Test deleting a student by ID
test('It should delete a student by ID', async () => {
  const studentId = 123; 

  const response = await request(app)
    .delete(`/api/students/${studentId}`);

  expect(response.statusCode).toBe(200);
  expect(response.body).toHaveProperty('Student_id', studentId);
});

// Test getting all students
test('It should get all students', async () => {
  const response = await request(app).get('/api/students');
  
  expect(response.statusCode).toBe(200);
});
