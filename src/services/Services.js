const { where } = require("sequelize");
const dataSource = require("../models/index.js")

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel
    }

    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll();
    }


    async pegaUmRegistroPorId(id) {
        return dataSource[this.model].findByPk(id);
    }


    async criaRegistro(dadosDoRegistro) {
        return dataSource[this.model].create(dadosDoRegistro);
    }


    async atualizaRegistro(dadosAtualizados, id) {
        const listaDeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
            where: { id: id }
        });
        if (listaDeRegistrosAtualizados[0] === 0) {
            return false
        }
        return true
    }


    async atualizaRegistroStatus(status, id) {
        const [numeroDeRegistrosAtualizados] = await dataSource[this.model].update(
            { status },
            { where: { id: id } }
        );
        if (numeroDeRegistrosAtualizados === 0) {
            return false;
        }
        return true;

        const registroAtualizado = await dataSource[this.model].findByPk(id);
        return registroAtualizado;
    }


    async excluiRegistro(id) {
        return dataSource[this.model].destroy( { where: { id: id } } );
    }

}

module.exports = Services