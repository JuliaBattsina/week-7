import { useState } from "react";
import {data} from "./data";
import FirstName from "./FirstName";

function App() {

const [image, setFirstName] = useState(data);

return (
  <FirstName anyWordYouWant={image}/>
)


}
export default App;