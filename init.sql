
CREATE DATABASE IF NOT EXISTS gco_dev;
USE gco_dev;


CREATE TABLE IF NOT EXISTS atletas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(250) NOT NULL,
  data_de_nascimento DATE NOT NULL,
  horario VARCHAR(250) NOT NULL,
  modalidade_id INT,
  FOREIGN KEY (modalidade_id) REFERENCES modalidades(id) ON DELETE SET NULL,
);

--------------------------------------------------------------------------------------------------------
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
    tipo VARCHAR(50) NOT NULL,   -- 'Mensalidade', 'Inscrição', 'Equipamento'
    valor DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (modalidade_id) REFERENCES modalidades(id) ON DELETE CASCADE
);

------------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS galeria (
  id INT AUTO_INCREMENT PRIMARY KEY,
  imagem_url VARCHAR(250) NOT NULL,
  legenda TEXT,
  modalidade_id INT NOT NULL UNIQUE,
  FOREIGN KEY (modalidade_id) REFERENCES modalidades(id) ON DELETE CASCADE
);

/* Esta tabela agrupa as fotos por atleta */

CREATE TABLE IF NOT EXISTS galeria_atletas (
  galeria_id INT NOT NULL,
  atleta_id INT NOT NULL,
  PRIMARY KEY (galeria_id, atleta_id),
  FOREIGN KEY (galeria_id) REFERENCES galeria(id) ON DELETE CASCADE,
  FOREIGN KEY (atleta_id) REFERENCES atletas(id) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS contacto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    assunto TEXT NOT NULL,
    mensagem TEXT NOT NULL,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

------------------------------------------------------------------------
CREATE TABLE treinadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    contacto INT,
    data_de_nascimento DATE,
    data_de_inicio_gco DATE,
    descricao TEXT,
    foto VARCHAR(250),
    anos_no_clube INT,
    modalidade_id INT NOT NULL,
    FOREIGN KEY (modalidade_id) REFERENCES modalidades(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL
);

CREATE TABLE treinador_categoria (
  treinador_id INT,
  categoria_id INT,
  PRIMARY KEY(treinador_id, categoria_id),
  FOREIGN KEY (treinador_id) REFERENCES treinadores(id),
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);


CREATE TABLE qualificacoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  treinador_id INT,
  nivel_treinador VARCHAR(100),
  formacao_academica VARCHAR(250),
  FOREIGN KEY (treinador_id) REFERENCES treinadores(id)
);

CREATE TABLE certificacoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  qualificacao_id INT,
  nome_certificacao VARCHAR(250),
  FOREIGN KEY (qualificacao_id) REFERENCES qualificacoes(id)
);

CREATE TABLE cursos_especializacao (
  id INT AUTO_INCREMENT PRIMARY KEY,
  qualificacao_id INT,
  nome_curso VARCHAR(250),
  FOREIGN KEY (qualificacao_id) REFERENCES qualificacoes(id)
);

CREATE TABLE licencas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  qualificacao_id INT,
  nome_licenca VARCHAR(250),
  validade DATE,
  FOREIGN KEY (qualificacao_id) REFERENCES qualificacoes(id)
);


CREATE TABLE experiencia (
  id INT AUTO_INCREMENT PRIMARY KEY,
  treinador_id INT,
  anos_experiencia INT,
  FOREIGN KEY (treinador_id) REFERENCES treinadores(id)
);

CREATE TABLE clubes_anteriores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  experiencia_id INT,
  nome_clube VARCHAR(250),
  periodo VARCHAR(50),
  FOREIGN KEY (experiencia_id) REFERENCES experiencia(id)
);

CREATE TABLE conquistas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  experiencia_id INT,
  descricao VARCHAR(250),
  FOREIGN KEY (experiencia_id) REFERENCES experiencia(id)
);

CREATE TABLE especialidades (
  id INT AUTO_INCREMENT PRIMARY KEY,
  experiencia_id INT,
  descricao VARCHAR(250),
  FOREIGN KEY (experiencia_id) REFERENCES experiencia(id)
);

CREATE TABLE estatisticas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  treinador_id INT,
  atletas_formados INT,
  titulos_conquistados INT,
  anos_carreira INT,
  FOREIGN KEY (treinador_id) REFERENCES treinadores(id)
);


CREATE TABLE funcoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  descricao VARCHAR(250)
);

CREATE TABLE treinador_funcao (
  treinador_id INT,
  funcao_id INT,
  PRIMARY KEY(treinador_id, funcao_id),
  FOREIGN KEY (treinador_id) REFERENCES treinadores(id),
  FOREIGN KEY (funcao_id) REFERENCES funcoes(id)
);


------------------------------------------------------------------