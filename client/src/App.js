
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import ListaConversaciones from './components/ListaConversaciones/ListaConversaciones';
import ListaAsignaturas from './components/ListaAsignaturas/ListaAsignaturas';
import ListaRespuestas from './components/ListaRespuestas/ListaRespuestas';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  localStorage.userId = 0;
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route index element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile/:name&:passwd&:email&:phone&:surname' element={<Profile />} />
            <Route path='/subject/:id' element={<ListaConversaciones />} />
            <Route path='/message/:id' element={<ListaRespuestas />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
