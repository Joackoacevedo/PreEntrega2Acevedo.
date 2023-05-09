
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Navbar } from './components/Navbar/Navbar'


function App() {
  
  return (
    <div>
      <Navbar/>
      <ItemListContainer saludo={"Hola Mundo"}/>
    </div>
  )
}

export default App
