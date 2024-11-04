import Logo from "./Logo";
import Generation from "./Generation";
const Header = () => {
    const CNVAfooter= "Hello (Header)"
    return (
      <div>
        <h2>{CNVAfooter}</h2>
        <Logo/>
        <Generation/>
      </div>
    );
  };
  
export default Header;