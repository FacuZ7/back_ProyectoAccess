import generateAnswer from "../services/openaiService.js";

const getAiResponse = async (req, res) => {
    try {

        console.log("estoy cayendo aca")

        const response = await generateAnswer(req.body.human_message);
        res.json(response)

    } catch (error) {
        console.log("Error!")
    }
  
}

export { getAiResponse }