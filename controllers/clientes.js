const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarClientes(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar Clientes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async cadastrarClientes(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar Clientes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async editarClientes(request, response) {
        try {
            return response.status(200).json({confirma: 'Editar Clientes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async apagarClientes(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar Clientes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};

