const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarProdutosTipos(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar tipos de produto'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async cadastrarProdutosTipos(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar tipos de produto'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async editarProdutosTipos(request, response) {
        try {
            return response.status(200).json({confirma: 'Editar tipos de produto'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async apagarProdutosTipos(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar tipos de produto'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
}; 

