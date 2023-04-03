import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const router= express.Router();

router.route('/').get((req,res) => {
    res.status(200).json({message: "Hello from Vito Routes"})
})

export default router;