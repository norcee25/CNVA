<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======
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
>>>>>>> 75d7a7d91fd7bdd106319a118df2cfbb777dd608
