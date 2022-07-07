
import './App.css';
import Main from './components/Main';
import { BrowserRouter ,Routes, Route, Link ,Router} from "react-router-dom";
import Lyrics from './components/Lyrics';
import { UrlProvider } from './context/UrlContext';
import Navigate1 from './components/Navigate1';

import Voice from './components/Voice';

// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  //context api form !! state move all component 
  return (
    <>

    <UrlProvider>
<Navigate1/>

    <BrowserRouter>
    {/* <Navigate1/>   */}
<Routes>

      <Route path="/" element={<Main />} />
      <Route path="/voice" element={ <Voice/> } />
      {/* <Route path="lyrics" element={<Lyrics />} /> */}
    </Routes>
<Lyrics/>
</BrowserRouter>


    </UrlProvider>
  
 
    </>
 

     );
}

export default App;
