
import './App.css'
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProjectList from './Components/ProjectList';


function App() {

  return (
    <div className='App'>
        <Header /> 
        <About />
       <ProjectList />
        <Contact />
       <Footer />     
    </div>
  )
}

export default App
