import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const modalidades = [
    { name: 'Ginástica', href: '/modalidades/ginastica' },
    { name: 'Patinagem Artística', href: '/modalidades/patinagem-artistica' },
    { name: 'Andebol', href: '/modalidades/andebol' },
    { name: 'Hóquei em Patins', href: '/modalidades/hoquei-patins' },
    { name: 'Xadrez', href: '/modalidades/xadrez' },
  ];

  const linksSociais = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297L6.388 14.423c.548.548 1.297.914 2.127.914c1.662 0 3.006-1.344 3.006-3.006S10.177 9.325 8.515 9.325c-.83 0-1.579.366-2.127.914L5.121 8.971c.88-.807 2.031-1.297 3.328-1.297c2.727 0 4.938 2.211 4.938 4.938s-2.211 4.938-4.938 4.938z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-1">
                <img
                  src="/GCO-LOGO-noBG.png"
                  alt="Ginásio Clube de Odivelas Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Ginásio Clube de Odivelas
                </h3>
                <p className="text-sm text-gray-300">Desporto e Cultura</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Com sede em Odivelas, o clube dedica-se à promoção da prática desportiva e cultural, 
              oferecendo diversas modalidades para todas as idades.
            </p>
            
            <div className="flex space-x-4">
              {linksSociais.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Modalidades</h3>
            <ul className="space-y-2">
              {modalidades.slice(0, 5).map((modalidade) => (
                <li key={modalidade.name}>
                  <Link
                    href={modalidade.href}
                    className="text-gray-300 hover:text-yellow-400 text-sm transition-colors"
                  >
                    {modalidade.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/modalidades"
                  className="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors"
                >
                  Ver todas →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/horarios"
                  className="text-gray-300 hover:text-yellow-400 text-sm transition-colors"
                >
                  Horários e Mensalidades
                </Link>
              </li>
              <li>
                <Link
                  href="/inscricoes"
                  className="text-gray-300 hover:text-yellow-400 text-sm transition-colors"
                >
                  Inscrições
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className="text-gray-300 hover:text-yellow-400 text-sm transition-colors"
                >
                  Notícias
                </Link>
              </li>
              <li>
                <Link
                  href="/arquivo-patinagem"
                  className="text-gray-300 hover:text-yellow-400 text-sm transition-colors"
                >
                  Arquivo de Patinagem
                </Link>
              </li>
              <li>
                <Link
                  href="/federacao-andebol"
                  className="text-gray-300 hover:text-yellow-400 text-sm transition-colors"
                >
                  Federação de Andebol
                </Link>
              </li>
              <li>
                <Link
                  href="/oriental-lisboa"
                  className="text-gray-300 hover:text-yellow-400 text-sm transition-colors"
                >
                  Oriental Lisboa
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contactos</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-gray-300 text-sm">
                    R. Tomás José Olaio, 2675-304 Odivelas
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p className="text-gray-300 text-sm">+351 21 932 6546</p>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p className="text-gray-300 text-sm">gco@gcodivelas.pt</p>
              </div>

              <div className="mt-4">
                <Link
                  href="/contactos"
                  className="inline-flex items-center px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Contactar-nos
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Ginásio Clube de Odivelas. Todos os direitos reservados.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
              <Link
                href="/privacidade"
                className="text-gray-400 hover:text-yellow-400 text-sm transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-gray-400 hover:text-yellow-400 text-sm transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;