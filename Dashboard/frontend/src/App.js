import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      {/*<Navbar />*/}
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;



/*
import React, { useEffect, useState } from 'react';

function App() {
  
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/data")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="App">
            <h1>{data ? data.data : "Loading..."}</h1>
        </div>
    );
  
}

export default App;
*/
