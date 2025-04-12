import { Link } from 'react-router-dom';
import { HStack, Button } from '@chakra-ui/react';

function Header() {
    return (
        <header>
            <HStack spacing="20px" paddingY="4">
                <Link to="/">
                    <Button variant="link" colorScheme="teal" _hover={{ color: 'teal.500' }}>Главная</Button>
                </Link>
                <Link to="/favorites">
                    <Button variant="link" colorScheme="teal" _hover={{ color: 'teal.500' }}>Избранное</Button>
                </Link>
                <Link to="/add">
                    <Button variant="link" colorScheme="teal" _hover={{ color: 'teal.500' }}>Добавить фильм</Button>
                </Link>
            </HStack>
        </header>
    );
}


export default Header;