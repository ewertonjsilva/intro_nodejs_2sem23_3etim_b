const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarEnderecoClientes(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar endereços de clientes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async cadastrarEnderecoClientes(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar endereços de clientes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async editarEnderecoClientes(request, response) {
        try {
            return response.status(200).json({confirma: 'Editar endereços de clientes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async apagarEnderecoClientes(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar endereços de clientes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};

