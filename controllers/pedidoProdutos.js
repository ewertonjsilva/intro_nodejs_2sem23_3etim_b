const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarPedidoProdutos(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar produtos no pedido'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async cadastrarPedidoProdutos(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar produtos no pedido'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async editarPedidoProdutos(request, response) {
        try {
            return response.status(200).json({confirma: 'Editar produtos no pedido'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async apagarPedidoProdutos(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar produtos no pedido'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};

