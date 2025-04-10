import MovieCard from './MovieCard';

function MovieList({ movies, addToFavorites, removeFromFavorites, favorites }) { // Передаем favorites
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                    favorites={favorites} // Передаем favorites в MovieCard
                />
            ))}
        </div>
    );
}

export default MovieList;