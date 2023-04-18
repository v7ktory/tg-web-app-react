
import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './src/../hooks/useTelegram';

function App() {
  const {onToggleButton, tg} = useTelegram()
  useEffect(()=>{
    tg.ready()
  },[])

  return (
    <div className="App">
      <Header/>
      <Button onClick={onToggleButton}>toggle</Button>
    </div>
  );
}

export default App;
