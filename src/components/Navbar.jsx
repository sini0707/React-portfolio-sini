
import logo from "../assets/logo.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img  className="mx-3 w-20" src={logo} alt="logo"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a
          href="https://www.linkedin.com/in/sini-thomas-0397162b6/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sini0707?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600"
        >
          <FaGithub />
        </a>
      
        
        <FaInstagram/>
    </div>
  </nav>
}

export default Navbar
