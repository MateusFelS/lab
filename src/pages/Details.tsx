import React from 'react';
import { Link, useParams } from 'react-router-dom';
import IMAGEM_UM from '../assets/services/1.png';
import IMAGEM_DOIS from '../assets/services/2.png';
import IMAGEM_TRES from '../assets/services/3.png';
import IMAGEM_QUATRO from '../assets/services/4.png';
import IMAGEM_CINCO from '../assets/services/5.png';
import IMAGEM_SEIS from '../assets/services/6.png';
import IMAGEM_SETE from '../assets/services/7.png';
import IMAGEM_OITO from '../assets/services/8.png';

interface Details {
  id: string;
  nome: string;
  descricao: string;
  preparo: string;
  duracaoResultado: string;
  indicacoes: string[];
  imagem: string;
}

const servicos: Details[] = [
  // ... seus serviços aqui (sem alterações nos dados)
];

const Details: React.FC = () => {
  const { servicoId } = useParams<{ servicoId: string }>();
  const servico = servicos.find(s => s.id === servicoId);

  if (!servico) {
    return <div className="text-center text-2xl mt-20">Serviço não encontrado</div>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-6 sm:px-8 bg-[#e6f0fa] text-[#1b365d]">
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full max-w-3xl">
        <Link to="/" className="text-lg sm:text-2xl font-bold hover:underline mb-4 inline-block">
          &larr; Voltar
        </Link>
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">
          {servico.nome}
        </h2>

        <div className="flex justify-center bg-[#e6f0fa] mb-6 sm:mb-8">
          <img
            className="h-48 sm:h-80 w-full object-contain rounded-lg border-2 border-[#1b365d]"
            src={servico.imagem}
            alt={servico.nome}
          />
        </div>

        <p className="text-base sm:text-lg mb-3 sm:mb-4">
          <strong>Descrição:</strong> {servico.descricao}
        </p>

        {/* Como é feito */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-semibold">Como é feito?</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-1">
            Entenda o tipo de coleta e se há necessidade de preparo.
          </p>
          <p className="text-base sm:text-lg">{servico.preparo}</p>
        </div>

        {/* O que o exame revela */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-semibold">O que o exame revela?</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-1">
            Veja quais informações ou diagnósticos podem ser obtidos com este exame.
          </p>
          <p className="text-base sm:text-lg">{servico.duracaoResultado}</p>
        </div>

        {/* Para quem é recomendado */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold">Para quem é recomendado?</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-1">
            Casos ou situações em que este exame pode ser útil.
          </p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-base sm:text-lg">
            {servico.indicacoes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <Link to={`/checkout/${servicoId}`}>
          <button className="mt-6 sm:mt-8 w-full bg-[#2a3d66] text-white font-semibold text-sm sm:text-base py-2 rounded-md hover:bg-[#24355a] transition duration-300">
            Agendar Exame
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
