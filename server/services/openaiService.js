import { conversationChain } from '../../config/aiConfig/index.js'
import { historial } from '../../config/aiConfig/index.js'

const generateAnswer = async (query)=> {
    
    let result = await conversationChain.invoke({
        chat_history: historial,
        input: query,
    });
    
    return result
}
export default generateAnswer