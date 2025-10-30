// Controlador Home

class HomeController {
    //exibir mensagem
    exibirMensagem(req, res){
        res.status(200).json({mensagem: "Bem-vindo(a) à nossa loja!"});
    }
}

export default new HomeController;