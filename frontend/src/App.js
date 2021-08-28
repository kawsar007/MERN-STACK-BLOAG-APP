import Single from '../src/Layout/posts/single/Single';
import './App.css';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      {/* <Home/> */}
      <Single/>
      
    </div>
  );
}

export default App;
