const { json } = require('express'); 
const db = require('../database/connection'); 

// https://www.restapitutorial.com/httpstatuscodes.html

module.exports = {
    async listarCidades(request, response) {
        try {
            const sql = 'SELECT cid_id, cid_nome, cid_uf FROM cidades;'; 
            const cidades = await db.query(sql);
            return response.status(200).json(cidades[0]);
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async cadastrarCidades(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar Cidades'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async editarCidades(request, response) {
        try {
            return response.status(200).json({confirma: 'Editar Cidades'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    async apagarCidades(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar Cidades'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};