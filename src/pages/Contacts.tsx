import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Pedido enviado!
    Nome: ${formData.nome}
    Email: ${formData.email}
    Mensagem: ${formData.mensagem}

    Você receberá um contato em breve.`);
    setFormData({
      nome: '',
      email: '',
      mensagem: ''
    });
  };

  return (
    <div id="contatos" className="relative w-full h-fit bg-[#e6f0fa] pb-10 px-4 md:px-8 sm:px-0">
      <h1 className="text-3xl sm:text-5xl font-bold text-[#2a3d66] text-center py-6 sm:py-10">
        Contatos
      </h1>

      <form 
        onSubmit={handleSubmit} 
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-10 text-[#2a3d66]"
      >
        <p className="text-sm sm:text-lg mb-6">
          Entre em contato conosco para mais informações sobre nossos serviços laboratoriais infantis. Estamos aqui para garantir o melhor cuidado para as crianças da sua família!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#2a3d66] mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Endereço</h2>
            <p className="text-sm sm:text-base">Rua Lírio Brant – Melo</p>
            <p className="text-sm sm:text-base">Montes Claros – MG, 39401-063</p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Celular</h2>
            <p className="text-sm sm:text-base">(31) 93251-4832</p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Telefone</h2>
            <p className="text-sm sm:text-base">(31) 4000-5678</p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Email</h2>
            <p className="text-sm sm:text-base">infolepetitgene@gmail.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-bold mb-2" htmlFor="nome">
              Nome
            </label>
            <input
              className="w-full px-3 py-2 border border-[#2a3d66] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a3d66]"
              type="text"
              id="nome"
              placeholder="Seu nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-[#2a3d66] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a3d66]"
              type="email"
              id="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block font-bold mb-2" htmlFor="mensagem">
            Mensagem
          </label>
          <textarea
            className="w-full px-3 py-2 border border-[#2a3d66] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a3d66]"
            id="mensagem"
            rows={4}
            placeholder="Sua mensagem"
            value={formData.mensagem}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          className="w-full bg-[#2a3d66] text-white font-bold py-2 rounded-md hover:bg-[#24355a] transition duration-300"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
