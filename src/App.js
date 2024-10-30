import Header from './component/Header'
import Home from './component/Home'
import Footer from './component/Footer'



const App = () => {
  const cnvaapp= "Hello (App)"
  return (
    <div>
      <h1>{cnvaapp}</h1>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
};

export default App;