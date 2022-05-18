
import { MdOutlineAddBox } from "react-icons/md"
import { FiSend } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai"
import Logo from "../images/Logo.png" 

const Navbar = () => {
    return (
      <header className="Navbar">
      <img className="Logo" src={Logo}  />
      <ul>
      <a className="Add"><MdOutlineAddBox style={{color: "white", fontSize: "35px"}} /></a>
      <a className="Likes"><AiOutlineHeart style={{color: "white", fontSize: "35px"}} /></a>
      <a className="Send"> <FiSend style={{ color: "white", fontSize: "30px" }} /></a>
      </ul>
      </header>
    );
  };

export default Navbar;


