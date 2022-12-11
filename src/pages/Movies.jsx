import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Genre } from '../components/Genre'
import { MovieCard } from '../components/MovieCard'
import NavComp from '../components/Navbar'
import { MovieContext } from '../context/MovieContext'

export default function Movies() {
  const {movies,movieGenres,handleGenres}=useContext(MovieContext);

  



  return (
    <>
    <NavComp/>
      <Container className='mt-4'>
        <div className="genres d-flex flex-wrap gap-2">
          {movieGenres?.map(item=>
    <Genre id={item.id} key={item.id} title={item.name}
    active={item.active}
    handleGenres={handleGenres}
    />
            )}
  
        </div>
        <div className="wrapper mt-4">

  <Row md={3} xs={1} lg={4} className="g-4">
    {movies?.map((item)=>
          <Col key={item.id}>
  <MovieCard movie={item}     tvShow={false}/>
          </Col>
    )}
      
      </Row>
        </div>
      </Container>
    
    
    </>
  )
}
