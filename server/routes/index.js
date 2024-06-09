import { Router } from 'express'
import chatRoutes from './chatRoutes.js'

const routerMaster = Router()  

routerMaster.use('/chat', chatRoutes)

export default routerMaster
