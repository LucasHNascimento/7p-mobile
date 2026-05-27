# Desenvolvimento back-end, módulo Transações

## 1. Contexto do módulo
Implementação do fluxo de registro de uma nova transação (Receita ou Despesa) pelo usuário.

## 2. Requisitos técnicos
- **Linguagem/Plataforma**: TypeScript (Node.js).
- **Arquitetura**: Clean Architecture estruturada em camadas (Domain, Application, Infrastructure, Presentation).
- **Padrões**: Domain-Driven Design (DDD) com isolamento da entidade `Transacao`.

## 3. Contrato da API consumido
Endpoint `POST /api/v1/transacoes` aprovado no arquivo `04_contratos_de_api.md`.

## 4. O que deve ser gerado
- Entidade de Domínio (`Transacao`).
- Contrato do Repositório (`ITransacaoRepository`).
- Caso de Uso / Service (`RegistrarTransacaoUseCase`).
- Controller REST (`TransacaoController`).

## 5. Testes obrigatórios
Testes unitários garantindo que a regra RN01 (valor maior que zero) seja respeitada no núcleo do domínio.

## 6. Critérios de aceite
O código deve refletir estritamente as regras de negócio sem acoplamento direto com o framework web ou ORM na camada de domínio e caso de uso.