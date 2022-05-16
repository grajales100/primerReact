
import { Route, Routes } from 'react-router-dom';
import { About } from './components/Pages/About/About';
import { Contact } from './components/Pages/Contact/Contact';
import { Home } from './components/Pages/Home/Home'
import { NotFound } from './components/Pages/NotFound/NotFound';

function App() {
    return ( 
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default App;