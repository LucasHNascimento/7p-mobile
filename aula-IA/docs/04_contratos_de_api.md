# Contratos de API

## 1. Objetivo
Definir os endpoints, métodos, parâmetros, respostas e erros esperados para o aplicativo mobile de controle financeiro. A API servirá como ponte entre o front-end e os casos de uso definidos no core domain.

## 2. Padrão de versionamento
Todas as rotas da API conterão a versão no caminho, utilizando o prefixo padrão `/api/v1`.

## 3. Autenticação e autorização
A API utiliza JWT (JSON Web Token). Com exceção das rotas de registro e login, todos os endpoints exigem o envio do token no cabeçalho da requisição:
`Authorization: Bearer <token>`

## 4. Endpoints
- `POST /api/v1/usuarios` - Cadastro de novo usuário.
- `POST /api/v1/auth/login` - Autenticação e geração de token.
- `GET /api/v1/categorias` - Listagem de categorias do usuário.
- `POST /api/v1/transacoes` - Registro de nova transação (Receita ou Despesa).
- `GET /api/v1/transacoes/extrato` - Listagem de transações filtradas por período.
- `GET /api/v1/usuarios/saldo` - Retorna o saldo atualizado.

## 5. Requisição e resposta com exemplos JSON reais

### 5.1. Autenticação de Usuário
**POST** `/api/v1/auth/login`
- **Payload de entrada:**
```json
{
  "email": "usuario@email.com",
  "senha": "senhaSegura123"
}