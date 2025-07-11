'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Content } from 'next/font/google'

const AccordionSection = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center font-semibold text-gray-800"
      >
        <span>{title}</span>
        <span className="text-xl">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="px-6 py-4 bg-white text-gray-700">{children}</div>}
    </div>
  )
}

export default function SerSocioPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">


        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Início</Link>
            <span>/</span>
            <span className="text-gray-900">Ser Sócio</span>
          </div>
        </nav>


        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 sm:h-80 md:h-96">
            <Image
              src="/gco_exterior.png"
              alt="Ser Sócio GCO"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
              <h1 className="text-white text-4xl font-bold text-center">Ser Sócio do Ginásio Clube de Odivelas</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-gray-700 space-y-4">
              <p>
                Este espaço é dedicado aos Sócios do GCO e tem como objectivo sintetizar um conjunto de informações relevantes a todos os afiliados no Clube.
              </p>
              <p>
                Aqui estará disponível informação útil sobre as modalidades desportivas do Clube, as vantagens de ser sócio, parcerias e descontos, formulários de inscrição entre outros conteúdos que permitam aos Sócios beneficiar do melhor que o GCO tem a oferecer aos seus associados.
              </p>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Valores</h2>
              <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2">
                <p><strong>Jóia:</strong> 3,00 €</p>
                <p><strong>Cartão:</strong> 3,00 €</p>
                <p><strong>Quotas:</strong> 5,00 € mensais (60,00 € por ano)</p>
              </div>
            </div>

             <AccordionSection title="Vantagens de Ser Sócio">
              <p>
                A preencher
              </p>
              <p className="mt-2">
                Exemplo de texto aqui mesmo
                <a href="mailto:transferencias@gcodivelas.pt" className="text-blue-600 hover:underline ml-1">123456789</a>.
              </p>

              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
                Exemplo de texto aqui também blah blah blah
              </div>

                <AccordionSection title="Parcerias e Descontos">
                    <p>Parcerias e Descontos</p>
                </AccordionSection>

              
            </AccordionSection>

            <AccordionSection title="Inscrição de Menores">
              <p>
                Para a prática de qualquer modalidade desportiva por um menor de idade, é necessário que um adulto seja <strong>Sócio Efetivo</strong> para que o inscreva como <strong>Sócio Auxiliar</strong> e <strong>Atleta</strong> do clube.
              </p>
            </AccordionSection>

            <AccordionSection title="Pagamento de Quotas">
              <p>
                Conforme os Estatutos e Regulamentos gerais internos, o pagamento das quotas mensais (5,00 €) deve ser efetuado semestral ou anualmente e realizado nos primeiros quinze dias do semestre ou do ano civil, respetivamente.
              </p>
              <p className="mt-2">
                Para maior comodidade, poderá realizar os pagamentos por transferência bancária, indicando no descritivo o número de sócio e o NIF. O comprovativo da operação deve ser enviado para o email:
                <a href="mailto:transferencias@gcodivelas.pt" className="text-blue-600 hover:underline ml-1">transferencias@gcodivelas.pt</a>.
              </p>

              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
                <p><strong>NIB:</strong> 0010 0000 64263690001 91</p>
                <p><strong>IBAN:</strong> PT50 0010 0000 6426 3690 0019 1</p>
                <p><strong>SWIFT/BIC:</strong> BBPIPTPL</p>
              </div>
            </AccordionSection>

            <AccordionSection title="Documentos">
                <p>gfsdkg</p>
                <iframe
                    src="\Flyer GCO_2024_2025_1.3.pdf"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                />
            
            </AccordionSection>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contactos</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:info@gcodivelas.pt" className="text-blue-600 hover:underline">gco@gcodivelas.pt</a>
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Telefone:</strong> +351 21 932 6546
              </p>
              <p className="text-sm text-gray-700">
                <strong>Morada:</strong> R. Tomás José Olaio, 2675-304 Odivelas
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Liga-te ao Clube</h3>
              <Link
                href="/inscricoes"
                className="block w-full bg-blue-700 hover:bg-blue-800 text-white text-center py-3 rounded-lg font-semibold transition-colors"
              >
                Inscrever-se Agora
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Voltar ao Início
          </Link>
        </div>
      </div>
    </main>
  )
}
