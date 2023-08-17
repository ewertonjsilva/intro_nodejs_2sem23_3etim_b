const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarMesas(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar Mesas'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async cadastrarMesas(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar Mesas'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async editarMesas(request, response) {
        try {
            return response.status(200).json({confirma: 'Editar Mesas'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async apagarMesas(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar Mesas'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};  

