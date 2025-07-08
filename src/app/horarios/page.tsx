export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Horários</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg text-gray-700 mb-6">
            Confira abaixo os horários das nossas modalidades. Para mais informações, entre em contato com a secretaria.
          </p>
          
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Andebol</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-3 px-4 text-left">Escalão</th>
                    <th className="py-3 px-4 text-left">Dias</th>
                    <th className="py-3 px-4 text-left">Horário</th>
                    <th className="py-3 px-4 text-left">Local</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4">Infantis</td>
                    <td className="py-3 px-4">Terças e Quintas</td>
                    <td className="py-3 px-4">18h00-19h30</td>
                    <td className="py-3 px-4">Pavilhão Principal</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Iniciados</td>
                    <td className="py-3 px-4">Segundas e Quartas</td>
                    <td className="py-3 px-4">18h00-19h30</td>
                    <td className="py-3 px-4">Pavilhão Principal</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Juvenis</td>
                    <td className="py-3 px-4">Terças e Quintas</td>
                    <td className="py-3 px-4">19h30-21h00</td>
                    <td className="py-3 px-4">Pavilhão Principal</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Juniores</td>
                    <td className="py-3 px-4">Segundas e Quartas</td>
                    <td className="py-3 px-4">19h30-21h00</td>
                    <td className="py-3 px-4">Pavilhão Principal</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Seniores</td>
                    <td className="py-3 px-4">Terças, Quintas e Sextas</td>
                    <td className="py-3 px-4">21h00-22h30</td>
                    <td className="py-3 px-4">Pavilhão Principal</td>
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
                    <th className="py-3 px-4 text-left">Escalão</th>
                    <th className="py-3 px-4 text-left">Dias</th>
                    <th className="py-3 px-4 text-left">Horário</th>
                    <th className="py-3 px-4 text-left">Local</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4">Baby Gym (4-5 anos)</td>
                    <td className="py-3 px-4">Terças e Quintas</td>
                    <td className="py-3 px-4">17h00-18h00</td>
                    <td className="py-3 px-4">Sala de Ginástica</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Iniciação (6-8 anos)</td>
                    <td className="py-3 px-4">Segundas e Quartas</td>
                    <td className="py-3 px-4">17h00-18h30</td>
                    <td className="py-3 px-4">Sala de Ginástica</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Formação (9-12 anos)</td>
                    <td className="py-3 px-4">Terças, Quintas e Sextas</td>
                    <td className="py-3 px-4">18h00-19h30</td>
                    <td className="py-3 px-4">Sala de Ginástica</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Avançado (13+ anos)</td>
                    <td className="py-3 px-4">Segunda a Sexta</td>
                    <td className="py-3 px-4">19h30-21h30</td>
                    <td className="py-3 px-4">Sala de Ginástica</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Adultos</td>
                    <td className="py-3 px-4">Segundas, Quartas e Sextas</td>
                    <td className="py-3 px-4">20h00-21h00</td>
                    <td className="py-3 px-4">Sala Multiusos</td>
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
