import MovieList from './MovieList';
import Filter from './Filter'; // Если нужен фильтр на главной

function Home({ movies, setFilteredMovies }) { // Добавим setFilteredMovies для фильтрации
    return (
        <main>
            {/* Добавьте компонент фильтра, если нужно */}
            <Filter movies={movies} setFilteredMovies={setFilteredMovies} />
            <MovieList movies={movies} /> {/* Передаем отфильтрованный список, если есть */}
        </main>
    );
}

export default Home;