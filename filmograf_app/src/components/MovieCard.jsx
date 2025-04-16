import {Link} from 'react-router-dom';
import {Button, Box, Text, HStack, Spacer, Flex} from '@chakra-ui/react';

function MovieCard({movie, favorites, addToFavorites, removeFromFavorites}) { // Добавляем props
    const isFavorite = favorites && favorites.includes(movie); // Проверка на null/undefined

    const handleAddToFavorites = () => {
        addToFavorites(movie);
    };

    const handleRemoveFromFavorites = () => {
        removeFromFavorites(movie);
    };

    return (
        <Box>
            <Flex direction="column" borderWidth="1px" borderRadius="md" overflow="hidden" p="4" boxShadow="md">
                <img src={movie.poster} alt={movie.title}/>
                <Box mt="2" flex="1">
                    <Link to={`/movies/${movie.id}`}>
                        <Text as="h3" fontWeight="semibold" fontSize="lg">{movie.title}</Text>
                    </Link>
                    <Text color="gray.500">{movie.genre}</Text>
                    <Text color="gray.500">{movie.duration} мин.</Text>

                </Box>
            </Flex>
            <Box mt="4">
                {isFavorite ? (
                    <Button colorScheme="red" size="xs" onClick={handleRemoveFromFavorites}>Удалить из
                        избранного</Button>
                ) : (
                    <Button colorScheme="teal" size="xs" onClick={handleAddToFavorites}>Добавить в избранное</Button>
                )}
            </Box>
        </Box>
    );
}

export default MovieCard;