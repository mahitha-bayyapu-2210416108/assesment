import React from 'react';
import { Form } from 'react-bootstrap';
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import Button from 'react-bootstrap/Button';

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#000000",
  }
});

const RatingFilter = ({ ratings, selectedRatings, toggleRating, isOpen, setIsOpen }) => {
    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const ratingChange = (rating) => {
        toggleRating(rating); // Toggle the rating selection
        // setIsOpen(false); // Uncomment if you want to close dropdown after each selection
    };

    return (
        <div className="c-multi-select-dropdown">
            <div className="c-multi-select-dropdown__selected">
                <div onClick={handleToggleDropdown} className='custom-button' >
                    Ratings
                </div >
            </div>
            {isOpen && (
                <ul className={'c-multi-select-dropdown__options result'}>
                    {ratings.map((rating) => {
                        const isSelected = selectedRatings.includes(rating);

                        return (
                            <li
                                key={rating}
                                className="c-multi-select-dropdown__option"
                                onClick={() => ratingChange(rating)}
                            >
                                <input
                                    type="checkbox"
                                    checked={isSelected}
                                    className="c-multi-select-dropdown__option-checkbox"
                                    readOnly
                                />
                                <StyledRating value={rating} precision={0.1} readOnly max={10} />
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default RatingFilter;
