
import './App.css';
import './Asset/css/footer.css'
import Banner from './Component/Banner';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
     <Banner/>

    </div>
  );
}

export default App;
