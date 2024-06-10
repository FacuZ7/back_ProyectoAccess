import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import model from "./model.js";
import { createRetrieverPrompt, createSystemPrompt } from "./prompts.js";

export const createChains = async (retriever) => {
    const retrieverPrompt = createRetrieverPrompt();
    const retrieverChain = await createHistoryAwareRetriever({
        llm: model,
        retriever,
        rephrasePrompt: retrieverPrompt,
    });

    const system_prompt = createSystemPrompt();

    const prompt = ChatPromptTemplate.fromMessages([
        [
            "system",
            system_prompt,
        ],
        new MessagesPlaceholder("chat_history"),
        ["user", "{input}"],
    ]);

    const chain = await createStuffDocumentsChain({
        llm: model,
        prompt: prompt,
    });

    return await createRetrievalChain({
        combineDocsChain: chain,
        retriever: retrieverChain,
    });
};
