import { Link } from 'react-router-dom';
import { useState } from 'react'; // Импортируем useState

function MovieCard({ movie, addToFavorites, removeFromFavorites, favorites }) {
    const [isFavorite, setIsFavorite] = useState(favorites.find(f => f.id === movie.id)); // проверяем, в избранном ли фильм



    const handleAddToFavorites = () => {
        addToFavorites(movie);
        setIsFavorite(true);

    }


    const handleRemoveFromFavorites = () => {
        removeFromFavorites(movie);
        setIsFavorite(false);

    }

    return (
        <div className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h3><Link to={`/movies/${movie.id}`}>{movie.title}</Link></h3>
            <p>{movie.genre}</p>
            <p>{movie.duration} мин.</p>

            {/* Условное отображение кнопок */}
            {isFavorite ? (
                <button onClick={handleRemoveFromFavorites}>Удалить из избранного</button>
            ) : (
                <button onClick={handleAddToFavorites}>Добавить в избранное</button>

            )}

        </div>

    );
}

export default MovieCard;

