import './App.css';
import BerkshireHathawayRedesign from './components/BerkshireHathawayRedesign';
import GOT from './components/GOT'
import Header from './components/Header.js'
import JerseyStore from './components/JerseyStore';
import Navigation from './components/Navigation.js'
import PortfolioItem from './components/PortfolioItem.js'
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <Projects></Projects>

    </div>
  );
}

export default App;
