import './App.css';
import PhoneFirst from './components/Phones/PhoneFirst';
import Product from './components/Phones/Product.js';
import {BrowserRouter , Routes,Route,} from 'react-router-dom';
import Home from './components/Home';
import Audio from "./Images/audio.png"
import fit from "./Images/work.png"
import laptop from "./Images/laptop.png"
import tv from "./Images/tv.png"
import redm from "./Images/redmi.png"
 import phone from "./Images/phone.png"
import CollectItem from './components/Phones/CollectItem';





const App = () => {
  return (
      <>
     <BrowserRouter>
      
       <Routes>
       <Route path ="/" element ={<Home/>}></Route>
        <Route path="/phone1" element={<PhoneFirst ima= {phone} />}></Route>
        <Route path="/Redmi" element={<PhoneFirst ima={redm}/>}></Route>
        <Route path="/tv" element={<PhoneFirst ima={tv}/>}></Route>
        <Route path="/laptop" element={<PhoneFirst ima={laptop}/>}></Route>
        <Route path="/fit" element={<PhoneFirst ima={fit} />}></Route>
        <Route path="/acces" element={<PhoneFirst ima={Audio} />}></Route>
       
        

        <Route path="/product" element={<Product  />}></Route>
        <Route path="/allitem" element={<CollectItem />}></Route>
     
        <Route path="/acces" element={<PhoneFirst  />}></Route>
       </Routes>
    </BrowserRouter>
</>
  );
};

export default App;
