import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import MoviePage from './components/MoviePage';
import MovieForm from './components/MovieForm';
import Footer from './components/Footer';


function AppRoutes({ movies, filteredMovies, setFilteredMovies, favorites, addMovie, updateMovie, addToFavorites, removeFromFavorites }) { // Принимаем все необходимые props
    return (
        <Routes>
            <Route path="/" element={
                <Home
                    movies={movies}
                    filteredMovies={filteredMovies}
                    setFilteredMovies={setFilteredMovies}
                    favorites={favorites}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                />
            } />
            <Route path="/favorites" element={
                <Favorites
                    favorites={favorites}
                    removeFromFavorites={removeFromFavorites}
                />
            } />
            <Route path="/movies/:movieId" element={
                <MoviePage
                    movies={movies}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                    favorites={favorites}
                />
            } />
            <Route path="/add" element={<MovieForm addMovie={addMovie} />} />
            <Route path="/movies/:movieId/edit" element={<MovieForm movies={movies} updateMovie={updateMovie} />}/>
        </Routes>
    );
}


export default AppRoutes;
