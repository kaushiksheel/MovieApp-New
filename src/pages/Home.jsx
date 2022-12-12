import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MovieCard } from '../components/MovieCard'
import NavComp from '../components/Navbar'
import { PaginationComp } from '../components/PaginationComp'
import { MovieContext } from '../context/MovieContext'


export default function Home() {
const {trendings,trendingTotalPages}=useContext(MovieContext)

  return (
    <>
    <NavComp/>
      <Container className='mt-4'>
  <Row md={3} xs={1} lg={4} className="g-4">
    {trendings?.map((item)=>
          <Col key={item.id}>
  <MovieCard movie={item}/>
          </Col>
    )}
      
      </Row>
      <div className="mt-5 d-flex justify-content-center">
    <PaginationComp totalPages={trendingTotalPages}/>
      </div>
      </Container>
    
    </>
  )
}
