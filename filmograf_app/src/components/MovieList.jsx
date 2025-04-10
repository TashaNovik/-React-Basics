import { SimpleGrid } from '@chakra-ui/react';
import MovieCard from './MovieCard';

function MovieList({ movies, favorites, addToFavorites, removeFromFavorites }) {
    return (
        <SimpleGrid columns={[1, 2, 3]} spacing="20px"> {/* Используем SimpleGrid */}
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                    favorites={favorites}
                />
            ))}
        </SimpleGrid>
    );
}


export default MovieList;