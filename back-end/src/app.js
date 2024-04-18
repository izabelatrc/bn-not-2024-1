import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import dotenv from "dotenv";
dotenv.config();

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

const app = express();

import mongoose from "mongoose";
mongoose.connect(process.env.DATABASE_URL);

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

/******************************************************
 * ROTAS
 ******************************************************/

import clienteRouter from './routes/cliente.js'
app.use('/clientes', clienteRouter)

import fornecedorRouter from './routes/fornecedor.js'
app.use('/fornecedores', fornecedorRouter)

import produtoRouter from './routes/produto.js'
app.use('/produtos', produtoRouter)

import vendaRouter from './routes/venda.js'
app.use('/vendas', vendaRouter)

export default app; 
