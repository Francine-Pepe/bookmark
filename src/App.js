import './App.css';
import Cards from './Components/Cards/Cards';
import ExtensionsText from './Components/Extensions/ExtensionsText';
import BannerFooter from './Components/Footer/BannerFooter';
import Footer from './Components/Footer/Footer';
import MainContentBottom from './Components/MainContent/MainContentBottom';
import MainContentMiddle from './Components/MainContent/MainContentMiddle';
import MainContentTop from './Components/MainContent/MainContentTop';
import Navbar from './Components/Navbar/Navbar';
import FrequentlyQuestions from './Components/Questions/FrequentlyQuestions';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContentTop />
      <MainContentMiddle />
      <MainContentBottom />
      <ExtensionsText />
      <Cards />
      <FrequentlyQuestions />
      <BannerFooter />
      <Footer />
      
    </div>
  );
}

export default App;
