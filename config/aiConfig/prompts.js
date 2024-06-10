import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";

export const createRetrieverPrompt = () => {
    return ChatPromptTemplate.fromMessages([
        new MessagesPlaceholder("chat_history"),
        ["user", "{input}"],
        [
            "user",
            "A partir de la conversación de arriba, generá una nueva pregunta que pueda ser entendida sin el historial de la conversación",
        ],
    ]);
};

export const createSystemPrompt = () => {
    return `
    1. Eres un asistente que contesta preguntas de nuestra base de conocimiento.
    2. Responde la pregunta del usuario a partir del siguiente contexto: {context}.
    3. No contestes preguntas sobre temas que no estén en el contexto: {context}
    4. Cuando no encuentres información en el contexto {context} contesta "No encontré ese tema en mi base de conocimiento, por favor cargá un ticket en Jira"""
    `;
};
