import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { OpenAIEmbeddings } from "@langchain/openai";

export const createVectorStore = async (documents) => {
    const embeddings = new OpenAIEmbeddings();
    return await FaissStore.fromDocuments(documents,embeddings);
}