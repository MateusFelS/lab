import { FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-[#7acb92]'>
      <div className="container mx-auto py-4 px-6">
        <div className="flex justify-center items-center text-white">
          <p className="text-sm">&copy; 2025 - Le Petit Gène. Todos os direitos reservados.</p>
          <div className="ml-4 flex space-x-4">
            <a
              href="https://www.instagram.com/_lepetitgene"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-md p-2"
            >
              <FaInstagram
                className="cursor-pointer hover:scale-125 ease-in duration-300"
                color="#E1306C"
                size={24}
              />
            </a>
            <div className="bg-white rounded-md p-2">
              <FaEnvelope
                className="cursor-pointer hover:scale-125 ease-in duration-300"
                color="gray"
                size={24}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
