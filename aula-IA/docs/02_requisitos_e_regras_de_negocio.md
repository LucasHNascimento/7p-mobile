# Requisitos e regras de negócio

## 1. Requisitos funcionais
- **RF01:** O sistema deve permitir o cadastro de um novo usuário informando nome, e-mail e senha.
- **RF02:** O sistema deve permitir a autenticação do usuário retornando um token de acesso.
- **RF03:** O sistema deve permitir a criação, leitura, atualização e exclusão (CRUD) de Categorias personalizadas.
- **RF04:** O sistema deve permitir o registro manual de uma Receita ou Despesa, associando-a a uma Categoria, um valor, uma data e uma descrição.
- **RF05:** O sistema deve calcular e retornar o saldo atualizado do usuário.
- **RF06:** O sistema deve gerar um Extrato de transações filtrado por um período específico (ex: mês atual).

## 2. Requisitos não funcionais
- **RNF01:** A API de back-end deve ser estruturada seguindo o padrão Clean Architecture e os princípios de Domain-Driven Design (DDD).
- **RNF02:** O banco de dados utilizado será relacional (PostgreSQL).
- **RNF03:** A comunicação entre o App Mobile e a API deve ser feita no formato JSON via HTTPS.
- **RNF04:** As senhas dos usuários devem ser armazenadas de forma irreversível utilizando algoritmo de hashing seguro (ex: bcrypt).

## 3. Regras de negócio
- **RN01:** Uma Despesa ou Receita não pode ser registrada com o valor igual a zero ou negativo (o tipo da transação define se ela soma ou subtrai do saldo, e não o sinal matemático).
- **RN02:** Uma transação (Receita ou Despesa) é obrigatoriamente vinculada a uma única Categoria.
- **RN03:** O sistema deve possuir categorias padrão de sistema que não podem ser excluídas pelo usuário (ex: "Outras Despesas", "Salário").
- **RN04:** O e-mail de cada usuário deve ser único em toda a base de dados.

## 4. Casos de uso prioritários
1. Autenticação de usuário (Login).
2. Registro de uma nova Despesa de forma rápida.
3. Consulta do Extrato mensal e do saldo atual.

## 5. Critérios de aceite
- O registro de uma Despesa só é aprovado se refletir imediatamente na chamada do endpoint de saldo.
- A API deve retornar erros formatados (HTTP 4xx) quando regras de negócio forem violadas, informando o motivo no payload.

## 6. Dependências entre requisitos
- O RF04 (Registro de despesa/receita) depende estritamente do RF03 (Categorias existirem).
- O RF05 e RF06 dependem do RF04.