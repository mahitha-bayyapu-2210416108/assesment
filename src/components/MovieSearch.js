import React, { useState, useMemo } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import MovieResult from "./MovieResult";
import RatingFilter from "./RatingFilter";
import GenreFilter from "./GenreFilter";

const Page = ({ movies }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [showMovies, setShowMovies] = useState(false);
    const [isOpenRating, setIsOpenRating] = useState(false); 
    const [isOpenGenre, setIsOpenGenre] = useState(false); 

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
        setShowMovies(true);
    };

    const toggleRating = (rating) => {
        setSelectedRatings((prevSelected) => {
            if (prevSelected.includes(rating)) {
                return prevSelected.filter((item) => item !== rating);
            } else {
                return [...prevSelected, rating];
            }
        });
        setShowMovies(true);
    };

    const toggleGenre = (genre) => {
        setSelectedGenres((prevSelected) => {
            if (prevSelected.includes(genre)) {
                return prevSelected.filter((item) => item !== genre);
            } else {
                return [...prevSelected, genre];
            }
        });
        setShowMovies(true);
    };


    const filteredMovies = useMemo(() => {
        return movies.filter((movie) => {
            const matchesSearchTerm = movie.title.toLowerCase().includes(searchTerm);
            const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(movie.rating);
            const matchesGenre = selectedGenres.length === 0 || selectedGenres.includes(movie.category);
            return matchesSearchTerm && matchesRating && matchesGenre;
        });
    }, [searchTerm, selectedRatings, selectedGenres, movies]);

    const uniqueGenres = [...new Set(movies.map((movie) => movie.category))];


    return (
        <div className="main">
            <Form>
               
                <Row>
                <Col sm={6}>
                    <Row>
                    <Form.Control
                            type="text"
                            placeholder="Enter movie name"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </Row>
                    <Row>
                    {showMovies && (
                            <div className="result">
                                {filteredMovies.map((movie) => (
                                    <MovieResult
                                        key={movie.title}
                                        title={movie.title}
                                        genre={movie.category}
                                        rating={movie.rating}
                                    />
                                ))}
                            </div>
                        )}
                    </Row>
                        
                    </Col>
                    <Col sm={3}>
                        <Row>
                        <RatingFilter
                            ratings={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                            selectedRatings={selectedRatings}
                            toggleRating={toggleRating}
                            isOpen={isOpenRating}
                            setIsOpen={setIsOpenRating}
                        />
                        </Row>
                        
                    </Col>
                    <Col sm={3}>
                        <Row>
                        <GenreFilter
                            genres={uniqueGenres}
                            selectedGenres={selectedGenres}
                            toggleGenre={toggleGenre}
                            isOpen={isOpenGenre}
                            setIsOpen={setIsOpenGenre}
                        />
                        </Row>
                        
                    </Col>

                </Row>
            </Form>
        </div>
    );
};

export default Page;
