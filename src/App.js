import './App.css';
import Cards from './Components/Cards/Cards';
import ExtensionsText from './Components/Extensions/ExtensionsText';
import MainContentBottom from './Components/MainContent/MainContentBottom';
import MainContentMiddle from './Components/MainContent/MainContentMiddle';
import MainContentTop from './Components/MainContent/MainContentTop';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContentTop />
      <MainContentMiddle />
      <MainContentBottom />
      <ExtensionsText />
      <Cards />
      
    </div>
  );
}

export default App;
