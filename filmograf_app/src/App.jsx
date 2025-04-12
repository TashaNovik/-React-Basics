import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Favorites from './components/Favorites';
import MoviePage from './components/MoviePage';
import MovieForm from './components/MovieForm';
import { Box } from "@chakra-ui/react";
import matrix from './assets/matrix.png';
import mad_max from './assets/mad_max.png';
import gentelments from './assets/gentelments.png';
import renegades from './assets/renegades.png';
import gladiator from './assets/gladiator.png';
import hollywood from './assets/Once Upon a Time in Hollywood.png';
import proposal from './assets/proposal.png';
import million_dollar_baby from './assets/million_dollar_baby.png';
import larry_crown from './assets/larry_crown.png';

function App() {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Матрица",
            genre: "Боевик",
            duration: 136,
            poster: matrix,
            description: "«Матрица» - научно-фантастический боевик...",
        },
        {
            id: 2,
            title: "Безумный Макс",
            genre: "Боевик",
            duration: 88,
            poster: mad_max,
            description: "Описание для Безумного Макса",
        },
        {
            id: 3,
            title: "Джентельмены",
            genre: "Триллер",
            duration: 113,
            poster: gentelments,
            description: "Описание для Джентельменов",
        },
        {
            id: 4,
            title: "Отступники",
            genre: "Драма",
            duration: 151,
            poster: renegades,
            description: "Описание для Отступников",
        },
        {
            id: 5,
            title: "Гладиатор",
            genre: "Боевик",
            duration: 155,
            poster: gladiator,
            description: "Описание для Гладиатора",
        },
        {
            id: 6,
            title: "Однажды в Голливуде",
            genre: "Драма",
            duration: 161,
            poster: hollywood,
            description: "Описание для Гладиатора",
        },
        {
            id: 7,
            title: "Предложение",
            genre: "Комедия",
            duration: 108,
            poster: proposal,
            description: "Описание для Предложения",
        },
        {
            id: 8,
            title: "Малышка на миллион",
            genre: "Драма",
            duration: 132,
            poster: million_dollar_baby,
            description: "Описание для Малышки на миллион",
        },
        {
            id: 9,
            title: "Ларри Краун",
            genre: "Комедия",
            duration: 98,
            poster: larry_crown,
            description: "Описание для Ларри Краун",
        }
    ]);
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [favorites, setFavorites] = useState([]);


    const addMovie = (newMovie) => {
        setMovies([...movies, newMovie]);
    };

    const updateMovie = (updatedMovie) => {
        setMovies(movies.map((movie) => (movie.id === updatedMovie.id ? updatedMovie : movie)));
    };

    const addToFavorites = (movie) => {
        if (!favorites.find(f => f.id === movie.id)) {
            setFavorites([...favorites, movie]);
        }
    };

    const removeFromFavorites = (movie) => {
        setFavorites(favorites.filter((f) => f.id !== movie.id));
    };

    return (
        <Box>
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={
                            <Home
                                movies={movies} // Передаем исходный массив
                                filteredMovies={filteredMovies} // Передаем отфильтрованный массив
                                setFilteredMovies={setFilteredMovies} // Передаем функцию для обновления фильтра
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
                        <Route path="/movies/:movieId/edit" element={<MovieForm movies={movies} updateMovie={updateMovie} />} />
                    </Routes>
                </div>
            </Router>
        </Box>
    );
}

export default App;