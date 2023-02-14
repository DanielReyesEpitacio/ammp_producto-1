import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Photos from '../pages/Photos';
import { useEffect, useState } from "react";
import getPokesInfo from '../apis/getPokes';

function Navs() {

    //const urlPokes=[];
    const [urlPokes, setUrlPokes] = useState([]);
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
        <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="fotos">Fotos</Nav.Link>
            <Nav.Link href="#pricing">Videos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="fotos" element={<Photos data={urlImages}/>}/>
        </Routes>
    </BrowserRouter>
  </>
  );
}

export default Navs;