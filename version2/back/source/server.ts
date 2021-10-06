import { Application } from 'express';
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import api from './api/api';
import path from 'path';

export let app: Application = api;

app.use(express.json());
app.use(express.urlencoded({  extended: true }));

app.use(cors());
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, 'img')));

// <==  my API ==>
// app.use('/api', api)

// app.use((req, res) => {
//     const error = new Error('API not found!');
//     console.log(error.message)
//     res.status(404).json({
//         message: error.message,
//         status: 0
//     });
// });
app.get('/api/v1', (req: express.Request, res: express.Response) => {
    //res.send(PrintSucceeded({}, 'api version 1 is working!'));
    let get = app._router.stack.filter((r: any) => r.route && r.route.methods.get).map((r: any) => r.route.path);
    let post = app._router.stack.filter((r: any) => r.route && r.route.methods.post).map((r: any) => r.route.path);
    res.send({ get: get, post: post });
});
let PORT = 23000;
app.listen(PORT, '0.0.0.0', () => {
    console.log('Server is running on PORT:' + PORT);
});