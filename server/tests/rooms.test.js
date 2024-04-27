const request = require('supertest');
const app = require('../server');
const Room = require('../models/room-m');

test('It should create a new room', async () => {
    const roomData = {
        Room_id: 789,
        Name: "Test Room"
    };

    const response = await request(app)
        .post('/api/rooms')
        .send(roomData);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('_id');
});

test('It should get a room by ID', async () => {
    const roomId = 789; 
    const response = await request(app).get(`/api/rooms/${roomId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('Room_id', roomId);
});


test('It should delete a room by ID', async () => {
    const roomId = 789;

    const response = await request(app)
        .delete(`/api/rooms/${roomId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('Room_id', roomId);
});

test('It should get all rooms', async () => {
    const response = await request(app).get('/api/rooms');

    expect(response.statusCode).toBe(200);
});
