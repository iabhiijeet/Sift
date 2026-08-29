import express from 'express'
import { auth } from './lib/auth.js'
import { toNodeHandler } from 'better-auth/node'

const app = express()

const port = 8080

app.all('/api/auth/{*path}', toNodeHandler(auth))

app.listen(port, ()=>{
    console.log(`App is listening on ${port}`);
})