import { useEffect } from 'react';
import { initNoti } from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import User from './components/User';

function App() {

  useEffect(() => {
    initNoti()
  }, [])

  return (
    <User />
  );
}

export default App;
