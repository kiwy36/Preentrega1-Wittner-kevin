import './App.css'
import Subtitle from './components/subtitle';
import Navbar from './components/Navbar/Navbar';
import BotonContador from './components/BotonContador/BotonContador';
import ItemListContainer from './components/ItemListcontainer/ItemListContainer';
function App() {

  return (
    <>
      <Navbar/>
      <Subtitle/>
      <BotonContador/>
      <ItemListContainer greeting="Es hora de rodar, prepara tu bici!"/>
    </>
  )
}

export default App
