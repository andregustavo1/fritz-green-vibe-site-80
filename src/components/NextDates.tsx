
import { useInView } from '@/hooks/use-intersection-observer';

const NextDates = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const upcomingDates = [
    { date: '29/03', event: 'FABRICA DOS SONHOS', city: 'POA' },
    { date: '04/04', event: 'TURVO SC', city: 'TURVO SC' },
    { date: '09/05', event: 'TBA', city: 'POA' },
    { date: '14/06', event: 'PRIVATE PARTY', city: 'POA' },
    { date: '26/07', event: 'TBA', city: 'POA' },
    { date: '26/09', event: 'EARTHDANCE', city: 'Capão da Canoa' },
  ];
  
  return (
    <section id="agenda" className="py-24 bg-fritzgreen-black">
      <div className="container mx-auto px-4">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title mb-4 relative inline-block">
            NEXT DATES
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-fritzgreen-accent"></span>
          </h2>
          <p className="text-fritzgreen-gray-100 max-w-2xl">Próximos shows e eventos</p>
        </div>
        
        <div className={`overflow-x-auto transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <table className="w-full min-w-full border-collapse">
            <thead>
              <tr className="text-left border-b border-fritzgreen-gray-400/30">
                <th className="py-4 px-4 text-fritzgreen-white font-medium">DATE</th>
                <th className="py-4 px-4 text-fritzgreen-white font-medium">EVENT</th>
                <th className="py-4 px-4 text-fritzgreen-white font-medium">CITY</th>
              </tr>
            </thead>
            <tbody>
              {upcomingDates.map((date, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-fritzgreen-gray-400/10 transition-all duration-500 hover:bg-fritzgreen-gray-800/20`}
                >
                  <td className="py-4 px-4 text-fritzgreen-white">{date.date}</td>
                  <td className="py-4 px-4 text-fritzgreen-white">{date.event}</td>
                  <td className="py-4 px-4 text-fritzgreen-white">{date.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className={`mt-12 text-center transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="https://wa.me/+5500000000000?text=Olá,%20gostaria%20de%20informações%20sobre%20próximos%20shows" 
            className="btn bg-transparent border-fritzgreen-white text-fritzgreen-white hover:bg-fritzgreen-accent hover:text-fritzgreen-black hover:border-fritzgreen-accent"
            target="_blank" rel="noopener noreferrer"
          >
            Ver Agenda Completa
          </a>
        </div>
      </div>
    </section>
  );
};

export default NextDates;
