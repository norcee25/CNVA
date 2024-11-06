import Search from "./Search";
import CardInfo from "./Card-Info";
const Home = ({ text }) => {
  const Home = "Hello (Home)";
  return (
    <div>
      <h2>{text}</h2>
      <CardInfo text="cardinfoProps" />
      <Search text="searchProps" />
    </div>
  );
};

export default Home;