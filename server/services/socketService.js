import generateAnswer from "./openaiService.js";

const socketService = (io) => {
    io.on('connection', (socket) => {
        console.log('Primer paso: se conectó un usuario');
        
        socket.on('disconnect', () => {
            console.log('Se desconectó un usuario');
        });
        
        socket.on('chat message', async (msg) => {
            console.log("Tercer Paso: El servidor recibe lo que el usuario haya escrito")
            console.log("Aca deberíamos enviarle el mensaje a OPENAI y que haga su magia")
            const {answer} = await generateAnswer(msg) //--> answer tiene la respuesta del chat, pero si lo descomento su respuesta es siempre que cargue ticket en jira
            //sospecho de que le esta llegando mal formateado el mensaje.
            console.log("Cuarto Paso: El servidor devuelve el mensaje hacia la pc del cliente.")
            io.emit('chat message', ` ${answer}`);
        });
    })
}

export default socketService