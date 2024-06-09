import express from 'express'
import { getAiResponse } from '../controllers/chatController.js'

const router = express.Router()

router.post("/", getAiResponse)

export default router