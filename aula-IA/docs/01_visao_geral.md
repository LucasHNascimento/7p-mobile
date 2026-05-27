# Visão geral do sistema

## 1. Objetivo do projeto
Desenvolver um aplicativo mobile e sua respectiva API de back-end para o gerenciamento de finanças pessoais, permitindo ao usuário registrar e analisar seu fluxo de caixa diário.

## 2. Problema que o sistema resolve
A dificuldade e a falta de disciplina no acompanhamento de gastos diários. O sistema centraliza o controle financeiro, categoriza as transações e fornece uma visão clara do saldo atual, ajudando o usuário a entender para onde seu dinheiro está indo.

## 3. Atores envolvidos
- **Usuário Final**: Registra as despesas e receitas pelo celular e acompanha o extrato.
- **Sistema (Back-end)**: Responsável por processar regras de negócio, persistir os dados em nuvem de forma segura e fornecer os cálculos de saldo.

## 4. Escopo inicial, dentro e fora
- **Dentro**: Cadastro de usuário, autenticação básica, registro manual de receitas e despesas, gerenciamento de categorias, visualização de extrato mensal e cálculo de saldo geral.
- **Fora nesta versão**: Integração com bancos via Open Finance, leitura de nota fiscal por QR Code, consolidação de faturas de cartão de crédito e relatórios preditivos.

## 5. Restrições técnicas
- **Front-end**: Mobile, construído utilizando React Native.
- **Back-end**: API Web desenvolvida aplicando rigorosamente os princípios de Clean Architecture e os conceitos fundamentais do DDD.
- **Banco de dados**: Relacional (tecnologia específica a ser proposta pela arquitetura).

## 6. Premissas
- O aplicativo mobile precisa ter foco em baixa fricção de uso; registrar uma despesa deve ser um fluxo extremamente rápido e intuitivo.
- O sistema funcionará com sincronização em nuvem, não sendo uma aplicação "offline-first" nesta primeira versão.

## 7. Riscos conhecidos
- Abandono da ferramenta pelo usuário se o preenchimento dos formulários de despesas e receitas for longo ou burocrático.

## 8. Pedido para o Agente Arquiteto
Atue como arquiteto de software. Analise o cenário e proponha a melhor estrutura inicial, considerando arquitetura, módulos, dependências e riscos.