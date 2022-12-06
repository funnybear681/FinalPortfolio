import './App.css';
import BerkshireHathawayRedesign from './components/BerkshireHathawayRedesign';
import GOT from './components/GOT'
import Header from './components/Header.js'
import JerseyStore from './components/JerseyStore';
import Navigation from './components/Navigation.js'
import PortfolioItem from './components/PortfolioItem.js'

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <BerkshireHathawayRedesign parity="even"></BerkshireHathawayRedesign>
      <GOT parity="odd"></GOT>
      <JerseyStore parity="even"></JerseyStore>
    </div>
  );
}

export default App;
