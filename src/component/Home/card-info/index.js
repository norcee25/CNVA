import Evo from "./Evolution";
import TypeEff from "./TypeEffect";
import Logo from "./Logo";

const CardInfo = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <Evo text="EvoProps" />
      <TypeEff text="TypeEffProps" />
      <Logo text="LogoProps" />
    </div>
  );
};

export default CardInfo;