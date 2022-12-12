import { motion } from "framer-motion";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Genre } from "../components/Genre";
import NavComp from "../components/Navbar";
import { PaginationComp } from "../components/PaginationComp";
import { TVCard } from "../components/TvCard";
import { MovieContext } from "../context/MovieContext";
import { container } from "../helpers/framerMotion";


export default function TvSeries() {
  const { tvShows, tvGenres,handleTvGenres,tvTotalPages } = useContext(MovieContext);
  return (
    <>
      <NavComp />
      <Container className="mt-4">
        <motion.div variants={container} initial="hidden"
    animate="visible" className="genres d-flex flex-wrap "
    style={{
      gap:'5px 15px'
    }}
    >
          {tvGenres?.map((item) => (
            <Genre key={item.id} title={item.name} id={item.id}
            active={item.active}
            handleGenres={handleTvGenres}
            />
          ))}
        </motion.div>
        <div className="wrapper mt-4">
          <Row md={3} xs={1} lg={4} className="g-4">
            {tvShows.map((item) => (
              <Col key={item.id}>
                <TVCard movie={item}  tvShow={true}/>
              </Col>
            ))}
          </Row>
        </div>
          <div className="mt-5 d-flex justify-content-center">
          <PaginationComp
          totalPages={tvTotalPages}
          />
        </div>
      </Container>
    </>
  );
}
