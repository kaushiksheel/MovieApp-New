import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { FireIcon, TvIcon, FilmIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {Link,useParams,useLocation} from 'react-router-dom'

export default function NavComp() {
  const params=useLocation();
const currentPath=params.pathname

  return (
    <Navbar className="navbar" expand="lg"   style={{position:'sticky',height:'fit-content',top:0,zIndex:2}}>
      <Container>
        <Navbar.Brand style={{ color: "white", fontWeight: "bold" }} href="#">
          MoviesHub
        </Navbar.Brand>

        <Navbar.Toggle 
        style={{background:'white'}}
        aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex gap-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          <Link to='/' style={{ color: "white", display: "flex", alignItems: "center",fontWeight:currentPath==='/'?'bold':'medium' }}>
          
              
            
            
              <FireIcon
                style={{
                  width: 22,
                  height: 22,
                  marginRight: 6,
                }}
              />
              Trendings
          
          </Link>
          <Link to='/movies' style={{ color: "white", display: "flex", alignItems: "center",fontWeight:currentPath==='/movies'?'bold':'medium'  }}>
          
              <FilmIcon
                style={{
                  width: 22,
                  height: 22,
                  marginRight: 6,
                }}
              />
              Movies
            
          </Link>
          <Link to='/tv-series'   style={{ color: "white", display: "flex", alignItems: "center" ,fontWeight:currentPath==='/tv-series'?'bold':'medium' }}>
        
              <TvIcon
                style={{
                  width: 22,
                  height: 22,
                  marginRight: 6,
                }}
              />
              TV Series
      
          </Link>
          <Link to='/search'   style={{ color: "white", display: "flex", alignItems: "center" ,fontWeight:currentPath==='/search'?'bold':'medium' }}>
        
              <MagnifyingGlassIcon
                style={{
                  width: 22,
                  height: 22,
                  marginRight: 6,
                }}
              />
Search
      
          </Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
