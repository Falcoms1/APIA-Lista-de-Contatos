import express from "express";
import helmet from "helmet"
import routers from "./index"

const server = express()
server.use(helmet)
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use("/",routers);

server.listen(3000, ()=>{
    console.log("Servidor bufando http://localhost:3000/")
})