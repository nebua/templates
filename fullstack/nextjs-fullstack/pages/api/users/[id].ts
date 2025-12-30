import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const userIndex = users.findIndex(u => u.id === +id);

  if (req.method === 'GET') {
    if (userIndex !== -1) {
      res.status(200).json(users[userIndex]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } else if (req.method === 'PUT') {
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...req.body };
      res.status(200).json(users[userIndex]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } else if (req.method === 'DELETE') {
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}