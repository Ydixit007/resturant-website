import './App.css';
import Homepage from './Homepage/Homepage';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <Navbar/>
      </header>
      <section className='home'>
        <Homepage/>
      </section>
    </div>
  );
}

export default App;
