import './App.css';
import Header from "./Component/Header";
import Leftdiv from './Component/Leftdiv';
import Rightdiv from './Component/Rightdiv';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="Footer">
        <div className="Left">
          <Leftdiv />
        </div>
        <hr id="B-hr" />
        <div className="Right">
        <Rightdiv/>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default App;
