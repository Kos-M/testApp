import './App.css';
import { useEffect } from 'react'; 

function App() {
  useEffect(()=>{
    console.log(process.env.REACT_APP_CUSTOM_DOMAIN)
  },[])
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
