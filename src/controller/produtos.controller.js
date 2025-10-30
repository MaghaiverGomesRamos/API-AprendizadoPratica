//Controlador Produtos
class ProdutosController {
    // Exibir mensagem
    exibirMensagem(req, res){
        res.status(200).json({mensagem: "Confira nossa lista de produtos incríveis!"});
    }
}

export default new ProdutosController;