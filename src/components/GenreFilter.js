// GenreFilter.js

import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const GenreFilter = ({ genres, selectedGenres, toggleGenre, isOpen, setIsOpen }) => {
    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="c-multi-select-dropdown">
            <div onClick={handleToggleDropdown} className='custom-button' >
                    Genre
                </div >
                {isOpen && (
                    <ul className="c-multi-select-dropdown__options">
                        {genres.map((genre) => {
                            const isSelected = selectedGenres.includes(genre);

                            return (
                                <li
                                    key={genre}
                                    className="c-multi-select-dropdown__option"
                                    onClick={() => toggleGenre(genre)}
                                >
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        className="c-multi-select-dropdown__option-checkbox"
                                        readOnly
                                    />
                                    <span>{genre}</span>
                                </li>
                            );
                        })}
                    </ul>
                )}
        </div>
    );
};

export default GenreFilter;
