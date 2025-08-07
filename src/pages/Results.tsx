import { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/images/logo.png';
import PDF from '../assets/resultado.pdf';

interface FormData {
  nome: string;
  nascimento: string;
  protocolo: string;
}

const ConsultaResultado = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    nascimento: '',
    protocolo: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nomeCorreto = "Laura Emanuelle Alves Silva";
    const nascimentoCorreto = "2025-07-26";
    const protocoloCorreto = "ABC1234";

    const nomeValido = formData.nome.trim().toLowerCase() === nomeCorreto.toLowerCase();
    const nascimentoValido = formData.nascimento === nascimentoCorreto;
    const protocoloValido = formData.protocolo.trim().toUpperCase() === protocoloCorreto;

    if (nomeValido && nascimentoValido && protocoloValido) {
      // Abrir o PDF na mesma aba
      window.location.href = PDF;
    } else {
      alert("Dados não encontrados. Verifique as informações inseridas.");
    }

    setFormData({
      nome: '',
      nascimento: '',
      protocolo: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-6 sm:px-8 bg-[#e6f0fa] text-[#1b365d]">
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full max-w-2xl">
        
        {/* Botão Voltar */}
        <Link
          to="/"
          className="text-lg sm:text-2xl font-bold hover:underline mb-4 inline-block"
        >
          &larr; Voltar
        </Link>

        {/* Título */}
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6">
          Consultar Resultado de Exame
        </h1>

        {/* Logo */}
        <div className="flex justify-center mb-2">
          <img src={LOGO} alt="Logo" className="h-24 sm:h-60 object-contain" />
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nome" className="block font-bold mb-2">
              Nome do Paciente
            </label>
            <input
              type="text"
              id="nome"
              placeholder="Digite o nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-[#2a3d66] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a3d66]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="nascimento" className="block font-bold mb-2">
              Data de Nascimento
            </label>
            <input
              type="date"
              id="nascimento"
              value={formData.nascimento}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-[#2a3d66] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a3d66]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="protocolo" className="block font-bold mb-2">
              Número do Protocolo
            </label>
            <input
              type="text"
              id="protocolo"
              placeholder="Ex: ABC1234"
              value={formData.protocolo}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-[#2a3d66] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a3d66]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2a3d66] text-white font-semibold py-2 rounded-md hover:bg-[#24355a] transition duration-300"
          >
            Consultar Resultado
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultaResultado;
