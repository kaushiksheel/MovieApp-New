import { motion } from "framer-motion";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Genre } from "../components/Genre";
import { MovieCard } from "../components/MovieCard";
import NavComp from "../components/Navbar";
import { PaginationComp } from "../components/PaginationComp";
import { MovieContext } from "../context/MovieContext";
import { container } from "../helpers/framerMotion";

export default function Movies() {
  const { movies, movieGenres, handleGenres, latestTotalPages } =
    useContext(MovieContext);

  return (
    <>
      <NavComp />
      <Container className="mt-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="genres d-flex flex-wrap "
          style={{
            gap:'5px 15px'
          }}
        >
          {movieGenres?.map((item) => (
            <Genre
              id={item.id}
              key={item.id}
              title={item.name}
              active={item.active}
              handleGenres={handleGenres}
            />
          ))}
        </motion.div>
        <div className="wrapper mt-4">
          <Row md={3} xs={1} lg={4} className="g-4">
            {movies?.map((item) => (
              <Col key={item.id}>
                <MovieCard movie={item} tvShow={false} />
              </Col>
            ))}
          </Row>
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <PaginationComp totalPages={latestTotalPages} />
        </div>
      </Container>
    </>
  );
}
