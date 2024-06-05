import './App.scss';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Header from './components/Header'
import Main from './components/Main';
function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
