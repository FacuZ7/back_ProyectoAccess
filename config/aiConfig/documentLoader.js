import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";

// Carga los documentos (Llevarlo a otro módulo)
export const loadDocuments = async (directory)=>{
    const loader = new DirectoryLoader(
        "data",
        {
          ".txt": (path) => new TextLoader(path),
        }
    );

    return await loader.load();
}


