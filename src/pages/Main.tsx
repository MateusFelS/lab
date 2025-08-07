import React from 'react';
import BackgroundImage from '../assets/images/background1.png';
import Logo from '../assets/images/logo1.png';

interface TextContentProps {
  className?: string;
}

const TextContent: React.FC<TextContentProps> = ({ className }) => (
  <div className={`${className} text-left sm:text-center`}>
    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
      Le Petit Gène
    </h1>

    {/* Parágrafo mobile */}
    <p className="mt-2 text-sm sm:hidden drop-shadow-md max-w-xl leading-relaxed">
      O essencial em genética infantil <br /> é invisível aos olhos, <br />
      mas visível em nosso cuidado!
    </p>

    {/* Parágrafo desktop */}
    <p className="hidden sm:block mt-2 text-base md:text-lg lg:text-2xl drop-shadow-md max-w-xl leading-relaxed mx-auto sm:mx-0">
      O essencial em genética infantil é invisível aos olhos, <br /> mas visível em nosso cuidado!
    </p>
  </div>
);

const Main: React.FC = () => {
  return (
    <div id="main" className="w-full bg-[#cedede]">
      <div className="relative w-full h-[200px] sm:h-auto">
        {/* Background image */}
        <img
          src={BackgroundImage}
          className="w-full h-full object-contain object-center"
          alt="Background"
        />

        {/* Texto mobile */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-[#2a3d66] px-3 sm:hidden">
          <TextContent className="text-center" />
        </div>

        {/* Texto desktop com logo */}
        <div className="hidden sm:absolute sm:inset-0 sm:flex sm:flex-col sm:justify-center text-[#2a3d66] px-24">
          <div className="flex items-center space-x-6">
            <div className="bg-white rounded-xl shadow-lg p-3 flex-shrink-0">
              <img 
                src={Logo} 
                alt="Logo" 
                className="w-32 h-32 md:w-24 md:h-24 lg:w-48 lg:h-48 object-contain" 
              />
            </div>
            <TextContent className="text-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
