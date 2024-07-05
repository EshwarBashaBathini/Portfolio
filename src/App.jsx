
import './App.css'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'

const App = () => (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
       </Routes>
    </BrowserRouter>
)

export default App
