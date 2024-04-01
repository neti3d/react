import './estilo.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer text="Próximamente nuevos productos" />
    </>
  )
}

export default App