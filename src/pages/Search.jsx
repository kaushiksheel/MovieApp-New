import React, { useContext } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import NavComp from '../components/Navbar'
import { SearchComp } from '../components/SearchComp'
import { PaginationComp } from '../components/PaginationComp'
import { MovieCard } from '../components/MovieCard'
import { MovieContext } from '../context/MovieContext';

export default function Search() {
  const{movieSearchResults,searchResultsTotalPages}=useContext(MovieContext);
  return (
    <>
    <NavComp/>
      <Container className='mt-4'>
        <div className="wrapper mt-4">
<SearchComp/>
  <Row md={3} xs={1} lg={4} className="g-4 mt-3">
    {movieSearchResults?.map((item)=>
          <Col key={item.id}>
  <MovieCard movie={item}    />
          </Col>
    )}
      
      </Row>
        </div>
        {movieSearchResults.length>0&&<div className="mt-5 d-flex justify-content-center">
          <PaginationComp
          totalPages={searchResultsTotalPages}
          />
        </div>}
      </Container>
    
    
    </>
  )
}
