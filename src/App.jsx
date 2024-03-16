
import './App.css'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import Recipes from './components/Recipes/Recipes'

function App() {
  

  return (
    <>
      
      <div className='app'>
         <NavBar />
         <Banner/>
         <Recipes/>
      </div>
     
    </>
  )
}

export default App
