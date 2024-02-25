import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/nav';
import Home from './components/Home/home';
import ProjectDetails from './components/ProjectDetails/projectdetails';
import ScrollToTop from './components/Home/scrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<ProjectDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
