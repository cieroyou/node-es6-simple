import express from 'express'
import user from './user'
import item from './item';

const app = express();
user(app)
item(app)

export default app;

