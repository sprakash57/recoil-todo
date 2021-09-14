import List from 'components/List';
import Search from 'components/Search';
import './App.css';

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://recoiljs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Recoil
        </a>
      </header>
      <Search />
      <List />
    </main>
  );
}

export default App;
