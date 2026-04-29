import {Routes,Route} from 'react-router-dom';
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import Home from "./components/pages/Home";
import Notmatch from "./components/errors/notmatch";
import Mainpage from './components/pages/Mainpage';
import Memories from './components/pages/Memories';
import Shokran from './components/pages/Shokran';

function App() {
  return ( 
    
    <div className="app">
    <Navbar />
    <main className="content">
    <Routes >
      <Route path="/" element={<Home />}/>
      <Route path="/MainPage" element={<Mainpage />}/>
      <Route path="/Memories" element={<Memories />}/>
      <Route path="/Shokran" element={<Shokran />}/>
      <Route path="*" element={<Notmatch />}/>
    </Routes>
    </main>
    <Footer />
    </div>
   );
}

export default App;