import { Link, useParams } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { FaWhatsapp } from 'react-icons/fa';

const Checkout: React.FC = () => {
  const { servicoId } = useParams<{ servicoId: string }>();

  interface ServicoPrecoDuracao {
    preco: string;
    duracao: string;
  }

  const loadServicoDetails = (id: string): ServicoPrecoDuracao | null => {
    switch (id) {
      case '1':
        return { preco: 'R$ 150,00', duracao: '24 horas' };
      case '2':
        return { preco: 'R$ 80,00', duracao: '12 horas' };
      case '3':
        return { preco: 'R$ 200,00', duracao: '5 dias' };
      case '4':
        return { preco: 'R$ 180,00', duracao: '48 horas' };
      case '5':
        return { preco: 'R$ 70,00', duracao: '24 horas' };
      case '6':
        return { preco: 'R$ 100,00', duracao: '12 horas' };
      case '7':
        return { preco: 'R$ 220,00', duracao: '48 horas' };
      case '8':
        return { preco: 'R$ 120,00', duracao: '7 dias' };
      default:
        return null;
    }
  };

  const servicoDetails = loadServicoDetails(servicoId!);

  if (!servicoDetails) {
    return <div className="text-center text-2xl mt-20">Serviço não encontrado</div>;
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-[#e6f0fa] text-[#1b365d] px-4 py-6 sm:p-8 text-center">
      <div className="max-w-md w-full p-4 sm:p-8 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Pagamento via PIX</h2>

        <img
          src={Logo}
          className="p-2 sm:p-4 max-w-[160px] sm:max-w-64 h-auto"
          alt="Logo Laboratório Pequeno Cientista"
        />

        <h2 className="text-base sm:text-xl font-semibold pt-3 sm:pt-4">
          <strong>Preço:</strong> {servicoDetails.preco}
        </h2>
        <h2 className="text-base sm:text-xl font-semibold pt-2">
          <strong>Tempo para resultado:</strong> {servicoDetails.duracao}
        </h2>
        <h2 className="text-base sm:text-xl font-semibold pt-3 sm:pt-4">
          <strong>Chave PIX:</strong><br className="sm:hidden" /> 123.456.789-00
        </h2>

        <p className="text-sm sm:text-base text-gray-800 pt-4">
          (Após o pagamento, <strong>entre em contato</strong> para confirmar o agendamento.)
        </p>

        <a
          href="https://wa.me/5512995633227"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 p-3 sm:p-4 hover:scale-105 transition duration-300 mt-4"
        >
          <FaWhatsapp size={24} className="sm:size-6" color="green" />
          <span className="text-base sm:text-lg font-bold">WhatsApp: (31) 93251-4832</span>
        </a>

        <Link to="/" className="w-full">
          <button
            type="button"
            className="w-full bg-[#2a3d66] text-white font-semibold text-sm sm:text-base py-2 rounded-md hover:bg-[#24355a] transition duration-300 mt-6"
          >
            Voltar ao Início
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
