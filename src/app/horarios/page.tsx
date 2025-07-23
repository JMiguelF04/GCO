export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Horários</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg text-gray-700 mb-6">
            Consulte abaixo os horários das nossas modalidades. Para mais informações, entre em contato com a secretaria.
          </p>
          
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Andebol</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-3 px-4 text-left text-black">Escalão</th>
                    <th className="py-3 px-4 text-left text-black">Dias</th>
                    <th className="py-3 px-4 text-left text-black">Horário</th>
                    <th className="py-3 px-4 text-left text-black">Local</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black">
                  <tr>
                    <td className="py-3 px-4 text-black">Infantis</td>
                    <td className="py-3 px-4 text-black">Terças e Quintas</td>
                    <td className="py-3 px-4 text-black">18h00-19h30</td>
                    <td className="py-3 px-4 text-black">Pavilhão Principal</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-black">Iniciados</td>
                    <td className="py-3 px-4 text-black">Segundas e Quartas</td>
                    <td className="py-3 px-4 text-black">18h00-19h30</td>
                    <td className="py-3 px-4 text-black">Pavilhão Principal</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-black">Juvenis</td>
                    <td className="py-3 px-4 text-black">Terças e Quintas</td>
                    <td className="py-3 px-4 text-black">19h30-21h00</td>
                    <td className="py-3 px-4 text-black">Pavilhão Principal</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-black">Juniores</td>
                    <td className="py-3 px-4 text-black">Segundas e Quartas</td>
                    <td className="py-3 px-4 text-black">19h30-21h00</td>
                    <td className="py-3 px-4 text-black">Pavilhão Principal</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-black">Seniores</td>
                    <td className="py-3 px-4 text-black">Terças, Quintas e Sextas</td>
                    <td className="py-3 px-4 text-black">21h00-22h30</td>
                    <td className="py-3 px-4 text-black">Pavilhão Principal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Ginástica</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-3 px-4 text-left text-black">Escalão</th>
                    <th className="py-3 px-4 text-left text-black">Dias</th>
                    <th className="py-3 px-4 text-left text-black">Horário</th>
                    <th className="py-3 px-4 text-left text-black">Local</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black">
                  <tr>
                    <td className="py-3 px-4 text-black">Baby Gym (4-5 anos)</td>
                    <td className="py-3 px-4 text-black">Terças e Quintas</td>
                    <td className="py-3 px-4 text-black">17h00-18h00</td>
                    <td className="py-3 px-4 text-black">Sala de Ginástica</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-black">Iniciação (6-8 anos)</td>
                    <td className="py-3 px-4 text-black">Segundas e Quartas</td>
                    <td className="py-3 px-4 text-black">17h00-18h30</td>
                    <td className="py-3 px-4 text-black">Sala de Ginástica</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-black">Formação (9-12 anos)</td>
                    <td className="py-3 px-4 text-black">Terças, Quintas e Sextas</td>
                    <td className="py-3 px-4 text-black">18h00-19h30</td>
                    <td className="py-3 px-4 text-black">Sala de Ginástica</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-black">Avançado (13+ anos)</td>
                    <td className="py-3 px-4 text-black">Segunda a Sexta</td>
                    <td className="py-3 px-4 text-black">19h30-21h30</td>
                    <td className="py-3 px-4 text-black">Sala de Ginástica</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-black">Adultos</td>
                    <td className="py-3 px-4 text-black">Segundas, Quartas e Sextas</td>
                    <td className="py-3 px-4 text-black">20h00-21h00</td>
                    <td className="py-3 px-4 text-black">Sala Multiusos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mais seções de horários para outras modalidades */}
        </div>
      </div>
    </main>
  );
}
