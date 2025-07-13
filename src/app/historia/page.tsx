'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import LogoRain from '@/components/layout/LogoRain';

export default function HistoriaPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollTop / docHeight) * 100, 100);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineItems = [
    {
      year: '1978',
      title: 'Fundação e Primeiros Passos',
      subtitle: 'O nascimento de um sonho',
      content: `Tendo em vista o engrandecimento do desporto nacional e a promoção da acção cultural, nasceu em 5 de maio de 1978 o Ginásio Clube de Odivelas (G.C.O), então denominado Ginásio Clube Recreativo Estrelas do Bairro Olaio (E.B.O).

A fundação foi fruto da iniciativa de um grupo de homens, mulheres e jovens determinados a transformar o panorama desportivo e cultural de uma localidade tão densa e populosa como Odivelas.`,
      image: '/2000_5f6603a8de4ce.jpg', // Imagem do logótipo do clube para representar a fundação
      emoji: '📆'
    },
    {
      year: '1978 - 1988',
      title: 'A Primeira Década',
      subtitle: 'Crescimento explosivo e superação',
      content: `Nos primeiros dez anos de existência, o clube deparou-se com uma adesão massiva da população, motivada pela grande carência de actividades desportivas na zona. A resposta a essa procura foi feita com muito esforço, dedicação e resistência.

O crescimento foi impressionante:
• De 75 para 1200 atletas inscritos
• De 200 para 4500 associados
• De 9.500$00 para 8.000.000$00 em despesas anuais
• De 2 para 7 modalidades: atletismo, futebol de cinco, andebol, ginástica, patinagem artística, hóquei em patins e ténis de mesa

Apesar das dificuldades constantes, foi uma década de ouro para o clube.`,
      image: '/2000_5f6603c1a38cf.jpg', // Imagem histórica do clube
      emoji: '📆'
    },
    {
      year: '1988 - 1992',
      title: 'Um Clube em Transição',
      subtitle: 'Dificuldades, conquistas e uma nova identidade',
      content: `Com o aumento das despesas anuais para valores na ordem das dezenas de milhares de contos, o clube passou a enfrentar desafios mais exigentes. Algumas modalidades tiveram de ser suspensas, como o ténis de mesa, o atletismo e o futebol de cinco, por falta de recursos e espaços de treino adequados.

Ainda assim, houve conquistas relevantes:
• Títulos nacionais individuais e colectivos na patinagem artística
• Destaques no andebol, ginástica e xadrez

Perante a nova dimensão e prestígio alcançado, o nome original deixou de reflectir a realidade do clube. Assim, no dia 22 de maio de 1992, por escritura pública no 23º Cartório Notarial de Lisboa, passou a designar-se oficialmente Ginásio Clube de Odivelas.`,
      image: '/gco_exterior.png',
      emoji: '📆'
    },
    {
      year: '1992 - Presente',
      title: 'Consolidação, lutas e ambição',
      subtitle: 'O futuro em construção',
      content: `Desde a mudança de nome, o G.C.O. tem enfrentado batalhas constantes em busca de melhores condições e sustentabilidade. Entre os grandes objectivos e desafios destacam-se:

• A candidatura ao Bingo (atribuído ao O.F.C.)
• A construção do ginásio sede
• A melhoria das condições de treino, da assistência e da higiene
• A procura contínua de apoios financeiros e logísticos
• A preocupação permanente com o atendimento aos associados e à população

A motivação mantém-se inabalável: fazer do G.C.O. o maior e melhor clube do concelho de Odivelas.`,
      image: '/2000_5f6603c1a8aad.jpg', // Logótipo actual do clube
      emoji: '📆'
    }
  ];

  const apoios = [
    'Comissão Instaladora do Município de Odivelas',
    'Câmara Municipal de Odivelas',
    'Junta de Freguesia de Odivelas',
    'Governo Civil de Lisboa',
    'Instituto Nacional de Desporto',
    'Todas as entidades privadas que têm contribuído para a nossa missão'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
     
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
         <LogoRain />
         <LogoRain />
         <LogoRain />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            A NOSSA HISTÓRIA
          </h1>
          <div className="flex items-center justify-center space-x-4 text-2xl font-semibold">
            <span className="text-yellow-400">1978</span>
            <span>•</span>
            <span className="text-yellow-400">2025</span>
          </div>
          <p className="text-xl mt-4 opacity-90">
            47 anos de paixão, dedicação e conquistas
          </p>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-400 rounded-full"></div>
        </div>
      </div>

      <div className="relative py-16">
        <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-1 bg-gray-300 opacity-40"></div>
        
        <div 
          className="absolute left-1/2 transform -translate-x-0.5 top-0 w-1 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 transition-all duration-300 ease-out"
          style={{
            height: `${scrollProgress}%`,
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)'
          }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="mb-20 relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full border-4 border-white shadow-lg z-20"></div>
                  
                  <div className={`hidden lg:flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2 px-8">
                      <div className={`${isEven ? 'ml-auto mr-8' : 'mr-auto ml-8'} max-w-lg`}>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                          <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                            <Image
                              src={item.image}
                              alt={`${item.title} - ${item.year}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-1/2 px-8">
                      <div className={`${isEven ? 'mr-auto ml-8' : 'ml-auto mr-8'} max-w-lg`}>
                        <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                          <div className="flex items-center mb-4">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                              {item.emoji} {item.year}
                            </div>
                          </div>
                          
                          <h2 className="text-3xl font-bold text-gray-800 mb-3">
                            {item.title}
                          </h2>
                          
                          <h3 className="text-xl text-blue-600 font-semibold mb-6 italic">
                            {item.subtitle}
                          </h3>
                          
                          <div className="text-gray-700 leading-relaxed space-y-4">
                            {item.content.split('\n\n').map((paragraph, pIndex) => (
                              <p key={pIndex} className="text-base">
                                {paragraph.split('\n').map((line, lIndex) => (
                                  <span key={lIndex}>
                                    {line}
                                    {lIndex < paragraph.split('\n').length - 1 && <br />}
                                  </span>
                                ))}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:hidden">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mt-8 mx-4">
                      <div className="relative overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                          <Image
                            src={item.image}
                            alt={`${item.title} - ${item.year}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                            {item.emoji} {item.year}
                          </div>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                          {item.title}
                        </h2>
                        
                        <h3 className="text-lg text-blue-600 font-semibold mb-4 italic">
                          {item.subtitle}
                        </h3>
                        
                        <div className="text-gray-700 leading-relaxed space-y-3">
                          {item.content.split('\n\n').map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-sm">
                              {paragraph.split('\n').map((line, lIndex) => (
                                <span key={lIndex}>
                                  {line}
                                  {lIndex < paragraph.split('\n').length - 1 && <br />}
                                </span>
                              ))}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <span className="mr-3">🤝</span>
              Apoios Institucionais
            </h2>
            <p className="text-xl mb-8 opacity-90 italic">
              Gratidão a quem caminha ao nosso lado
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <p className="text-lg mb-6 leading-relaxed">
                O crescimento e continuidade do clube só têm sido possíveis com o apoio de várias entidades e instituições, às quais deixamos o nosso profundo agradecimento:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {apoios.map((apoio, index) => (
                  <div key={index} className="bg-white/20 rounded-lg p-4 hover:bg-white/30 transition-colors duration-300">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-white font-medium">{apoio}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20 bg-gradient-to-r from-blue-100 to-blue-50"></div>
    </div>
  );
}
