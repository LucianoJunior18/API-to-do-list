class Controller {
    constructor (entidadeService) {
        this.entidadeService = entidadeService
    }

    async pegaTodos(req, res) {
        try {
            const listasDeRegistro = await this.entidadeService.pegaTodosOsRegistros()
            return res.status(200).json(listasDeRegistro)
        } catch(erro) {
            // erro
        }
    }

    async pegaUmPorId(req, res) {
        const { id } = req.params
        try {
            const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
            return res.status(200).json(umRegistro)
        } catch(erro) {
            // erro
        }

    }


    async criaNovo(req, res) {
        const dadosParaCriacao = req.body;
        try {
            const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
            return res.status(200).json(novoRegistroCriado)
        } catch(erro) {
            console.error("Erro ao criar novo registro", erro)
            return res.status(500).json({mensagem: `Erro ao criar novo registro: ${erro.message}`})
        }
    }
    

    async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
        const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));

        if(!foiAtualizado) {
            return res.status(400).json({mensagem: 'registro não foi atualizado'})
        }

        return res.status(200).json({mensagem: 'Atualizado com sucesso '})

      } catch(erro) {
        console.error("Erro ao atualizar registro", erro)
        return res.status(500).json({mensagem: `Erro ao atualizar registro: ${erro.message}`})
        }
    
    }


    async atualizaStatus(req, res) {
        const { id } = req.params;
        const { status}  = req.body;
        try {
            const foiAtualizado = await this.entidadeService.atualizaRegistroStatus(status, Number(id));

            if(!foiAtualizado) {
                return res.status(400).json({mensagem: "Satus não foi atualizado"})
            }

            return res.status(200).json({mensagem: "status atualizado com sucesso"})

        }catch(erro) {
            console.error("Erro ao atualizar status", erro)
            return res.status(500).json({mensagem: `Erro ao atualizar status: ${erro.message}`})
        }
    }

    async exclui(req, res) {
        const { id } = req.params;
        try {
            await this.entidadeService.excluiRegistro(Number(id));
            return res.status(200).json({mensagem: `id ${id} deletado com sucesso`})
        } catch(erro) {
            console.error("Erro ao excluir registro", erro)
            return res.status(500).json({mensagem: `Erro ao excluir registro: ${erro.message}`})
        }
    }


}












module.exports = Controller