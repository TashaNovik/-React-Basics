import Filter from './Filter';
import MovieList from './MovieList';

function Home({ movies, filteredMovies, setFilteredMovies, favorites, addToFavorites, removeFromFavorites }) {
    return (
        <main>
            <h2>Фильмы</h2>
            <Filter movies={movies} setFilteredMovies={setFilteredMovies} />
            <MovieList
                movies={filteredMovies} // Используем отфильтрованный список
                favorites={favorites}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
            />
        </main>
    );
}


export default Home;