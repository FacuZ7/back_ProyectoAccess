import { loadDocuments } from "./documentLoader.js";
import { splitDocuments } from "./textSplitter.js";
import { createVectorStore } from "./vectorStore.js";
import { createChains } from "./retrievalChain.js";
import { HumanMessage, AIMessage } from "@langchain/core/messages";



const main = async () => {
    const docs = await loadDocuments("data");

    const splittedDocs = await splitDocuments(docs);

    const vectorStore = await createVectorStore(splittedDocs);

    const retriever = vectorStore.asRetriever({ k: 3 });

    const conversationChain = await createChains(retriever);

    const historial = [
        new HumanMessage("Me llamo Juan"),
        new AIMessage("Hola Juan, ¿en qué puedo ayudarte?"),
    ];

    console.log(conversationChain, historial);

    return {
        conversationChain,
        historial
    }
}

const { conversationChain, historial } = await main();
export { conversationChain, historial };


