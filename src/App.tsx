import { Title } from "./components/Title"
import { DragAndDrop } from "./components/DragAndDrop"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Sidebar from './components/Sidebar'

import Home from './pages/Home';
import Team from './pages/Team';
import Tasks from './pages/Tasks';
import Chats from './pages/Chats';
import Analytics from './pages/Analytics';
import Employee from "./pages/Newemployee";

const App = () => {
  return (
    <div className="container-main flex">
        <Router>
        <Sidebar />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />            
          <Route path='/tasks' element={<Tasks />} />    
          <Route path='/chats' element={<Chats />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/newemployee' element={<Employee/>}/>
        </Routes>
        </Router>
        {/* <FloatingButton/> */}
    </div>
  )
}
export default App
