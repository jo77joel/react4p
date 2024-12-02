import React from 'react';
import Comp1 from './componentes/Comp1'; 
import Comp2 from './componentes/Comp2'; 
import ProgressBar from './componentes/ProgressCircle'; 
import './App.css'; 

function App() {
  return (
    <div className="App container mt-5">
      <div className="row">
        
        <div className="col-md-6 mb-4">
          <Comp2 />
        </div>

        
        <div className="col-md-6 mb-4">
          <Comp1 />
        </div>
      </div>

    
      <div className="row mt-4">
        <div className="col-12 text-center">
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}

export default App;
