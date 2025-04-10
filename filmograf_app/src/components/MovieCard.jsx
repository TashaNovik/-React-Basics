import { Link } from 'react-router-dom';


function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h3><Link to={`/movies/${movie.id}`}>{movie.title}</Link></h3>
            <p>{movie.genre}</p>
            <p>{movie.duration} мин.</p>
            {/* Кнопка добавления в избранное */}
        </div>
    );
}

export default MovieCard;