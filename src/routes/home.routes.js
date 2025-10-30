import { Router } from "express";
import HomeController from "../controller/home.controller.js";

const home = Router()

// Pagina inicial
home.get("/", HomeController.exibirMensagem)

export default home

