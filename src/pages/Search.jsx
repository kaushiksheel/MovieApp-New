import React from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import NavComp from '../components/Navbar'

export default function Search() {
  return (
    <>
    <NavComp/>
      <Container className='mt-4'>
        <div className="wrapper mt-4">
<Form>
    <Form.Control placeholder='search anything'/>
    <Button>Search</Button>
</Form>
  <Row md={3} xs={1} lg={4} className="g-4">
    {/* {movies?.map((item)=>
          <Col key={item.id}>
  <MovieCard movie={item}     tvShow={false}/>
          </Col>
    )} */}
      
      </Row>
        </div>
        {/* <div className="mt-5 d-flex justify-content-center">
          <PaginationComp
          totalPages={latestTotalPages}
          />
        </div> */}
      </Container>
    
    
    </>
  )
}
