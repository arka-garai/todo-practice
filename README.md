# Todo App

A task management application built with modern web technologies.

## Features

- Create, read, update, and delete tasks
- User authentication with JWT
- MongoDB database

## Screenshots

![Screenshot 1](assets/screenshot-2026-04-03_23-11-25.png)

![Screenshot 2](assets/screenshot-2026-04-03_23-12-33.png)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   Copy `.env.example` to `.env` and update the values.

3. Start the server:
   ```bash
   npm start
   ```

## Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Server port number |
| MONGO_URI | MongoDB connection string |
| JWT_USER_PASSWORD | JWT secret key |
