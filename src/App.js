
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import{HashRouter,Routes,Route} from "react-router-dom"
import{Home,About} from './components/F2'
import Contact from './components/Contact'
import Nav from './components/Nav'
function App() {
  return (
    <div>
      <HashRouter>
        <Nav/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
         
  );
}

export default App;
