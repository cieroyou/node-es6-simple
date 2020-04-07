// const express = require('express');
// const app = express();
// const port = 3000;

import express from 'express';
const port = 3000;
import routes from './routes'


const msg_startServer = 
`################################################
🛡️  Server listening on port: ${port} 🛡️ 
################################################`;

async function startServer(){
    const app = express();
    app.use('/api',routes);
    
    app.listen(port, err => {
        if(err){
            console.log(err);
            return;
        }
        console.log(msg_startServer);
    })
}

startServer();
