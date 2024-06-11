import { ChatOpenAI } from "@langchain/openai" 
import { ChatAnthropic } from "@langchain/anthropic";
import * as dotenv from "dotenv";

dotenv.config();

// Instancia el modelo. Temperatura 0 para que sea lo menos creativo posible
// potencialmente podemos modificar este archivo solo para probar otras IA.
export const modelOpenAI = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    temperature: 0,
});

export const modelClaude = new ChatAnthropic({
    temperature: 0.9,
    model: "claude-3-sonnet-20240229",
    // In Node.js defaults to process.env.ANTHROPIC_API_KEY,
    apiKey: ANTHROPIC_API_KEY,
    maxTokens: 1024,
  });
