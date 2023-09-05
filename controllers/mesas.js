const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarMesas(request, response) {
        try {
            // armazena instrução SQL na constante sql
            const sql = 'SELECT mes_id, mes_nome, mes_status, mes_lugares, ped_id FROM mesas;'; 
            // execução da instrução SQL com o resultado gravado na constante mesas
            const mesas = await db.query(sql);
            // retorna o resultado da requisição
            return response.status(200).json(mesas[0]);
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

