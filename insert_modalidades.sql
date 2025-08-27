-- ========================================
-- INSERIR MODALIDADES
-- ========================================
INSERT INTO modalidades (id, nome, slug, icone, descricao, ativo, categoria, idade_minima)
VALUES
(1, 'Andebol', 'andebol', '/icones-modalidades/andebol.png', 'Equipas competitivas em várias categorias etárias.', 1, 'Desporto Coletivo', 6),
(2, 'Ginástica', 'ginastica', '/icones-modalidades/ginastica.png', 'Atividade física que promove a flexibilidade, coordenação e disciplina.', 1, 'Individual', 4),
(3, 'Patinagem Artística', 'patinagem-artistica', '/icones-modalidades/patinagem.png', 'Desporto artístico que combina técnica, dança e expressão corporal.', 1, 'Individual', 5),
(4, 'Xadrez', 'xadrez', '/icones-modalidades/xadrez.png', 'Jogo de estratégia que desenvolve raciocínio lógico e concentração.', 1, 'Intelectual', 6),
(5, 'Hóquei em Patins', 'hoquei-em-patins', '/icones-modalidades/hoquei.png', 'Desporto coletivo rápido e competitivo praticado em patins.', 1, 'Coletiva', 6);

-- ========================================
-- INSERIR PREÇOS
-- ========================================
INSERT INTO preco (modalidade_id, mensalidade, inscricao, equipamento)
VALUES
(1, 30, 60, 90),
(2, 40, 70, 60),
(3, 45, 80, 140),
(4, 25, 35, NULL);

-- ========================================
-- INSERIR HORÁRIOS
-- ========================================
INSERT INTO horarios (modalidade_id, dia, inicio, fim, nivel, grupo)
VALUES
-- Andebol
(1, 'Segunda-feira', '17:30', '19:00', 'Iniciação', 'Minis (6-8 anos)'),
(1, 'Quarta-feira', '17:30', '19:00', 'Iniciação', 'Minis (6-8 anos)'),
(1, 'Terça-feira', '18:30', '20:00', 'Formação', 'Infantis (9-11 anos)'),
(1, 'Quinta-feira', '18:30', '20:00', 'Formação', 'Infantis (9-11 anos)'),
(1, 'Segunda-feira', '19:00', '21:00', 'Competição', 'Iniciados (12-14 anos)'),
(1, 'Quarta-feira', '19:00', '21:00', 'Competição', 'Iniciados (12-14 anos)'),
(1, 'Sexta-feira', '19:00', '21:00', 'Competição', 'Iniciados (12-14 anos)'),
(1, 'Terça-feira', '19:30', '21:30', 'Competição', 'Juvenis Femininos (15-17 anos)'),
(1, 'Quinta-feira', '19:30', '21:30', 'Competição', 'Juvenis Femininos (15-17 anos)'),
(1, 'Sábado', '09:30', '11:30', 'Competição', 'Juvenis Femininos (15-17 anos)'),
(1, 'Terça-feira', '20:00', '22:00', 'Alto Rendimento', 'Juvenis/Juniores Masculinos (15+ anos)'),
(1, 'Quinta-feira', '20:00', '22:00', 'Alto Rendimento', 'Juvenis/Juniores Masculinos (15+ anos)'),
(1, 'Sábado', '10:00', '12:00', 'Alto Rendimento', 'Juvenis/Juniores Masculinos (15+ anos)'),
-- Ginástica
(2, 'Segunda-feira', '16:30', '17:30', 'Baby Gym', '3-5 anos'),
(2, 'Quarta-feira', '16:30', '17:30', 'Baby Gym', '3-5 anos'),
(2, 'Sexta-feira', '16:30', '17:30', 'Baby Gym', '3-5 anos'),
(2, 'Terça-feira', '17:30', '19:00', 'Iniciação', '6-8 anos'),
(2, 'Quinta-feira', '17:30', '19:00', 'Iniciação', '6-8 anos'),
(2, 'Segunda-feira', '18:00', '20:00', 'Elementar', '9-12 anos'),
(2, 'Quarta-feira', '18:00', '20:00', 'Elementar', '9-12 anos'),
(2, 'Sexta-feira', '17:30', '19:30', 'Elementar', '9-12 anos'),
(2, 'Terça-feira', '19:00', '21:00', 'Avançado', '13+ anos'),
(2, 'Quinta-feira', '19:00', '21:00', 'Avançado', '13+ anos'),
(2, 'Sábado', '09:00', '12:00', 'Competição', 'Selecionados'),
-- Patinagem Artística
(3, 'Terça-feira', '16:45', '17:45', 'Iniciação', '4-6 anos'),
(3, 'Quinta-feira', '16:45', '17:45', 'Iniciação', '4-6 anos'),
(3, 'Segunda-feira', '17:45', '19:15', 'Elementar', '7-10 anos'),
(3, 'Quarta-feira', '17:45', '19:15', 'Elementar', '7-10 anos'),
(3, 'Terça-feira', '18:45', '20:45', 'Avançado', '11+ anos'),
(3, 'Quinta-feira', '18:45', '20:45', 'Avançado', '11+ anos'),
(3, 'Sábado', '09:30', '12:30', 'Competição', 'Todos os níveis'),
-- Xadrez
(4, 'Quarta-feira', '17:00', '18:00', 'Iniciação', '5-8 anos'),
(4, 'Sábado', '09:30', '10:30', 'Iniciação', '5-8 anos'),
(4, 'Quarta-feira', '18:00', '19:30', 'Intermédio', '9-14 anos'),
(4, 'Sábado', '10:30', '12:00', 'Intermédio', '9-14 anos'),
(4, 'Quinta-feira', '18:30', '20:30', 'Avançado', '15+ anos'),
(4, 'Sábado', '14:00', '17:00', 'Competição', 'Todos os níveis');
-- ========================================
-- INSERIR NÍVEIS
-- ========================================
INSERT INTO niveis (modalidade_id, descricao)
VALUES
(1, 'Iniciação'), (1, 'Avançado'),
(2, 'Base'), (2, 'Intermédio'),
(3, 'Iniciação'), (3, 'Avançado'),
(4, 'Todos os níveis'),
(5, 'Iniciação'), (5, 'Avançado');

--=============================================================================
-- INSERIR EQUIPAMENTO
--=============================================================================

INSERT INTO equipamento (modalidade_id, nome) VALUES
(1, 'Equipamento desportivo'),
(1, 'Sapatilhas adequadas'),
(1, 'Proteções (opcional)'),
(2, 'Fato de ginástica'),
(2, 'Sapatilhas de ginástica'),
(2, 'Proteções para pulsos (opcional)'),
(3, 'Patins artísticos'),
(3, 'Equipamento de proteção'),
(3, 'Roupa adequada'),
(3, 'Capacete (iniciação)'),
(4, 'Material fornecido pelo clube');

-- ========================================
-- INSERIR COMPETIÇÕES
-- ========================================
INSERT INTO competicoes (modalidade_id, nome)
VALUES
(1, 'Campeonato Distrital Sub-18'),
(1, 'Torneios Inter-escolas'),
(2, 'Festival de Ginástica Local'),
(3, 'Campeonato Nacional de Patinagem Artística'),
(4, 'Campeonato Distrital de Xadrez'),
(4, 'Open de Lisboa'),
(5, 'Campeonato Nacional Sub-18'),
(5, 'Torneio Internacional de Hóquei em Patins');

-- ========================================
-- INSERIR DETALHES
-- ========================================
INSERT INTO detalhes_modalidade (modalidade_id, introducao, metodologia, avaliacao, progressao)
VALUES
(1, 'Introdução ao Andebol.', 'Treinos técnicos e táticos em equipa.', 'Avaliação contínua com jogos.', 'Progressão por escalões etários.'),
(2, 'Introdução à Ginástica.', 'Exercícios de coordenação e flexibilidade.', 'Avaliação em apresentações e testes práticos.', 'Progressão por níveis técnicos.'),
(3, 'Introdução à Patinagem Artística.', 'Treinos de técnica, coreografia e expressão.', 'Avaliação em campeonatos e exibições.', 'Progressão baseada em competições oficiais.'),
(4, 'Introdução ao Xadrez.', 'Aulas teóricas e práticas com simulações.', 'Avaliação em torneios internos.', 'Progressão para torneios distritais e nacionais.'),
(5, 'Introdução ao Hóquei em Patins.', 'Treinos coletivos com foco em velocidade e técnica.', 'Avaliação em jogos competitivos.', 'Progressão por escalões federados.');

-- ========================================
-- INSERIR CONTACTOS
-- ========================================
INSERT INTO contacto_modalidade (modalidade_id, responsavel, telefone, email)
VALUES
(1, 'João Silva', '912345678', 'joao.silva@gco.pt'),
(2, 'Maria Costa', '913456789', 'maria.costa@gco.pt'),
(3, 'Ana Ferreira', '914567890', 'ana.ferreira@gco.pt'),
(4, 'Pedro Santos', '915678901', 'pedro.santos@gco.pt'),
(5, 'Rui Almeida', '916789012', 'rui.almeida@gco.pt');




