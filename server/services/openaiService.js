import { conversationChain } from "../../config/openaiConfig.js";
import { historial } from "../../config/openaiConfig.js";

const generateAnswer = async (query)=> {
    
    let result = await conversationChain.invoke({
        chat_history: historial,
        input: query,
    });
    
    return result
}
export default generateAnswer