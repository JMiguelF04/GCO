
CREATE DATABASE IF NOT EXISTS gco_dev;
USE gco_dev;

-- ------------------------------------------------------------------------------------------------------
CREATE TABLE modalidades (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  icone VARCHAR(50),
  descricao TEXT,
  ativo BOOLEAN NOT NULL DEFAULT TRUE,
  categoria VARCHAR(100),
  idade_minima INT NOT NULL,
  idade_maxima INT
);


CREATE TABLE horarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  modalidade_id INT,
  dia VARCHAR(20),
  inicio TIME,
  fim TIME,
  nivel VARCHAR(50),
  grupo VARCHAR(50),
  FOREIGN KEY (modalidade_id) REFERENCES modalidades(id) ON DELETE CASCADE
);

CREATE TABLE niveis (
  id INT AUTO_INCREMENT PRIMARY KEY,
  modalidade_id INT,
  descricao VARCHAR(100),
  FOREIGN KEY (modalidade_id) REFERENCES modalidades(id) ON DELETE CASCADE
);

CREATE TABLE equipamento (
  id INT AUTO_INCREMENT PRIMARY KEY,
  modalidade_id INT,
  nome TEXT,
  FOREIGN KEY (modalidade_id) REFERENCES modalidades(id) ON DELETE CASCADE
);

CREATE TABLE competicoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  modalidade_id INT,
  nome VARCHAR(100),
  FOREIGN KEY (modalidade_id) REFERENCES modalidades(id) ON DELETE CASCADE
);

CREATE TABLE detalhes_modalidade (
  id INT AUTO_INCREMENT PRIMARY KEY,
  modalidade_id INT,
  introducao TEXT,
  metodologia TEXT,
  avaliacao TEXT,
  progressao TEXT,
  FOREIGN KEY (modalidade_id) REFERENCES modalidades(id) ON DELETE CASCADE
);

CREATE TABLE contacto_modalidade (
  id INT AUTO_INCREMENT PRIMARY KEY,
  modalidade_id INT,
  responsavel VARCHAR(100),
  telefone VARCHAR(20),
  email VARCHAR(100),
  FOREIGN KEY (modalidade_id) REFERENCES modalidades(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS preco (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modalidade_id INT NOT NULL,
    mensalidade DECIMAL(10,2) NOT NULL,   -- 'Mensalidade', 'Inscrição', 'Equipamento'
    inscricao DECIMAL(10,2) NOT NULL,
    equipamento DECIMAL(10,2) 
    FOREIGN KEY (modalidade_id) REFERENCES modalidades(id) ON DELETE CASCADE
);

-- ----------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS contacto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    assunto TEXT NOT NULL,
    mensagem TEXT NOT NULL,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
