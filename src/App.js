import './App.css';
import NavBar  from './components/navBar';
import IntroBar from './components/IntroBar';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';


function App() {
  return (
    <div className=''>

      <NavBar />
      <div>
      <IntroBar />
      <Experience />
      <Education />
      </div>
    
    </div>
  );
}

export default App;
