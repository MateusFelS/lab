import { useState } from 'react';
import { Link } from 'react-router-dom';
import IMAGEM_UM from '../assets/services/1.png';
import IMAGEM_DOIS from '../assets/services/2.png';
import IMAGEM_TRES from '../assets/services/3.png';
import IMAGEM_QUATRO from '../assets/services/4.png';
import IMAGEM_CINCO from '../assets/services/5.png';
import IMAGEM_SEIS from '../assets/services/6.png';
import IMAGEM_SETE from '../assets/services/7.png';
import IMAGEM_OITO from '../assets/services/8.png';
import ESTRELAS from '../assets/images/estrelas.png';

const servicos = [
  { id: 1, nome: 'Check-up Genético Neonatal', imagem: IMAGEM_UM },
  { id: 2, nome: 'Check-up Essencial da Infância', imagem: IMAGEM_DOIS },
  { id: 3, nome: 'Investigação da saúde interna', imagem: IMAGEM_TRES },
  { id: 4, nome: 'Mapa de cromossomos', imagem: IMAGEM_QUATRO },
  { id: 5, nome: 'Farmacogenética Inteligente', imagem: IMAGEM_CINCO },
  { id: 6, nome: 'Análise Genética para TEA e Atrasos', imagem: IMAGEM_SEIS },
  { id: 7, nome: 'Defesas do pequeno', imagem: IMAGEM_SETE },
  { id: 8, nome: 'Check-up Metabólico Infantil', imagem: IMAGEM_OITO }
];


const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % servicos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + servicos.length) % servicos.length);
  };

  return (
    <div
      id="servicos"
      className="w-full p-2"
      style={{
        backgroundImage: `url(${ESTRELAS})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center center",
        backgroundSize: "auto",
      }}
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-center pt-4 mb-2 sm:mb-8 text-[#2a3d66]">
        Exames que Realizamos
      </h2>

      <div className="relative w-full max-w-[95%] lg:max-w-[1400px] mx-auto">
        {/* Desktop version */}
        <div className="hidden sm:block">
          <div className="bg-[#e6f0fa] p-8 rounded-xl shadow-inner">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicos.map((servico) => (
                <div
                  key={servico.id}
                  className="bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition duration-300"
                >
                  <Link to={`/servico/${servico.id}`}>
                    <img
                      src={servico.imagem}
                      className="sm:h-48 h-32 w-full object-contain rounded"
                      alt={servico.nome}
                    />
                    <h3 className="text-center sm:text-xl text-lg font-bold text-[#4a5a7a] mt-2 break-words min-h-[60px]">
                      {servico.nome}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile version */}
        <div className="sm:hidden relative w-full overflow-hidden">
          <div className="bg-[#e6f0fa] p-2 rounded-xl shadow-2xl mt-6">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {servicos.map((servico) => (
                <div key={servico.id} className="w-full flex-shrink-0 p-1 max-w-xs mx-auto">
                  <div className="bg-white p-3 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition duration-300">
                    <Link to={`/servico/${servico.id}`}>
                      <img
                        src={servico.imagem}
                        className="h-24 w-full object-contain rounded"
                        alt={servico.nome}
                      />
                      <h3 className="text-center text-base font-bold text-[#4a5a7a] mt-2 break-words min-h-[60px]">
                        {servico.nome}
                      </h3>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Buttons */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#5b8bd3] text-white p-2 rounded-full hover:bg-[#f5d261] hover:text-[#2a3d66] transition-colors duration-300"
            onClick={prevSlide}
            aria-label="Anterior"
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#5b8bd3] text-white p-2 rounded-full hover:bg-[#f5d261] hover:text-[#2a3d66] transition-colors duration-300"
            onClick={nextSlide}
            aria-label="Próximo"
          >
            &#10095;
          </button>
        </div>

        {/* Botão para consulta de resultado */}
        <div className="m-10 max-w-md mx-auto">
          <div className="bg-[#e6f0fa] p-4 rounded-lg shadow-lg flex flex-col items-center gap-4">
            <p className="text-[#2a3d66] text-center text-xl font-bold mb-0">
              Já fez um exame conosco?
            </p>
            <Link to="/consultar-resultado" className="w-full">
              <button className="w-full bg-[#2a3d66] text-white font-bold py-2 rounded-md hover:bg-[#24355a] transition duration-300 text-sm sm:text-lg">
                Consultar Resultado de Exame
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
