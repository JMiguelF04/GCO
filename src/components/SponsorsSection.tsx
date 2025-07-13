'use client';

import React from 'react';
import Image from 'next/image';

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  website?: string;
}

const SponsorsSection = () => {
  const sponsors: Sponsor[] = [
    
    { id: 1, name: 'AGP Auto', logo: '/images (1).png', website: 'https://sponsor1.com' },
    { id: 2, name: 'Contas Soltas', logo: '/logo-net-empregos.jpg', website: 'https://sponsor2.com' },
    { id: 3, name: 'Janellux', logo: '/images.png', website: 'https://sponsor3.com' },
    { id: 4, name: 'Lord Of Light', logo: '/LL-LORD-OF-LIGHT.png', website: 'https://sponsor4.com' },
    { id: 5, name: 'Luís Almeida', logo: '/464827826_1118815626910352_2442819469883028132_n-removebg-preview (2).png', website: 'https://sponsor5.com' },
  ];

  const allSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 border-t border-blue-200 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-800 mb-3">
            Os Nossos Parceiros
          </h2>
          <p className="text-blue-600 text-lg">
            Agradecemos o apoio dos nossos patrocinadores
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {allSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.id}-${index}`}
                className="flex-shrink-0 mx-4 group cursor-pointer"
                onClick={() => sponsor.website && sponsor.website !== '#' && window.open(sponsor.website, '_blank')}
              >
                <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 border-2 border-blue-100 group-hover:border-yellow-400 w-36 h-24 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-yellow-100">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={120}
                    height={60}
                    className="object-contain group-hover:scale-110 transition-transform duration-300 max-w-full max-h-full drop-shadow-sm"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-blue-50 via-blue-100 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-blue-50 via-blue-100 to-transparent pointer-events-none z-10"></div>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
