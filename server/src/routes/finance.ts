import { Router } from 'express';
import { dbService } from '../services/dbService';
import { fromGross, detectIntraState } from '../services/gstService';

const router = Router();

router.get('/invoices', (req, res) => {
  const invoices = dbService.getAll('invoices');
  res.json({ success: true, data: invoices });
});

router.post('/invoices', (req, res) => {
  const { subtotal, discount, gstRate, gstin, ...rest } = req.body;
  const intraState = detectIntraState(gstin);
  const breakup = fromGross(subtotal - (discount || 0), gstRate || 18, intraState);

  const invoice = {
    ...rest,
    ...breakup,
    id: `inv${Date.now()}`,
    invoiceNo: `INV-${Date.now()}`,
    createdAt: new Date().toISOString()
  };

  dbService.add('invoices', invoice);
  res.status(201).json({ success: true, data: invoice });
});

router.post('/payments', (req, res) => {
  const payment = {
    ...req.body,
    id: `pay${Date.now()}`,
    createdAt: new Date().toISOString()
  };
  dbService.add('payments', payment);

  // Update invoice amountPaid
  if (payment.invoiceId) {
    const inv = dbService.getById('invoices', payment.invoiceId);
    if (inv) {
      const amountPaid = (inv.amountPaid || 0) + payment.amount;
      const status = amountPaid >= inv.total ? 'Paid' : 'Partial';
      dbService.update('invoices', payment.invoiceId, { amountPaid, status });
    }
  }

  res.status(201).json({ success: true, data: payment });
});

export default router;
