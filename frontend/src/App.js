import './App.css';
import Topbar from './components/topbar/Topbar';
import WritePost from './components/writePost/WritePost';

function App() {
  return (
    <div className="App">
      <Topbar/>
      {/* <Home/> */}
      {/* <Single/> */}
      <WritePost/>
      
    </div>
  );
}

export default App;
