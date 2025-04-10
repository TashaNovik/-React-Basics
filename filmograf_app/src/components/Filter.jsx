import { useState } from 'react';

function Filter({ movies, setFilteredMovies }) {
    const [selectedGenre, setSelectedGenre] = useState('all');

    const handleFilterChange = (event) => {
        const genre = event.target.value;
        setSelectedGenre(genre);

        if (genre === 'all') {
            setFilteredMovies([...movies]); // Обновляем состояние с новым массивом
        } else {
            const filtered = movies.filter(movie => movie.genre === genre);
            setFilteredMovies([...filtered]); // Обновляем состояние с новым массивом
        }
    };

    return (
        <div>
            <label htmlFor="genre-filter">Фильтр по жанру:</label>
            <select id="genre-filter" value={selectedGenre} onChange={handleFilterChange}>
                <option value="all">Все</option>
                <option value="Боевик">Боевик</option>
                <option value="Триллер">Триллер</option>
                <option value="Комедия">Комедия</option>
                <option value="Драма">Драма</option>
                {/* ... другие жанры */}
            </select>
        </div>
    );
}


export default Filter;