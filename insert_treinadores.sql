-- ========================
-- Treinador Ricardo
-- ========================
INSERT INTO treinadores (nome, email, contacto, data_de_nascimento, data_de_inicio_gco, descricao, foto, anos_no_clube, modalidade_id)
VALUES (
  'Ricardo Miguel Fernandes',
  'ricardo.fernandes@gco.pt',
  912345678,
  '1982-06-15',
  '2018-09-01',
  'Coordenador técnico da modalidade de andebol. Responsável pela formação de treinadores juniores.',
  '/treinadores/ricardo-fernandes.jpg',
  6,
  1
);
SET @ricardo_id = LAST_INSERT_ID();

-- Categorias Ricardo
INSERT INTO categorias (nome) VALUES ('Seniores Masculinos'), ('Juvenis Masculinos')
ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID();
INSERT INTO treinador_categoria (treinador_id, categoria_id)
SELECT @ricardo_id, id FROM categorias WHERE nome IN ('Seniores Masculinos','Juvenis Masculinos');

-- Qualificações Ricardo
INSERT INTO qualificacoes (treinador_id, nivel_treinador, formacao_academica)
VALUES (@ricardo_id, 'Treinador de Andebol Grau II', 'Licenciatura em Educação Física e Desporto - FMH');
SET @ricardo_qual = LAST_INSERT_ID();

INSERT INTO certificacoes (qualificacao_id, nome_certificacao)
VALUES 
(@ricardo_qual, 'Treinador de Andebol Grau II - FAP'),
(@ricardo_qual, 'Curso de Primeiros Socorros'),
(@ricardo_qual, 'Formação em Psicologia Desportiva');

INSERT INTO cursos_especializacao (qualificacao_id, nome_curso)
VALUES 
(@ricardo_qual, 'Treino de Alto Rendimento em Andebol'),
(@ricardo_qual, 'Metodologia do Treino Juvenil'),
(@ricardo_qual, 'Análise de Jogo em Andebol');

INSERT INTO licencas (qualificacao_id, nome_licenca, validade)
VALUES 
(@ricardo_qual, 'Licença FAP', '2025-12-31'),
(@ricardo_qual, 'Certificado de Primeiros Socorros', '2025-12-31');

-- Experiência Ricardo
INSERT INTO experiencia (treinador_id, anos_experiencia) VALUES (@ricardo_id, 15);
SET @ricardo_exp = LAST_INSERT_ID();

INSERT INTO clubes_anteriores (experiencia_id, nome_clube, periodo)
VALUES
(@ricardo_exp, 'CD Póvoa', '2015-2018'),
(@ricardo_exp, 'ABC Braga', '2012-2015'),
(@ricardo_exp, 'Juventude de Viana', '2009-2012');

INSERT INTO conquistas (experiencia_id, descricao)
VALUES
(@ricardo_exp, 'Campeão Distrital Juvenis Masculinos 2023'),
(@ricardo_exp, '2º Lugar Campeonato Nacional Juniores 2022'),
(@ricardo_exp, 'Melhor Treinador do Distrito 2023');

INSERT INTO especialidades (experiencia_id, descricao)
VALUES
(@ricardo_exp, 'Formação de jovens'),
(@ricardo_exp, 'Sistemas defensivos'),
(@ricardo_exp, 'Preparação física específica'),
(@ricardo_exp, 'Análise táctica');

-- Estatísticas Ricardo
INSERT INTO estatisticas (treinador_id, atletas_formados, titulos_conquistados, anos_carreira)
VALUES (@ricardo_id, 45, 8, 15);

-- Funções Ricardo
INSERT INTO funcoes (descricao) VALUES 
('Coordenador Técnico de Andebol'),
('Responsável pela formação de treinadores'),
('Representante do clube na Associação')
ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID();
INSERT INTO treinador_funcao (treinador_id, funcao_id)
SELECT @ricardo_id, id FROM funcoes WHERE descricao IN (
  'Coordenador Técnico de Andebol',
  'Responsável pela formação de treinadores',
  'Representante do clube na Associação'
);

-- ========================
-- Treinador Sofia
-- ========================
INSERT INTO treinadores (nome, email, contacto, data_de_nascimento, data_de_inicio_gco, descricao, foto, anos_no_clube, modalidade_id)
VALUES (
  'Sofia Isabel Carvalho',
  'sofia.carvalho@gco.pt',
  913456789,
  '1989-03-22',
  '2020-09-01',
  'Responsável pelo andebol feminino e coordenadora de eventos femininos.',
  '/treinadores/sofia-carvalho.jpg',
  4,
  1
);
SET @sofia_id = LAST_INSERT_ID();

-- Categorias Sofia
INSERT INTO categorias (nome) VALUES ('Juvenis Femininos'), ('Iniciadas Femininos')
ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID();
INSERT INTO treinador_categoria (treinador_id, categoria_id)
SELECT @sofia_id, id FROM categorias WHERE nome IN ('Juvenis Femininos','Iniciadas Femininos');

-- Qualificações Sofia
INSERT INTO qualificacoes (treinador_id, nivel_treinador, formacao_academica)
VALUES (@sofia_id, 'Treinador de Andebol Grau I', 'Licenciatura em Ciências do Desporto - ULHT');
SET @sofia_qual = LAST_INSERT_ID();

INSERT INTO certificacoes (qualificacao_id, nome_certificacao)
VALUES 
(@sofia_qual, 'Treinador de Andebol Grau I - FAP'),
(@sofia_qual, 'Curso de Primeiros Socorros'),
(@sofia_qual, 'Formação em Treino Feminino');

INSERT INTO cursos_especializacao (qualificacao_id, nome_curso)
VALUES 
(@sofia_qual, 'Especificidades do Treino Feminino'),
(@sofia_qual, 'Psicologia do Desporto Juvenil');

INSERT INTO licencas (qualificacao_id, nome_licenca, validade)
VALUES 
(@sofia_qual, 'Licença FAP', '2025-12-31');

-- Experiência Sofia
INSERT INTO experiencia (treinador_id, anos_experiencia) VALUES (@sofia_id, 8);
SET @sofia_exp = LAST_INSERT_ID();

INSERT INTO clubes_anteriores (experiencia_id, nome_clube, periodo)
VALUES
(@sofia_exp, 'Madeira SAD', '2018-2020'),
(@sofia_exp, 'Estrelas da Amadora', '2016-2018');

INSERT INTO conquistas (experiencia_id, descricao)
VALUES
(@sofia_exp, '1º Lugar Torneio Regional Juvenis Femininos 2023'),
(@sofia_exp, 'Melhor treinadora jovem 2022');

INSERT INTO especialidades (experiencia_id, descricao)
VALUES
(@sofia_exp, 'Treino feminino'),
(@sofia_exp, 'Desenvolvimento técnico individual'),
(@sofia_exp, 'Motivação de equipas jovens');

-- Estatísticas Sofia
INSERT INTO estatisticas (treinador_id, atletas_formados, titulos_conquistados, anos_carreira)
VALUES (@sofia_id, 28, 3, 8);

-- Funções Sofia
INSERT INTO funcoes (descricao) VALUES 
('Responsável pelo andebol feminino'),
('Coordenadora de eventos femininos')
ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID();
INSERT INTO treinador_funcao (treinador_id, funcao_id)
SELECT @sofia_id, id FROM funcoes WHERE descricao IN (
  'Responsável pelo andebol feminino',
  'Coordenadora de eventos femininos'
);
