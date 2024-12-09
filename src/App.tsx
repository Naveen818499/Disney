import { GeneresMovieList } from './components/GeneresMovieList'
import Header from './components/Header'
import { ProductionHouse } from './components/ProductionHouse'
import Slider from './components/Slider'

function App() {

  return (
    <div>
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GeneresMovieList/>
    </div>
  )
}

export default App
