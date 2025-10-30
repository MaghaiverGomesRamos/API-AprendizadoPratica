// Controlador o carrinho

class CarrinhoController {
    //exibir mensagem
    exibirMensagem(req, res){
        res.status(200).json({mensagem: "Seu carrinho de compras está vazio."});
    }
}

export default new CarrinhoController;