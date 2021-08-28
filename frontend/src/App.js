import './App.css';
import Settings from './components/settings/Settings';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      {/* <Home/> */}
      {/* <Single/> */}
      {/* <WritePost/> */}
      <Settings/>
    </div>
  );
}

export default App;
