import express from 'express';
import { testDbConnection, saveDbConfig } from '../controllers/adminController.js';
import { authenticateToken, isAdmin } from '../middleware/auth.js';

const router = express.Router();

router.post('/test-db', authenticateToken, isAdmin, testDbConnection);
router.post('/save-db-config', authenticateToken, isAdmin, saveDbConfig);

export default router;