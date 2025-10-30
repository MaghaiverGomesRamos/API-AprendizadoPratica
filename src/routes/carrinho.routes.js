import { Router } from "express";
import CarrinhoController from "../controller/carrinho.controller.js"

const carrinho = Router()

// Listar carrinho
carrinho.get("/carrinho", CarrinhoController.exibirMensagem)

export default carrinho