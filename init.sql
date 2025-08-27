
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


CREATE TABLE IF NOT EXISTS modalidades (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  descrição TEXT NOT NULL,
  horario VARCHAR(250)
);


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

mysql -u root -p