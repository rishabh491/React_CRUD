
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Home}  from "./Home"
import { AddUser } from './AddUser';
import { Update } from './Update';
import { Read } from './Read';

function App() {
  return (
   <Router>
    <Routes>
      <Route  path="/"  element={<Home />}></Route>
      <Route path='/adduser'  element={<AddUser />}/>
      <Route path='/update/:id'   element={<Update />}/>
      <Route path='/read/:id'   element={<Read />}/>
    </Routes>
   </Router>
  );
}

export default App;
