import express from "express";
import home from "./routes/home.routes.js";
import carrinho from "./routes/carrinho.routes.js";
import produtos from "./routes/produtos.routes.js";


const app = express();
const PORT = 8080;

// Middleware para parsear JSON
app.use(express.json());
app.use(home,carrinho,produtos)

// -----------------------------------------------------------------
// INICIALIZAÇÃO DO SERVIDOR
// -----------------------------------------------------------------
app.listen(PORT, () => {
  console.log("Loja virtual hospedada em http://localhost:${PORT}");
});

