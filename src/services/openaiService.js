import { historial } from "../config/openaiConfig.js";
import { conversationChain } from "../config/openaiConfig.js";

const generateResponse = async (query)=> {
    
    // TODO agregar historial consultando a la base de datos.

    let result = await conversationChain.invoke({
        chat_history: historial,
        input: query,
    });
    
    return result
}

export default generateResponse