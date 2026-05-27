# Plano de testes

## 1. Objetivo
Definir a estratégia de verificação e validar a integração entre o App Mobile e a API REST no fluxo de registro de Transações, garantindo o cumprimento da regra de negócio RN01.

## 2. Testes de arquitetura
- Verificar se a entidade `Transacao` no back-end isola corretamente a regra de domínio sem depender de bibliotecas externas (Clean Architecture/DDD).

## 3. Testes de back-end
- **[UNITÁRIO]** Tentar criar uma entidade `Transacao` com valor válido (>0). *Esperado: Sucesso.*
- **[UNITÁRIO]** Tentar criar uma entidade `Transacao` com valor 0 ou negativo. *Esperado: Exceção `VAL_001` lançada.*
- **[INTEGRAÇÃO]** Enviar um POST para `/api/v1/transacoes` com payload válido. *Esperado: HTTP 201 e retorno do JSON conforme contrato.*
- **[INTEGRAÇÃO]** Enviar um POST para `/api/v1/transacoes` com valor negativo. *Esperado: HTTP 400 e JSON informando o erro `VAL_001`.*

## 4. Testes de front-end mobile
- **[RENDERIZAÇÃO]** Carregar a tela `NovaTransacaoScreen`. *Esperado: Campos de valor, descrição e botão de submissão visíveis.*
- **[COMPORTAMENTO]** Submeter o formulário sem preencher os dados. *Esperado: Alerta "Preencha o valor e a descrição". API não deve ser chamada.*
- **[INTEGRAÇÃO]** Submeter o formulário com dados válidos e simular latência de rede. *Esperado: Indicador de carregamento visível e, em seguida, alerta de Sucesso com limpeza de tela.*

## 5. Critérios de aprovação
- 100% dos testes unitários e de renderização automatizados passando.
- Ausência de regressões ou erros de tipagem no TypeScript.
- Contrato JSON respeitado rigorosamente por ambas as partes.

## 6. Evidências e Relatório de Execução (Ciclo 1)
- **Testes Unitários (Back-end):** PASS (2/2). A regra RN01 está protegida no domínio.
- **Testes Unitários (Front-end):** PASS (2/2). Renderização e gestão de estados funcionais.
- **Análise de Integração:** O front-end envia um `parseFloat(valor)` no payload. O back-end recebe um número e converte para `Decimal` no banco. A comunicação via JSON está aderente ao contrato `04_contratos_de_api.md`.