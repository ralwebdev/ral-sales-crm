import { Router } from 'express';
import { dbService } from '../services/dbService';

const router = Router();

router.get('/', (req, res) => {
  const leads = dbService.getAll('leads');
  res.json({ success: true, data: leads });
});

router.post('/', (req, res) => {
  const lead = {
    ...req.body,
    id: `l${Date.now()}`,
    createdAt: new Date().toISOString()
  };
  dbService.add('leads', lead);
  res.status(201).json({ success: true, data: lead });
});

router.patch('/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updated = dbService.update('leads', id, { status });
  if (updated) {
    res.json({ success: true, data: updated });
  } else {
    res.status(404).json({ success: false, error: 'Lead not found' });
  }
});

export default router;
