import { useState } from 'react';
import { LeftBox } from './Components/LeftBox';
import { RightBox } from './Components/RightBox';
import { Overlay } from './Components/Overlay';

function App() {

  var [overlay, setOverlay] = useState({overlay : false});

  
  const toggleOverlay = () => {
    if(overlay){
      setOverlay(overlay = !overlay);
    } else {
      setOverlay(overlay = !overlay);
    }
  }

  

  return (
      <div className={overlay ? "container" : "container right-panel-active"}>
        <LeftBox />
        <RightBox />
        <Overlay toggleOverlay={toggleOverlay} />
      </div>
  );
};

export default App;
