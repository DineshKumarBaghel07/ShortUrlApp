import express from 'express';
const router = express.Router();
import { handleGenerateNewShortURl, handleRedirectUrl } from '../controllers/url.js'

router.post("/", handleGenerateNewShortURl);
router.get('/:shortId', handleRedirectUrl);


export default router;