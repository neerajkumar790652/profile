import logo from './logo.svg';
import './App.css';
import Bio from './components/Bio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skill from './components/Skill';
function App() {
  return (
    <main>
      <Bio/>
      <hr/>
      <Experience/>
      <hr/>
      <Skill/>
      <hr/>
      <Contact/>
    </main>
   
  );
}

export default App;
