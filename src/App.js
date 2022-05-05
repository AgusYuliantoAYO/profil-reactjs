
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Tentang from './components/Tentang';
import Porto from './components/Porto';
import Skills from './components/Skills';
import Sosmed from './components/Sosmed';
// import Tanya from './components/Tanya';
import Footer from './components/Footer';
import "./style/profil.css"


function App() {
  return (
      <div>
        <div className="nav">
        <NavBar/>
        </div>
        <div className="myBG" >
            <Intro/>
        </div>
        
        <div className="tentang">
          <Tentang/>
        </div>
        <div className="skills">
          <Skills/>
        </div>
        <div className="porto">
          <Porto/>
        </div>
        <div className='tanya'> 
          <Sosmed/>
        </div>
        <div className='footer'>
        <Footer/>
        </div>
      </div>
  );
}
 
export default App;
