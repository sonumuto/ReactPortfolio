import './App.css';
import About from './components/About.js' 
import Profile from './components/Profile.js' 
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <div>
        <Profile/>
        <About/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
