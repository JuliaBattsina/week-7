import { useState } from 'react';
import { data } from './data';
import Dogs from "./Dogs"



function App() {
  
    const [dogs, setDogs] = useState (data);
 return (
  <div>
    
    <Dogs apple= {dogs}/>
  </div>
  );
}

export default App;
