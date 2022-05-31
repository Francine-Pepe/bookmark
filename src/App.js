import './App.css';
import MainContentMiddle from './Components/MainContent/MainContentMiddle';
import MainContentTop from './Components/MainContent/MainContentTop';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContentTop />
      <MainContentMiddle />
    </div>
  );
}

export default App;
