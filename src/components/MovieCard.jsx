import React from "react";
import { Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMAGE_LINK } from "../constants";
import { useNavigate } from "react-router-dom";

export const MovieCard = ({ movie, tvShow }) => {
  const navigate = useNavigate();

  return (
    <Card
      style={{
        width: "100%",
        background: "#161616",
        color: "white",
        borderRadius: 6,
        position: "relative",
      }}
      className=" movie-card"
    >
      <Card.Body>
        <LazyLoadImage
          src={`${IMAGE_LINK}${movie.poster_path || movie.backdrop_path}`}
          width={"100%"}
          height={350}
          alt="movie"
          effect="blur"
          style={{ objectFit: "cover" }}
        />
        <Card.Title
          onClick={() => navigate(`/${movie.id}`)}
          className="text-center mt-3"
          style={{ cursor: "pointer" }}
        >
          {movie.name || movie.title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
