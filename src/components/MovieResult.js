import React from "react";
import { Row, Col } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#000000", 
  }
});

const MovieResult = ({ title, genre, rating }) => {
  return (
    <div>
      <Row className="align-items-center mb-2">
        <Col sm={8} className="fw-bold">
          {title}
        </Col>
        <Col sm={4} className="d-flex justify-content-end">
          {genre}
        </Col>
        <Col sm={4} className="d-flex justify-content-start">
          <StyledRating value={rating} precision={0.1} readOnly max={10} />
        </Col>
      </Row>
    </div>
  );
};

export default MovieResult;
