import ESTRELAS from '../assets/images/estrelas.png';

const AboutUs = () => {
  return (
<div
  id="sobre-nos"
  className="relative w-full h-fit text-center pb-10 px-4 md:px-8 lg:px-0"
  style={{
    backgroundImage: `url(${ESTRELAS})`,
    backgroundRepeat: "repeat",
    backgroundPosition: "center center",
    backgroundSize: "auto",
  }}
>

      <h1 className="text-3xl sm:text-5xl font-bold text-[#2a3d66] py-6 sm:py-10">
        Sobre Nós
      </h1>

      {/* Container elevado */}
      <div className="max-w-4xl mx-auto bg-[#e6f0fa] rounded-lg shadow-lg p-4 sm:p-8 text-center">
        <p className="text-sm sm:text-lg text-[#4a5a7a] mb-6 leading-relaxed">
          Bem-vindo ao <strong>Laboratório do Pequeno Cientista</strong> — um espaço pensado exclusivamente para oferecer exames laboratoriais com acolhimento, carinho e segurança para o público infantil. Sabemos que uma ida ao laboratório pode ser desafiadora para crianças, por isso criamos um ambiente lúdico, humanizado e seguro, para tornar esse momento o mais leve e tranquilo possível.
        </p>

        <h2 className="text-xl sm:text-3xl font-bold text-[#2a3d66] mb-4">
          Nossa Missão
        </h2>
        <p className="text-sm sm:text-lg text-[#4a5a7a] mb-6 leading-relaxed">
          Promover a saúde e bem-estar das crianças desde os primeiros dias de vida, garantindo resultados ágeis e confiáveis, por meio de tecnologias avançadas, atendimento humanizado e compromisso com a entrega e qualidade no diagnóstico.
        </p>

        <h2 className="text-xl sm:text-3xl font-bold text-[#2a3d66] mb-4">
          Nossa Visão
        </h2>
        <p className="text-sm sm:text-lg text-[#4a5a7a] mb-6 leading-relaxed">
          Ser referência nacional em genética pediátrica humanizada, oferecendo diagnósticos precisos e acessíveis, que promovem cuidado integral, acolhimento familiar e avanço científico, transformando o futuro da saúde infantil no Brasil.
        </p>

        <h2 className="text-xl sm:text-3xl font-bold text-[#2a3d66] mb-4">
          Nossos Valores
        </h2>
        <ul className="list-none list-inside text-sm sm:text-lg text-[#4a5a7a] mb-6 flex flex-col items-center text-center space-y-3">
          <li>
            <strong>Humanização e acolhimento</strong> – Tratar cada criança e família com empatia, tornando o ambiente acolhedor e lúdico.
          </li>
          <li>
            <strong>Excelência científica</strong> – Garantir diagnósticos confiáveis com tecnologia de ponta e rigor técnico.
          </li>
          <li>
            <strong>Inovação</strong> – Investir em soluções modernas e criativas para exames e atendimento.
          </li>
          <li>
            <strong>Ética e confiança</strong> – Proteger dados genéticos e agir com responsabilidade em todas as etapas.
          </li>
          <li>
            <strong>Educação e conscientização</strong> – Aproximar as famílias do conhecimento genético de forma clara e acessível.
          </li>
          <li>
            <strong>Sustentabilidade social</strong> – Contribuir para que mais crianças tenham acesso ao diagnóstico precoce de doenças genéticas.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
