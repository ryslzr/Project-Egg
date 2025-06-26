
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Soft from './Pages/Soft.jsx'
import Medium from './Pages/Medium.jsx'
import Hard from './Pages/Hard.jsx'



function App() {

    return (
      <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="Soft" element={<Soft/>}></Route>
          <Route path="Medium" element={<Medium/>}></Route>
          <Route path="Hard" element={<Hard/>}></Route>
        </Routes>
      </Router>

    



    </>
    ); 
  }

export default App
