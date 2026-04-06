# Node.js MVC CRUD Project

This is a Node.js project implementing MVC architecture with Express, TypeScript, and JSON Server for full CRUD operations.

## Features

- MVC Architecture
- Express.js framework
- TypeScript
- JSON Server for data persistence
- Full CRUD operations for User model

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development servers:
   ```bash
   npm run dev:all
   ```
   This will start both the Express server on port 3000 and JSON Server on port 3001.

2. API Endpoints:
   - GET /api/users - Get all users
   - GET /api/users/:id - Get user by ID
   - POST /api/users - Create a new user
   - PUT /api/users/:id - Update user
   - DELETE /api/users/:id - Delete user

## Build

To build the project:
```bash
npm run build
```

To start the production server:
```bash
npm start
```