export interface EventoCalendario {
  date: Date;
  activities: string[];
}

export const eventosCalendario: EventoCalendario[] = [
  { 
    date: new Date(2025, 6, 1), 
    activities: ['Andebol - Seniores (20:00)', 'Ginástica - Competição (18:30)'] 
  },
  { 
    date: new Date(2025, 6, 2), 
    activities: ['Xadrez - Iniciados (16:00)', 'Patinagem - Recreativa (17:30)'] 
  },
  { 
    date: new Date(2025, 6, 8), 
    activities: ['Andebol - Juvenis (19:00)', 'Ginástica - Adultos (21:00)'] 
  },
  { 
    date: new Date(2025, 6, 14), 
    activities: ['Xadrez - Adultos (15:00)', 'Patinagem - Iniciantes (16:30)'] 
  },
  { 
    date: new Date(2025, 6, 21), 
    activities: ['Andebol - Infantis (17:00)', 'Xadrez - Torneio (14:00)'] 
  },
  { 
    date: new Date(2025, 6, 28), 
    activities: ['Ginástica - Exibição (19:00)', 'Patinagem - Competição (16:00)'] 
  },

  { 
    date: new Date(2025, 7, 5), 
    activities: ['Andebol - Treino Geral (18:00)', 'Ginástica - Iniciação (19:30)'] 
  },
  { 
    date: new Date(2025, 7, 12), 
    activities: ['Xadrez - Simultaneas (15:00)', 'Patinagem - Recreativa (17:00)'] 
  },
  { 
    date: new Date(2025, 7, 15), 
    activities: ['Andebol - Infantis (18:00)', 'Ginástica - Iniciação (19:30)'] 
  },
  { 
    date: new Date(2025, 7, 16), 
    activities: ['Xadrez - Juvenis (15:00)', 'Patinagem - Competição (17:00)'] 
  },
  { 
    date: new Date(2025, 7, 19), 
    activities: ['Andebol - Seniores vs Benfica (20:30)'] 
  },
  { 
    date: new Date(2025, 7, 22),
    activities: ['Andebol - Seniores (20:00)', 'Ginástica - Competição Regional (18:00)'] 
  },
  { 
    date: new Date(2025, 7, 26), 
    activities: ['Xadrez - Torneio Interno (14:00)', 'Patinagem - Exibição (16:30)'] 
  },
  { 
    date: new Date(2025, 8, 3), 
    activities: ['Andebol - Início da Época (19:00)', 'Ginástica - Inscrições Abertas (18:00)'] 
  },
  { 
    date: new Date(2025, 8, 7), 
    activities: ['Xadrez - Campeonato Distrital (15:00)'] 
  },
  { 
    date: new Date(2025, 8, 10), 
    activities: ['Patinagem - Treinos Intensivos (17:00)', 'Andebol - Juvenis (18:30)'] 
  },
  { 
    date: new Date(2025, 8, 14), 
    activities: ['Ginástica - Competição Nacional (10:00)', 'Xadrez - Torneio Juvenil (14:00)'] 
  },
  { 
    date: new Date(2025, 8, 21), 
    activities: ['Andebol - Seniores vs Sporting (21:00)'] 
  },
  { 
    date: new Date(2025, 8, 28), 
    activities: ['Patinagem - Gala de Fim de Verão (19:00)', 'Xadrez - Simultâneas (16:00)'] 
  },

  { 
    date: new Date(2025, 9, 5), 
    activities: ['Andebol - Taça de Portugal (18:00)', 'Ginástica - Treino Geral (20:00)'] 
  },
  { 
    date: new Date(2025, 9, 12), 
    activities: ['Xadrez - Campeonato Regional (14:00)', 'Patinagem - Competição Juvenil (16:00)'] 
  },
  { 
    date: new Date(2025, 9, 19), 
    activities: ['Andebol - Derby Local (19:30)', 'Ginástica - Exibição de Outono (18:00)'] 
  },
  { 
    date: new Date(2025, 9, 26), 
    activities: ['Patinagem - Torneio Halloween (17:00)', 'Xadrez - Torneio Rápido (15:00)'] 
  }
];

export const getEventosForDate = (date: Date): string[] => {
  const eventoDay = eventosCalendario.find(evento => 
    evento.date.getFullYear() === date.getFullYear() &&
    evento.date.getMonth() === date.getMonth() &&
    evento.date.getDate() === date.getDate()
  );
  
  return eventoDay ? eventoDay.activities : [];
};

export const getEventosForMonth = (year: number, month: number): EventoCalendario[] => {
  return eventosCalendario.filter(evento => 
    evento.date.getFullYear() === year && evento.date.getMonth() === month
  );
};

export const hasEventos = (date: Date): boolean => {
  return getEventosForDate(date).length > 0;
};
