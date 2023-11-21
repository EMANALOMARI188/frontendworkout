
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Navebar from './component/navbar'
import Home from './pages/home'
import './App.css'

function App() {
  

  return (
    <>
    <div className='app'>
      <BrowserRouter>
      <Navebar/>
      <div className='pages'>
      <Routes>
       <Route path='/' element={<Home/>}/>
      </Routes>
      </div>
      </BrowserRouter>
      </div>
    </>
    
  )
}

export default App
