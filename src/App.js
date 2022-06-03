
import { Route, Routes } from 'react-router-dom';
import { About } from './components/Pages/About/About';
import { ApiRick } from './components/Pages/ApiRick/ApiRick';
import { ApiTenor } from './components/Pages/ApiTenor/ApiTenor';
import { CambiarFondo } from './components/Pages/CambiarFondo/CambiarFondo';
import { Contact } from './components/Pages/Contact/Contact';
import { Contador } from './components/Pages/Contador/Contador';
import { Home } from './components/Pages/Home/Home'
import { NotFound } from './components/Pages/NotFound/NotFound';

function App() {
    return ( 
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/contador' element={<Contador />} />
            <Route path='/cambiarFondo' element={<CambiarFondo />} />
            <Route path='/apiRick' element={<ApiRick />} />
            <Route path='/apiTenor' element={<ApiTenor />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default App;