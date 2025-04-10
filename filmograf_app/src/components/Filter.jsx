import { useState } from 'react';

function Filter({ movies, setFilteredMovies }) {
    const [selectedGenre, setSelectedGenre] = useState('all');

    const handleFilterChange = (event) => {
        const genre = event.target.value;
        setSelectedGenre(genre);

        if (genre === 'all') {
            setFilteredMovies(movies);
        } else {
            setFilteredMovies(movies.filter(movie => movie.genre === genre));
        }
    };


    return (
        <div>
            <label htmlFor="genre-filter">Фильтр по жанру:</label>
            <select id="genre-filter" value={selectedGenre} onChange={handleFilterChange}>
                <option value="all">Все</option>
                <option value="Боевик">Боевик</option>
                <option value="Комедия">Комедия</option>
                <option value="Триллер">Триллер</option>
                <option value="Драма">Драма</option>

            </select>
        </div>
    );
}

export default Filter;