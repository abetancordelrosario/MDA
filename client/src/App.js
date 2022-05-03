import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import ListaConversaciones from './components/ListaConversaciones/ListaConversaciones';
import ListaAsignaturas from './components/ListaAsignaturas/ListaAsignaturas';
import ListaRespuestas from './components/ListaRespuestas/ListaRespuestas';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
