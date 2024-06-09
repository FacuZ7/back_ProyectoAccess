import http from "http";
import express from 'express';
import { Server } from "socket.io";
import socketService from "./services/socketService.js";
import { PORT } from '../config/envConfig.js'
import routerMaster from './routes/index.js'
import cors from 'cors'


const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

//no esta usando la ruta /chat... 
//despues revisar porque?
app.use(routerMaster);

socketService(io)

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
