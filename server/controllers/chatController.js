import generateAnswer from "../services/openaiService.js";

const getAiResponse = async (req, res) => {
    try {

        const response = await generateAnswer(req.body.content);
        res.json(response)

    } catch (error) {
        console.log("Error!")
    }
  
}

export { getAiResponse }