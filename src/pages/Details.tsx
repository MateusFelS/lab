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
  {
    id: '1',
    nome: 'Check-up Genético Neonatal',
    descricao: 'Exame ideal para recém-nascidos até 1 ano de vida, que detecta mais de 300 doenças genéticas raras, metabólicas, hormonais e imunológicas.',
    preparo: 'Recomenda-se realizar nas primeiras semanas de vida.',
    duracaoResultado: 'Laudo claro com orientação de geneticista pediátrico.',
    indicacoes: ['Triagem neonatal ampliada', 'Suspeita de doenças genéticas ou metabólicas', 'Histórico familiar relevante'],
    imagem: IMAGEM_UM,
  },
  {
    id: '2',
    nome: 'Check-up Essencial da Infância',
    descricao: 'Avaliação da saúde geral e do funcionamento dos órgãos através de componentes sanguíneos.',
    preparo: 'Geralmente, jejum de 8 a 12 horas.',
    duracaoResultado: 'Relatório com contagem de células sanguíneas, níveis de glicose e minerais.',
    indicacoes: ['Check-up pediátrico de rotina', 'Investigação de infecções ou anemia'],
    imagem: IMAGEM_DOIS,
  },
  {
    id: '3',
    nome: 'Investigação da saúde interna',
    descricao: 'Análise de amostras biológicas para investigar a saúde do sistema urinário e intestinal.',
    preparo: 'Coleta de amostras em recipiente específico, conforme orientação do laboratório.',
    duracaoResultado: 'Identificação de infecções urinárias, parasitas e outros microrganismos.',
    indicacoes: ['Suspeita de infecção urinária', 'Sintomas intestinais (diarreia, dor abdominal)'],
    imagem: IMAGEM_TRES,
  },
  {
    id: '4',
    nome: 'Mapa de cromossomos',
    descricao: 'Estudo do número e estrutura dos cromossomos para identificar alterações genéticas.',
    preparo: 'Coleta de sangue ou outro material biológico, sem preparo especial.',
    duracaoResultado: 'Confirmação ou exclusão de síndromes cromossômicas como Down, Turner, Klinefelter, etc.',
    indicacoes: ['Suspeita de síndromes genéticas', 'Atraso no desenvolvimento', 'Abortos de repetição na família'],
    imagem: IMAGEM_QUATRO,
  },
  {
    id: '5',
    nome: 'Farmacogenética Inteligente',
    descricao: 'Análise genética que estuda como o DNA influencia a resposta do organismo a medicamentos.',
    preparo: 'Coleta de saliva ou esfregaço bucal, sem preparo especial.',
    duracaoResultado: 'Relatório indicando a eficácia e o risco de efeitos colaterais de diferentes medicamentos para o paciente.',
    indicacoes: ['Personalização de tratamento', 'Otimização de doses', 'Pacientes com efeitos adversos a medicamentos comuns'],
    imagem: IMAGEM_CINCO,
  },
  {
    id: '6',
    nome: 'Análise Genética para TEA e Atrasos',
    descricao: 'Investiga variantes genéticas associadas ao Transtorno do Espectro Autista (TEA) e a atrasos no desenvolvimento.',
    preparo: 'Coleta de sangue ou saliva, sem preparo especial.',
    duracaoResultado: 'Identificação de possíveis causas genéticas para o quadro clínico, auxiliando no diagnóstico e tratamento.',
    indicacoes: ['Suspeita clínica de TEA', 'Atraso de desenvolvimento neuropsicomotor', 'Histórico familiar das condições'],
    imagem: IMAGEM_SEIS,
  },
  {
    id: '7',
    nome: 'Defesas do pequeno',
    descricao: 'Avaliação do sistema imunológico da criança, que é a defesa natural do corpo.',
    preparo: 'Exame de sangue, geralmente com jejum de 8 horas.',
    duracaoResultado: 'Informa sobre células de defesa, marcadores de inflamação e presença de anticorpos.',
    indicacoes: ['Crianças com infecções frequentes', 'Baixa imunidade', 'Acompanhamento preventivo'],
    imagem: IMAGEM_SETE,
  },
  {
    id: '8',
    nome: 'Check-up Metabólico Infantil',
    descricao: 'Análise de hormônios e marcadores para entender o crescimento e o processamento de energia da criança.',
    preparo: 'Exame de sangue, que exige jejum de 8 a 12 horas.',
    duracaoResultado: 'Mede hormônios de crescimento e tireoide, além de glicose e perfil lipídico.',
    indicacoes: ['Atraso no crescimento', 'Alterações de peso', 'Suspeita de distúrbios hormonais'],
    imagem: IMAGEM_OITO,
  }
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
          <ul className="mt-3 list-disc list-inside space-y-1 sm:space-y-2 text-base sm:text-lg text-[#1b365d]">
            {servico.preparo
              .split('.')
              .map(frase => frase.trim())
              .filter(frase => frase.length > 0)
              .map((frase, idx) => (
                <li key={idx}>{frase}.</li>
              ))}
          </ul>
        </div>
        
        {/* O que o exame revela */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-semibold">O que o exame revela?</h3>
          <ul className="mt-3 list-disc list-inside space-y-1 sm:space-y-2 text-base sm:text-lg text-[#1b365d]">
            {servico.duracaoResultado
              .split('.')
              .map(frase => frase.trim())
              .filter(frase => frase.length > 0)
              .map((frase, idx) => (
                <li key={idx}>{frase}.</li>
              ))}
          </ul>
        </div>


        {/* Para quem é recomendado */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold">Para quem é recomendado?</h3>
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
