import logo from './logo.svg';
import './App.css';
import SearchFilter from './search';
import DebouncedSearch from './debounce';

function App() {
  return (
    <div className="App">
      <SearchFilter/>
      <DebouncedSearch/>
    </div>
  );
}

export default App;
