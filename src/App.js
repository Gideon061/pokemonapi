import './App.css';
import News from './Pages/News';
import {
  BrowserRouter,
  Routes,
  Route} from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Pokedex from './Pages/Pokedex';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className='nav-header'>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/pokedex' element={<Pokedex/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


