const db = require('../database/connection'); 
const express = require('express'); 
const router = express.Router(); 

// referência a controllers que serão utilizados nas rotas
const MesasController = require('../controllers/mesas'); 
const CidadesController = require('../controllers/cidades');
const ClientesController = require('../controllers/clientes');
const EnderecoClientesController = require('../controllers/enderecoClientes'); 
const PedidoProdutosController = require('../controllers/pedidoProdutos'); 
const PedidosController = require('../controllers/pedidos'); 
const ProdutosController = require('../controllers/produtos'); 
const ProdutoTiposController = require('../controllers/produtoTipos'); 
const UsuariosController = require('../controllers/usuarios'); 

// definição das rotas
router.get('/mesas', MesasController.listarMesas); 
router.post('/mesas', MesasController.cadastrarMesas); 
router.patch('/mesas', MesasController.editarMesas); 
router.delete('/mesas', MesasController.apagarMesas); 

router.get('/cidades', CidadesController.listarCidades); 
router.post('/cidades', CidadesController.cadastrarCidades); 
router.patch('/cidades', CidadesController.editarCidades); 
router.delete('/cidades', CidadesController.apagarCidades); 


router.get('/clientes', ClientesController.listarClientes); 
router.post('/clientes', ClientesController.cadastrarClientes); 
router.patch('/clientes', ClientesController.editarClientes); 
router.delete('/clientes', ClientesController.apagarClientes); 

router.get('/enderecoclientes', EnderecoClientesController.listarEnderecoClientes); 
router.post('/enderecoclientes', EnderecoClientesController.cadastrarEnderecoClientes); 
router.patch('/enderecoclientes', EnderecoClientesController.editarEnderecoClientes); 
router.delete('/enderecoclientes', EnderecoClientesController.apagarEnderecoClientes); 

router.get('/pedidoprodutos', PedidoProdutosController.listarPedidoProdutos); 
router.post('/pedidoprodutos', PedidoProdutosController.cadastrarPedidoProdutos); 
router.patch('/pedidoprodutos', PedidoProdutosController.editarPedidoProdutos); 
router.delete('/pedidoprodutos', PedidoProdutosController.apagarPedidoProdutos); 

router.get('/pedidos', PedidosController.listarPedidos); 
router.post('/pedidos', PedidosController.cadastrarPedidos); 
router.patch('/pedidos', PedidosController.editarPedidos); 
router.delete('/pedidos', PedidosController.apagarPedidos); 

router.get('/produtos', ProdutosController.listarProdutos); 
router.post('/produtos', ProdutosController.cadastrarProdutos); 
router.patch('/produtos', ProdutosController.editarProdutos); 
router.delete('/produtos', ProdutosController.apagarProdutos); 

router.get('/produtotipos', ProdutoTiposController.listarProdutosTipos); 
router.post('/produtotipos', ProdutoTiposController.cadastrarProdutosTipos); 
router.patch('/produtotipos', ProdutoTiposController.editarProdutosTipos); 
router.delete('/produtotipos', ProdutoTiposController.apagarProdutosTipos); 

router.get('/usuarios', UsuariosController.listarUsuarios); 
router.post('/usuarios', UsuariosController.cadastrarUsuarios); 
router.patch('/usuarios', UsuariosController.editarUsuarios); 
router.delete('/usuarios', UsuariosController.apagarUsuarios); 

module.exports = router;

