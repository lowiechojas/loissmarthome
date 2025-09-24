import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Electronics from './pages/Electronics'
import WebDevelopment from './pages/WebDevelopment'
import ProgrammingLanguage from './pages/ProgrammingLanguage'
import Ecommerce from './pages/Ecommerce'
import Contact from './pages/Contact'
import SearchPage from './components/SearchPage'
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/electronics/:topicId" element={<Electronics />} />
          <Route path="/webdev" element={<WebDevelopment />}/>
          <Route path="/webdev/:topicId" element={<WebDevelopment />}/>
          <Route path="/programming" element={<ProgrammingLanguage />}/>
          <Route path="/programming/:topicId" element={<ProgrammingLanguage />}/>
          <Route path="/ecommerce" element={<Ecommerce />}/>
          <Route path="/ecommerce/:topicId" element={<Ecommerce />}/>
        </Routes>
    </Router>
  )
}

export default App
