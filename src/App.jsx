// App.js
import React from 'react';
import InspirationText from './components/InspirationText';
import InspirationSlider from './components/InspirationSlider';


function App() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '20px' }}>
      <InspirationText />
      <InspirationSlider />
    </div>
  );
}

export default App;
