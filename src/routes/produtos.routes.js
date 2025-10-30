import { Router } from "express";
import ProdutosController from "../controller/produtos.controller.js";

const produtos = Router()

//Listar produtos
produtos.get("/produtos", ProdutosController.exibirMensagem)

export default produtos;