# Modelagem de banco de dados

## 1. Objetivo da modelagem
Garantir a persistência segura das informações do usuário, organizando as entidades principais do domínio financeiro de forma que o cálculo de saldo e a geração de extrato sejam eficientes.

## 2. Entidades principais
- **usuarios**: Armazena as credenciais e dados básicos de acesso.
- **categorias**: Agrupadores lógicos de movimentação (sejam elas de Receita ou Despesa).
- **transacoes**: Tabela centralizadora que registra todas as movimentações financeiras, diferenciadas por uma flag de tipo.

## 3. Relacionamentos
- Um `usuario` possui zero ou muitas `categorias` (1:N).
- Um `usuario` possui zero ou muitas `transacoes` (1:N).
- Uma `categoria` possui zero ou muitas `transacoes` (1:N).

## 4. Normalização e justificativa
A modelagem aplicará a 3ª Forma Normal (3FN).
*Justificativa: Elimina redundâncias de dados e garante que atributos não-chave dependam exclusivamente da chave primária, mantendo a integridade do domínio.*

## 5. Padrões obrigatórios
- As chaves primárias (PK) utilizarão o tipo `UUID`. *Justificativa: Aumenta a segurança evitando a exposição de IDs sequenciais na API e facilita a escalabilidade.*
- Todos os valores monetários serão do tipo `DECIMAL(12,2)`. *Justificativa: Evita problemas de arredondamento de ponto flutuante típicos em sistemas financeiros.*
- O armazenamento do tipo da transação será padronizado como 'RECEITA' ou 'DESPESA'.

## 6. Estratégia de migração
Serão utilizadas ferramentas de migração de esquema de banco de dados baseadas em código na camada de infraestrutura do back-end para controle de versão do banco.

## 7. Script inicial

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE usuarios (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categorias (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    nome VARCHAR(50) NOT NULL,
    tipo VARCHAR(10) NOT NULL CHECK (tipo IN ('RECEITA', 'DESPESA')),
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transacoes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    categoria_id UUID NOT NULL REFERENCES categorias(id) ON DELETE RESTRICT,
    tipo VARCHAR(10) NOT NULL CHECK (tipo IN ('RECEITA', 'DESPESA')),
    valor DECIMAL(12,2) NOT NULL CHECK (valor > 0),
    descricao VARCHAR(255),
    data_transacao DATE NOT NULL,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_transacoes_usuario_data ON transacoes(usuario_id, data_transacao);