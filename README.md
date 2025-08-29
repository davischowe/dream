# 🛒 Sistema de Compras – Versão Piloto

Este projeto é um sistema web fullstack para controle de compras, com funcionalidades de CRUD, integração com APIs externas, geração de relatórios e gráficos gerenciais.

## 🚀 Tecnologias Utilizadas

- **Backend:** Node.js, Express.js, Sequelize, MySQL
- **Frontend:** HTML, CSS, JavaScript
- **Gráficos:** Chart.js
- **APIs Externas:** https://dummyjson.com/products, https://dummyjson.com/users
- **Variáveis de ambiente:** dotenv
  
Funcionalidades

- Consumo e armazenamento de dados das APIs públicas
- CRUD completo para Usuários, Produtos e Compras
- Relacionamentos entre Usuários, Produtos e Compras
- Geração de relatórios HTML:
  - Usuários
  - Produtos
  - Compras
  - Estoque Crítico
  - Consolidado
- Geração de gráficos com filtros (até 10 itens):
  - Produto × Estoque
  - Usuário × Idade
- Sistema estruturado em arquitetura MVC

 Estrutura do Banco de Dados

### Tabela `usuarios`
id, firstName, lastName, age, email, phone, address, city, state, birthDate

### Tabela `produtos`
- id, title, description, category, price, discountPercentage, stock, brand, thumbnail

### Tabela `compras`
- id, usuarioId, produtoId, quantidade, dataCompra, precoUnitario, descontoAplicado, precoFinal, formaPagamento, statusCompra

Instalação

1. Clone o repositório:

2. Insatale as dependencias com o npm install

3. Configure o .env

4. Rode o banco de Dados

5. Execute a aplicação

