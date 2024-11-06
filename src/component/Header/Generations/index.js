import Gen1 from "./Gen 1";
import Gen2 from "./Gen 2";
import Gen3 from "./Gen 3";
import Gen4 from "./Gen 4";
const Generation = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <Gen1 text="NorceGen1 - using props" />
      <Gen2 text="NorceGen2 - using props" />
      <Gen3 text="NorceGen3 - using props" />
      <Gen4 text="NorceGen4 - using props" />
    </div>
  );
};
export default Generation;
