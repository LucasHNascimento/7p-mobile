# Desenvolvimento front-end mobile, módulo Transações

## 1. Contexto do módulo
Criação da tela "Nova Transação", permitindo ao usuário registrar rapidamente uma despesa ou receita no aplicativo.

## 2. Contrato consumido
- `POST /api/v1/transacoes` (conforme definido em `04_contratos_de_api.md`).

## 3. O que deve ser gerado
- Serviço de consumo da API (`TransacaoService`).
- Componente de tela em React Native (`NovaTransacaoScreen`).
- Tratamento de estado local para os campos do formulário.

## 4. Experiência esperada
- Feedback visual imediato de "Carregando..." ao submeter.
- Exibição de mensagem de erro amigável caso a API retorne falha (ex: regra do valor zerado).
- Limpeza do formulário e feedback de sucesso após o registro.

## 5. Testes obrigatórios
- Teste de renderização garantindo que os inputs cruciais (valor, descrição) existem na tela.
- Teste de comportamento simulando uma submissão e o estado de carregamento.

## 6. Critérios de aceite
A interface deve compilar sem erros de tipagem no TypeScript e consumir o serviço respeitando a estrutura JSON do contrato aprovado.