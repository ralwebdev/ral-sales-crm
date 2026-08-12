import { Router } from 'express';
import { dbService } from '../services/dbService';

const router = Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = dbService.getAll('users').find(u => u.email === email && u.password === password);

  if (user) {
    res.json({
      success: true,
      user: { id: user.id, name: user.name, role: user.role, email: user.email },
      token: 'mock-jwt-token'
    });
  } else {
    res.status(401).json({ success: false, error: 'Invalid credentials' });
  }
});

export default router;
