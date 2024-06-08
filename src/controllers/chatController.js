import generateResponse from "../services/openaiService.js";

const getAiResponse = async (req, res) => {
    try {

        console.log("estoy vivo" ,req.body.human_message)

        const response = await generateResponse(req.body.human_message);
        res.json(response)

    } catch (error) {
        console.log("Error!")
        console.log(error.message)
    }
  
}

export { getAiResponse }