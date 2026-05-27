# Log de evolução do projeto

## 1. Resumo da execução
- **2026-05-26** | Humano Coordenador | Setup inicial | Artefatos criados: `00`, `01`, `09`. | Status: Aprovado.
- **2026-05-26** | Agente Arquiteto | v1.0 | Artefatos gerados: `02`, `03` e atualização do `09`. | Humano validador: Coordenador | Status: Aprovado.
- **2026-05-26** | Agente Designer de API | v1.0 | Artefato gerado: `04`. | Humano validador: Coordenador | Status: Aprovado.
- **2026-05-26** | Humano Coordenador | Setup de Módulo | Artefato criado: `05` (Transações). | Status: Aprovado.
- **2026-05-26** | Agente Back-end | v1.0 | Código gerado: Entidade, Repositório, UseCase, Controller e Testes Unitários do módulo de Transações. | Humano validador: Coordenador | Status: Aprovado.
- **2026-05-26** | Humano Coordenador | Setup de Módulo | Artefato criado: `06` (Transações). | Status: Aprovado.
- **2026-05-26** | Agente Front-end | v1.0 | Código gerado: Serviço, Tela React Native e Testes do módulo de Transações. | Humano validador: Coordenador | Status: Aprovado.
- **2026-05-26** | Agente de QA | v1.0 | Artefato gerado: `07` (Plano e Relatório de Testes). | Humano validador: Coordenador | Status: Aprovado.

## 2. Status por módulo
- **Transações (Cadastro)** | Versão 1.0 | Implementação: Concluída | Testes: Concluídos | Agentes: Back-end, Front-end, QA.

## 3. Pendências
- `[PENDENTE]` Detalhamento de payload JSON para os endpoints de Categorias (RF03) e Extrato (RF06) no arquivo `04_contratos_de_api.md`. Agente Designer de API, 2026-05-26. Status: Aberto.
- `[MELHORIA]` Tratar máscara e conversão de casas decimais com vírgula no input monetário no front-end (`NovaTransacaoScreen`), contornando o erro de usabilidade do `parseFloat`. Agente de QA, 2026-05-26. Status: Aberto.

## 4. Decisões técnicas
- **Clean Architecture e DDD:** Escolhidos para estruturar a API back-end, isolando a regra financeira (ex: não permitir valor zerado). Proponente: Humano/Arquiteto. Data: 2026-05-26.
- **Banco de Dados PostgreSQL com UUID:** Adotado por oferecer integridade transacional e segurança contra a exposição de IDs. Proponente: Arquiteto. Data: 2026-05-26.
- **Separação de Entidades:** O tipo "Transação" foi unificado na base de dados com uma flag 'RECEITA'/'DESPESA', evitando tabelas redundantes. Proponente: Arquiteto. Data: 2026-05-26.

## 5. Erros encontrados e correções
- *Nenhum erro de código impeditivo encontrado neste ciclo inicial. Testes unitários de ponta a ponta aprovados.*

## 6. Bloco de divergências ativas
- *Nenhuma divergência (QUESTIONAMENTO, CONFLITO ou BLOQUEIO) ativa no momento.*

## 7. Histórico de versões
- **v0.1 (Em andamento):** Core Domain modelado. Contratos base estabelecidos. Fluxo de registro de Transação finalizado.