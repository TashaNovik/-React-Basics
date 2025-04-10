import MovieCard from './MovieCard';


function Favorites({favorites, removeFromFavorites}) {
    return (
        <div>
            <h2>Избранное</h2>

            <div className="movie-list">
                {favorites.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>

    )
}

export default Favorites