import { Request, Response } from 'express';
import axios from 'axios';

const JSON_SERVER_URL = process.env.JSON_SERVER_URL || 'http://localhost:3001/users';

export class UserController {
  // Get all users
  static async getAllUsers(req: Request, res: Response) {
    try {
      const response = await axios.get(JSON_SERVER_URL);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  }

  // Get user by ID
  static async getUserById(req: Request, res: Response) {
    try {
      const response = await axios.get(`${JSON_SERVER_URL}/${req.params.id}`);
      res.json(response.data);
    } catch (error) {
      res.status(404).json({ error: 'User not found' });
    }
  }

  // Create user
  static async createUser(req: Request, res: Response) {
    try {
      const response = await axios.post(JSON_SERVER_URL, req.body);
      res.status(201).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  }

  // Update user
  static async updateUser(req: Request, res: Response) {
    try {
      const response = await axios.put(`${JSON_SERVER_URL}/${req.params.id}`, req.body);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  }

  // Delete user
  static async deleteUser(req: Request, res: Response) {
    try {
      await axios.delete(`${JSON_SERVER_URL}/${req.params.id}`);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  }
}