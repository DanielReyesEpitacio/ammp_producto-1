import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Photos from '../pages/Photos';
import AudioVideo from '../pages/AudioVideo'
import { useEffect, useState } from "react";
import "../estilos/nav.css"

function Navs() {


    //const urlImages= [];
    const [urlImages, setUrlImage] = useState([]);

    useEffect(()=>{
        for(let i=1; i<100; i++){
            setUrlImage(prev =>[...prev, "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+i+".png"]);
        }
              
    },[]);

    return (

    <> 
        <BrowserRouter>
        <Navbar id="navar" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link id="link" href="/">Home</Nav.Link>
            <Nav.Link id="link" href="fotos">Fotos</Nav.Link>
            <Nav.Link id="link" href="/audio-video">Videos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="fotos" element={<Photos data={urlImages}/>}/>
            <Route path="audio-video" element={<AudioVideo />}  />
        </Routes>
    </BrowserRouter>
  </>
  );
}

export default Navs;