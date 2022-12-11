import React from 'react'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {Row,Col,Container} from 'react-bootstrap'

export const Loading = () => {
  return (
    <SkeletonTheme baseColor="#161616" highlightColor="#424242">
        
    <div>
        <Skeleton count={1} height={50}/>
    </div>
    <div className="grid mt-4">
    <Container>
    <Row md={3} xs={1} lg={4} className="g-4">
    {[...Array(20)].map((item,index)=>
          <Col key={index}>
        <Skeleton width={'100%'} height={500}/>
          </Col>
    )}
    </Row>
    </Container>
    </div>
</SkeletonTheme>
  )
}
